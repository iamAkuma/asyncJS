const posts = [
    {title: 'Post1', body: 'This is post1'},
    {title: 'Post2', body: 'This is post2'}
];

function getPosts() {
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else{
                reject('Something went wrong');
            }
        },2000);
    });   
}

createPost({title:'Post3', body:'This is post3'}).then(getPosts);