const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked() {
        this.health = Math.max(0, this.health - 20);
    },

    levelUp() {
        this.level += 1;
    }
};

const image = document.querySelector(".character-image");
const name = document.querySelector("#character-name");
const characterClass = document.querySelector("#character-class");
const level = document.querySelector("#character-level");
const health = document.querySelector("#character-health");
const status = document.querySelector("#status");
const attackedButton = document.querySelector("#attacked");
const levelUpButton = document.querySelector("#level-up");

image.src = character.image;
image.alt = `${character.name}, a ${character.class.toLowerCase()}`;
name.textContent = character.name;
characterClass.textContent = character.class;

function updateStats() {
    level.textContent = character.level;
    health.textContent = character.health;
    attackedButton.disabled = character.health === 0;
}

attackedButton.addEventListener("click", () => {
    character.attacked();
    updateStats();
    status.textContent = character.health === 0
        ? `${character.name} has died.`
        : `${character.name} was attacked. ${character.health} health remaining.`;
});

levelUpButton.addEventListener("click", () => {
    character.levelUp();
    updateStats();
    status.textContent = `${character.name} reached level ${character.level}.`;
});

updateStats();
