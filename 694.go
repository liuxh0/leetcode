package main

func numDistinctIslands(grid [][]int) int {
	islands := make(map[string]bool)

	for i := range grid {
		for j := range grid[0] {
			if grid[i][j] == 1 {
				path := ""
				markIsland(grid, i, j, &path)
				islands[path] = true
			}
		}
	}

	return len(islands)
}

func markIsland(grid [][]int, x, y int, path *string) {
	lenx, leny := len(grid), len(grid[0])

	if x < 0 || x >= lenx || y < 0 || y >= leny || grid[x][y] == 0 {
		*path = *path + "0"
		return
	}

	*path = *path + "1"
	grid[x][y] = 0

	markIsland(grid, x-1, y, path)
	markIsland(grid, x+1, y, path)
	markIsland(grid, x, y-1, path)
	markIsland(grid, x, y+1, path)
}
