package main

func searchMatrix(matrix [][]int, target int) bool {
	m := len(matrix)
	if m == 0 {
		return false
	}

	n := len(matrix[0])
	if n == 0 {
		return false
	}

	left, right := 0, m*n-1
	for left <= right {
		mid := (left + right) / 2
		r, c := mid/n, mid%n
		val := matrix[r][c]

		if val == target {
			return true
		} else if val > target {
			right = mid - 1
		} else if val < target {
			left = mid + 1
		}
	}
	return false
}
