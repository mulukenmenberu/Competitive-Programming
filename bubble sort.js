function countSwaps(a) {
    // Write your code here
    let swaps = 0
    for (let x = 0; x < a.length; x++) {
        for (let y = 0; y < a.length - x - 1; y++) {
            if (a[y] > a[y + 1]) {
                let temp = a[y]
                a[y] = a[y + 1]
                a[y + 1] = temp
                swaps += 1
            }
        }
    }
}