import React, { useState, ChangeEvent } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';
import { updateProfileAvatar } from '../../store/user/actions';
import { useDispatch } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';

const ChangeAvatarModal = () => {
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const [avatar, setAvatar] = useState<File | null>(null);

  const changeAvatar = () => {
    if (!avatar) {
      return; // если аватара нет, то и менять нечего
    }

    const formData = new FormData();

    formData.append('avatar', avatar);

    dispatch(updateProfileAvatar(formData));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <Title h={4}>{'загрузите файл'}</Title>
      <Input
        name={'avatar'}
        type={'file'}
        placeholder={'file'}
        onChange={handleChange}
      />
      <Button fullWidth onClick={changeAvatar}>
        {'поменять'}
      </Button>
    </>
  );
};

export default ChangeAvatarModal;
