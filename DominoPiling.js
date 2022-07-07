/**************************************** */
    /*CODEFORCES Coding Challange Solution**/
    /*  Domino piling
/*** Challenge Description Found at  https://codeforces.com/problemset/problem/50/A
/**************************************** */

function dominoPiling(mn=[]){
    const [M, N] = mn
    let check_m = 1<= M && M<=N && M<=16
    let check_n = 1<=N && N>=M && N<=16
    if(!check_m || !check_n) return false
    let area = M*N
    let domino = 2// 2*1
    let maxDomino = parseInt(area/domino)
    return maxDomino
}

console.log(dominoPiling([3,3]))