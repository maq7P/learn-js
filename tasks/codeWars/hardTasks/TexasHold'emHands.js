//https://www.codewars.com/kata/524c74f855025e2495000262/train/javascript

const SUIT_IDX = 1
const RANK_IDX = 0

const COMBINATIONS = {
    nothing: "nothing",
    pair: "pair",
    twoPair: "two pair",
    threeKind: "three-of-a-kind",
    straight: "straight",
    flush: "flush",
    fullHouse: "full house",
    kare: "four-of-a-kind",
    straightFlush: "straight-flush",
}

const COMBINATIONS_RANKS = {
    [COMBINATIONS.nothing]: 0,
    [COMBINATIONS.pair]: 1,
    [COMBINATIONS.twoPair]: 2,
    [COMBINATIONS.threeKind]: 3,
    [COMBINATIONS.straight]: 4,
    [COMBINATIONS.flush]: 5,
    [COMBINATIONS.fullHouse]: 6,
    [COMBINATIONS.kare]: 7,
    [COMBINATIONS.straightFlush]: 8,
}

const CARDS_RANK = {
    "A": 14,
    "K": 13,
    "Q": 12,
    "J": 11,
    "10": 10,
    "9": 9,
    "8": 8,
    "7": 7,
    "6": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2,
}

function hand(holeCards, communityCards) {
    const toFormatCards = cards => 
        cards.map(card => card.split(""))
    
    const formatHoleCards = toFormatCards(holeCards)
    const formatCommunityCards = toFormatCards(communityCards)

    const combinations = [];

    const getPairsCount = (formatHC, formatCC) => {
        const cardsMap = new Map()
    
        formatHC.concat(formatCC).forEach(([rank, suit]) => {
            cardsMap.has(rank) 
                ? cardsMap.set(rank, cardsMap.get(rank) + 1) 
                : cardsMap.set(rank, 0)
        })

        return cardsMap
    }

    //Getting combination with duplicate cards, such as pair, two pair, three-of-a-kind etc.
    const getCombinationWithSameCards = (cardsPairMap) => {
        console.log(cardsPairMap);
        let localCombinations = [];

        for(let countPair of cardsPairMap.values()){
            countPair === 1 && localCombinations.push(COMBINATIONS.pair)
            countPair === 2 && localCombinations.push(COMBINATIONS.threeKind)
            countPair === 3 && localCombinations.push(COMBINATIONS.kare)
        }
        
        //kare
        if(
            localCombinations.includes(COMBINATIONS.threeKind) && 
            localCombinations.includes(COMBINATIONS.pair)
        ){
            localCombinations.push(COMBINATIONS.fullHouse)
        }

        let highCombination = localCombinations[0];

        for(let i = 1; i < localCombinations.length; i++){
            const curCombination = localCombinations[i];

            if(COMBINATIONS_RANKS[curCombination] > COMBINATIONS_RANKS[highCombination]){
                highCombination = curCombination
            }
        }

        console.log(highCombination)
        return highCombination
    }

    //Getting combination with same suit or with sequence
    const getCombinationWithSequence = () => {
        const cards = [...formatHoleCards, ...formatCommunityCards];
        // const hasFiveSuits = [...new Set(cards.map(card => card[SUIT_IDX]))].length === 5
        // console.log()
        const sortCards = cards.sort(([rank1, suit1], [rank2, suit2]) => {
            return CARDS_RANK[rank1] - CARDS_RANK[rank2]
        })

        const ranks = sortCards.map(card => card[RANK_IDX])
        
        const streak = [...new Set(ranks)];
        console.log(sortCards)
        if(streak === 5){

        }
    }




    getCombinationWithSameCards(getPairsCount(formatHoleCards, formatCommunityCards));
    getCombinationWithSequence()
    return {type:"TODO", ranks: []};
}

hand(['K♠','A♦'],['A♣','K♥','9♥','A♥','3♦'])
