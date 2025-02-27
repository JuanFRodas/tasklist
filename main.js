const btn = document.getElementById("agregar");
const input = document.getElementById("tarea");
const ul = document.getElementById("lista");

btn.addEventListener("click", agregarTarea);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

function agregarTarea() {
  if (input.value.trim() === "") {
    alert("Por favor ingresar texto");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;
  const div = document.createElement("div");
  const btn2 = document.createElement("button");
  btn2.textContent = " X ";

  btn2.addEventListener("click", function () {
    ul.removeChild(li);
  });

  div.appendChild(btn2);
  li.appendChild(div);
  ul.appendChild(li);

  input.value = "";
}
