import { Grid, GridItem, Show, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import { GenreList } from '../components/GenreList'
import NavBar from '../components/NavBar'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import useGameQueryStore from '../reducers/store'

const HomePage = () => {
    const {gameQuery, setPlatformId} =  useGameQueryStore()

  return (
    <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, //1024px
        
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
  )
}

export default HomePage