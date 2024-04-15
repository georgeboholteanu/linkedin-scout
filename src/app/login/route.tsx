import { signIn } from 'next-auth/react';

const LoginPage = () => (
  <div>
    <button onClick={() => signIn()}>Sign In</button>
    {/* Additional login page content */}
  </div>
);

export default LoginPage;