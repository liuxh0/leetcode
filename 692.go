package main

import (
	"container/heap"
	"strings"
)

type word struct {
	value     string
	frequency int
}

type minHeap []word

func (h minHeap) Len() int {
	return len(h)
}

func (h minHeap) Less(i, j int) bool {
	if h[i].frequency == h[j].frequency {
		return strings.Compare(h[i].value, h[j].value) < 0
	}

	return h[i].frequency > h[j].frequency
}

func (h minHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *minHeap) Push(x interface{}) {
	*h = append(*h, x.(word))
}

func (h *minHeap) Pop() interface{} {
	len := h.Len()
	x := (*h)[len-1]
	*h = (*h)[:len-1]
	return x
}

func topKFrequent(words []string, k int) []string {
	frequency := make(map[string]int)
	for _, w := range words {
		frequency[w]++
	}

	wordHeap := &minHeap{}
	heap.Init(wordHeap)
	for w, f := range frequency {
		heap.Push(wordHeap, word{w, f})


	kMost := make([]string, k)
	for i := range kMost {
		kMost[i] = heap.Pop(wordHeap).(word).value
	}

	return kMost
}
