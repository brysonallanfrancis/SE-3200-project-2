let namesList = ["Billy", "Seamus", "Karl", "Legolas", "Tyr", "ZEUS", "Boblin", "Magnus", "Aria", "Theron", "Luna", "Gareth", "Vera", "Aldric", "Nova"];
let racesList = ["Elf", "Dwarf", "Goblin", "Human", "Orc", "Tiefling", "Goliath", "Halfling", "Dragonborn", "Gnome", "Aasimar", "Genasi", "Warforged"];
let classesList = ["Paladin", "Wizard", "Fighter", "Rogue", "Artificer", "Cowboy", "Cleric", "Ranger", "Barbarian", "Sorcerer", "Warlock", "Bard", "Monk"];
let alignmentList = ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil", "Chaotic-Neutral", "Chaotic-Good", "Chaotic-Evil", "Neutral-Good", "Neutral-Evil", "True-Neutral"]
let randBtn = document.querySelector("#randomBtn")
let saveBtn = document.querySelector("#saveBtn")

let name = document.querySelector("#name")
let race = document.querySelector("#race")
let _class = document.querySelector("#class")
let morals = document.querySelector("#morals")
let equipment = document.querySelector("#equipment")
//jsonbin.io
//inputButton.onclick = function() {
//    let text = input.value;
//    console.log(text);
//    let li = document.createElement("li");
//    li.innerHTML = text;
//    ul.appendChild(li);
//}



randBtn.onclick = function() {
    
    let randomName = Math.floor(Math.random() * namesList.length);
    let randomRace = Math.floor(Math.random() * racesList.length);
    let randomClass = Math.floor(Math.random() * classesList.length);
    let randomMorals = Math.floor(Math.random() * alignmentList.length);
    name.innerHTML = "Name: " + namesList[randomName];
    race.innerHTML = "Race: " + racesList[randomRace];
    _class.innerHTML = "Class: " + classesList[randomClass];
    morals.innerHTML = "Alignment: " + alignmentList[randomMorals];
    addRandomEquipment();
    console.log("CLICKED")
}

function addRandomEquipment() {
    fetch('https://www.dnd5eapi.co/api/equipment')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomEquipment = data.results[Math.floor(Math.random() * data.results.length)];
            equipment.innerHTML = "Equipment: " + randomEquipment.name;
        })
    }



let ul =  document.querySelector("#saved_ul")
saveBtn.onclick = function() {
    let character = [name,race,_class,morals,equipment];
    if (character[0].innerHTML === "") {
            alert("Please generate a character before saving!")
            return;
        }
    let spacer = document.createElement("li");
    spacer.innerHTML = "------------------------------";
    ul.appendChild(spacer);
    for (let i = 0; i < character.length; i++) {
        let info = document.createElement("li");
        info.innerHTML = character[i].innerHTML;
        ul.appendChild(info);
    }

}
