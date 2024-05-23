import Input from '@components/input/Input'

export default function Test() {
  return (
    <>
      <Input inputType="name" placeholder="name" inputAccessedFor="login" />
      <Input inputType="email" placeholder="email" inputAccessedFor="login" />
      <Input
        inputType="password"
        placeholder="password"
        inputAccessedFor="signup"
      />
      <Input
        inputType="password_check"
        placeholder="password_check"
        inputAccessedFor="signup"
      />
    </>
  )
}
