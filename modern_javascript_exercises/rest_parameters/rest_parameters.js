// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

add(1, 2, 3, 4, 5);
