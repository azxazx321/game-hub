import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatform from '../hookers/usePlatform'
import useGenre from '../hookers/useGenre'
import useGameQueryStore from '../reducers/store'


const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const genre = useGenre(genreId)

    const heading = `${ platform?.name || ''} ${genre?.name || ''} Games  `
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{ heading }</Heading>
  )
}

export default GameHeading