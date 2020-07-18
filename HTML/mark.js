function gradeMarks(x){
    var val;
    if(x=='Grade S'){
        x= 'Above 90%';
        val=`You have passed in First Class with Distinction. Your Grade is S and ${x}`;
    }
    if(x=='Grade A'){
        x='Above 80% but below 90%';
        val=` You have passed in First Class. Your Grade is A and ${x}`;
    }
    if(x=='Grade B'){
        x='Above 70% but below 80%';
        val=` You have passed in Second Class. Your Grade is B and ${x}`;
    }
    if(x=='Grade C'){
        x='Above 60% but below 70%';
        val=` You have passed in Third Class. Your Grade is C and ${x}`;
    }
    if(x=='Grade D'){
        x='Above 50% but below 60%';
        val=` You have passed in Fourth Class. Your Grade is D and ${x}`;
    }
        if(x=='Grade E'){
        x='Below 50%';
        val=` You have  Failed. Your Grade is E and ${x}`;
    }
    return val;
}
console.log(gradeMarks('Grade E'));