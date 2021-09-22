//Animation when loading page
const b = document.querySelector('body'),
	mainInfo = document.querySelector('.info'),
	footerInfo = document.querySelector('footer.data');
window.addEventListener("load", function (event) {
	// b.style.animation = "shadow-inset-center 2s ease-out forwards";
	mainInfo.classList.add("active");
	footerInfo.classList.add("active");

});



//Cap of temperature values
let mainC = Math.round(getRandomArbitrary(0, 80)) - 50,//Допоміжна пеермінна
	temp = cСonversionF(mainC),
	CF = temp.C;
// console.log(temp.C, temp.F);


function cСonversionF(cValue) {
	return {
		C: cValue,
		F: Math.round(Number(cValue) * 1.8 + 32)
	};
}



const value = document.querySelector(".value"),
	degrees = document.querySelectorAll(".degrees-item"),
	degreesCont = document.querySelector(".degrees"),
	tempInput = document.querySelector("#d_temperature");

tempСhange(value, CF);
// tempCont.onload = changeTempValues();
tempInput.addEventListener('change', degreeСhange);

function degreeСhange() {
	// if (tempInput.checked) { alert('Выбран'); }
	// else { alert('Не выбран'); }
	degreesCont.classList.toggle('active');
	CF = (CF == temp.C) ? CF = temp.F : CF = temp.C;
	tempСhange(value, CF);
	for (let i = 0; i < degrees.length; i++) {
		degrees[i].classList.toggle('active');
	}
}


function tempСhange(el, deg) {
	el.innerHTML = deg;
	el.dataset.lenght = deg.toString().length;
}


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}







// Input city
const inputCity = document.querySelector(".info__city-name"),
	inputCityBG = document.querySelector(".info__city-form");

inputCity.addEventListener("focus", function (event) {
	inputCityBG.classList.add("active");
	function inputCityBlur(el) {
		inputCityBG.classList.remove("active");
		el.blur();
	}
	function tipsImputCityChange(el) {
		if (!el.value == "") {
			inputCity.classList.add("tips-active");
		} else {
			inputCity.classList.remove("tips-active");
		}
	}

	//Повністю розфокосується при enter і ''
	this.addEventListener("keydown", (e) => {
		var key = e.keyCode || e.which;
		if (key == 13 && this.value == "") {
			inputCityBlur(this);
		}
		if (key == 13 && !this.value == "") {
			this.placeholder = this.value;
			this.value = null;
			inputCityBlur(this);
			tipsImputCityChange(this);
		}
	});

	//Відкриє підсказки при введеному тексті
	this.addEventListener("input", (e) => {
		tipsImputCityChange(this);
	});
	// this.addEventListener("blur", () => {
	// 	if (!this.value == "") {
	// 		return false;
	// 	}
	// });
});

function tipsReset() {
	let items = document.querySelectorAll(".tips-item");
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener("focus", function (event) {
			// console.log(this.innerText);
			inputCity.classList.forEach(function (item) {
				if (item == "tips-active") {
					console.log(1);
					inputCity.value = items[i].innerText;

					this.addEventListener("keydown", (e) => {
						var key = e.keyCode || e.which;
						if (key == 8) {//Backspace
							console.log(111);
							return false;
						}
						// if (key == 46) {//Delete
						// }
						// console.log(e);
					});
				}
			})
		});
		// items[i].addEventListener("blur", function (event) {
		// 	this.removeEventListener("focus");
		// });
	}
}


tipsReset();


// function classRemove(elem, whatClass) {
// 	elem.classList.remove(whatClass);
// }


//Декілька кук
// document.cookie = "lol=100";
// document.cookie = "lol2=1200";



//Прожав ентер

// <input name="usersearch" id="usersearch" type="text" value="" onkeypress="memSort(event);"/> 

// function memSort(e){
// 	var key=e.keyCode || e.which;
// 	 if (key==13){
// 		 alert("Enter was pressed ");
// 	 }
//   }












// let date = new Date();
// let h = date.getHours();

// let hColor = (h % 2) ? focusColorCustom(h): focusColor(h);

// function focusColor (hour) {
//    return focusColors.hour;
// }

// function focusColorCustom (hour) {
//    let color = [];
//    //let color;
//    for(let i = 0, i < focusColors.hour.lenght, i++) {
//       for(let j = 0, j < focusColors.hour.[i].lenght, j++) {
//          color[i][j] = (focusColors.hour-1 + focusColors.hour+1) / 2;
//       }
//    }
//    return color;
// }

// /*function focusColorCustom (hour){
//    return hour+1;
// }*/

// const focusColors = { //0 and 23
//    0: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    2: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    4: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    6: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    8: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    10: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    12: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]],
//    14: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    16: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    18: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    20: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]], 
//    22: [[255, 100,0],[255, 100,0],[255, 100,0],[255, 100,0]]
// };





//Більше 414px екран розтягується по ширені)))
// window.addEventListener("resize", function () {
// 	let size = innerWidth / 414;
// 	b.style.transform = `scaleX(${size})`;
// }, false);






































// // створюємо елемент script
// var script=document.createElement("script");
// //вказуємо на адресу файла
// script.src="/dani/test.js";
// //додаємо елемент до документу
// document.body.appendChild(script);








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

