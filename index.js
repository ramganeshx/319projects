function displayMenu() {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => loadMenu(data));
}

function loadMenu(data) {
    for (var i = 0; i < 4; i++) {
        let id = "menu" + i;
        let container = document.getElementById(id);
        let textdiv = document.createElement("div");
        let imgdiv = document.createElement("div");

        let differentMenu = data.locations[i];
        let nameOfLocation = differentMenu.locationName;
        let menuD = differentMenu.menu;
        let desc = differentMenu.text;
        let imgPath = differentMenu.image;

        textdiv.className = "my-3 py-3";
        //textdiv.className = "bg";
        textdiv.innerHTML = `
            <h2 class="display-5">${nameOfLocation}</h2>
            <p class="lead">${desc} ${menuD}</p>
        `;
        imgdiv.className = "shadow-sm mx-auto";
        //imgdiv.className = "bg";
        imgdiv.style = `background-image: url('${imgPath}'); background-color: black; background-repeat: no-repeat; background-position: top;  width: 90%; height: 300px; background-size: cover; border-radius: 21px 21px 0 0;`;

        container.appendChild(textdiv); 
        container.appendChild(imgdiv);  
    }
}
