import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export default function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser(userId: number): Promise<void> {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const user = await res.json();
        setUser(user);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    if (userId) fetchUser(userId);
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
