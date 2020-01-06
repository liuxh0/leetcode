package main

func ladderLength(beginWord string, endWord string, wordList []string) int {
	lengthMap := make(map[string]int)
	lengthMap[beginWord] = 1

	words := []string{beginWord}

	for len(words) != 0 {
		word := words[0]
		words = words[1:]

		for _, v := range wordList {
			if _, ok := lengthMap[v]; !ok && transformable(word, v) {
				lengthMap[v] = lengthMap[word] + 1
				words = append(words, v)

				if v == endWord {
					return lengthMap[v]
				}
			}
		}
	}

	return 0
}

func transformable(str1, str2 string) bool {
	if len(str1) != len(str2) {
		return false
	}

	diff := 0

	for i := 0; i < len(str1); i++ {
		if str1[i] != str2[i] {
			diff++
		}

		if diff > 1 {
			break
		}
	}

	return diff == 1
}
