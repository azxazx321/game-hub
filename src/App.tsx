import { useState } from 'react'
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import { GenreList } from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import useGameQueryStore from './reducers/store'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>( {} as GameQuery)
  const {gameQuery, setSearchText, setGenreId, setPlatformId, setSortOrder} =  useGameQueryStore()

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`, //1024px
    
  }}
  templateColumns= {{
    base: '1fr',
    lg: '300px 1fr'
  }}
  
  >
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenreList/>
      </GridItem>
    </Show>
    <GridItem area='main'>
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex  marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector onSelectedPlatform={ (platformId) => setPlatformId( platformId)}  selectedPlatformId={gameQuery.platformId}/>
          </Box>
          <SortSelector />
        </Flex>
        
      </Box>
      <GameGrid />

    </GridItem>

  </Grid>
  
}

export default App


