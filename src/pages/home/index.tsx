import Input from '@components/input'

export default function HomePage() {
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
