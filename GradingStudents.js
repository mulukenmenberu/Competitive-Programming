/**************************************** */
    /*Hacker Rank Coding Challange Solution**/
/*** Challenge Description Found at  https://www.hackerrank.com/challenges/grading/problem
/**************************************** */

function gradingStudents(grades) {
for(let x=0;x<grades.length;x++){
    if(grades[x]>=38){
        let diff = grades[x]%5
        if(diff>=3){
                diff = 5-diff 
                grades[x] = grades[x]+diff   
        }

    }
}
return grades
}