/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  // Map key to an ordered array of timestamps
  this.keyTimestampsMap = new Map();
  // Map key to an ordered array of values
  this.keyValuesMap = new Map();
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.keyTimestampsMap.has(key) === false) {
      this.keyTimestampsMap.set(key, [timestamp]);
      this.keyValuesMap.set(key, [value]);
      return;
  }

  const timestamps = this.keyTimestampsMap.get(key);
  const values = this.keyValuesMap.get(key);
  const index = bsearch(timestamps, timestamp);

  if (timestamps[index] === timestamp) {
      values[index] = value;
  } else {
      insert(timestamps, index, timestamp);
      insert(values, index, value);
  }
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (this.keyTimestampsMap.has(key) === false) {
      return '';
  }

  const timestamps = this.keyTimestampsMap.get(key);
  const index = bsearch(timestamps, timestamp);
  if (index === -1) {
      return '';
  } else {
      const values = this.keyValuesMap.get(key);
      return values[index];
  }

};

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/

function bsearch(timestamps, timestamp) {
  let left = 0, right = timestamps.length - 1;
  let mid;
  while (left <= right) {
      mid = Math.floor((left + right) / 2);
      const value = timestamps[mid];
      if (value <= timestamp && (mid === timestamps.length - 1 || timestamps[mid + 1] > timestamp)) {
          return mid;
      }

      if (value <= timestamp) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1;
}

function insert(array, index, value) {
  array.splice(index + 1, 0, value);
}
