import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('username:', username, 'password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="userName"
          value={username}
          onChange={(event) => setUsername(event.target.value)}></input>
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}></input>
      </label>

      <button>Sign in</button>
    </form>
  );
}
