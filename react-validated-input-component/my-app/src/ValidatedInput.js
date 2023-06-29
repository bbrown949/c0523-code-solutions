import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  let text = '';
  let checkOrX = '';

  if (password.length >= 0 && password.length < 8) {
    text = 'Your password is too short.';
    checkOrX = '❌';
  }
  if (password.length === 0) {
    text = 'A password is required.';
    checkOrX = '❌';
  } else if (password.length > 7) {
    checkOrX = '✅';
  }

  return (
    <>
      <div>
        <form>
          <div>
            <label>Password</label>
          </div>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            onSubmit={handleSubmit}></input>
          <span class="checkOrX">{checkOrX}</span>
          <p>{text}</p>
        </form>
      </div>
    </>
  );
}
