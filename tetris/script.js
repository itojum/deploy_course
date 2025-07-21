class TetrisGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.nextCanvas = document.getElementById('next-canvas');
        this.nextCtx = this.nextCanvas.getContext('2d');
        
        this.BOARD_WIDTH = 10;
        this.BOARD_HEIGHT = 20;
        this.BLOCK_SIZE = 30;
        
        this.board = [];
        this.currentPiece = null;
        this.nextPiece = null;
        this.score = 0;
        this.level = 1;
        this.lines = 0;
        this.dropTime = 0;
        this.dropInterval = 1000;
        this.gameRunning = false;
        this.paused = false;
        
        this.colors = {
            I: '#00f0f0',
            O: '#f0f000',
            T: '#a000f0',
            S: '#00f000',
            Z: '#f00000',
            J: '#0000f0',
            L: '#f0a000'
        };
        
        this.pieces = {
            I: [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0]
            ],
            O: [
                [1,1],
                [1,1]
            ],
            T: [
                [0,1,0],
                [1,1,1],
                [0,0,0]
            ],
            S: [
                [0,1,1],
                [1,1,0],
                [0,0,0]
            ],
            Z: [
                [1,1,0],
                [0,1,1],
                [0,0,0]
            ],
            J: [
                [1,0,0],
                [1,1,1],
                [0,0,0]
            ],
            L: [
                [0,0,1],
                [1,1,1],
                [0,0,0]
            ]
        };
        
        this.init();
    }
    
    init() {
        this.initBoard();
        this.initEvents();
        this.updateDisplay();
    }
    
    initBoard() {
        this.board = Array(this.BOARD_HEIGHT).fill().map(() => Array(this.BOARD_WIDTH).fill(0));
    }
    
    initEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('pause-btn').addEventListener('click', () => this.togglePause());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
        
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    
    startGame() {
        this.gameRunning = true;
        this.paused = false;
        this.score = 0;
        this.level = 1;
        this.lines = 0;
        this.dropInterval = 1000;
        this.initBoard();
        
        this.currentPiece = this.createPiece();
        this.nextPiece = this.createPiece();
        
        document.getElementById('start-btn').disabled = true;
        document.getElementById('pause-btn').disabled = false;
        document.getElementById('game-over').classList.add('hidden');
        
        this.updateDisplay();
        this.gameLoop();
    }
    
    togglePause() {
        if (!this.gameRunning) return;
        
        this.paused = !this.paused;
        document.getElementById('pause-btn').textContent = this.paused ? '再開' : 'ポーズ';
        
        if (!this.paused) {
            this.gameLoop();
        }
    }
    
    restartGame() {
        this.gameRunning = false;
        this.paused = false;
        document.getElementById('start-btn').disabled = false;
        document.getElementById('pause-btn').disabled = true;
        document.getElementById('pause-btn').textContent = 'ポーズ';
        this.startGame();
    }
    
    createPiece() {
        const pieceTypes = Object.keys(this.pieces);
        const type = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
        
        return {
            type: type,
            matrix: this.pieces[type],
            x: Math.floor((this.BOARD_WIDTH - this.pieces[type][0].length) / 2),
            y: 0
        };
    }
    
    handleKeyPress(e) {
        if (!this.gameRunning || this.paused) {
            if (e.code === 'KeyP') {
                this.togglePause();
            }
            return;
        }
        
        switch(e.code) {
            case 'ArrowLeft':
                this.movePiece(-1, 0);
                break;
            case 'ArrowRight':
                this.movePiece(1, 0);
                break;
            case 'ArrowDown':
                this.movePiece(0, 1);
                break;
            case 'ArrowUp':
                this.rotatePiece();
                break;
            case 'Space':
                this.hardDrop();
                break;
            case 'KeyP':
                this.togglePause();
                break;
        }
        e.preventDefault();
    }
    
    movePiece(dx, dy) {
        if (this.isValidMove(this.currentPiece, dx, dy)) {
            this.currentPiece.x += dx;
            this.currentPiece.y += dy;
            this.draw();
        }
    }
    
    rotatePiece() {
        const rotated = this.rotateMatrix(this.currentPiece.matrix);
        if (this.isValidPosition(rotated, this.currentPiece.x, this.currentPiece.y)) {
            this.currentPiece.matrix = rotated;
            this.draw();
        }
    }
    
    rotateMatrix(matrix) {
        const rotated = [];
        const size = matrix.length;
        
        for (let i = 0; i < size; i++) {
            rotated[i] = [];
            for (let j = 0; j < size; j++) {
                rotated[i][j] = matrix[size - 1 - j][i];
            }
        }
        return rotated;
    }
    
    hardDrop() {
        while (this.isValidMove(this.currentPiece, 0, 1)) {
            this.currentPiece.y++;
        }
        this.placePiece();
    }
    
    isValidMove(piece, dx, dy) {
        return this.isValidPosition(piece.matrix, piece.x + dx, piece.y + dy);
    }
    
    isValidPosition(matrix, x, y) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col]) {
                    const newX = x + col;
                    const newY = y + row;
                    
                    if (newX < 0 || newX >= this.BOARD_WIDTH || 
                        newY >= this.BOARD_HEIGHT || 
                        (newY >= 0 && this.board[newY][newX])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    
    placePiece() {
        for (let row = 0; row < this.currentPiece.matrix.length; row++) {
            for (let col = 0; col < this.currentPiece.matrix[row].length; col++) {
                if (this.currentPiece.matrix[row][col]) {
                    const x = this.currentPiece.x + col;
                    const y = this.currentPiece.y + row;
                    
                    if (y >= 0) {
                        this.board[y][x] = this.currentPiece.type;
                    }
                }
            }
        }
        
        this.clearLines();
        this.spawnNextPiece();
    }
    
    clearLines() {
        let linesCleared = 0;
        
        for (let row = this.BOARD_HEIGHT - 1; row >= 0; row--) {
            if (this.board[row].every(cell => cell !== 0)) {
                this.board.splice(row, 1);
                this.board.unshift(Array(this.BOARD_WIDTH).fill(0));
                linesCleared++;
                row++; // チェックを再度行う
            }
        }
        
        if (linesCleared > 0) {
            this.lines += linesCleared;
            this.score += this.calculateScore(linesCleared);
            this.level = Math.floor(this.lines / 10) + 1;
            this.dropInterval = Math.max(100, 1000 - (this.level - 1) * 100);
            this.updateDisplay();
        }
    }
    
    calculateScore(linesCleared) {
        const baseScore = [0, 100, 300, 500, 800];
        return baseScore[linesCleared] * this.level;
    }
    
    spawnNextPiece() {
        this.currentPiece = this.nextPiece;
        this.nextPiece = this.createPiece();
        
        if (!this.isValidPosition(this.currentPiece.matrix, this.currentPiece.x, this.currentPiece.y)) {
            this.gameOver();
            return;
        }
        
        this.drawNext();
    }
    
    gameOver() {
        this.gameRunning = false;
        this.paused = false;
        
        document.getElementById('start-btn').disabled = false;
        document.getElementById('pause-btn').disabled = true;
        document.getElementById('pause-btn').textContent = 'ポーズ';
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('game-over').classList.remove('hidden');
    }
    
    gameLoop() {
        if (!this.gameRunning || this.paused) return;
        
        const now = Date.now();
        
        if (now - this.dropTime > this.dropInterval) {
            if (this.isValidMove(this.currentPiece, 0, 1)) {
                this.currentPiece.y++;
            } else {
                this.placePiece();
            }
            this.dropTime = now;
        }
        
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
    
    draw() {
        // ボードをクリア
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // ボードを描画
        this.drawBoard();
        
        // 現在のピースを描画
        if (this.currentPiece) {
            this.drawPiece(this.currentPiece, this.ctx);
        }
        
        // グリッド線を描画
        this.drawGrid();
    }
    
    drawBoard() {
        for (let row = 0; row < this.BOARD_HEIGHT; row++) {
            for (let col = 0; col < this.BOARD_WIDTH; col++) {
                if (this.board[row][col]) {
                    this.ctx.fillStyle = this.colors[this.board[row][col]];
                    this.ctx.fillRect(
                        col * this.BLOCK_SIZE,
                        row * this.BLOCK_SIZE,
                        this.BLOCK_SIZE,
                        this.BLOCK_SIZE
                    );
                    
                    // ブロックの境界線
                    this.ctx.strokeStyle = '#fff';
                    this.ctx.lineWidth = 2;
                    this.ctx.strokeRect(
                        col * this.BLOCK_SIZE,
                        row * this.BLOCK_SIZE,
                        this.BLOCK_SIZE,
                        this.BLOCK_SIZE
                    );
                }
            }
        }
    }
    
    drawPiece(piece, context) {
        context.fillStyle = this.colors[piece.type];
        
        for (let row = 0; row < piece.matrix.length; row++) {
            for (let col = 0; col < piece.matrix[row].length; col++) {
                if (piece.matrix[row][col]) {
                    const x = (piece.x + col) * this.BLOCK_SIZE;
                    const y = (piece.y + row) * this.BLOCK_SIZE;
                    
                    context.fillRect(x, y, this.BLOCK_SIZE, this.BLOCK_SIZE);
                    
                    // ブロックの境界線
                    context.strokeStyle = '#fff';
                    context.lineWidth = 2;
                    context.strokeRect(x, y, this.BLOCK_SIZE, this.BLOCK_SIZE);
                }
            }
        }
    }
    
    drawGrid() {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        
        // 縦線
        for (let col = 0; col <= this.BOARD_WIDTH; col++) {
            this.ctx.beginPath();
            this.ctx.moveTo(col * this.BLOCK_SIZE, 0);
            this.ctx.lineTo(col * this.BLOCK_SIZE, this.canvas.height);
            this.ctx.stroke();
        }
        
        // 横線
        for (let row = 0; row <= this.BOARD_HEIGHT; row++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, row * this.BLOCK_SIZE);
            this.ctx.lineTo(this.canvas.width, row * this.BLOCK_SIZE);
            this.ctx.stroke();
        }
    }
    
    drawNext() {
        // ネクストキャンバスをクリア
        this.nextCtx.fillStyle = '#000';
        this.nextCtx.fillRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
        
        if (this.nextPiece) {
            const blockSize = 20;
            const offsetX = (this.nextCanvas.width - this.nextPiece.matrix[0].length * blockSize) / 2;
            const offsetY = (this.nextCanvas.height - this.nextPiece.matrix.length * blockSize) / 2;
            
            this.nextCtx.fillStyle = this.colors[this.nextPiece.type];
            
            for (let row = 0; row < this.nextPiece.matrix.length; row++) {
                for (let col = 0; col < this.nextPiece.matrix[row].length; col++) {
                    if (this.nextPiece.matrix[row][col]) {
                        const x = offsetX + col * blockSize;
                        const y = offsetY + row * blockSize;
                        
                        this.nextCtx.fillRect(x, y, blockSize, blockSize);
                        this.nextCtx.strokeStyle = '#fff';
                        this.nextCtx.lineWidth = 1;
                        this.nextCtx.strokeRect(x, y, blockSize, blockSize);
                    }
                }
            }
        }
    }
    
    updateDisplay() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.level;
        document.getElementById('lines').textContent = this.lines;
    }
}

// ゲームを開始
const game = new TetrisGame(); 