class Snake {
    segments: { x: number; y: number }[];
    boxSize: number;

    constructor(boxSize: number, initialPosition: { x: number; y: number }, length: number) {
        this.boxSize = boxSize;
        this.segments = Array.from({length}, (_, i) => ({
            x: initialPosition.x,
            y: initialPosition.y + i * boxSize,
        }));
    }

    draw(ctx: CanvasRenderingContext2D, direction: string) {
        for (let i = 0; i < this.segments.length; i++) {
            if (i === 0) {
                this.drawHead(ctx, this.segments[i].x, this.segments[i].y, direction);
            } else if (i === this.segments.length - 1) {
                this.drawTail(ctx, this.segments[i].x, this.segments[i].y, this.getTailDirection(i), `rgb(67, ${255 - i * 5}, 173)`);
            } else {
                const colorIntensity = 255 - i * 5;
                ctx.fillStyle = `rgb(67, ${colorIntensity}, 173)`;
                ctx.fillRect(this.segments[i].x, this.segments[i].y, this.boxSize, this.boxSize);
            }
        }
    }

    private drawHead(ctx: CanvasRenderingContext2D, x: number, y: number, direction: string) {
        ctx.beginPath();
        switch (direction) {
            case 'LEFT':
                ctx.arc(x + this.boxSize, y + this.boxSize / 2, this.boxSize / 2, 0.5 * Math.PI, 1.5 * Math.PI);
                break;
            case 'UP':
                ctx.arc(x + this.boxSize / 2, y + this.boxSize, this.boxSize / 2, Math.PI, 2 * Math.PI);
                break;
            case 'RIGHT':
                ctx.arc(x, y + this.boxSize / 2, this.boxSize / 2, 1.5 * Math.PI, 0.5 * Math.PI);
                break;
            case 'DOWN':
                ctx.arc(x + this.boxSize / 2, y, this.boxSize / 2, 0, Math.PI);
                break;
        }
        ctx.fillStyle = 'rgb(67, 255, 173)';
        ctx.fill();
        ctx.closePath();

        this.drawEyes(ctx, x, y, direction);
    }

    private drawEyes(ctx: CanvasRenderingContext2D, x: number, y: number, direction: string) {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        switch (direction) {
            case 'LEFT':
                ctx.arc(x + this.boxSize - this.boxSize / 8, y + this.boxSize / 4, this.boxSize / 8, 0, 2 * Math.PI);
                ctx.arc(x + this.boxSize - this.boxSize / 8, y + 3 * this.boxSize / 4, this.boxSize / 8, 0, 2 * Math.PI);
                break;
            case 'UP':
                ctx.arc(x + this.boxSize / 4, y + this.boxSize - this.boxSize / 8, this.boxSize / 8, 0, 2 * Math.PI);
                ctx.arc(x + 3 * this.boxSize / 4, y + this.boxSize - this.boxSize / 8, this.boxSize / 8, 0, 2 * Math.PI);
                break;
            case 'RIGHT':
                ctx.arc(x + this.boxSize / 8, y + this.boxSize / 4, this.boxSize / 8, 0, 2 * Math.PI);
                ctx.arc(x + this.boxSize / 8, y + 3 * this.boxSize / 4, this.boxSize / 8, 0, 2 * Math.PI);
                break;
            case 'DOWN':
                ctx.arc(x + this.boxSize / 4, y + this.boxSize / 8, this.boxSize / 8, 0, 2 * Math.PI);
                ctx.arc(x + 3 * this.boxSize / 4, y + this.boxSize / 8, this.boxSize / 8, 0, 2 * Math.PI);
                break;
        }
        ctx.fill();
        ctx.closePath();
    }

    private drawTail(ctx: CanvasRenderingContext2D, x: number, y: number, direction: string, color: string) {
        ctx.beginPath();
        switch (direction) {
            case 'LEFT':
                ctx.arc(x + this.boxSize, y + this.boxSize / 2, this.boxSize / 2, 0.5 * Math.PI, 1.5 * Math.PI);
                break;
            case 'UP':
                ctx.arc(x + this.boxSize / 2, y + this.boxSize, this.boxSize / 2, Math.PI, 2 * Math.PI);
                break;
            case 'RIGHT':
                ctx.arc(x, y + this.boxSize / 2, this.boxSize / 2, 1.5 * Math.PI, 0.5 * Math.PI);
                break;
            case 'DOWN':
                ctx.arc(x + this.boxSize / 2, y, this.boxSize / 2, 0, Math.PI);
                break;
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    private getTailDirection(i: number) {
        const previousSegment = this.segments[i - 1];
        const tail = this.segments[i];
        if (previousSegment.x < tail.x) return 'RIGHT';
        if (previousSegment.x > tail.x) return 'LEFT';
        if (previousSegment.y < tail.y) return 'DOWN';
        if (previousSegment.y > tail.y) return 'UP';
        return 'UP';
    }

    move(direction: string) {
        const newHead = {...this.segments[0]};
        switch (direction) {
            case 'LEFT':
                newHead.x -= this.boxSize;
                break;
            case 'UP':
                newHead.y -= this.boxSize;
                break;
            case 'RIGHT':
                newHead.x += this.boxSize;
                break;
            case 'DOWN':
                newHead.y += this.boxSize;
                break;
        }
        this.segments.pop();
        this.segments.unshift(newHead);
    }

    grow() {
        const newSegment = {...this.segments[this.segments.length - 1]};
        this.segments.push(newSegment);
    }

    checkCollision(width: number, height: number): boolean {
        const head = this.segments[0];
        if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
            return true;
        }
        for (let i = 1; i < this.segments.length; i++) {
            if (head.x === this.segments[i].x && head.y === this.segments[i].y) {
                return true;
            }
        }
        return false;
    }
}

class Food {
    position: { x: number; y: number };
    boxSize: number;

    constructor(boxSize: number) {
        this.boxSize = boxSize;
        this.position = {x: 0, y: 0};

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = '#43D9AD1A';
        ctx.arc(this.position.x + Math.floor(this.boxSize / 2), this.position.y + Math.floor(this.boxSize / 2), this.boxSize + this.boxSize / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = '#43d9ad33';
        ctx.arc(this.position.x + Math.floor(this.boxSize / 2), this.position.y + Math.floor(this.boxSize / 2), this.boxSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'rgb(67 217 173)';
        ctx.arc(this.position.x + Math.floor(this.boxSize / 2), this.position.y + Math.floor(this.boxSize / 2), this.boxSize - this.boxSize / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    generate(width: number, height: number, snakeSegments: { x: number; y: number }[]) {
        let newPosition: { x: number, y: number };
        do {
            newPosition = {
                x: Math.floor(Math.random() * (width / this.boxSize)) * this.boxSize,
                y: Math.floor(Math.random() * (height / this.boxSize)) * this.boxSize,
            };
        } while (snakeSegments.some(segment => segment.x === newPosition.x && segment.y === newPosition.y));
        this.position = newPosition;
    }
}

export type GameState = 'NOT_STARTED' | 'STARTED' | 'WON' | 'LOST';

export class Game {
    snake: Snake;
    food: Food;
    score: number;
    direction: 'LEFT' | 'UP' | 'RIGHT' | 'DOWN' | null;
    gameState: GameState;
    gameInterval: number | null;
    ctx: CanvasRenderingContext2D | null;
    canvasWidth: number;
    canvasHeight: number;
    boxSize: number;

    constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, boxSize: number, private setGameState: Function, private setGameScore: Function) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.boxSize = boxSize;
        this.snake = new Snake(this.boxSize, {
            x: canvasWidth / 2 - this.boxSize,
            y: canvasHeight / 2 - (this.boxSize)
        }, 10);
        this.food = new Food(this.boxSize);
        this.score = 0;
        this.direction = 'UP';
        this.gameState = 'NOT_STARTED';
        this.gameInterval = null;

        this.previewGame();
    }

    startGame() {
        this.resetGame();
        this.setGameState('STARTED')
        this.gameState = 'STARTED';
        this.gameInterval = setInterval(() => this.updateGame(), 50);
    }

    previewGame() {
        this.snake = new Snake(this.boxSize, {
            x: this.canvasWidth / 2 - this.boxSize,
            y: this.canvasHeight / 2 - (this.boxSize)
        }, 10);
        this.updateGame(false);
    }

    endGame(state: 'WON' | 'LOST') {
        this.setGameState(state)
        this.gameState = state;
        if (this.gameInterval) {
            clearInterval(this.gameInterval);
            this.gameInterval = null;
        }
    }

    resetGame() {
        this.snake = new Snake(this.boxSize, {
            x: this.canvasWidth / 2 - this.boxSize,
            y: this.canvasHeight / 2 - (this.boxSize)
        }, 10);
        this.food.generate(this.canvasWidth, this.canvasHeight, this.snake.segments);
        this.score = 0;
        this.setGameScore(this.score);
        this.direction = 'UP';
    }

    updateGame(shouldGenerateFood: boolean = true) {
        if (!this.ctx) return;
        this.snake.move(this.direction!);

        if (this.snake.checkCollision(this.canvasWidth, this.canvasHeight)) {
            this.endGame('LOST');
            return;
        }

        if (this.snake.segments[0].x === this.food.position.x && this.snake.segments[0].y === this.food.position.y) {
            this.snake.grow();
            this.score++;
            this.setGameScore(this.score);
            this.food.generate(this.canvasWidth, this.canvasHeight, this.snake.segments);
        }

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.snake.draw(this.ctx, this.direction!);

        if (this.score >= 10) {
            this.endGame('WON');
            return;
        }

        if (shouldGenerateFood) {
            this.food.draw(this.ctx);
        }
    }

    handleKeydown(event: KeyboardEvent) {
        const key = event.key;
        if (key === 'ArrowLeft' && this.direction !== 'RIGHT') this.direction = 'LEFT';
        else if (key === 'ArrowUp' && this.direction !== 'DOWN') this.direction = 'UP';
        else if (key === 'ArrowRight' && this.direction !== 'LEFT') this.direction = 'RIGHT';
        else if (key === 'ArrowDown' && this.direction !== 'UP') this.direction = 'DOWN';
    }
}
