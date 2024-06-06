import { useState } from 'react'

import ThreeCircle from '@/assets/common/three-circle.svg'
import { sheet } from '@/store/sheet-slice'

import { useDispatch } from 'react-redux'

import * as S from './CommentCard.style'
import { ICommentProps } from './CommentCard.type'

const CommentCard = ({ data }: ICommentProps) => {
  const [isReplying, setIsReplying] = useState(false)
  const dispatch = useDispatch()

  const handleReply = () => {
    setIsReplying(true)
  }
  return (
    <>
      <S.Wrapper isReplying={isReplying}>
        <S.CommentWrapper>
          <S.Content>
            <S.ProfileImg src={data.profileImg} />
            <S.MiddleWrapper>
              <S.NicknameAndDate>
                <S.Nickname>{data.nickname}</S.Nickname>
                <S.Date>{data.date}</S.Date>
              </S.NicknameAndDate>
              <S.Comment>{data.content}</S.Comment>
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
            <p>{data.nickname}에게 댓글 다는 중입니다.</p>
          </S.ReplyingBar>
        )}
      </S.Wrapper>
      <S.ReplyWrapper isReplying={isReplying}>
        {data.reply &&
          data.reply.map((replyData) => {
            return (
              <S.Wrapper key={replyData.commentId} isReplying={false}>
                <S.CommentWrapper>
                  <S.Content>
                    <S.ProfileImg src={replyData.profileImg} />
                    <S.MiddleWrapper>
                      <S.NicknameAndDate>
                        <S.Nickname>{replyData.nickname}</S.Nickname>
                        <S.Date>{replyData.date}</S.Date>
                      </S.NicknameAndDate>
                      <S.Comment>{replyData.content}</S.Comment>
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
