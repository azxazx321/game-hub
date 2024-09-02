import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hookers/usePlatforms'

const SortSelector = ({onSelectedPlatform, selectedPlatform}:Props) => {
    const {data, error} = usePlatforms()

    if(error)  return null


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>1</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector