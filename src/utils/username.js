const ADJECTIVES= [
    'boundless',
    'plausible',
    'sleep',
    'electronic',
    'dangerous',
    'slim',
    'purple'
]

const THINGS=[
    'chalk',
    'piono',
    'window',
    'bowl',
    'socks',
    'brocalli',
    'puddle'
]

function genRandomUsername(){
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = THINGS[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}