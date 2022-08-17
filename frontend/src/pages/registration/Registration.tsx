import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { AppRoute, UrlSite } from '../../services/const';

import { HardPopUpSt } from './style';

const Registration = () => {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({ login: '', password: '' });

  const onSend = () => {
    fetch(`${UrlSite.URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(signUp),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) navigate(AppRoute.ROOT);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUp((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  return (
    <HardPopUpSt>
      <Title h={2}>{'регистрация'}</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={'почта'}
        onChange={handleChange}
      />
      <Input
        name={'login'}
        type={'text'}
        placeholder={'логин'}
        onChange={handleChange}
      />
      <Input
        name={'first_name'}
        type={'text'}
        placeholder={'имя'}
        onChange={handleChange}
      />
      <Input
        name={'second_name'}
        type={'text'}
        placeholder={'фамилия'}
        onChange={handleChange}
      />
      <Input
        name={'phone'}
        type={'tel'}
        placeholder={'телефон'}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={'пароль'}
        onChange={handleChange}
      />
      <Input
        name={'passwordRepeat'}
        type={'password'}
        placeholder={'повторите пароль'}
        onChange={handleChange}
      />
      <Link to={AppRoute.ROOT}>{'Войти'}</Link>
      <Button fullWidth onClick={onSend}>
        {'зарегистрироваться'}
      </Button>
    </HardPopUpSt>
  );
};

export default Registration;
