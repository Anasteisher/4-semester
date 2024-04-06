function showData() {
  let fam = document.getElementById("fam").value;
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;

  let output = document.getElementById("output");
  output.innerHTML = `
        <p>Фамилия:  ${fam}</p>
        <p>Имя:  ${name}</p>
        <p>Электронная почта:  ${mail}</p>
        <p>Телефон:  ${phone}</p>
    `;
}

let toggleThemeButton = document.getElementById("theme");
let body = document.body;

toggleThemeButton.addEventListener("click", function () {
  body.classList.toggle("dark_theme");
});
