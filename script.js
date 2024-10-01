const lista1 = document.querySelector('#lista1');
let tab = [];

for(let i = 0; i < 5; i++) {
    tab[i] = prompt("Podaj swoje zainteresowania " + (i + 1) + "/5");
}

for(let i = 0; i < 5; i++) {
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(tab[i]));
    lista1.appendChild(newLi);
}

$("#img1").fadeOut().delay(5000).fadeIn();
