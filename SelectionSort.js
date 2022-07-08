
function SelectionSort(arr=[]){
    if(!arr || arr.length<=0) return "array is empty"
    let arrayIsNumber = arr.every(item=>{
        return typeof item === 'number'
    })
    if(!arrayIsNumber) return 'all array elements mut be numbers'
    console.log(arr.length)
    for(let x=0;x<arr.length-1;x++){
        let min = x
        for(let y=x+1;y<=arr.length-1;y++){
            if(arr[y]<arr[min]){
                min = y
            }
        }
        let large = arr[x]
        arr[x] = arr[min]
        arr[min] = large
    }

    return arr;
}
console.log(SelectionSort([1,7,2,4,3,5]))