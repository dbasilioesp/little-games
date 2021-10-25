export function createPlayer() {
    const size = rect(100, 20)
    const player = add([
        size,
        pos((width() / 2) - (size.width / 2), height() - 20 - 10),
        color(0, 100, 255),
        solid(),
        area(),
        'player',
        {
            moved: false,
            direction: 'idle'
        }
    ])

    keyDown('right', () => {
        // player.moveTo(player.pos.x + 10, player.pos.y)
        player.move(200, 0)
        player.moved = true
        player.direction = 'right'
    })

    keyDown('left', () => {
        // player.moveTo(player.pos.x - 10, player.pos.y)
        player.move(-200, 0)
        player.moved = true
        player.direction = 'left'
    })
}