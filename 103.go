/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
	nodes := make([]TreeNode, 0)
	if root != nil {
		nodes = append(nodes, *root)
	}

	result := make([][]int, 0)
	ltr := true

	for len(nodes) != 0 {
		nextNodes := make([]TreeNode, 0)
		values := make([]int, 0)

		for _, n := range nodes {
			if ltr {
				values = append(values, n.Val)
			} else {
				values = append([]int{n.Val}, values...)
			}

			if n.Left != nil {
				nextNodes = append(nextNodes, *n.Left)
			}
			if n.Right != nil {
				nextNodes = append(nextNodes, *n.Right)
			}
		}

		nodes = nextNodes
		result = append(result, values)
		ltr = !ltr
	}

	return result
}
