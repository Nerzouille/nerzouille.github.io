var menu = document.getElementById("menu");
menu.style.maxHeight = "0px";

function toggle() {
	if (menu.style.maxHeight == "0px") {
		menu.style.maxHeight = "130px"
	}
	else {
		menu.style.maxHeight = "0px"
	}
}