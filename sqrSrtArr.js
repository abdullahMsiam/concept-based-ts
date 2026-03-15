function sortedSquares(nums) {
    var sortedSquaresArray = nums.map(function (num) { return num * num; }).sort(function (a, b) { return a - b; });
    console.log(sortedSquaresArray);
    return sortedSquaresArray;
}
sortedSquares([-4, -1, 0, 3, 10]);
sortedSquares([-7, -3, 2, 3, 11]);
