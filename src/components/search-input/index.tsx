import searchIcon from '@/assets/common/search.svg'
import { useForm } from 'react-hook-form'
import { Input, InputWrapper, SearchIcon } from './SearchInput.style'
import type { IFormData } from './SearchInput.type'

const SearchInput = () => {
  const { register, handleSubmit } = useForm<IFormData>()
  const onSubmit = (data: IFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요."
          {...register('search')}
        />
        <SearchIcon src={searchIcon} alt="searchIcon" />
      </InputWrapper>
    </form>
  )
}

export default SearchInput
