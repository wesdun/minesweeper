import {Minesweeper} from "../src/minesweeper";

describe('minesweeper', () => {
    let minesweeper: Minesweeper;
    
    beforeEach(() => {
        minesweeper = new Minesweeper();
    });

    it('should find hint numbers for one line', () => {
        minesweeper.createMineFieldFromString('*...');
        minesweeper.generateHints();
        expect(minesweeper.mineField.toString()).toEqual('*100\n');
        minesweeper.createMineFieldFromString('..*.');
        minesweeper.generateHints();
        expect(minesweeper.mineField.toString()).toEqual('01*1\n');
    });
    
    it('should create mineField from string', () => {
        let field = '*...\n' +
                    '....\n' + 
                    '.*..\n' +
                    '....';
        let result = [
            ['*', '.', '.', '.'],
            ['.', '.', '.', '.'],
            ['.', '*', '.', '.'],
            ['.', '.', '.', '.']
        ];
        minesweeper.createMineFieldFromString(field);
        expect(minesweeper.mineField.cells).toEqual(result);
    });

    it('should have mine to top left', () => {
        minesweeper.createMineFieldFromString('*.\n' + '..');
        expect(minesweeper.mineToTopLeft(1,1)).toBeTruthy();
    });

    it('should find hints for multi lines', () => {
        let field = '*...\n' +
                    '....\n' +
                    '.*..\n' +
                    '....';
        let result = '*100\n' +
                    '2210\n' +
                    '1*10\n' +
                    '1110\n';
        minesweeper.createMineFieldFromString(field);
        minesweeper.generateHints();
        expect(minesweeper.mineField.toString()).toEqual(result);
    });

    
});
