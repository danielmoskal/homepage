const remoteWriting = document.querySelector('.remote-writing--js');
if (remoteWriting){
	console.log(remoteWriting.innerHTML);
	remoteWriting.innerHTML = 'A niech to, JS faktycznie może wstawiać tekst do DOMu, ale czy to dobre podejscie?';
	console.log(remoteWriting.innerHTML);
}

const menuBtn = document.querySelector('.header__menu--js');
const navContainer = document.querySelector('.navigation--js');
if (menuBtn) {
	menuBtn.addEventListener('click', () => {
		navContainer.classList.toggle("navigation--open");
	});
}