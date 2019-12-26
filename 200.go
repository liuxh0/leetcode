package main

func numIslands(grid [][]byte) int {
	num := 0
	for x := range grid {
		for y := range grid[x] {
			if grid[x][y] == '1' {
				num++
				markAdjacentLand(grid, x, y)
			}
		}
	}
	return num
}

func markAdjacentLand(grid [][]byte, x int, y int) {
	lenX, lenY := len(grid), len(grid[0])
	if x < 0 || x >= lenX || y < 0 || y >= lenY {
		return
	}

	if grid[x][y] == '0' {
		return
	}

	grid[x][y] = '0'
	markAdjacentLand(grid, x-1, y)
	markAdjacentLand(grid, x+1, y)
	markAdjacentLand(grid, x, y-1)
	markAdjacentLand(grid, x, y+1)
}

func main() {

}
