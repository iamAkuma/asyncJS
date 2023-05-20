// const posts = [
//     {title: 'Post1', body: 'This is post1'},
//     {title: 'Post2', body: 'This is post2'}
// ];

// function getPosts() {
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post, index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPosts(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000);
// }
// // getPosts();

// createPosts({title: 'Post3', body:'This is post3'}, getPosts);

// A function that simulates an asynchronous operation
function fetchData(callback) {
    setTimeout(function() {
      const data = "Hello, world!";
      callback(data); // Invoke the callback function with the data
    }, 2000); // Simulate a delay of 2 seconds
  }
  