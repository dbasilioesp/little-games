import kaboom from 'kaboom'
import { createBall } from './ball'
import { lineUpBlocks } from './blocks'
import { createPlayer } from './player'

kaboom({
    width: 640,
    height: 400,
    background: [0, 0, 0]
})

scene('game', () => {
    lineUpBlocks()
    createPlayer()
    createBall()
})

go('game')