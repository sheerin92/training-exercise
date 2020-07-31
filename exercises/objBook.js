function objRead(people){
    for(var i=0; i<people.length; i++){
        if(people[i].readingStatus==true){
            console.log(`${people[i].Author} already read ${people[i].bookName}`);
        }
            else{
                console.log(`${people[i].Author} is still reading ${people[i].bookName}`)
            }
            
    }
}
const person=[
    {Author:'Sheerin', bookName:'Javascript', readingStatus:true},
    {Author: 'Umar',bookName:'HTMLCSS', readingStatus:true},
    {Author: 'Haathif', bookName:'Javascript', readingStatus:false}
];
console.log(objRead(person));