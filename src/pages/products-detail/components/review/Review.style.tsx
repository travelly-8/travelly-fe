import kebab from '@/assets/common/kebab.svg'

import styled from 'styled-components'

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 2rem;
`
export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
export const ReviewTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ReviewCntWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
export const ReviewTitleText = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  line-height: 2.38rem;
`
export const ReviewCntText = styled.span`
  color: var(--color-main);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
`
export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
export const ReviewCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CheckBox = styled.div`
  display: flex;
  gap: 2.6rem;
`
export const InputCheckBox = styled.input`
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const BlackText = styled.label`
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const EditKebab = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${kebab});

  cursor: pointer;
`
export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`
export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  cursor: pointer;
`
export const GrayText = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const IconSort = styled.img`
  width: 0.6rem;
  height: 0.6rem;
`
export const ReviewImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 9.7rem;
  gap: 1.5rem;
`
export const ReviewImgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
  color: var(--color-white);
  font-size: 1.4rem;
  line-height: 2.38rem;
`
export const LastReviewImg = styled.div`
  position: relative;
  width: 9.7rem;
  height: 9.7rem;
  border-radius: 0.5rem;
`

export const ReviewImg = styled.img`
  width: 9.7rem;
  height: 9.7rem;
  border-radius: 0.5rem;
`

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;
  width: 100%;
  gap: 1.6rem;
  border-bottom: 1px solid var(--color-gray-light);
`
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const ProfileImg = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 5.2rem;
`

export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0.2rem;
  gap: 0.8rem;
`
export const ProfileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
export const LikeComment = styled.div`
  display: flex;
  gap: 0.8rem;
`
export const LikeCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`
export const IconS = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`
