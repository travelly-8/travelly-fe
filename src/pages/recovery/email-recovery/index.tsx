import { useState } from 'react'
import EmailRecoveryResult from '../components/email-result'
import EmailRecoverySearch from '../components/email-search'
import * as S from './EmailRecovery.style'

const EmailRecovery = () => {
  const [isResult, setIsResult] = useState(false)
  const [email, setEmail] = useState('')
  const [createdDate, setCreatedDate] = useState('')

  const handleSearchSuccess = (email: string, createdDate: string) => {
    setEmail(email)
    setCreatedDate(createdDate)
    setIsResult(true)
  }

  return (
    <S.Wrapper>
      {isResult ? (
        <EmailRecoveryResult email={email} createdDate={createdDate} /> // createdDate 전달
      ) : (
        <EmailRecoverySearch onSearchSuccess={handleSearchSuccess} />
      )}
    </S.Wrapper>
  )
}

export default EmailRecovery
