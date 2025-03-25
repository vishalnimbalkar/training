//get all posts
// get element by id
// post api
// patch api
// delete by id and all

//get all posts
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

async function getData() {
  try {
    const userData = [];
    const data = await getUsers();
    const parseData = await data.json();
    userData.push(...parseData);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    processUserData(userData);
  } catch (error) {
    console.log(error);
  }
}
function processUserData() {
  let userData = JSON.parse(sessionStorage.getItem('userData'));
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

//get post by id
function getPostById(id) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  for (let data of userData) {
    if (data.id === id) {
      return data;
    }
  }
  return "Not Found";
}
console.log(getPostById(4));

// post request
const formData = document
  .getElementById("post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const newPost = {
      userId: Number(document.getElementById("user-id").value),
      id: userData.length+1,
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
    };

    try {
      if (userData) {
        userData.unshift(newPost);
        sessionStorage.setItem("userData", JSON.stringify(userData));
        processUserData();
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  });


// patch api
function updatePost(id) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const title = prompt("Enter title");
  if (userData) {
    for (let key in userData) {
      if (userData[key].id === id) {
        userData[key].title = title;
        sessionStorage.setItem('userData',JSON.stringify(userData));
        processUserData();
      }
    }
  }
}

// delete api

function deletePost(id) {
  try {
    let userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
      userData = userData.filter((user)=>{
        return user.id !== id;
      })
      sessionStorage.setItem('userData',JSON.stringify(userData));
      processUserData();
    }
  } catch (error) {
    console.log("Error : ", error);
  }
}
