import React, { FC, useState } from 'react';

import Modal from '../Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { updateTopic } from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';

interface ModalProps {
  isShown?: boolean;
  toggleVisible?: (() => void) | any;
  headerText?: string;
}

const ChangePostModal: FC<ModalProps> = ({isShown, toggleVisible, headerText}) => {
  
  if (!isShown) {
    return null;
  }

  const { topic } = useSelector((state: any) => state.forum)
  const user = useSelector((state: any) => state.user)

  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  const [data, setData] = useState({
    topic_name: topic.topicName,
    topic_text: topic.topicText,
  });

  const handleTopicEdit = () => {
    const topicDataNew = {
      topicName: data.topic_name,
      topicText: data.topic_text,
      ownerId: user.id,
    }
    dispatch(updateTopic(topic.topicId, topicDataNew))
    toggleVisible();
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevTopic) => ({ ...prevTopic, [name]: value }));
  };

  return (
    <Modal isShown={isShown} hide={toggleVisible} headerText={headerText}>
      <Input
        name={'topic_name'}
        type={'text'}
        onChange={handleChange}
        value={data.topic_name}
      />
      <Textarea
        name={'topic_text'}
        onChange={handleChange}
        value={data.topic_text}
      />
      <Button onClick={handleTopicEdit} fullWidth>сохранить</Button>
    </Modal>
  );
};
export default ChangePostModal;
