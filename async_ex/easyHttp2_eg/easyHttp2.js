/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version:2.0.0
 * @author: Sheerin
 **/

 class EasyHTTP {

    //Make a HTTP GET request
     get(url){
         return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
         });
     }

     //Make a HTTP POST
     post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
         });

     }
     //Make a HTTP PUT
     put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
         });
     }
     //Make a HTTP DELETE
     delete(url){
        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve("Resource Deleted..."))
            .catch(err => reject(err));
         });

     }
 }