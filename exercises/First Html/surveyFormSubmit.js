let surveyObj = {};
var improveArr = [];

function surveyFormSubmit() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('myemail').value;
    const age = document.getElementById('myage').value;
    const comment = document.getElementById('suggest').value;
    const role= document.getElementById('role').value;
    const feature= document.getElementById('favorite').value;
    
    surveyObj['name'] = name;
    surveyObj['myemail'] = email;
    surveyObj['myage'] = age;
    surveyObj['mysuggestion'] = comment;
    surveyObj['role']=role;
    surveyObj['feature']= feature;

    console.log(surveyObj);
    alert(JSON.stringify(surveyObj))
}

function recommendOnChange(value){
    surveyObj['recommend'] = value;
}

function improveOnChange(value){
    improveArr.push(value);
    surveyObj['improveArray']= improveArr;
}