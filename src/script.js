var menu = document.getElementById("menu");
var icon_menu = document.getElementById("icon-menu");

resize();

function resize() {
	if (screen.width < 700) {
		menu.style.maxWidth = "0px";
	}
	else {
		menu.style.maxWidth = "10000px";
	}
}

function toggle() {
	if (menu.style.maxWidth == "0px") {
		menu.style.maxWidth = "180px";
		icon_menu.style.background = '#e5e5e5';
	}
	else {
		menu.style.maxWidth = "0px";
		icon_menu.style.background = 'none';
	}
}