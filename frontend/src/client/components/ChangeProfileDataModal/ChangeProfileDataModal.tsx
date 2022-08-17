import React, { useState } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';

import { useSelector, useDispatch } from 'react-redux';
import { updateProfileData } from '../../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';

const ChangeProfileDataModal = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  const [data, setData] = useState({
    first_name: user.first_name,
    second_name: user.second_name,
    display_name: user.display_name,
    login: user.login,
    email: user.email,
    phone: user.phone,
  });

  const changeData = () => {
    dispatch(updateProfileData(data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Title h={4} center>{'изменить данные'}</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={'почта'}
        onChange={handleChange}
        value={data.email}
      />
      <Input
        name={'login'}
        type={'text'}
        placeholder={'логин'}
        onChange={handleChange}
        value={data.login}
      />
      <Input
        name={'first_name'}
        type={'text'}
        placeholder={'имя'}
        onChange={handleChange}
        value={data.first_name}
      />
      <Input
        name={'second_name'}
        type={'text'}
        placeholder={'фамилия'}
        onChange={handleChange}
        value={data.second_name}
      />
      <Input
        name={'display_name'}
        type={'text'}
        placeholder={'ник'}
        onChange={handleChange}
        value={data.display_name ? data.display_name : ''}
      />
      <Input
        name={'phone'}
        type={'tel'}
        placeholder={'телефон'}
        onChange={handleChange}
        value={data.phone}
      />
      <Button fullWidth onClick={changeData}>
        {'сохранить'}
      </Button>
    </>
  );
};

export default ChangeProfileDataModal;
