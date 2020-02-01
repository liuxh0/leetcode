package main

import (
	"sort"
	"strings"
)

func suggestedProducts(products []string, searchWord string) [][]string {
	sort.Strings(products)

	result := make([][]string, len(searchWord))
	searchStart := 0

	for i := 0; i < len(searchWord); i++ {
		subresult := make([]string, 0)
		prefix := searchWord[:i+1]

		// The index of first found product
		first := -1
	Loop:
		for j := searchStart; j < len(products); j++ {
			product := products[j]
			if len(product) < len(prefix) {
				continue
			}

			switch strings.Compare(product[:i+1], prefix) {
			case 0:
				subresult = append(subresult, product)

				if first == -1 {
					first = j
				}

				if len(subresult) == 3 {
					break Loop
				}
			case 1:
				break Loop
			}

		}

		result[i] = subresult

		// Reduce search range
		if first != -1 {
			searchStart = first
		}
	}

	return result
}
