import useScreenshots from '../hookers/useScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react'

interface Props {
    gameId: number
}
const GameScreenshots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenshots(gameId)

    if(isLoading)  return null
    
    if(error) throw error


  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
        {data?.results.map(result => <Image src={result.image} />) }
    </SimpleGrid>

  )
}

export default GameScreenshots