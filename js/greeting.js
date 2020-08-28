function greeting(name, age) {
	alert(`Hello ${name}, your age is ${age}`);
}

const greeting2 = (personData) => {
	alert(`Hello ${personData.name}, your age is ${personData.age}`);
}

const personData1 = {
	name: 'DanielObj',
	age: 20,
};

const personData2 = {
	name: 'DanielObj2',
	age: 90,
};


// greeting('Daniel', 24);
// greeting('Daniel2', 25);

// greeting2(personData1);
// greeting2(personData2);