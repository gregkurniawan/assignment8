const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {

      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      pictureElement.style.height = "150px";
      pictureElement.style.width = "150px";
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      nameElement.style.fontSize = "20px";
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      const createdElement = document.createElement("div")
      createdElement.textContent = user.created_at;
      createdElement.style.fontSize = "20px";

      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = "";
      infosElement.appendChild(pictureElement);
      infosElement.appendChild(nameElement);
      infosElement.appendChild(websiteElement);
      infosElement.appendChild(createdElement);
    })
    .catch(err => {
      console.error(err.message);
    });
});