export function lineUpBlocks(){
    const maxRows = 2;
    const maxColumns = 4;
    const gap = 10;
    const r = rect(100, 20)
    
    const initX = (width() - (r.width * maxColumns) - (gap * maxColumns)) / 2
    
    const container = vec2(initX, 30)
    
    
    
    for (let row = 0; row < maxRows; row++) {
        const y = (r.height * row) + (row * gap) + container.y;

        for (let col = 0; col < maxColumns; col++) {
            const x = (r.width * col) + (col * gap) + container.x;

            add([
                r,
                pos(x, y),
                solid(),
                area(),
                color(255, 100, 0),
                'block'
            ])
        }
    }
}