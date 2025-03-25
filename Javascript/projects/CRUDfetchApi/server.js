//get all posts
// get element by id
// post api
// patch api
// delete by id and all

//get all posts
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

const userData = [];
async function getData() {
  try {
    const data = await getUsers();
    const parseData = await data.json();
    userData.push(...parseData);
    processUserData();
  } catch (error) {
    console.log(error);
  }
}
function processUserData() {
  const userTable = document.getElementById("user-table");
  userTable.innerHTML = `<tr>
            <th>Used Id</th>
            <th>Post Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>`;
  userData.forEach((user) => {
    const newTr = document.createElement("tr");
    userTable.appendChild(newTr);
    for (let key in user) {
      newTr.innerHTML += `<td>${user[key]}</td>`;
    }
    newTr.innerHTML += `<td><button onClick = 'updatePost(${user.id})'>update</button></td>`;
    newTr.innerHTML += `<td><button onClick = 'deletePost(${user.id})'>delete</button></td>`;
  });
}

getData();
// console.log(userData);

//get post by id
async function getPostById(id) {
  return await fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
    (res) => res.json()
  );
}
getPostById(4)
  .then((post) => {
    console.log(post);
  })
  .catch((error) => console.log(error));

// post request
const formData = document
  .getElementById("post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newPost = {
      userId: Number(document.getElementById("user-id").value),
      id: userData.length + 1,
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
    };

    try {
      const result = createNewPost(newPost);

      if (result) {
        userData.unshift(newPost);
        processUserData();
        console.log(result);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  });

async function createNewPost(object) {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(object),
  }).then((response) => response.json());
}

// patch api
async function updatePostTitle(id, title) {
  return await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      'title': title,
    }),
  }).then((response) => response.json());
}

function updatePost(id) {
  const title = prompt("Enter title");
  const response = updatePostTitle(id,title);
  console.log(response);
  if(response){
    for(let key in userData){
        if(userData[key].id === id){
            userData[key].title = title;
            processUserData()            
        }
    }
  }
}

// delete api 
 async function delPost(id){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
         method: 'DELETE',
     });
     return await res.json();
}

function deletePost(id){
    try {
        const response = delPost(id);
        console.log(response);
        if(response){
            for(let key in userData){
                if(userData[key].id === id){
                    delete userData[key];
                    processUserData()
                    console.log(userData);
                    
                }
            }
        }
    } catch (error) {
        console.log("Error : ",error);
        
    }

}
