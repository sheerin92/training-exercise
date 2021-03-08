let user = { 
    name: "sheerin", 
    fn1:() => { 
        console.log("hello " + this.name); // no 'this' binding here 
    }, 
    fn2(){        
        console.log("hello "  + this.name); // 'this' binding works here 
    }   
 }; 
user.fn1(); 
user.fn2(); 