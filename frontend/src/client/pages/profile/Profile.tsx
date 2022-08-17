import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';
import ButtonSettings from '../../components/ButtonSettings';
import Avatar from '../../components/Avatar';
import Modal from '../../components/Modal';
import ChangeAvatarModal from '../../components/ChangeAvatarModal';
import ChangeProfileDataModal from '../../components/ChangeProfileDataModal';
import ChangePasswordModal from '../../components/ChangePasswordModal';
import MainContainer from '../../components/MainContainer';
import { UrlSite } from '../../services/const';
import { useToggle } from '../../hooks/useToggle';

import { InnerBlockSt, InfoSt, WrapperAvatarSt } from './style';

import { AppState } from '../../store/configureStore';

// import { USER } from '../../store/types';
// import { Dispatch } from 'react';

const Profile = () => {
  const user = useSelector<AppState, AppState['user']>((state) => state.user);
  const [isShown, toggleVisible] = useToggle(false);
  const [changeProfile, setChangeProfile] = useState('');
  // const dispatch = useDispatch();

  const onSend = () => {
    fetch(`${UrlSite.URL}/auth/logout`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    }).then(() => {
      localStorage.removeItem('user');
      location.reload();
    });
  };

  const onCallModal = (change: string) => {
    toggleVisible();
    setChangeProfile(change);
  };

  return (
    <MainContainer>
      <InnerBlockSt>
        <WrapperAvatarSt>
          <Avatar
            backgroundImage={user.avatar as string}
            size={130}
            onClick={() => onCallModal('changeAvatar')}
          />
        </WrapperAvatarSt>
        <Title h={4} center>{user.first_name}</Title>
        <InfoSt>
          <DataLine title={'Почта'} value={user.email}></DataLine>
          <DataLine title={'Логин'} value={user.login}></DataLine>
          <DataLine title={'Имя'} value={user.first_name}></DataLine>
          <DataLine title={'Фамилия'} value={user.second_name}></DataLine>
          <DataLine title={'Ник'} value={user.display_name}></DataLine>
          <DataLine title={'Телефон'} value={user.phone}></DataLine>
        </InfoSt>
        <ButtonSettings onClick={() => onCallModal('changeData')}>
          Изменить данные
        </ButtonSettings>
        <ButtonSettings onClick={() => onCallModal('changePassword')}>
          Изменить пароль
        </ButtonSettings>
        <Modal isShown={isShown} hide={toggleVisible}>
          {changeProfile === 'changeAvatar' && <ChangeAvatarModal />}
          {changeProfile === 'changeData' && <ChangeProfileDataModal />}
          {changeProfile === 'changePassword' && <ChangePasswordModal />}
        </Modal>
        <Button fullWidth={false} onClick={onSend} center> выход </Button>
      </InnerBlockSt>
    </MainContainer>
  );
};

export default Profile;
