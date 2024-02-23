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