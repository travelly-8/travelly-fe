import Button from '../../../components/Button/Button'

export default function Test() {
  const handleClick = () => {
    alert('Button clicked!')
  }
  return (
    <div>
      <Button size="small" color="primary" onClick={handleClick}>
        필터 적용
      </Button>
      <Button size="medium" color="primary" onClick={handleClick}>
        계정 생성
      </Button>
      <Button size="large" color="primary" onClick={handleClick}>
        로그인
      </Button>
      <Button size="medium" color="primary" onClick={handleClick}>
        계정 생성
      </Button>
    </div>
  )
}
