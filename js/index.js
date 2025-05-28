let myMain = document.getElementById("main")

let fetchData = async() => {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await response.json();

        posts.slice(0,8).forEach((post)=>{
            
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                    <h3>${post.id}</h3>
                    <h5>${post.title}</h5>
                    <p>${post.body}</p>
            `;
            myMain.appendChild(card);
        });
    } 
    catch(error){
        console.log(error);
    }
}

fetchData();