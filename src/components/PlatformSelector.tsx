import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hookers/usePlatforms'
import usePlatform from '../hookers/usePlatform';

interface Props {
    onSelectedPlatform: (id: number) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatformId}:Props) => {
    const {data, error} = usePlatforms()

    const selectedPlatform = usePlatform(selectedPlatformId)

    
    if(error)  return null


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map(platform =>  <MenuItem fontWeight={platform.id === selectedPlatformId ? 'bold' : 'normal'} onClick={()=>{onSelectedPlatform(platform.id)}} key={platform.id}>{platform.name}</MenuItem>)}
                
            </MenuList>
        </Menu>
    )
    }

export default PlatformSelector