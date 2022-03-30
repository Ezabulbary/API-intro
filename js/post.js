function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(rep => rep.json())
    .then(data => displayPost(data))
}
loadPost();

function displayPost(posts){
    const postContainar = document.getElementById('posts');
    for(const data of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `
        postContainar.appendChild(div);
    }
}