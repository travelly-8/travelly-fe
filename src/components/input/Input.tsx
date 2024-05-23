import React from 'react'
import styled from 'styled-components'

const LoginInputs = {
  email: {
    attributes: {
      placeholder: '이메일을 입력해주세요.',
    },
    validate: {
      required: {
        value: true,
        message: '이메일을 입력해주세요.',
      },
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: '올바른 이메일 형식이 아닙니다.',
      },
    },
  },
  password: {
    attributes: {
      placeholder: '비밀번호를 입력해주세요.',
      type: 'password',
    },
    validate: {
      required: {
        value: true,
        message: '비밀번호를 입력해주세요.',
      },
      minLength: {
        value: 8,
        message: '최소 8자 이상의 비밀번호를 입력해주세요.',
      },
      maxLength: {
        value: 64,
        message: '비밀번호는 64자를 초과하면 안됩니다.',
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,64}$/,
        message: '영소문자, 숫자가 포함된 8자 이상의 비밀번호를 입력해주세요',
      },
    },
  },
}

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
}

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 1em;

  &:focus {
    outline: none;
    border: 2px solid palevioletred;
  }
`

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
