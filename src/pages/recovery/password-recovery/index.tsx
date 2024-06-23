import { useState } from 'react'
import PasswordRecoveryResult from '../components/password-result'
import PasswordRecoverySearch from '../components/password-search'
import * as S from './PasswordRecovery.style'

const PasswordRecovery = () => {
  const [isResult, setIsResult] = useState(false)

  const handleSearchSuccess = () => {
    setIsResult(true)
  }

  return (
    <S.Wrapper>
      {isResult ? (
        <PasswordRecoveryResult />
      ) : (
        <PasswordRecoverySearch onSearchSuccess={handleSearchSuccess} />
      )}
    </S.Wrapper>
  )
}

export default PasswordRecovery
