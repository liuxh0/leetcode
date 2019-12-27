package main

import (
	"regexp"
	"sort"
	"strings"
)

func reorderLogFiles(logs []string) []string {
	sort.SliceStable(logs, func(i, j int) bool {
		var contents [2]string
		for i, v := range [2]string{logs[i], logs[j]} {
			contents[i] = strings.SplitN(v, " ", 2)[1]
		}

		var isDigitLog [2]bool
		for i, v := range contents {
			isDigitLog[i], _ = regexp.MatchString("^[0-9]", v)
		}

		switch {
		case isDigitLog[0] && isDigitLog[1]:
			return i < j
		case isDigitLog[0] && !isDigitLog[1]:
			return false
		case !isDigitLog[0] && isDigitLog[1]:
			return true
		case !isDigitLog[0] && !isDigitLog[1]:
			return strings.Compare(contents[0], contents[1]) <= 0
		}
		return true
	})

	return logs
}
