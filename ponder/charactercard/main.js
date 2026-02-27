const character = {
    name: "Edolfin",
    class: "Berserker",
    level: 1,
    health: 100,
    image: "https://i.redd.it/5jhv9d995zc41.jpg",

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