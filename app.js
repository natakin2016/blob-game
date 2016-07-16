var MonsterHealth = 0;
var UserLevel = 1;

//document.getElementByID("test-level").innerHTML = "User Level: " + UserLevel;
//document.getElementByID("test-monsterhp").innerHTML = "Monster Health " + MonsterHealth;

function applyLevel(){
	MonsterHealth = (Math.pow(2 * UserLevel, 2)) * 5;
	console.log("User Level: " + UserLevel + "|" + "Monster Health: " + MonsterHealth);
}



