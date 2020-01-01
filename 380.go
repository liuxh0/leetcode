package main

import "math/rand"

type RandomizedSet struct {
	indexes map[int]int
	values  []int
}

/** Initialize your data structure here. */
func Constructor() RandomizedSet {
	return RandomizedSet{
		make(map[int]int),
		make([]int, 0),
	}
}

/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
func (this *RandomizedSet) Insert(val int) bool {
	if _, exist := this.indexes[val]; exist == true {
		return false
	}

	index := len(this.values)
	this.indexes[val] = index
	this.values = append(this.values, val)
	return true
}

/** Removes a value from the set. Returns true if the set contained the specified element. */
func (this *RandomizedSet) Remove(val int) bool {
	index, exist := this.indexes[val]
	if exist == false {
		return false
	}

	// Move the last element to the position of deletion
	length := len(this.values)
	last := this.values[length-1]
	this.values[index] = last
	this.indexes[last] = index

	delete(this.indexes, val)
	this.values = this.values[0 : length-1]
	return true
}

/** Get a random element from the set. */
func (this *RandomizedSet) GetRandom() int {
	randomIndex := rand.Intn(len(this.values))
	return this.values[randomIndex]
}
