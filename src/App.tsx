import { useState } from 'react'
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { Genre } from './hookers/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hookers/useGames'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>( {} as GameQuery)
  

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
      <NavBar/>
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
      </GridItem>
    </Show>
    <GridItem area='main'>
      <Flex paddingLeft={5} marginBottom={5}>
        <Box marginRight={5}>
          <PlatformSelector onSelectedPlatform={ (platform) => setGameQuery({...gameQuery, platform})}  selectedPlatform={gameQuery.platform}/>
        </Box>
        <SortSelector 
          sortOrder={gameQuery.sortOrder}
          onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})}/>
      </Flex>
      
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>

  </Grid>
  
}

export default App


