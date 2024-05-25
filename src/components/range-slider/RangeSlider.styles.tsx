import { styled } from 'styled-components'

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-bright);
`
export const Content = styled.div`
  padding: 2rem;

  input[type='range'] {
    &::-webkit-slider-thumb {
      pointer-events: auto; /* pointer-events-auto */
      height: 1.5rem; /* h-4 */
      width: 1.5rem; /* w-4 */
      cursor: grab; /* cursor-grab */
      appearance: none; /* appearance-none */
      border-radius: 50%; /* rounded-full */
      border: 1px solid var(--color-gray-middle);
      background-color: var(--color-white); /* bg-slate-800 */

      &:active {
        cursor: grabbing; /* active: cursor-grabbing */
      }
    }
  }
`

export const Label = styled.div`
  font-weight: bold;
  font-size: 1.4rem;

  margin-bottom: 2rem;
`

export const Slider = styled.div`
  position: relative;
  border-radius: 999rem;
  height: 0.4rem;
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
`

export const Progress = styled.div`
  position: absolute;
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
  border-radius: 0.375rem;
  height: 0.4rem;
`

export const RangeInput = styled.div`
  position: relative;
`

export const MinInput = styled.input`
  outline: 2px solid transparent;
  outline-offset: 0.2rem;
  height: 0.25rem;
  top: -0.25rem;
  pointer-events: none;
  position: absolute;
  width: 100%;
  appearance: none;
  background: transparent;
`
