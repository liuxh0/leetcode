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

	il, ir, jl, jr := 0, m-1, 0, n-1
	for {
		ilprev, irprev, jlprev, jrprev := il, ir, jl, jr
		var i, j int

		// Determine right border: ir, jr

		i = il - 1
		for i < ir {
			if matrix[i+1][jl] > target {
				break
			}

			i++
		}

		j = jl - 1
		for j < jr {
			if matrix[il][j+1] > target {
				break
			}

			j++
		}

		ir, jr = i, j

		if ir < il || jr < jl {
			return false
		}

		// Determin left border: il, jl

		i = ir + 1
		for i > il {
			if matrix[i-1][jr] < target {
				break
			}

			i--
		}

		j = jr + 1
		for j > jl {
			if matrix[ir][j-1] < target {
				break
			}

			j--
		}

		il, jl = i, j

		if ir < il || jr < jl {
			return false
		}

		if il == ilprev && ir == irprev && jl == jlprev && jr == jrprev {
			break
		}
	}

	for i := il; i <= ir; i++ {
		for j := jl; j <= jr; j++ {
			if matrix[i][j] == target {
				return true
			}
		}
	}

	return false
}
