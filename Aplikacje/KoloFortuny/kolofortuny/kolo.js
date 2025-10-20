// lista uczniow
//  -wprowadzanie danych
//  -tworzenie tablicy
//  -wyswietlanie elementow
// Math.random()
const uczniowie = window.prompt("Podaj imiona uczniów oddzielone przecinkami").split(",");
const lista = document.getElementById("lista");
lista.innerHTML = "<li>" + uczniowie.join("</li><li>") + "</li>";
let random = Math.floor(Math.random() * uczniowie.length);
window.alert("Wylosowany uczen to: " + uczniowie[random]);
