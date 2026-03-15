function sortedSquares(nums: number[]): number[] {
  const sortedSquaresArray = nums.map((num) => num * num).sort((a, b) => a - b);
  console.log(sortedSquaresArray);
  return sortedSquaresArray;
}

sortedSquares([-4, -1, 0, 3, 10]);
sortedSquares([-7, -3, 2, 3, 11]);
