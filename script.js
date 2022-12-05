function Character(name, health, strenth) {
  this.name = name;
  this.health = health;
  this.strenth = strenth;
  this.attackBtn = document.querySelector(`.${name}-attack`);
  this.makeHealthBtn = document.querySelector(`.${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health-progress span `);
  this.text = document.querySelector(`.${name}-text`)
}
// attack method
Character.prototype.attack = function (opponent) {
 if (opponent.health > 0) {
  opponent.health -= this.strenth;
  opponent.progress.style.width = `${100- opponent.health}%`;
 }
 else {
   opponent.attackBtn.remove();
   opponent.makeHealthBtn.remove();
   opponent.text.style.display ="block"
   
 }
};
// status method
Character.prototype.status = function () {
  console.log(`name is : ${this.name}`);
  console.log(`health is : ${this.health}`);
  console.log(`streinth is : ${this.strenth}`);
};
// Addn health method
Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progress.style.width = `${100- this.health}%`;
    console.log("health < 100");
  }
  if (this.health > 100) {
    this.health = 100;
    console.log("health >  100");
  }
};

let naroto = new Character("naroto", 100, 10);
let sasakie = new Character("sasakie", 100, 10);

naroto.attackBtn.addEventListener("click", function () {
  naroto.attack(sasakie);
});
naroto.makeHealthBtn.addEventListener("click", function () {
  naroto.makeHealth();
})

sasakie.attackBtn.addEventListener("click", function () {
  sasakie.attack(naroto);
});

sasakie.makeHealthBtn.addEventListener("click", function () {
  sasakie.makeHealth();
});



