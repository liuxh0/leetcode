package main

import "sort"

func canAttendMeetings1(intervals [][]int) bool {
	occupied := make(map[int]bool)
	for _, v := range intervals {
		s, e := v[0], v[1]
		for j := s; j < e; j++ {
			if occupied[j] == true {
				return false
			}
			occupied[j] = true
		}
	}

	return true
}

func canAttendMeetings2(intervals [][]int) bool {
	// Sort according to start time
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	for i := 0; i < len(intervals)-1; i++ {
		if intervals[i][1] > intervals[i+1][0] {
			return false
		}
	}
	return true
}

func canAttendMeetings3(intervals [][]int) bool {
	for i := 1; i < len(intervals); i++ {
		for j := 0; j < i; j++ {
			istart, iend := intervals[i][0], intervals[i][1]
			jstart, jend := intervals[j][0], intervals[j][1]
			if (istart >= jstart && istart < jend) || (jstart >= istart && jstart < iend) {
				return false
			}
		}
	}
	return true
}
