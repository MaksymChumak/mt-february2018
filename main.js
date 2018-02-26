// 2B
var main = document.getElementById('main');
var navigation = document.getElementById('navigation');
navigation.addEventListener('click', function() {
	main.style.display = 'block';
});

// 3
var mcontents = document.getElementById('mcontents');

var title = document.getElementById('title');
var mimg1 = document.getElementById('mimg1');
var mimg2 = document.getElementById('mimg2');
var mimg3 = document.getElementById('mimg3');
console.log(mimg1.style.backgroundImage);

mimg1.style.backgroundImage == 'url("./imgs/gears/h1.png")';
mcontents.addEventListener('click', function() {
	if (mimg1.style.backgroundImage == 'url("./imgs/gears/h1.png")') {
		title.innerHTML = 'Body Gear';
		mimg1.style.backgroundImage = 'url(./imgs/gears/b1.png)';
		mimg2.style.backgroundImage = 'url(./imgs/gears/b2.png)';
		mimg3.style.backgroundImage = 'url(./imgs/gears/b3.png)';
		
	} else if (mimg1.style.backgroundImage == 'url("./imgs/gears/b1.png")') {
		title.innerHTML = 'Leg Gear';
		mimg1.style.backgroundImage = 'url(./imgs/gears/l1.png)';
		mimg2.style.backgroundImage = 'url(./imgs/gears/l2.png)';
		mimg3.style.backgroundImage = 'url(./imgs/gears/l3.png)';
	} else if (mimg1.style.backgroundImage == 'url("./imgs/gears/l1.png")') {
		title.innerHTML = 'Foot Gear';
		mimg1.style.backgroundImage = 'url(./imgs/gears/f1.png)';
		mimg2.style.backgroundImage = 'url(./imgs/gears/f2.png)';
		mimg3.style.backgroundImage = 'url(./imgs/gears/f3.png)';
	} else {
		title.innerHTML = 'Head Gear';
		console.log(mimg1.style.backgroundImage);
		mimg1.style.backgroundImage = 'url(./imgs/gears/h1.png)';
		mimg2.style.backgroundImage = 'url(./imgs/gears/h2.png)';
		mimg3.style.backgroundImage = 'url(./imgs/gears/h3.png)';
	}
	
});
