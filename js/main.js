//Animation when loading page ================================================================================
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




//Різна затримка для пунктів настройок ================================================================================
let inputTheme = document.querySelectorAll(".row .settings__theme-item");
for (let i = 0; i < inputTheme.length; i++) {
	inputTheme[i].style.setProperty('--animation-del', `${getRandomArbitrary(0, 10) - 10}s`);
	inputTheme[i].style.setProperty('--animation-del2', `${getRandomArbitrary(0, 10) - 10}s`);
}




//Cap of temperature values ================================================================================
let mainC = Math.round(getRandomArbitrary(0, 80)) - 50,//Допоміжна пеермінна
	//Зробиш щоб динамічно підставлялося значення з прогнозу і автоматично переводитиметься в F
	temp = cСonversionF(mainC),
	CF = temp.C;

function cСonversionF(cValue) {
	return {
		C: cValue,
		F: Math.round(Number(cValue) * 1.8 + 32)
	};
}

// Чекбокс температури ================================================================================
const value = document.querySelector(".value"),
	degrees = document.querySelectorAll(".degrees-item"),
	degreesCont = document.querySelector(".degrees"),
	tempInput = document.querySelector("#d_temperature");

tempСhange(value, CF);
tempInput.addEventListener('change', degreeСhange);

function degreeСhange() {
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




// Input city ================================================================================
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
		tipsReset();
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




//Ввімкнути і вимкнути настройки ================================================================================
const settingsOut = document.querySelector('.settings__out'),
	settingBody = document.querySelector('.settings');

settingsOut.addEventListener("click", settingСhange);
settingsButton.addEventListener("click", settingСhange);

function settingСhange() {
	// console.log(el);
	settingBody.classList.toggle("active");
	settingsButton.classList.toggle("active");

}





//Фішка для ренджа настройок у якості фону ================================================================================
const ranges = document.querySelectorAll(".settings__audio .settings__audio-range input");

//Перевірка чи кука є
for (let i = 0; i < ranges.length; i++) {
	if (!get_cookie(`audio-range${i + 1}`)) {
		let date = cookies_create_date();
		set_cookie(`audio-range${i + 1}`, ranges[i].value, date[0], date[1], date[2]);
	}

	ranges[i].addEventListener("input", (e) => {
		let date = cookies_create_date();
		ranges[i].style.setProperty('--shodow-size', `${ranges[i].value}%`);
		set_cookie(`audio-range${i + 1}`, ranges[i].value, date[0], date[1], date[2]);
	});
	ranges[i].style.setProperty('--shodow-size', get_cookie(`audio-range${i + 1}`) + "%");
	ranges[i].value = get_cookie(`audio-range${i + 1}`);
}






// Настройки ============================================================================================

//Вмикач звуку і допомога для читання у вигляді тіні  ==========================
const sound = document.querySelector(".settings__helpers .sound input");
const readingHelp = document.querySelector(".settings__helpers .reading-help input");

if (!get_cookie(`sound`)) {
	let date = cookies_create_date();
	set_cookie(`sound`, sound.checked, date[0], date[1], date[2]);
}
if (!get_cookie(`readingHelp`)) {
	let date = cookies_create_date();
	set_cookie(`readingHelp`, readingHelp.checked, date[0], date[1], date[2]);
}

sound.addEventListener('change', settingsHelpers);
readingHelp.addEventListener('change', settingsHelpers);

function settingsHelpers() {
	console.log(this);
	let date = cookies_create_date();
	set_cookie(`${this.name}`, this.checked, date[0], date[1], date[2]);
}

sound.checked = (get_cookie(`sound`) === "true");
readingHelp.checked = (get_cookie(`readingHelp`) === "true");


//Темна чи світла схема  ==========================
const whiteBG = document.querySelector("#White-BG"),
	darkBG = document.querySelector("#Dark-BG");

//Перевірка чи кука є
if (!get_cookie("thema-BG")) {   //Зроби щоб перша вибиралася автоматом від комп теми
	let date = cookies_create_date();
	set_cookie("thema-BG", whiteBG.value, date[0], date[1], date[2]);
}

whiteBG.addEventListener('change', themeBGChange);
darkBG.addEventListener('change', themeBGChange);

//Функції змін значень кууки
function themeBGChange() {
	let date = cookies_create_date();
	set_cookie("thema-BG", this.value, date[0], date[1], date[2]);
	classesBodyThemeBG();
}

function classesBodyThemeBG() {   //Перепиши
	let themaBG = get_cookie("thema-BG");

	switch (themaBG) {
		case 'white':
			whiteBG.checked = true;
			b.classList.remove("BG-dark")
			b.classList.add("BG-white")
			break;

		case 'dark':
			darkBG.checked = true;
			b.classList.add("BG-dark")
			b.classList.remove("BG-white")
			break;
		default:
			whiteBG.checked = true;
			b.classList.remove("BG-dark")
			b.classList.add("BG-white")
			break;
	}
}



//Темна прозорість  ==========================
const opacityBG = document.querySelector("#opacity-BG");

//Перевірка чи кука є
if (!get_cookie("thema-BG-opacity")) {
	let date = cookies_create_date();
	set_cookie("thema-BG-opacity", opacityBG.value, date[0], date[1], date[2]);
	themeBGOpacityEstablish();
}

opacityBG.addEventListener('change', themeBGOpacityChange);

//Функції змін значень кууки
function themeBGOpacityChange() {
	let date = cookies_create_date();
	if (get_cookie("thema-BG-opacity") == "opacity") {
		set_cookie("thema-BG-opacity", null, date[0], date[1], date[2]);
	} else {
		set_cookie("thema-BG-opacity", opacityBG.value, date[0], date[1], date[2]);
	}
	themeBGOpacityEstablish();
}

function themeBGOpacityEstablish() {
	if (get_cookie("thema-BG-opacity") == "opacity") {
		b.classList.add("opacity");
		opacityBG.classList.remove("active");
	} else {
		b.classList.remove("opacity");
		opacityBG.classList.add("active");
	}
}



//Основна тема  ==========================
const themes = document.querySelectorAll('.settings__theme-conteiner input[name="theme"]');

if (!get_cookie("thema")) {
	let date = cookies_create_date();
	set_cookie("thema", themes[0].value, date[0], date[1], date[2]);
	themes[0].checked = true;
}

for (let i = 0; i < themes.length; i++) {
	themes[i].addEventListener('change', themaChange);
}

function themaChange() {
	let date = cookies_create_date();
	set_cookie("thema", this.value, date[0], date[1], date[2]);
	classesBodyTheme();
}

function classesBodyTheme() {
	let thema = get_cookie("thema");
	for (let i = 0; i < themes.length; i++) {
		b.classList.remove(`${themes[i].value}`);
		if (thema == themes[i].value) {
			themes[i].checked = true;
		}
	}
	b.classList.add(`${thema}`)
}




//Затемнення фону  ==========================
const eclipseRange = document.querySelector("#eclipse"),
	eclipseBG = document.querySelector(".conteiner.eclipse");

if (!get_cookie("thema-eclipse")) {
	let date = cookies_create_date();
	set_cookie("thema-eclipse", eclipse(), date[0], date[1], date[2]);
}

eclipseRange.addEventListener('input', themeEclipse);

function themeEclipse() {
	let date = cookies_create_date();
	set_cookie("thema-eclipse", eclipse(), date[0], date[1], date[2]);
	eclipseBG.style.backgroundColor = `rgba(0, 0, 0, 0.${eclipse()})`;
}

function eclipse() {
	return eclipseRange.value < 10 ? `0${eclipseRange.value}` : eclipseRange.value;
}



//Авто встановлення настройок з куки ==========================
function savedSettings() {
	themeBGOpacityEstablish();
	classesBodyThemeBG();
	classesBodyTheme();

	eclipseRange.value = get_cookie("thema-eclipse");
	themeEclipse();
}

savedSettings();
// console.log(document.cookie);











// Допоміжні функції ==============================================================
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

//Створити
function set_cookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
	var cookie_string = name + "=" + escape(value);

	if (exp_y) {
		var expires = new Date(exp_y, exp_m, exp_d);
		cookie_string += "; expires=" + expires.toGMTString();
	}

	if (path)
		cookie_string += "; path=" + escape(path);

	if (domain)
		cookie_string += "; domain=" + escape(domain);

	if (secure)
		cookie_string += "; secure";

	document.cookie = cookie_string;
}

//Кука на 5 років
function cookies_create_date() {
	var current_date = new Date;
	var cookie_year = current_date.getFullYear() + 5;
	var cookie_month = current_date.getMonth();
	var cookie_day = current_date.getDate();
	return [cookie_year, cookie_month, cookie_day]
}

//Видалити
function delete_cookie(cookie_name) {
	var cookie_date = new Date();  // Текущая дата и время
	cookie_date.setTime(cookie_date.getTime() - 1);
	document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

//Получити значення
function get_cookie(cookie_name) {
	var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

	if (results)
		return (unescape(results[2]));
	else
		return null;
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


