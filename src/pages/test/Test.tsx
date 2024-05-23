import Input from '@components/input/Input'

export default function Test() {
  return (
    <>
      <Input inputType="name" placeholder="name" />
      <Input inputType="email" placeholder="email" />
      <Input inputType="password" placeholder="password" />
      <Input inputType="password_check" placeholder="password_check" />
    </>
  )
}
