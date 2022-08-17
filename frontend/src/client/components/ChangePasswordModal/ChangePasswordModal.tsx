import React, { useState } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';
import { UrlSite } from '../../services/const';

const ChangePasswordModal = () => {
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });

  const changePassword = () => {
    if (password.newPassword === password.repeatNewPassword) {
      fetch(`${UrlSite.URL}/user/password`, {
        credentials: 'include',
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(password),
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPassword((prevPassword) => ({ ...prevPassword, [name]: value }));
  };

  return (
    <>
      <Title h={4} center>{'изменить пароль'}</Title>
      <Input
        name={'oldPassword'}
        type={'password'}
        placeholder={'старый пароль'}
        onChange={handleChange}
      />
      <Input
        name={'newPassword'}
        type={'password'}
        placeholder={'новый пароль'}
        onChange={handleChange}
      />
      <Input
        name={'repeatNewPassword'}
        type={'password'}
        placeholder={'повторить пароль'}
        onChange={handleChange}
      />
      <Button fullWidth onClick={changePassword}>
        {'сохранить'}
      </Button>
    </>
  );
};

export default ChangePasswordModal;
