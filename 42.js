/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let area = 0;
    const stack = [];

    for (let i = 0; i < height.length; i ++) {
        if (height[i] === 0) {
            continue;
        }

        if (stack.length === 0) {
            stack.push({start: i, height: height[i], base: 0});
        } else {
            const last = stack[stack.length - 1];

            const hdiff = i - last.start - 1;
            if (hdiff !== 0) {
                const vdiff = Math.min(height[i], last.height) - last.base
                area += hdiff * vdiff;
            }

            if (height[i] >= last.height) {
                stack.pop();    // Remove the last element
                i--;
            } else {
                last.base = Math.max(last.base, height[i]);
                stack.push({start: i, height: height[i], base: 0});
            }
        }
    }

    return area;
};
