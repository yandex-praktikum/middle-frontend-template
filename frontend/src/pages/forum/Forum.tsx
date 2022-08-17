import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import CreatePostModal from '../../components/CreatePostModal';
import Title from '../../components/Title';
import MainContainer from '../../components/MainContainer';
import { ButtonWrapperSt } from './style';
import Table from '../../components/Table';
import { useToggle } from '../../hooks/useToggle';

import { useDispatch, useSelector } from 'react-redux';
import { loadTopics, addTopic } from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';
import { toast } from 'react-toastify';
const Forum = () => {
  const [loaded, setLoaded] = useState(false)
  const [isShown, toggleVisible] = useToggle(false);
  const [topic, setTopic] = useState({ name: '', content: '' });

  const { topics, loading } = useSelector((state: any) => state.forum)
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  useEffect(() => {
    if (loaded) return;
    dispatch(loadTopics())
    setLoaded(true)
  }, [loaded])

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTopic((prevTopic) => ({ ...prevTopic, [name]: value }));
  };

  const handleTopicAdd = () => {
    if (!user.id) {
      toast.warn("Авторизуйтесь", {
        autoClose: 1000,
        icon: false
      });
    }

    if (!topic.content || !topic.name) {
      toast.error("Заполните все поля", {
        autoClose: 1000,
        icon: false
      });
    } else {
      const test = {
        topicName: topic.name,
        topicText: topic.content,
        ownerId: user.id,
        ownerName: user.display_name,
        ownerAvatar: user.avatar,
      }
      dispatch(addTopic(test))
      toast.success("Топик добавлен", {
        autoClose: 1000,
        icon: false
      });
      toggleVisible();
    }
  }

  if (loading) {
    return (
      <MainContainer>
        <Title h={3} center>loading...</Title>
      </MainContainer>
    );
  }

  const colNames = ['Название', 'Автор', 'Ответы', 'Дата создания'];

  let topicsNewArr = [];
  topicsNewArr = topics.map((item: any) => {
    return {
      'id': item.topicId,
      'topicName': item.topicName,
      'user_name': item.ownerName,
      'user_avatar': item.ownerAvatar,
      'answers': item.comments.length,
      'date': new Date(item.createdAt).toUTCString().substring(0, 22)
    };
  });

  return (
    <MainContainer>
      <ButtonWrapperSt>
        <Button onClick={toggleVisible} center>создать пост</Button>
      </ButtonWrapperSt>
      {topics.length !== 0 &&
        <Table colNames={colNames} content={topicsNewArr} />
      }
      <CreatePostModal
        isShown={isShown}
        toggleVisible={toggleVisible}
        headerText="Создание поста"
        handleAdd={handleTopicAdd}
        handleChange={handleChange}
      />
    </MainContainer>
  );
};

export default Forum;
