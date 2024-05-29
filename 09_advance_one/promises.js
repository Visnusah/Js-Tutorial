// ****************************************************************************************************
// Learn about promises in javascript Method001

const promise01 = new Promise( (resolve, reject) => {
  // Do an async task async task
  // DB calls, crytography, newtwork
  setTimeout(() => {
    console.log('Async task done 1');
    resolve(); // resolve is called when promise is resolved 
  }, 1000)
})

promise01.then( () => { // then is called when promise is resolved
  console.log('promise is resolved (consumed 1)');
})


// ****************************************************************************************************
// Learn about promises in javascript Method002 (directly in promise)

new Promise( (resolve, reject) => {
  setTimeout( () => {
    console.log('Async task done 2');
    resolve(); // resolve is called when promise is resolved
  },1000)

}).then( () => {
  console.log('promise is resolved (consumed 2)');
})

// ****************************************************************************************************
// Example of data consuption, value passing in promise

const promise03 = new Promise( (resolve, reject) => {
  setTimeout(() =>{
    resolve({username: 'soumya', email:'kamlesh@example.com'}); // passing data to promise
  },1000)
})

promise03.then ((user)=> {
  console.log(user);
})


// ****************************************************************************************************
// Exapmle of promise chaining ( (then) method can be called multiple times)
// thenebale method

const promise04 = new Promise( (resolve, reject) => {
  setTimeout(()=>{
    let error = false; // change to true to see error
    if(!error){
      resolve({username: 'KamleshSah', password: '123'});
    }else{
      reject('Error: Something went wrong')
    }
  },1000)
})
// thenebale method
promise04.then( (user) => {
  console.log(user);
  return user.username;
})
.then( (username) => {
  console.log(username);
})
.catch( (error) => {
  console.log(error);
}).finally( () => { // finally is called always, either promise is resolved or rejected
  console.log('Promise is done either resolved or rejected');
})


// ****************************************************************************************************
// Example of async and await in promises (async function) method_001

const promise05 = new Promise((resolve, reject)=> {
  setInterval(() => {
    let error = false; // change to true to see error
    if(!error){
      resolve({username: 'Tannu', password: '1307'});
    } else {
      reject('Error: 1307 went wrong');
    }
  }, 1000)
})

const consumePromise05 = async () => {
  const response = await promise05
  console.log(response); // response is the data passed in resolve
}

consumePromise05(); // call the async function


// ****************************************************************************************************
// Example of async and await in promises (async function) method_002

const promise06 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    let error = true; // change to true to see error
    if(!error){
      resolve({username: 'Javascript', password: '12345'});
    } else {
      reject('Error: Javascipt went wrong');
    }
  },1000)
})

async function consumePromise06(){
  try {
    const response = await promise06;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise06(); // call the async function


// ****************************************************************************************************
// fetch api with promises (fetch api is used to make http request)    पाहिले फेच लिब्रेरी था but now it's a method in javascript


// method_001
// async function fetchApi(){
  
  //   const response = await fetch('https://api.github.com/users/visnusah') // fetch is a method to make http request
  //   const data = await response.json(); // response.json() is a method to convert response to json
  //   console.log(data);
  // }
  // fetchApi(); // call the async function
  
  // method_002
  // async function fetchApi(){
  //   try {
  //     const response = await fetch('https://api.github.com/users/visnusah') // fetch is a method to make http request
  //     const data = await response.json(); // response.json() is a method to convert response to json
  //     // console.log(response); // this will show the response object 
  //     console.log(data); // this will show the data object in json format
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  
  // }
  // fetchApi(); // call the async function 

  // method_003 (without async function) thenebale method
  fetch('https://api.github.com/users/vishnusah')
  .then((response)=> {
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  })
