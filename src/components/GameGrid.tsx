import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hookers/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGameQueryStore from '../reducers/store';




const GameGrid = () => {
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]
    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length,
        0) || 0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<Spinner />}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={6} padding='10px'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}

                {
                    data?.pages.map((page, pageIndex) =>
                        <React.Fragment key={pageIndex}>
                            {page.results.map(
                                game => (<GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                                )
                            )}
                        </React.Fragment>

                    )
                }
            </SimpleGrid>
        </InfiniteScroll>

    )
}

export default GameGrid