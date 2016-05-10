export class Minesweeper {
    public mineField: MineField;

    generateHints() {
        let adjacentMines: number;

        for(let i = 0; i < this.mineField.cells.length; i++) {
            for(let j = 0; j < this.mineField.cells[i].length; j++) {
                adjacentMines = 0;
                if(this.mineToLeft(i, j)){
                    adjacentMines++;
                }
                if(this.mineToRight(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToTopLeft(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToTopRight(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToTop(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToBottom(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToBottomLeft(i, j)) {
                    adjacentMines++;
                }
                if(this.mineToBottomRight(i, j)) {
                    adjacentMines++;
                }
                if(this.mineField.cells[i][j] != '*') {
                    this.mineField.cells[i][j] = adjacentMines.toString();
                }
            }
        }
    }

    mineToLeft(i, j) {
        return ((j-1) >= 0) && (this.mineField.cells[i][j-1] == '*');
    }

    mineToRight(i, j) {
        return ((j+1) < this.mineField.cells[i].length) && (this.mineField.cells[i][j+1] == '*');
    }
    
    mineToTopLeft(i, j) {
        return ((i - 1) >= 0) ? this.mineToLeft(i-1, j) : false;
    }

    mineToTopRight(i, j) {
        return ((i - 1) >= 0) ? this.mineToRight(i-1, j) : false;
    }

    mineToTop(i, j) {
        return ((i - 1) >= 0) ? this.mineField.cells[i-1][j] == '*' : false;
    }

    mineToBottomLeft(i, j) {
        return ((i + 1) < this.mineField.cells.length) ? this.mineToLeft(i + 1, j) : false;
    }

    mineToBottomRight(i, j) {
        return ((i + 1) < this.mineField.cells.length) ? this.mineToRight(i + 1, j) : false;
    }

    mineToBottom(i, j) {
        return ((i + 1) < this.mineField.cells.length) ? this.mineField.cells[i+1][j] == '*' : false;
    }

    createMineFieldFromString(field:string) {
          this.mineField = new MineField(field);
    }
}

class MineField {
    cells: string[][];
    width: number;
    height: number;

    constructor(field) {
        let fieldRows: string[] = field.split('\n');
        this.height = fieldRows.length;
        this.cells = new Array(this.height);

        fieldRows.map((row, index) => {
            this.cells[index] = row.split('');
            this.width = row.length;
        });
    }

    toString() {
        let fieldWithHints: string = '';

        this.cells.map((row, index) => {
            fieldWithHints += row.join('') + '\n';
        });
        return fieldWithHints;
    }
}

