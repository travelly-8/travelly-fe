import searchIcon from '@/assets/common/search.svg'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Input, InputWrapper, SearchIcon } from './SearchInput.style'

import type { IFormData } from './SearchInput.type'

const SearchInput = () => {
  const { register, handleSubmit } = useForm<IFormData>()
  const navigate = useNavigate()
  const onSubmit = (data: IFormData) => {
    registerRecentSearches(data.search)
    navigate(`/result/?input=${data.search}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요."
          {...register('search')}
        />
        <SearchIcon
          onClick={handleSubmit(onSubmit)}
          src={searchIcon}
          alt="searchIcon"
        />
      </InputWrapper>
    </form>
  )
}

export default SearchInput
