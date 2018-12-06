new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.resetGame(true, true);
        },
        attack: function(){
            let damage = this.getDamage(5, 15)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage + ' damage.'
            });
            damage = this.getDamage(5, 15)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage + ' damage.'
            });
            this.validateLife();
            this.checkWin();
            
        },
        specialAttack: function(){
            let damage = this.getDamage(10, 30)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage + ' damage.'
            });
            damage = this.getDamage(7, 25)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player hard for ' + damage + ' damage.'
            });
            this.validateLife();
            this.checkWin();
        },
        heal: function(){
            if (this.playerHealth <= 100){
                let heal = this.getDamage(7, 25);
                let oldHealth = this.playerHealth;
                this.playerHealth += heal;
                this.validateLife();
                this.checkWin();
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals life for ' + (this.playerHealth - oldHealth) + '.'
                });
                let damage = this.getDamage(5, 15);
                this.playerHealth -= damage;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits player for ' + damage + ' damage.'
                });
        }
        },
        giveUp: function(){
            this.resetGame(false);
        },
        getDamage: function(min, max){
            return Math.floor((Math.random() * (max - min)) + min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player Won the Game.'
                });
                if(confirm('YOU WON!! \n\n Play again?'))
                    return this.resetGame(false, true);
            }   
            if(this.playerHealth <= 0){
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Monster Won the Game.'
                });
                if(confirm('YOU LOSE, noob! \n\n Try again?'))
                    return this.resetGame(false, true);
            }
        },
        resetGame: function(isToMenu, resetValues){
            if (resetValues){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
            }
            this.gameIsRunning = isToMenu;
        },
        validateLife: function(){
            if(this.playerHealth < 0)
                this.playerHealth = 0;
            if(this.monsterHealth < 0)
                this.monsterHealth = 0;
            if(this.playerHealth > 100)
                this.playerHealth = 100;
            if(this.monsterHealth >100)
                this.monsterHealth = 100;
        }
    }
})