const remoteWriting = document.querySelector('.remote-writing--js');
if (remoteWriting){
	console.log(remoteWriting.innerHTML);
	remoteWriting.innerHTML = 'A niech to, JS faktycznie może wstawiać tekst do DOMu, ale czy to dobre podejscie?';
	console.log(remoteWriting.innerHTML);
}
