class Player{
    constructor(){
      this.name = null;
      this.index = null;
      this.position = 0;
      this.positiony = 0;
    }

    getPlayerCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
    updatePlayerCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

      addPlayer(){
        var playerIndex = "players/player"+this.index;
        if(this.index === 1){
          this.name = "Harry";
          this.positionX = width/2-200;
        }
        else{
        this.name = "Voldemort";
        this.positionX = width/2+200;
        }
        database.ref(playerIndex).set({
          name : this.name,
          positionX : this.positionX,
          positionY : this.positionY 
        })
      }

}