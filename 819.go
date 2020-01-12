package main

import (
	"strings"
	"unicode"
)

func mostCommonWord(paragraph string, banned []string) string {
	words := strings.FieldsFunc(paragraph, func(r rune) bool {
		return !unicode.IsLetter(r)
	})

	bannedMap := make(map[string]bool)
	for _, b := range banned {
		bannedMap[b] = true
	}

	maxCount, maxWord := 0, ""
	wordCount := make(map[string]int)
	for _, w := range words {
		w = strings.ToLower(w)

		if _, ok := bannedMap[w]; ok {
			continue
		}

		wordCount[w]++
		count := wordCount[w]
		if count > maxCount {
			maxCount = count
			maxWord = w
		}
	}

	return maxWord
}
