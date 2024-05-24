import alarmIcon from '@/assets/common/alarm.svg'
import kebabIcon from '@/assets/common/kebab.svg'
import searchIcon from '@/assets/common/search.svg'
import { HeaderContainer, Icon, IconContainer, Label } from './Header.style'
const Header = () => {
  return (
    <HeaderContainer>
      <Label>Travelly</Label>
      <IconContainer>
        <Icon src={searchIcon} alt="search" />
        <Icon src={alarmIcon} alt="alarm" />
        <Icon src={kebabIcon} alt="kebab" />
      </IconContainer>
    </HeaderContainer>
  )
}

export default Header
