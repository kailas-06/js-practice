let postList = document.querySelector("#contentList");
let output = "";
const addFormPost = document.querySelector("#add-post-from");
const titleValue = document.getElementById("titile-value");
const bodyValue = document.getElementById("body-value");
const btnSubmit = document.querySelector(".btn");

const url = "http://localhost:3001/users";

const renderUsersData = (users) => {
  users.forEach((user) => {
    output += `<div class="card mb-4 col-md-6">
            <div class="card-body" data-id =${user.id}>
                <h5 class="card-title">${user.title}</h5>
                <p class="card-text">${user.body}</p>
                <a href="#" class="card-link" id="edit-post">Edit</a>
                <a href="#" class="card-link" id="delete-post">Delete</a>
            </div>
        </div>`;
  });
  postList.innerHTML = output;
  // console.log(output);
};

fetch(url)
  .then((response) => response.json())
  .then((data) => renderUsersData(data))
  .catch((error) => console.log(error));

//   delete post
postList.addEventListener("click", (e) => {
  e.preventDefault();
  let deletepost = e.target.id == "delete-post";
  let editpost = e.target.id == "edit-post";

  let id = e.target.parentElement.dataset.id;
  //   console.log(id);

  //delete - remove the existing post
  if (deletepost) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => location.reload());
  }

  if (editpost) {
    const parent = e.target.parentElement;
    const titleContent = parent.querySelector(".card-title").textContent;
    const bodyContent = parent.querySelector(".card-text").textContent;
    titleValue.value = titleContent;
    bodyValue.value = bodyContent;
  }

  //create patch method update the data

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("post updated");
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleValue.value,
        body: bodyValue.value,
      }),
    })
      .then((res) => res.json())
      .then(() => location.reload());
  });
});

// create new request method get data or post data
addFormPost.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleValue.value,
      body: bodyValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArray = [];
      dataArray.push(data);
      renderUsersData(dataArray);
    });
});
