import React, { useState } from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute, redirect_uri, UrlSite } from '../../services/const';

import { HardPopUpSt } from './style';
import { useOauth } from '../../hooks';

const Home = () => {
  const [logIn, setLogIn] = useState({ login: '', password: '' });
  const { handleOauthSignIn } = useOauth(redirect_uri);

  const onSens = () => {
    fetch(`${UrlSite.URL}/auth/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logIn),
    }).then((data) => {
      if (data.ok) {
        location.reload();
        localStorage.setItem('user', 'true');
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  return (
    <HardPopUpSt>
      <Title h={2} center>вход</Title>
      <Input
        name={'login'}
        type={'text'}
        placeholder={'логин'}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={'пароль'}
        onChange={handleChange}
      />
      <Link to={AppRoute.REGISTRATION}>{'Нет аккаунта? Регистрация'}</Link>
      <Button fullWidth onClick={onSens} center> вход </Button>
      <div style={{ marginTop: '20px' }}>
        <Button fullWidth onClick={() => handleOauthSignIn(redirect_uri)}>
          Вход через Яндекс
        </Button>
      </div>
    </HardPopUpSt>
  );
};

export default Home;
