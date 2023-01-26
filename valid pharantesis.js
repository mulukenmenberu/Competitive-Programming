/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = ['{','(','[']
    let close = ['}','}','{']
    let x = s.split("")
    let ans = []
    if(x.length<=1) return false
    if((x.length)%2 !=0) return false

    for(let y=0;y<x.length;y++){
        let last = ans[ans.length-1]
        if(['{','(','['].indexOf(x[y])!== -1){
            ans.push(x[y])
        }else if(
            (x[y]=='}' && last =='{') ||
            (x[y]==']' && last =='[') ||
            (x[y]==')' && last =='(') 
        ){
            ans.pop()
        }else{
              ans.push(x[y])
        }
    }
    if(ans.length>0) return false
    return true
};