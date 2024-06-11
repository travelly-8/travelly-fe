import { useState } from 'react'

import ThreeCircle from '@/assets/common/three-circle.svg'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import { ICommentData } from '@/types/getReviewDetailData.type'

import { useDispatch } from 'react-redux'

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
    commentUserImage,
    commentUserNickname,
  } = data
  const [isReplying, setIsReplying] = useState(false)
  const dispatch = useDispatch()

  const handleReply = () => {
    setIsReplying(true)
  }

  console.log(childrenComments)
  return (
    <>
      <S.Wrapper isReplying={isReplying}>
        <S.CommentWrapper>
          <S.Content>
            <S.ProfileImg src={commentUserImage} />
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
                  <S.ProfileImg src={data.commentUserImage} />
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
