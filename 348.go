package main

type TicTacToe struct {
	n    int
	grid [][]int
}

/** Initialize your data structure here. */
func Constructor(n int) TicTacToe {
	rows := make([][]int, n)
	for i := range rows {
		rows[i] = make([]int, n)
	}

	return TicTacToe{n, rows}
}

/** Player {player} makes a move at ({row}, {col}).
  @param row The row of the board.
  @param col The column of the board.
  @param player The player, can be either 1 or 2.
  @return The current winning condition, can be either:
          0: No one wins.
          1: Player 1 wins.
          2: Player 2 wins. */
func (this *TicTacToe) Move(row int, col int, player int) int {
	this.grid[row][col] = player

	// Check horizontal, vertical and diagonal
	h, v, d1, d2 := true, true, row == col, this.n-row-1 == col
	for i := 0; i < this.n; i++ {
		if h == true && this.grid[row][i] != player {
			h = false
		}

		if v == true && this.grid[i][col] != player {
			v = false
		}

		if d1 == true && this.grid[i][i] != player {
			d1 = false
		}

		if d2 == true && this.grid[this.n-i-1][i] != player {
			d2 = false
		}
	}

	if h || v || d1 || d2 {
		return player
	} else {
		return 0
	}
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Move(row,col,player);
 */
