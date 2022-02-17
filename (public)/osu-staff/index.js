function onLoad() {
	createDirectory();
	setTitleOfPage();
	console.log("Loaded!");
}

function setTitleOfPage() {
	let path = window.location.pathname;
	let pathName = path.split("/");
	document.getElementById("web-title").innerHTML = pathName[2];
	// console.log(path)
}
