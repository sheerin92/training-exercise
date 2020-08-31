/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version:3.0.0
 * @author: Sheerin
 **/

 class EasyHTTP {

    //Make a HTTP GET request
     async get(url){
         const response = await fetch(url);
         const resData = await response.json();
         return resData;
     }

     //Make a HTTP POST
     async post(url, data){
        
            const response = await fetch(url , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const resData = await response.json();
            return resData;
     }
     //Make a HTTP PUT
     async put(url, data){
        
           const response = await fetch(url , {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;     
     }
     //Make a HTTP DELETE
     async delete(url){
        
            await fetch(url , {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const resData = await 'Resource Deleted...';
            return resData;    
     }
 }