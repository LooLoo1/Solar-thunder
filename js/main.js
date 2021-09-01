const b = document.querySelector('body');
const mainInfo = document.querySelector('.info');
const footerInfo = document.querySelector('footer.data');
// console.log(footerInfo);

window.addEventListener("load", function (event) {
	// b.style.animation = "shadow-inset-center 2s ease-out forwards";
	mainInfo.classList.add("active");
	footerInfo.classList.add("active");

});



let dop = Math.round(getRandomArbitrary(0, 80)) - 50;//Допоміжна пеермінна
let temp = {
	C: dop,
	F: Math.round(dop * 1.8 + 32)
}

let CF = temp.C
console.log(temp.C, temp.F);
const value = document.querySelector(".value");
const tempCont = document.querySelector(".data__temperature");
const degrees = document.querySelectorAll(".degrees-item");
const degreesCont = document.querySelector(".degrees");

value.innerHTML = CF;
value.dataset.lenght = CF.toString().length;
// tempCont.onload = changeTempValues();
tempCont.onclick = function () {
	degreesCont.classList.toggle('active');
	CF = (CF == temp.C) ? CF = temp.F : CF = temp.C;
	value.innerHTML = CF;
	value.dataset.lenght = CF.toString().length;
	for (let i = 0; i < degrees.length; i++) {
		degrees[i].classList.toggle('active');
	}
}











function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}









































// Розміри монітора
// let screenSize = document.createElement("WindowSize");
// document.body.append(screenSize);
// style(screenSize);

// window.addEventListener('resize', screenResize);
// window.onload = screenResize();

// function screenResize() {
// 	let als = [window.innerWidth, window.innerHeight]
// 	screenSize.innerHTML = `${als[0]}<br>${als[1]}`;
// }
// function style(el) {
// 	let css = el.style;
// 	css.fontSize = "4vh";
// 	css.padding = "0.5em 1em";
// 	css.position = "absolute";
// 	css.top = "0";
// 	css.right = "0";
// 	css.zIndex = "100000";
// 	css.pointerEvents = "none";
// 	css.borderBottomLeftRadius = "30%";
// 	css.textAlign = "center";
// 	css.background = "rgba(0, 0, 0, 0.5)";
// }

