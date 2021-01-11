function setInt (place) {
	randnum = Math.random() * 9 + 1;
	place.value = randnum; 
}
function copy (a,b) {
	if (a.value == '' || a.value == null) {
		alert('Not yet');
	}
	else {
		b.value = a.value;
	}
}
function pclear (a,b) {
	a.value = '';
	b.value = '';
}
function tableCreate (table) {
	y = document.getElementById('7').value;
	x = document.getElementById('8').value;
	for (let i = 0; i < y; i++) {
		let tr = document.createElement('tr');
		for (let k = 0; k < x; k++) {
			let td = document.createElement('td');
			td.innerHTML = String(Math.random() * 9 + 1);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
countop = 0
op = ''
let stroke = ''
function addSym (sym) {
	if (sym == '-' || sym == '+' || sym == '/' || sym == '*') {
		if (stroke != '') {
			countop++;
			op = sym;
		} else {
			sym = ''
		}
	}
	stroke += sym
	document.getElementById('res').innerHTML = stroke
}
function cclear () {
	stroke = ''
	countop = 0
	op = ''
	document.getElementById('res').innerHTML = stroke
}
function count () {
	if (countop == 0) {
		document.getElementById('res').innerHTML = stroke
	} else if (countop == 1) {
		if (op == '-') {
			document.getElementById('res').innerHTML = Number(stroke.slice(0, stroke.indexOf('-'))) - Number(stroke.slice(stroke.indexOf('-')+1, stroke.length))
		}
		if (op == '+') {
			document.getElementById('res').innerHTML = Number(stroke.slice(0,stroke.indexOf('+'))) + Number(stroke.slice(stroke.indexOf('+')+1, stroke.length))
		}
		if (op == '/') {
			document.getElementById('res').innerHTML = Number(stroke.slice(0,stroke.indexOf('/'))) / Number(stroke.slice(stroke.indexOf('/')+1, stroke.length))
		}
		if (op == '*') {
			document.getElementById('res').innerHTML = Number(stroke.slice(0,stroke.indexOf('*'))) * Number(stroke.slice(stroke.indexOf('*')+1, stroke.length))
		} 
	} else { 
		document.getElementById('res').innerHTML = 'Err'
	}
	stroke = ''
	countop = 0
	op = ''	
}
function tableCreateB (table) {
	y = 800
	x = 10
	for (let i = 0; i < y; i++) {
		let tr = document.createElement('tr');
		for (let k = 0; k < x; k++) {
			let td = document.createElement('td');
			td.innerHTML = String(Math.random() * 9 + 1);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
function checkY() {
    if (window.scrollY > 400) {
		document.getElementById('vverh').classList.add('visible');
    } else {
        document.getElementById('vverh').classList.remove('visible');
    }
    
}
window.addEventListener('scroll', checkY);

let game = true;
let krs = [];
let nuls = [];
let sv = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function createImg (block) {
	if ((sv.indexOf(block.id) != - 1) && (game == true)) {
		body = document.body;
		let krest = document.createElement("img");
		let nulik = document.createElement("img");
		nulik.src = "nulik.png";
		krest.src = "krest.png";
		krs.push(Number(block.id));
		sv.splice(sv.indexOf(block.id), 1);
		switch(block.id) {
			case '1':
				mx = "9px";
				my = "8px";
				break;
			case '2':
				mx = "59px";
				my = "8px";
				break;
			case '3':
				mx = "109px";
				my = "8px";
				break;
			case '4':
				mx = "9px";
				my = "58px";
				break;
			case '5':
				mx = "59px";
				my = "58px";
				break;
			case '6':
				mx = "109px";
				my = "58px";
				break;
			case '7':
				mx = "9px";
				my = "108px";
				break;
			case '8':
				mx = "59px";
				my = "108px";
				break;
			case '9':
				mx = "109px";
				my = "108px";
				break;
		}
		hod = arrayRandElement(sv);
		sv.splice(sv.indexOf(hod), 1);
		nuls.push(Number(hod));
		switch(hod) {
			case '1':
				hx = "9px";
				hy = "8px";
				break;
			case '2':
				hx = "59px";
				hy = "8px";
				break;
			case '3':
				hx = "109px";
				hy = "8px";
				break;
			case '4':
				hx = "9px";
				hy = "58px";
				break;
			case '5':
				hx = "59px";
				hy = "58px";
				break;
			case '6':
				hx = "109px";
				hy = "58px";
				break;
			case '7':
				hx = "9px";
				hy = "108px";
				break;
			case '8':
				hx = "59px";
				hy = "108px";
				break;
			case '9':
				hx = "109px";
				hy = "108px";
				break;
		}
		nulik.style.left = hx;
		nulik.style.top = hy;
		krest.style.left = mx;
		krest.style.top = my;
		body.appendChild(krest);
		body.appendChild(nulik);
		checkKN();
	}
}
function compareNumbers(a, b) {
  return a - b;
}
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function checkKN () {
	krs.sort(compareNumbers);
	nuls.sort(compareNumbers);
	let krests = krs.join('');
	let nulss = nuls.join('');
	if ((krests.indexOf('159') != -1) || (krests.indexOf('147') != -1) || (krests.indexOf('123') != -1) || (krests.indexOf('369') != -1) || (krests.indexOf('789') != -1) || (krests.indexOf('456') != -1) || (krests.indexOf('357') != -1) || (krests.indexOf('258') != -1)) {
		alert('Вы победили');
		game = false;
	}
	if (((nulss.indexOf('159') != -1) || (nulss.indexOf('147') != -1) || (nulss.indexOf('123') != -1) || (nulss.indexOf('369') != -1) || (nulss.indexOf('789') != -1) || (nulss.indexOf('456') != -1) || (nulss.indexOf('357') != -1) || (nulss.indexOf('258') != -1)) && (game == true)) {
		alert('Вы проиграли');
		game = false;
	}
	if ((sv.length == 0) && (game == true)) {
		alert('Ничья');
		game = false;
	}
}

