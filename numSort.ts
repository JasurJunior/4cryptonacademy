function numSort(nums: number[]) {
    let numsArr = [0, 4, 6, 9, 8]
    nums.sort((a, b) => a - b)
    nums.sort((a, b) => {
        if (numsArr.indexOf(a) && numsArr.indexOf(b)) {
            return numsArr.indexOf(a) - numsArr.indexOf(b)
        }
        return 0
    })
    return nums
}
console.log(numSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//0 1 2 5 6 8 7 4 9 6 7
// 0 1 2 4 5 6 7 7 8 9
