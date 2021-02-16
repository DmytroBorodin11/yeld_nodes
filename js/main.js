'use strict'

let burgerBtn = document.querySelector('.burger-block');
let navBar = document.querySelector('.nav');
let navRow = document.querySelector('.nav-row');
let logo = document.querySelector('.logo');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	navRow.classList.toggle('active');
});

window.addEventListener('scroll', function() {
	if (pageYOffset > 150) {
		logo.classList.add('onScroll');
		navBar.classList.add('navBg');
	}else if(pageYOffset < 150) {
		logo.classList.remove('onScroll');
		navBar.classList.remove('navBg');
	}
});


let popup = document.querySelector('.popup');
let popupWrapper = popup.querySelector('.popup-wrapper');
let body = document.querySelector('body');
let closeBtn = document.querySelector('.close-btn');
let videos = [...document.querySelectorAll('.page-video-wrapper')];

videos.forEach(video => {
	video.addEventListener('click', () => {
		let parent = video.parentNode;
		let iframe = parent.querySelector('iframe');
		let iframeClone = iframe.cloneNode(true);
		popup.classList.add('active');
		body.classList.add('locked');
		popupWrapper.appendChild(iframeClone);
	})
});

closeBtn.addEventListener('click', () => {
	let iframe = popupWrapper.querySelector('iframe');
	popup.classList.remove('active');
	body.classList.remove('locked');
	popupWrapper.removeChild(iframe);
})