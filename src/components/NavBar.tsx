import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import useGameQueryStore from '../reducers/store';




const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image boxSize='50px' src={logo} />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar