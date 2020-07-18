function submit(){
    const name= document.getElementsByName('name').value;
    const email= document.getElementsByName('email').value;
    const age= document.getElementsByName('age').value;
    const role= document.getElementsByName('role').value;
    const recommend= document.getElementsByName('yes').value;
    const feature= document.getElementsByName('feature').value;
    const improve= document.getElementsByTagName('input<checkbox>').value;
    const comment= document.getElementsByName('suggestion').value;
    const submit= document.getElementById('submit');
    var output= submit.value;
}