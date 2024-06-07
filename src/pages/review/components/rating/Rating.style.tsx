import styled from 'styled-components'

import { IRating } from './Rating.type'

export const Wrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

export const StarWrapper = styled.div<IRating>`
  display: flex;
  gap: ${(props) => (props.readOnly ? '0.4rem' : '1.6rem')};
`

export const Star = styled.img<IRating>`
  width: ${(props) => (props.readOnly ? '1.2568rem' : '3.3565rem')};
  height: ${(props) => (props.readOnly ? '1.1982rem' : '3.2rem')};
  cursor: pointer;
  -webkit-user-drag: none;
`

export const Number = styled.p`
  color: var(--color-black);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`
