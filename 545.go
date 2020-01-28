type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func boundaryOfBinaryTree(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	var (
		leftBoundary  = findLeftBoundary(root)
		rightBoundary = findRightBoundary(root)
		leaves        = findLeaves(root)
	)

	fmt.Println(leftBoundary)
	fmt.Println(rightBoundary)
	fmt.Println(leaves)

	res := []int{root.Val}
	res = append(res, leftBoundary...)
	res = append(res, leaves...)
	for i := range rightBoundary {
		res = append(res, rightBoundary[len(rightBoundary)-i-1])
	}

	return res
}

func findLeaves(root *TreeNode) []int {
	leaves := make([]int, 0)

	nodes := make([]*TreeNode, 0)
	if root.Left != nil {
		nodes = append(nodes, root.Left)
	}
	if root.Right != nil {
		nodes = append(nodes, root.Right)
	}

	for len(nodes) != 0 {
		node := nodes[0]
		nodes = nodes[1:]

		if node.Left == nil && node.Right == nil {
			leaves = append(leaves, node.Val)
		} else {
			if node.Right != nil {
				nodes = append([]*TreeNode{node.Right}, nodes...)
			}
			if node.Left != nil {
				nodes = append([]*TreeNode{node.Left}, nodes...)
			}
		}
	}

	return leaves
}

func findLeftBoundary(root *TreeNode) []int {
	leftBoundary := make([]int, 0)

	if root.Left == nil {
		return leftBoundary
	}

	node := root.Left
	for node.Left != nil || node.Right != nil {
		leftBoundary = append(leftBoundary, node.Val)

		if node.Left != nil {
			node = node.Left
		} else {
			node = node.Right
		}
	}

	return leftBoundary
}

func findRightBoundary(root *TreeNode) []int {
	rightBoundary := make([]int, 0)

	if root.Right == nil {
		return rightBoundary
	}

	node := root.Right
	for node.Left != nil || node.Right != nil {
		rightBoundary = append(rightBoundary, node.Val)

		if node.Right != nil {
			node = node.Right
		} else {
			node = node.Left
		}
	}

	return rightBoundary
}
