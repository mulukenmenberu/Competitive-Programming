/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr =s.split(" ")
    arr =  arr.sort((a,b)=>parseInt(a[a.length-1])- parseInt(b[b.length-1]))

    for(let x=0;x<arr.length;x++){
        let temp = arr[x].split("")
        temp.pop()
        arr[x] = temp.join("")
    }
return arr.join(" ")
};