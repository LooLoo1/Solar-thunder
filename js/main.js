//Animation when loading page
const b = document.querySelector('body'),
	mainInfo = document.querySelector('.info'),
	footerInfo = document.querySelector('footer.data'),
	settingsButton = document.querySelector('.settings__open');

window.addEventListener("load", function (event) {
	// b.style.animation = "shadow-inset-center 2s ease-out forwards";
	mainInfo.classList.add("active");
	footerInfo.classList.add("active");
	settingsButton.classList.add("active");

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
	inputCityBG = document.querySelector(".info__city-form"),
	cityMarker = document.querySelector(".info__city-marker");

inputCity.addEventListener("focus", function () {
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
	function cityPlaceholder(th) {
		th.placeholder = th.value;
		th.value = null;
	}

	//Повністю розфокосується при enter і ''
	this.addEventListener("keydown", (e) => {
		var key = e.keyCode || e.which;
		if (key == 13 && this.value == "") {
			inputCityBlur(this);
		}
		if (key == 13 && !this.value == "") {
			cityPlaceholder(this);
			inputCityBlur(this);
			tipsImputCityChange(this);
		}
	});

	//Відкриє підсказки при введеному тексті
	this.addEventListener("input", (e) => {
		tipsImputCityChange(this);
	});
	this.addEventListener("blur", () => {
		inputCityBlur(this);
		this.value = null;
		tipsImputCityChange(this);
	});
});

cityMarker.addEventListener("focus", function () {
	this.addEventListener("keydown", (e) => {
		var key = e.keyCode || e.which;
		if (key == 13) {
			inputCity.focus();
		}
	});
});
cityMarker.addEventListener("click", function () {
	inputCity.focus();
});

function tipsReset() {
	let items = document.querySelectorAll(".tips-item");
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener("click", function () {
			inputCity.placeholder = this.innerText;
			inputCity.value = null;
		});

	}
}

tipsReset();//Дороби коли динамічно мінятимеш можливі варіанти


// function classRemove(elem, whatClass) {
// 	elem.classList.remove(whatClass);
// }



//Ввімкнути і вимкнути настройки
const settingsOut = document.querySelector('.settings__out'),
	settingBody = document.querySelector('.settings');

settingsOut.addEventListener("click", settingСhange);
settingsButton.addEventListener("click", settingСhange);

function settingСhange() {
	// console.log(el);
	settingBody.classList.toggle("active");
	settingsButton.classList.toggle("active");

}




//Фішка для ренджа у якості фону
const ranges = document.querySelectorAll(".settings__audio-range input");
for (let i = 0; i < ranges.length; i++) {
	ranges[i].addEventListener("input", (e) => {
		ranges[i].style.setProperty('--shodow-size', `${ranges[i].value}%`);
	});
}

for (let i = 0; i < ranges.length; i++) {
	ranges[i].style.setProperty('--shodow-size', `${ranges[i].value}%`);
}


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





const schedule = [{  //Цикл 371 година
	imgURL: "Challenge Token",
	timeDuration: 10800000//3 години в мілісекундах
}, {
	imgURL: "Campaing Passes x5",
	timeDuration: 108000000//1 день і 6 годин
}, {
	imgURL: "Double XP-3days",
	timeDuration: 36000000//10 годин
}, {
	imgURL: "Critical Stirikes-3days",
	timeDuration: 54000000//15 годин
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Jackpot Token",
	timeDuration: 68400000//19 годин
}, {
	imgURL: "Anti-Critical Shield-1day",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Reactor Token",
	timeDuration: 10800000//3 години
}, {
	imgURL: "Triple XP-3days",
	timeDuration: 64800000//18 годин
}, {
	imgURL: "Double Regeneration-7days",
	timeDuration: 151200000//1 день і 18 годин
}, {
	imgURL: "Critical Stirikes-7days",
	timeDuration: 54000000//15 годин
}, {
	imgURL: "Anti-Critical Shield-3days",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 86400000//1 день
}, {
	imgURL: "Jackpot Token",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Double Regeneration-3days",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Triple XP-7days",
	timeDuration: 86400000//1 день
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Quadruple Regeneration-3days",
	timeDuration: 86400000//1 день
}
];

const timeMilisecond = [
	31557600000,//Рік
	2629800000,//Місяць
	// 604800016.56,//Тиждень
	86400000,//День
	3600000,//Година
	60000,//Хвилина
	1000//Cекунда
];

scheduleDuration = 0;
for (let j = 0; j < schedule.length; j++) {
	scheduleDuration += schedule[j].timeDuration;
}

const startTime = 1633240713000 - 600000 - 13000;
let time = new Date();
let nowTime = Date.parse(time);

function scheduleNow(now, start) {
	let elapsedTime = now - start;
	if (elapsedTime >= scheduleDuration) {
		elapsedTime -= scheduleDuration * Math.trunc(elapsedTime / scheduleDuration);
	}
	let i = elapsedTime;
	let j = 0;
	while (i >= schedule[j].timeDuration) {
		// console.log(i, schedule[j].imgURL);
		i -= schedule[j].timeDuration;
		j++;
		if (j >= schedule.length) j = 0;
	}


	// dateСalculation(schedule[j].timeDuration);
	// console.log(i);
	dateСalculation(schedule[j].timeDuration - i);

}


// let nm = 0;
var nowTimer = setInterval(myTimer, 1000);

function myTimer() {
	// if (nm >= 5) stopTimer();
	// console.log(nm);
	// nm++

	let time = new Date();
	let nowTime = Date.parse(time);
	scheduleNow(nowTime, startTime);
}

function stopTimer() {
	clearInterval(nowTimer);
}


function dateСalculation(num) {
	let days = [];
	for (let i = 0; i < timeMilisecond.length; i++) {
		// let n = Math.trunc(num / timeMilisecond[i]);
		days[i] = Math.trunc(num / timeMilisecond[i]);
		num -= days[i] * timeMilisecond[i];
	}
	console.log(days);
}