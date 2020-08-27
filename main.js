const remoteWriting = document.querySelector('.remote-writing--js');
if (remoteWriting){
	console.log(remoteWriting.innerHTML);
	remoteWriting.innerHTML = 'A niech to, JS faktycznie może wstawiać tekst do DOMu, ale czy to dobre podejscie?';
	console.log(remoteWriting.innerHTML);
}

function greeting(name, age) {
	alert(`Hello ${name}, your age is ${age}`);
}

greeting('Daniel', 24);
greeting('Daniel2', 25);

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

greeting2(personData1);
greeting2(personData2);