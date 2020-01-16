package main

import "container/heap"

type maxHeap [][2]int

func (h maxHeap) Len() int {
	return len(h)
}

func (h maxHeap) Less(i, j int) bool {
	return h[i][1] > h[j][1]
}

func (h maxHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *maxHeap) Push(x interface{}) {
	*h = append(*h, x.([2]int))
}

func (h *maxHeap) Pop() interface{} {
	len := h.Len()
	x := (*h)[len-1]
	*h = (*h)[0 : len-1]
	return x
}

func topKFrequent(nums []int, k int) []int {
	frequency := make(map[int]int)
	for _, n := range nums {
		frequency[n] = frequency[n] + 1
	}

	h := &maxHeap{}
	heap.Init(h)

	for k, v := range frequency {
		heap.Push(h, [2]int{k, v})
	}

	result := make([]int, k)
	for i := range result {
		x := heap.Pop(h).([2]int)
		result[i] = x[0]
	}

	return result
}
