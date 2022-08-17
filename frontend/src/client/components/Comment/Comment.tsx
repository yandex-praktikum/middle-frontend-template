import React from 'react';
import { CommentBlockSt, AuthorTextBlockST, CommentTextBlockST, CommentTopBlockSt, CommentBottomBlockSt } from '../Comments/style';
import Avatar from '../Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteComment } from '../../store/forum/actions';
import Icon from '../Icon/Icon';
import { toast } from 'react-toastify';

interface CommentsProps {
  item: any;
}


const Comment = (props: CommentsProps) => {
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const user = useSelector((state: any) => state.user);

  const handleDelete = (topicId: number, commentId: number) => {
    if (window.confirm("Вы действительно хотите удалить комментрий?")) {
      dispatch(deleteComment(topicId, commentId))
      toast.success("комментарий удален", {
        icon: false,
      });
    }
  }
  const item = props.item
  return (
    <CommentBlockSt>
      <CommentTopBlockSt>
        <AuthorTextBlockST>
          <Avatar backgroundImage={item.ownerAvatar} size={40} /> {item.ownerName}
        </AuthorTextBlockST>
        <CommentTextBlockST>
          {new Date(item.createdAt).toUTCString().substring(0, 22)}
        </CommentTextBlockST>
      </CommentTopBlockSt>
      <CommentTextBlockST> {item.commentText} </CommentTextBlockST>
      {
        user.id === item.ownerId &&
        <CommentBottomBlockSt>
          <div onClick={() => handleDelete(item.topicId, item.commentId)}>
            <Icon name="trash" />
          </div>
        </CommentBottomBlockSt>
      }

    </CommentBlockSt>
  );
};

export default Comment;
