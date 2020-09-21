//Java Solution

class Solution {
    public boolean isUnivalTree(TreeNode root) {
        int val = root.val;
        return dfs(root, val);
    }
    
    public boolean dfs(TreeNode node, int val) {
        if (node == null) {
            return true;
        }
        
        if (node.val != val) {
            return false;
        }
        
        return dfs(node.left, val) && dfs(node.right, val);
    }
}