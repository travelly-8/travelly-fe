import styled from 'styled-components'

export const Wrapper = styled.div<{ isReplying: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.8rem 2rem;
  background: ${(props) =>
    props.isReplying ? 'var(--color-gray-bright)' : 'transparent'};
`
export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
`

export const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
`
export const MiddleWrapper = styled.div`
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`
export const NicknameAndDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`

export const Nickname = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`

export const Date = styled.p`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`

export const Comment = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`

export const ReplyButton = styled.button`
  color: var(--color-main);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
  background-color: transparent;
`
export const MenuButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
export const ReplyingBar = styled.div`
  display: flex;
  background: var(--color-main);
  width: 100%;
  padding: 0.3rem 1rem;
  margin-top: 0.8rem;
  p {
    color: var(--color-white);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8rem; /* 150% */
  }
`
export const ReplyWrapper = styled.div`
  margin-left: 4.8rem;
`
