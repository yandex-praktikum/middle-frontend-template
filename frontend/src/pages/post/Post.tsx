import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { HeaderSt, TextSt, PostBodySt, SettingsBlockSt, CommentAddBlockSt, InnerBlockSt } from './style';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ChangePostModal from '../../components/ChangePostModal';
import Comments from '../../components/Comments';
import Icon from '../../components/Icon/Icon';
import MainContainer from '../../components/MainContainer';
import { AppRoute } from '../../services/const';

import { useToggle } from '../../hooks/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { getTopicById, addComment } from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';
import Textarea from '../../components/Textarea';
import { useNavigate } from 'react-router-dom';
import { deleteTopic } from '../../store/forum/actions';
import { toast } from 'react-toastify';

const Post = () => {
  const [isShownChangeModal, toggleVisible] = useToggle(false);
  const [isShownCommentField, toggleVisibleField] = useToggle(false);
  const [loaded, setLoaded] = useState(false)

  let { id } = useParams();

  const [state, setState] = useState({
    topicName: "",
    topicText: "",
    ownerId: ""
  })

  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const { topic } = useSelector((state: any) => state.forum)
  const user = useSelector((state: any) => state.user);

  const [post, setPost] = useState({ name: '', content: '', comment: '' });

  const commentsList = topic.comments;

  useEffect(() => {
    if (loaded) return;
    dispatch(getTopicById(id))
    setLoaded(true)
  }, [loaded])


  useEffect(() => {
    if (topic) {
      setState({ ...topic })
    }
  }, [topic])

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };


  const handleDelete = (id: number) => {
    if (window.confirm("Вы действительно хотите удалить топик ?")) {
      dispatch(deleteTopic(id))
      toast.success("топик удален", {
        delay: 1000,
        icon: false
      });
      navigate('/forum')
    }
  }

  const handleAddComments = () => {
    if (!post.comment) {
      toast.error("Заполните все поля", {
        delay: 1000,
        icon: false,
      });
    } else {
      const commentData = {
        commentText: post.comment,
        ownerId: user.id,
        ownerName: user.display_name,
        ownerAvatar: user.avatar,
        topicId: topic.topicId,
      }
      dispatch(addComment(topic.topicId, commentData))
      setPost({ name: '', content: '', comment: '' })
      toggleVisibleField();
    }
  }
  const navigate = useNavigate();


  return (
    <MainContainer>
      <InnerBlockSt>
        <HeaderSt>
          <Link to={AppRoute.FORUM}>к списку</Link>
          {
            user.id === topic.ownerId &&
            <SettingsBlockSt>
              <div onClick={() => handleDelete(topic.topicId)}>
                <Icon name="trash" />
              </div>
              <div onClick={toggleVisible}>
                <Icon name="pencil" />
              </div>
            </SettingsBlockSt>
          }
        </HeaderSt>
        <PostBodySt>
          <Title h={2} center> {topic.topicName}</Title>
          <TextSt>
            <Title h={4}>{topic.topicText}</Title>
          </TextSt>
        </PostBodySt>
        <Comments comments={commentsList} />

        <Button onClick={() => toggleVisibleField()} center>оставить комментарий</Button>
        {isShownCommentField ?
          <CommentAddBlockSt>
            <Textarea
              name={'comment'}
              placeholder={'текст комментария'}
              onChange={handleChange}
            />
            <Button onClick={handleAddComments} center>сохранить</Button>
          </CommentAddBlockSt>
          : ""
        }

        <ChangePostModal
          isShown={isShownChangeModal}
          toggleVisible={toggleVisible}
          headerText="Редактирование топика"
        />
      </InnerBlockSt>
    </MainContainer>
  );
};
export default Post;
