const character = {
    hairColor: `black`,
    eyeColor: `blue`,
    clothesColor: `brown`,
    goldCoins: 120,
    isDead: false,
    pozition: {
        x: 0,
        y: 0,
    },
    hasKey:true,
    inventory:[`sword`, `hat`, `shird`, `map`]

};

const chest = {
    isOpen: false,
    isLocked: false,
    coins:  10,    
    inventory:[`sword`, `hat`, `shird`, `map`],
    openChest: function() {
        if(!this.isOpen) {
            this.idOpen = true;
            this.coins = 0;
            console.log("Chest opened! Collected 10 coins!");

        }
    },
};

var goldCoinsProperty = "goldCoins";

console.log("This is the value of the goldCoins property:", character[goldCoinsProperty]);