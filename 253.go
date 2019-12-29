package main

import "sort"

func minMeetingRooms(intervals [][]int) int {
	if len(intervals) == 0 {
		return 0
	}

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] <= intervals[j][0]
	})

	rooms := make([][][]int, 1)
	rooms[0] = make([][]int, 1)
	rooms[0][0] = intervals[0]

	for i := 1; i < len(intervals); i++ {
		freeRoom := findFreeRoom(rooms, intervals[i])
		if freeRoom == -1 {
			newRoom := make([][]int, 1)
			newRoom[0] = intervals[i]
			rooms = append(rooms, newRoom)
		} else {
			rooms[freeRoom] = append(rooms[freeRoom], intervals[i])
		}
	}

	return len(rooms)
}

func findFreeRoom(rooms [][][]int, interval []int) int {
	freeRoom, minEnd := -1, -1
	for i, room := range rooms {
		lastInterval := room[len(room)-1]
		end := lastInterval[1]

		if end <= interval[0] && (minEnd == -1 || end < minEnd) {
			freeRoom = i
			minEnd = end
		}
	}
	return freeRoom
}
