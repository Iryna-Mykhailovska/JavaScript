let xhr = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/users';
xhr.open('GET', url, true);
xhr.onload = function() {
    if(xhr.status === 200) {
       let newObj = JSON.parse(xhr.responseText);
      
        //  console.log(newObj[key].name);
         let arrNames=newObj.map(user => user.name);
         console.log(arrNames);
       
    }
}
xhr.send();