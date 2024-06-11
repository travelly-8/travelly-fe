import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 0.1rem solid var(--color-gray-light);
  background: var(--color-white);
  padding: 1.2rem 0;
`

export const Button = styled.button<{ disabled?: boolean }>`
  display: flex;
  width: 30.4rem;
  height: 3.2rem;
  padding: 1.1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.6rem;
  background: ${(props) =>
    props.disabled ? 'var(--color-gray-bright)' : 'var(--color-main)'};
  color: ${(props) =>
    props.disabled ? 'var(--color-gray-middle)' : 'var(--color-white)'};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.38rem; /* 170% */
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
`
