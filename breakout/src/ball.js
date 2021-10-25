export function createBall() {
    const player = get('player')[0]

    const ball = add([
        rect(12, 12),
        pos(player.pos.x + player.width / 2, player.pos.y - 15),
        solid(),
        area(),
        'ball',
        {
            dx: 1,
            dy: -1,
            speed: 200,
            accent: 0,
            stoped: true,
        }
    ])
    
    action('ball', (b) => {
        if (player.moved){
            if (ball.stoped) {
                ball.stoped = false
                b.dx = player.direction === 'left' ? -1 : 1
            }

            b.move(ball.speed * ball.dx + (ball.accent * ball.dx), ball.speed * ball.dy)
        }
    
        if (ball.pos.x > width()) {
            ball.dx = -1
        }
    
        if (ball.pos.x < 0) {
            ball.dx = 1
        }
    
        if (ball.pos.y < 0) {
            ball.dy = 1
        }
    
        if (ball.pos.y > height() - 30) {
            go('game')
        }
    })
    
    ball.collides('block', (block) => {
        ball.dy *= -1;
        destroy(block);
    })
    
    ball.collides('player', (player) => {
        ball.dy = -1
        const diff = Math.abs(player.pos.x - ball.pos.x)
        console.log(diff)
        
        if (diff < 30) {
            ball.accent = ball.dx === 1 ? 0 : 100;
        }
        else if (diff > 65) {
            ball.accent = ball.dx === 1 ? 100 : 0;
        }
        else {
            ball.accent = 0
        }
    })
}