import React, { useEffect } from 'react';

import OauthPageTemplate from '../../components/ErrorPageTemplate';
import { useLocation } from 'react-router-dom';
import { useOauth } from '../../hooks';
import { parseQueryParams, redirect_uri } from '../../services';

const Oauth = () => {
  const location = useLocation();
  const { makeOauthSignInRequest } = useOauth(redirect_uri);

  useEffect(() => {
    if (location.search.includes('code')) {
      const params = parseQueryParams<{ code: string }>(location.search);

      const getAppAccess = async () => {
        await makeOauthSignInRequest({ code: params.code, redirect_uri });
        localStorage.setItem('user', 'true');
        window.location.reload();
      };

      getAppAccess().catch(console.error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <OauthPageTemplate
      noBtn
      title="Oauth авторизация"
      subtitle="Идет авторизация по Яндекс ID"
    />
  );
};

export default Oauth;
