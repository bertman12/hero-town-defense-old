
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
    // 'Town', - Not very warcrafty
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
    'The Great '
    // 'Martyr '
]

const names = [
    'Leonidas', 
    'Arthas', 
    'Uther', 
    'Garithos',
    'Kel Thuzzad',
    'Naix',
    'Hadarox',
    'Pirius',
    'Luminous',
    'Hyperion',
    'Triton',
    'Quel Thas',
    'C\'Thun',
]

/**
 * Randomly combines adjective + noun, noun + noun, adjective + adjective
 */
export function generateRandomName(nameType){
    let name = ''

    if(nameType.town){
        name = getRandomNameFromSet(adjectives) + getRandomNameFromSet(nouns) + ' ' + getRandomNameFromSet(townSuffixes);
    }

    if(nameType.landmark){
        name = getRandomNameFromSet(landmarkPrefixes) + getRandomNameFromSet(names);
    }

    return name;
}

function getRandomNameFromSet(set: string[]){
    return set[Math.floor(Math.random()*set.length)];
}