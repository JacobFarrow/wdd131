const character = {
    name: "Aethelgard",
    class: "Warrior",
    level: 1,
    health: 100,
    image: "https://byui-cit.github.io/cit261/resources/images/character.png",

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died.`);
            }
        }
        this.updateUI();
    },

    levelUp: function() {
        this.level += 1;
        this.updateUI();
    },

    updateUI: function() {
        document.getElementById('char-name').textContent = this.name;
        document.getElementById('char-class').textContent = this.class;
        document.getElementById('char-level').textContent = this.level;
        document.getElementById('char-health').textContent = this.health;
    }
};

character.updateUI();

document.getElementById('attack-btn').addEventListener('click', () => {
    character.attacked();
});

document.getElementById('level-btn').addEventListener('click', () => {
    character.levelUp();
});