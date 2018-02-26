// 5

var himg = document.getElementById('himg');
var bimg = document.getElementById('bimg');
var limg = document.getElementById('limg');
var fimg = document.getElementById('fimg');

var rbh = document.getElementById('rbh');
var rbb = document.getElementById('rbb');
var rbl = document.getElementById('rbl');
var rbf = document.getElementById('rbf');

var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', function() {
	if (rbh.checked) {
		
		if (himg.src.match("h1.png")) {
			himg.src = "imgs/gears/h2.png";
			
		} else if (himg.src.match("h2.png")) {
			himg.src = "imgs/gears/h3.png";
			
		} else {
			himg.src = "imgs/gears/h1.png";
		}
			
	} else if (rbb.checked) {
			if (bimg.src.match("b1.png")) {
			bimg.src = "imgs/gears/b2.png";
			
		} else if (bimg.src.match("b2.png")) {
			bimg.src = "imgs/gears/b3.png";
			
		} else {
			bimg.src = "imgs/gears/b1.png";
		}
		
	} else if (rbl.checked) {
			if (limg.src.match("l1.png")) {
			limg.src = "imgs/gears/l2.png";
			
		} else if (limg.src.match("l2.png")) {
			limg.src = "imgs/gears/l3.png";
			
		} else {
			limg.src = "imgs/gears/l1.png";
		}
		
	} else if (rbf.checked) {
		if (fimg.src.match("f1.png")) {
			fimg.src = "imgs/gears/f2.png";
			
		} else if (fimg.src.match("f2.png")) {
			fimg.src = "imgs/gears/f3.png";
			
		} else {
			fimg.src = "imgs/gears/f1.png";
		}
		
	} else {
		alert('Choose an option');
	}
});


prev.addEventListener('click', function() {
	if (rbh.checked) {
		
		if (himg.src.match("h1.png")) {
			himg.src = "imgs/gears/h3.png";
			
		} else if (himg.src.match("h2.png")) {
			himg.src = "imgs/gears/h1.png";
			
		} else {
			himg.src = "imgs/gears/h2.png";
		}
			
	} else if (rbb.checked) {
			if (bimg.src.match("b1.png")) {
			bimg.src = "imgs/gears/b3.png";
			
		} else if (bimg.src.match("b2.png")) {
			bimg.src = "imgs/gears/b1.png";
			
		} else {
			bimg.src = "imgs/gears/b2.png";
		}
		
	} else if (rbl.checked) {
			if (limg.src.match("l1.png")) {
			limg.src = "imgs/gears/l3.png";
			
		} else if (limg.src.match("l2.png")) {
			limg.src = "imgs/gears/l1.png";
			
		} else {
			limg.src = "imgs/gears/l2.png";
		}
		
	} else if (rbf.checked) {
		if (fimg.src.match("f1.png")) {
			fimg.src = "imgs/gears/f3.png";
			
		} else if (fimg.src.match("f2.png")) {
			fimg.src = "imgs/gears/f1.png";
			
		} else {
			fimg.src = "imgs/gears/f2.png";
		}
		
	} else {
		alert('Chose an option');
	}
});

// 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var inputText = document.getElementById('inputText');

inputText.addEventListener('keyup', function(ev) {
	if (ev.keyCode == 13) {
			if (inputText.value == 'combo1') {
				himg.src = "imgs/gears/h1.png";
				bimg.src = "imgs/gears/b1.png";
				limg.src = "imgs/gears/l1.png";
				fimg.src = "imgs/gears/f1.png";
				
			} else if (inputText.value == 'combo2') {
				himg.src = "imgs/gears/h2.png";
				bimg.src = "imgs/gears/b2.png";
				limg.src = "imgs/gears/l2.png";
				fimg.src = "imgs/gears/f2.png";;
				
			} else if (inputText.value == 'combo3') {
				himg.src = "imgs/gears/h3.png";
				bimg.src = "imgs/gears/b3.png";
				limg.src = "imgs/gears/l3.png";
				fimg.src = "imgs/gears/f3.png";
			} else if (inputText.value = 'random') {
				var randomNum = getRandomInt(3) + 1;
				himg.src = "imgs/gears/h" + randomNum + ".png";
				bimg.src = "imgs/gears/b" + randomNum + ".png";
				limg.src = "imgs/gears/l" + randomNum + ".png";
				fimg.src = "imgs/gears/f" + randomNum + ".png";

			
			} else {
				alert('Chose combo 1,2,3 or random')
			}
	}
});