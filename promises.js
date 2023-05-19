// // // const posts = [
// // //     {title: 'Post1', body: 'This is post1'},
// // //     {title: 'Post2', body: 'This is post2'}
// // // ];

// // // function getPosts() {
// // //     setTimeout(()=>{
// // //         let output = '';
// // //         posts.forEach((post, index)=>{
// // //             output += `<li>${post.title}</li>`;
// // //         });
// // //         document.body.innerHTML = output;
// // //     }, 1000);
// // // }
// // // function createPost(post){
// // //     return new Promise((resolve, reject)=>{
// // //         setTimeout(()=>{
// // //             posts.push(post);
// // //             const error = false;
// // //             if(!error){
// // //                 resolve();
// // //             } else{
// // //                 reject('Something went wrong');
// // //             }
// // //         },2000);
// // //     });   
// // // }

// // // // createPost({title:'Post3', body:'This is post3'}).then(getPosts)
// // // // .catch(err=>console.log(err));

// // // //Async/Await
// // // // async function init(){
// // // //     await createPost({title:'Post3', body:'This is post3'})

// // // //     getPosts();

// // // // }
// // // // init();

// // // //ASYNC / AWAIT WITH FETCH
// // // async function fetchUsers(){
// // //     const rest = await fetch('https://jsonplaceholder.typicode.com/users');
// // //     const data = await rest.json();
// // //     console.log(data);
// // // }

// // // fetchUsers();

// // // //Promise.all
// // // // const promise1 = Promise.resolve('HELLO');
// // // // const promise2 = 10;
// // // // const promise3 = new Promise((resolve,reject)=>
// // // // setTimeout(resolve, 2000, 'Goodbye'));
// // // // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>
// // // // res.json()
// // // // );

// // // // Promise.all([promise1, promise2, promise3, promise4])
// // // // .then((values)=>
// // // //  console.log(values)
// // // //  );



// // // Function that returns a promise to resolve after a delay
// // function delay(ms) {
// //     return new Promise(resolve => {
// //       setTimeout(resolve, ms);
// //     });
// //   }
  
// //   // Example usage
// //   console.log('Start');
  
// //   delay(2000)
// //     .then(() => {
// //       console.log('Promise resolved after 2 seconds');
// //       return delay(1000); // Chaining another promise
// //     })
// //     .then(() => {
// //       console.log('Promise resolved after 1 second');
// //       // Perform additional operations here
// //     })
// //     .catch(error => {
// //       console.error('An error occurred:', error);
// //       // Handle the error gracefully
// //     });
  
// //   console.log('End');
  
// // Function to fetch data from an API using the Fetch API
// async function fetchData(url) {
//     const response = await fetch(url);
    
//     if (!response.ok) {
//       throw new Error('Request failed. Status: ' + response.status);
//     }
    
//     const data = await response.json();
//     return data;
//   }
  
//   // Example usage in a website
//   async function displayData() {
//     try {
//       const apiUrl = 'https://api.example.com/data';
//       const data = await fetchData(apiUrl);
//       console.log('Data fetched successfully:', data);
      
//       // Update the website with the fetched data
//       // ...
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Display an error message on the website
//       // ...
//     }
//   }
  
//   displayData();
  