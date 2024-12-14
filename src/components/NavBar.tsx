import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import useGameQueryStore from '../reducers/store';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image boxSize='50px' src={logo} objectFit='cover' />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar