let fruits = ["apple", "banana", "orange"];
fruits.splice(0, 1);
fruits.push("grape");
fruits.splice(1, 1, "pear");
console.log(fruits);

let text = "<ul>";
fruits.forEach((element) => {
  text = text + `<li> ${element} </li>`;
});
text = text + "</ul>";

let div = document.getElementsByClassName("container-list")[0];

div.innerHTML = text;
