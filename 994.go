package main

func orangesRotting(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	if hasFreshOrange(grid, m, n) == false {
		return 0
	}

	rottenOranges := make([][2]int, 0)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 2 {
				rottenOranges = append(rottenOranges, [2]int{i, j})
			}
		}
	}
	if len(rottenOranges) == 0 {
		return -1
	}

	min := 0
	for {
		min++

		newRottenOranges := make([][2]int, 0)
		for _, r := range rottenOranges {
			i, j := r[0], r[1]
			newRottenOranges = setRottenOrange(newRottenOranges, grid, m, n, i-1, j)
			newRottenOranges = setRottenOrange(newRottenOranges, grid, m, n, i+1, j)
			newRottenOranges = setRottenOrange(newRottenOranges, grid, m, n, i, j-1)
			newRottenOranges = setRottenOrange(newRottenOranges, grid, m, n, i, j+1)
		}

		if hasFreshOrange(grid, m, n) == false {
			return min
		}

		if len(newRottenOranges) == 0 {
			return -1
		}

		rottenOranges = newRottenOranges
	}
}

func setRottenOrange(rottenOranges [][2]int, grid [][]int, m, n int, i, j int) [][2]int {
	if i < 0 || i >= m || j < 0 || j >= n {
		return rottenOranges
	}

	if grid[i][j] == 1 {
		grid[i][j] = 2
		return append(rottenOranges, [2]int{i, j})
	}

	return rottenOranges
}

func hasFreshOrange(grid [][]int, m, n int) bool {
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				return true
			}
		}
	}

	return false
}
