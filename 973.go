package main

import (
	"math"
	"math/rand"
)

func kClosest(points [][]int, K int) [][]int {
	quickselect(points, 0, len(points)-1, K)
	return points[0:K]
}

func quickselect(points [][]int, i, j int, K int) {
	if i >= j {
		return
	}

	pivotIndex := random(i, j)
	mid := partition(points, i, j, pivotIndex)

	if leftLen := mid - i + 1; leftLen == K {
		return
	} else if leftLen < K {
		quickselect(points, mid+1, j, K-leftLen)
	} else if leftLen > K {
		quickselect(points, i, mid-1, K)
	}
}

func partition(points [][]int, l, r, pivot int) int {
	pivotDist := dist(points[pivot])
	swap(points, l, pivot)
	pivot = l
	l++

	for {
		for l < r && dist(points[l]) <= pivotDist {
			l++
		}

		for l <= r && dist(points[r]) > pivotDist {
			r--
		}

		if l >= r {
			break
		}

		swap(points, l, r)
	}

	swap(points, pivot, r)
	pivot = r
	return pivot
}

func random(origin, bound int) int {
	return rand.Intn(bound-origin) + origin
}

func dist(point []int) float64 {
	return math.Pow(float64(point[0]), 2) + math.Pow(float64(point[1]), 2)
}

func swap(points [][]int, i, j int) {
	points[i], points[j] = points[j], points[i]
}
