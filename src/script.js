var menu = document.getElementById("menu");
var icon_menu = document.getElementById("icon-menu");
var darker = document.getElementById("dark");

resize();

function resize() {
	if (screen.width <= 700) {
		menu.style.maxWidth = "0px";
		darker.style.background = 'none';
		darker.style.zIndex = "-10";
	}
	else {
		menu.style.maxWidth = "10000px";
		icon_menu.style.background = 'none';
		darker.style.background = 'none';
		darker.style.zIndex = "-10";
	}
}

function toggler() {
	if (menu.style.maxWidth == "180px") {
		toggle();
	}
}

function toggle() {
	if (menu.style.maxWidth == "0px") {
		menu.style.maxWidth = "180px";
		icon_menu.style.background = '#e5e5e5';
		darker.style.background = '#000010';
		darker.style.zIndex = "1";
	}
	else {
		menu.style.maxWidth = "0px";
		icon_menu.style.background = 'none';
		darker.style.background = 'none';
		darker.style.zIndex = "-10";
	}
}

let redirectTimer;
let progressTimer;
let progressValue = 0;
const REDIRECT_DELAY = 15000;
const NEW_PORTFOLIO_URL = 'https://noasmoter.vercel.app';

function showRedirectPopup() {
	const popup = document.getElementById('redirectPopup');
	
	// Vérifier si l'utilisateur a choisi de ne plus afficher aujourd'hui
	const hideToday = localStorage.getItem('hidePopupToday');
	const today = new Date().toDateString();
	
	if (hideToday === today) {
		return;
	}
	
	setTimeout(() => {
		popup.classList.add('show');
	}, 300);
	
	startRedirectTimer();
}

function startRedirectTimer() {
	redirectTimer = setTimeout(() => {
		startProgressBar();
	}, 3000);
}

function startProgressBar() {
	const progressContainer = document.getElementById('progressContainer');
	const progressBar = document.getElementById('progressBar');
	const redirectMessage = document.getElementById('redirectMessage');
	
	redirectMessage.style.display = 'block';
	
	progressContainer.style.display = 'block';
	
	progressValue = 0;
	
	const progressInterval = 50;
	const progressStep = (100 * progressInterval) / REDIRECT_DELAY;
	
	progressTimer = setInterval(() => {
		progressValue += progressStep;
		progressBar.style.width = progressValue + '%';
		
		if (progressValue >= 100) {
			clearInterval(progressTimer);
			redirectToNew();
		}
	}, progressInterval);
}

function redirectToNew() {
	window.location.href = NEW_PORTFOLIO_URL;
}

function hideToday() {
	// Sauvegarder pour ne plus afficher aujourd'hui
	localStorage.setItem('hidePopupToday', new Date().toDateString());
	
	closePopup();
}

function closePopup() {
	const popup = document.getElementById('redirectPopup');
	popup.classList.remove('show');
	
	if (redirectTimer) {
		clearTimeout(redirectTimer);
	}
	if (progressTimer) {
		clearInterval(progressTimer);
	}
}

function resetTimers() {
	const progressContainer = document.getElementById('progressContainer');
	if (progressContainer && progressContainer.style.display === 'block') {
		return;
	}
	
	if (redirectTimer) {
		clearTimeout(redirectTimer);
		startRedirectTimer();
	}
}

document.addEventListener('mousemove', resetTimers);
document.addEventListener('keypress', resetTimers);
document.addEventListener('scroll', resetTimers);
document.addEventListener('click', resetTimers);

document.addEventListener('DOMContentLoaded', function() {
	const popup = document.getElementById('redirectPopup');
	if (popup) {
		popup.addEventListener('click', function(e) {
			if (e.target === this) {
				closePopup();
			}
		});
	}
});

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		closePopup();
	}
});

document.addEventListener('DOMContentLoaded', function() {
	setTimeout(showRedirectPopup, 100);
});
