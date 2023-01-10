
const adjectives = [
    'Bright',
    'Grim',
    'Gore',
    'Bloom',
    'Sharp',
    'Spite',
    'Limber',
    'Swift',
    'Strong',
    'Quick',
    'Hate',
    'Virtuous',
    'Sorrow',
    'Vengeance',
    'Lust',
    'Hate',
    'Rage',
    'Pure',
    'Mystic',
    'Blight'
]

const nouns = [
    'Spear',
    'Hammer',
    'Steel',
    'Iron',
    'Blood',
    'Carnage',
    'Blade',
    'Arrow',
    'Shield',
    'Magic',
    'Tome',
    'Earth',
    'Nature',
    'Death',
    'Staff',
    'Flame',
    'Stone',
    'Forge',
    'Anvil',
    'Axe',
    'Jewel',
    'Armor',
    'Pendant'

]

const townSuffixes = [
    'Town',
    'Village',
    'Sanctuary',
    'Borough'
]

const landmarkPrefixes = [
    'The Rise of ',
    'The Fall of ',
    'General ',
    'King ',
    'Prince ',
    'Martyr '
]

const names = [
    'Leonidas', 
    'Arthas', 
    'Uther', 
    'Garithos',
    'Kel Thuzzad',
    'Naix',
]

/**
 * Randomly combines adjective + noun, noun + noun, adjective + adjective
 */
export function generateRandomName(nameType){
    // let prefix = getRandAdjective();
    // let suffix = getRandNoun();
    let name = ''

    // if(Math.random()*10 < 5){
    //     name = getRandNoun() + getRandNoun();
    // }

    if(nameType.town){
        // name += ` ${townSuffixes[Math.floor(Math.random()*townSuffixes.length)]}`
        name = getRandomNameFromSet(adjectives) + getRandomNameFromSet(nouns) + getRandomNameFromSet(townSuffixes);
    }

    if(nameType.landmark){
        name = getRandomNameFromSet(landmarkPrefixes) + getRandomNameFromSet(names);
    }

    return name;
}

function getRandomNameFromSet(set: string[]){
    return set[Math.floor(Math.random()*set.length)];
}

function getRandAdjective(){
    return adjectives[Math.floor(Math.random()*adjectives.length)];
}

function getRandNoun(){
    return nouns[Math.floor(Math.random()*nouns.length)];
}