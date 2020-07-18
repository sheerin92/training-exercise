function gradeMarks(x){
    var val;
    switch(x){
        case 'Grade S':
            val=`You have passed in First Class with Distinction. Your Grade is S and Above 90%`;
            break;
        case' Grade A':
            val=` You have passed in First Class. Your Grade is A and Above 80% but below 90%`;
            break;
        case 'Grade B':
            val=` You have passed in Second Class. Your Grade is B and Above 70% but below 80%`;
            break;
        case 'Grade C':
            val=` You have passed in Third Class. Your Grade is C and Above 60% but below 70%`;
            break;
        case 'Grade D':
            val=` You have passed in Fourth Class. Your Grade is D and Above 50% but below 60%`;
            break;
        case 'Grade E':
            val=` You have  Failed. Your Grade is E and Below 50%`;
            break;
        default:
            val='You are not Eligible';
            break;
 }
        return val;
}
console.log(gradeMarks('Grade S'));