// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// Tâche 1
let divElements = document.querySelectorAll('.element');
for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener('click', (e) => {
        console.log(e.target);
    });
}

// Tâche 2
for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener('dblclick', (e) => {
        e.target.textContent = e.target.textContent.toUpperCase();
    });
}

// Tâche 3
let goBtn = document.getElementById('goBtn');
goBtn.addEventListener('click', (e) => {
    let properties = ['border: 1px solid gold;', 'background-color: blue;', 'background-color: red;', 'border: 5px dotted gold;'];
    let randomIndex = Math.floor(Math.random() * properties.length);
    for (let i = 0; i < divElements.length; i++) {
        divElements[i].style.cssText = properties[randomIndex];
    }
});
