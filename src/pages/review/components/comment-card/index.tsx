import { useEffect, useState } from 'react'

import ThreeCircle from '@/assets/common/three-circle.svg'
import { comment } from '@/store/comment-slice/comment-slice'
import { ICommentSliceState } from '@/store/comment-slice/comment-slice.type'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import { ICommentData } from '@/types/getReviewDetailData.type'

import defaultUser from '@/assets/common/default-user.svg'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './CommentCard.style'

interface ICommentCardProps {
  data: ICommentData
}

const CommentCard: React.FC<ICommentCardProps> = ({ data }) => {
  const {
    childrenComments,
    commentContent,
    commentDate,
    commentId,
    commentUserImage = defaultUser,
    commentUserNickname,
  } = data
  const [isReplying, setIsReplying] = useState(false)
  const dispatch = useDispatch()
  const commentReducer = useSelector(
    (state: ICommentSliceState) => state.comment.value,
  )
  const parentId = commentReducer.parentId

  useEffect(() => {
    setIsReplying(parentId === commentId)
  }, [parentId])

  const handleReply = () => {
    dispatch(comment({ parentId: commentId }))
  }

  const handleImageError = (e) => {
    e.target.src = defaultUser
  }
  return (
    <>
      <S.Wrapper isReplying={isReplying}>
        <S.CommentWrapper>
          <S.Content>
            <S.ProfileImg src={commentUserImage} onError={handleImageError} />
            <S.MiddleWrapper>
              <S.NicknameAndDate>
                <S.Nickname>{commentUserNickname}</S.Nickname>
                <S.Date>{commentDate}</S.Date>
              </S.NicknameAndDate>
              <S.Comment>{commentContent}</S.Comment>
              {!isReplying && (
                <S.ReplyButton onClick={() => handleReply()}>
                  답글달기
                </S.ReplyButton>
              )}
            </S.MiddleWrapper>
          </S.Content>
          <S.MenuButton
            src={ThreeCircle}
            alt="수정/삭제"
            onClick={() =>
              dispatch(sheet({ name: 'editAndDelete', status: true }))
            }
          />
        </S.CommentWrapper>
        {isReplying && (
          <S.ReplyingBar>
            <p>{commentUserNickname}에게 댓글 다는 중입니다.</p>
          </S.ReplyingBar>
        )}
      </S.Wrapper>
      <S.ReplyWrapper>
        {childrenComments?.map((data) => {
          return (
            <S.Wrapper key={data.commentId} isReplying={false}>
              <S.CommentWrapper>
                <S.Content>
                  <S.ProfileImg
                    src={data.commentUserImage || defaultUser}
                    onError={handleImageError}
                  />
                  <S.MiddleWrapper>
                    <S.NicknameAndDate>
                      <S.Nickname>{data.commentUserNickname}</S.Nickname>
                      <S.Date>{data.commentDate}</S.Date>
                    </S.NicknameAndDate>
                    <S.Comment>{data.commentContent}</S.Comment>
                  </S.MiddleWrapper>
                </S.Content>
                <S.MenuButton
                  src={ThreeCircle}
                  alt="수정/삭제"
                  onClick={() =>
                    dispatch(sheet({ name: 'editAndDelete', status: true }))
                  }
                />
              </S.CommentWrapper>
            </S.Wrapper>
          )
        })}
      </S.ReplyWrapper>
    </>
  )
}

export default CommentCard
