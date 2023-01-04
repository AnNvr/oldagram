const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
// Structure to return embedded data through JS:
const main = document.getElementById("main")

for (i = 0; i < posts.length; i++){
    main.innerHTML += `
            <section class="post-data">
                <img class="user-avatar" src=${posts[i].avatar}>
                <ul class="ul-el">
                    <li id="name"><span>${posts[i].name}<span></li>
                    <li id="location">${posts[i].location}</li>
                </ul>
            </section>
            <img class="post" src=${posts[i].post}>
            <div class="icons">
                <img src="images/icon-heart.png" class="icon hearth" id="heart">
                <img src="images/icon-comment.png" class="icon message">
                <img src="images/icon-dm.png" class="icon dm">
            </div>
            <span class="likes">${posts[i].likes} likes</span>
            <p class="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
    `
}

// Click to like heart (incomplete)

const heart = document.getElementById("heart")
heart.addEventListener("click", function(){
    
})