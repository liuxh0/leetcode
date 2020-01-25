package main

func prisonAfterNDays(cells []int, N int) []int {
	prevStates := make(map[int]int)
	prevStates[getStateInt(cells)] = 0

	for d := 1; d <= N; d++ {
		nextDay(cells)
		state := getStateInt(cells) // The state of d-th day

		// If this state already exists
		if day, ok := prevStates[state]; ok {
			// Cycle is d-day, forward multiple cycles.
			for d+d-day <= N {
				d += d - day
			}
		}
		prevStates[state] = d
	}

	return cells
}

func getStateInt(cells []int) int {
	state := 0
	for i := 0; i < len(cells); i++ {
		state = (state << 1) | cells[i]
	}
	return state
}

func nextDay(cells []int) {
	newCells := make([]int, len(cells))
	for i := 1; i < len(cells)-1; i++ {
		if cells[i-1] == cells[i+1] {
			newCells[i] = 1
		}
	}

	copy(cells, newCells)
}
