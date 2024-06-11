import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    background-position: -20rem, 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const SkeletonWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  background-image: linear-gradient(90deg, #ddd, #eee, #ddd);
  background-size: 20rem 100%;
  background-repeat: no-repeat;
  animation: ${loading} 1.5s infinite;
`

const SkeletonCircle = styled(SkeletonWrapper)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`

const SkeletonText = styled(SkeletonWrapper)`
  height: 1.6rem;
  margin: 0.4rem 0;
  margin-left: 2rem;
`

export { SkeletonCircle, SkeletonText }
