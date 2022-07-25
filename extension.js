const scenario = {
	murderer: "Miss Scarlet",
	room: "Johnson",
	weapon: "Macbook",
};

let changeRoom = function (newRoom) {
	if (scenario.murderer === "Mr Plum") {
		scenario.room = newRoom;
	} else if (scenario.weapon === "Macbook") {
		scenario.room = "Hopper";
	}
};

const changeWeapon = function (newWeapon) {
	if (scenario.weapon !== "macbook") {
		scenario.weapon = newWeapon;

		const plotTwist = () => {
			let scenario = {
				murderer: "Mr Ben",
				room: "toilet",
				weapon: "Pen",
			};
		};
		plotTwist();
	}
	const changeMurderer = () => {
		scenario.murderer = "Mr Plum";
	};
	changeMurderer();
};

const declareWeapon = function () {
	return `The weapon is the ${scenario.weapon}.`;
};

const declareRoom = function () {
	return `The room is ${scenario.room}`;
};

const declareMurderer = function () {
	return `The murderer is ${scenario.murderer}`;
};

changeWeapon("chair");
changeRoom("Reception");
const verdict = declareWeapon();
const location = declareRoom();
const person = declareMurderer();
console.log(verdict);
console.log(location);
console.log(person);
