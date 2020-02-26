var Node = function(key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.headNode = new Node(null, null, null, null);
  this.tailNode = new Node(null, null, null, null);

  this.headNode.next = this.tailNode;
  this.tailNode.prev = this.headNode;
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
      return -1;
  }

  const node = this.map.get(key);

  // Move node to first
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.next = this.headNode.next;
  node.prev = this.headNode;
  this.headNode.next = node;
  node.next.prev = node;

  return node.value;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {    // Update
      const node = this.map.get(key);
      node.value = value;

      // Move node to first
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = this.headNode.next;
      node.prev = this.headNode;
      this.headNode.next = node;
      node.next.prev = node;
  } else {                    // Insert
      if (this.map.size === this.capacity) {
          const nodeToRemove = this.tailNode.prev;
          this.map.delete(nodeToRemove.key);

          // Remove last node
          this.tailNode.prev = nodeToRemove.prev;
          nodeToRemove.prev.next = this.tailNode;
      }

      const node = new Node(key, value, this.headNode, this.headNode.next);
      this.map.set(key, node);
      this.headNode.next = node;
      node.next.prev = node;
  }
};
