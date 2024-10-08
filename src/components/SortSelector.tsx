import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hookers/usePlatforms'
import useGameQueryStore from '../reducers/store'



const SortSelector = () => {  
    const sortOrders = [
        {value: '', lable: 'Relevance'},
        {value: '-added', lable: 'Date added'},
        {value: 'name', lable: 'Name'},
        {value: '-released', lable: 'Released data'},
        {value: '-metacritic', lable: 'Popularity'},
        {value: '-rating', lable: 'Average rating'},    
    ]

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const onSelectSortOrder = useGameQueryStore(s => s.setSortOrder)

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder )


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order by: {currentSortOrder?.lable || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.lable}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector