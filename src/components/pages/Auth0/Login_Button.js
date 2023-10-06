import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/RenderLandingPage.less';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn"
      style={{ marginRight: '75px' }}
      onClick={() =>
        loginWithRedirect({
          redirectUri: window.location.origin,
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;
