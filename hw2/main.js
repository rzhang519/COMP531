window.onload = function(){
	console.log("onload");

	
	// maps the URL of the image to the interval
	var srcToInterval = {};

	// keep track of whether the stop button has been pressed
	var stop = false;

	var allImages = document.getElementsByClassName("images");

	var srcImages = [];

	Array.prototype.forEach.call(allImages, function(image){
		srcImages.push(image.src);
	});

	Array.prototype.forEach.call(allImages, function(image){

		// console.log(image.parentElement.getElementsByClassName("btnImage"));

		// console.log(image.parentElement.getElementsByClassName("btnImage"));
		// console.log(image.src);
		
		var time = (Math.random() * 4 + 1) * 1000;

		image.intervalId = setInterval(changePic, time, image, srcImages);

		var button = image.parentElement.getElementsByClassName("btnImage")[0];

		button.addEventListener("click", function(event){

			console.log(event.toElement.parentNode);

			var image = event.toElement.parentNode.getElementsByClassName("images")[0];

			console.log(image.src);

			if (button.value === "Stop"){
				clearInterval(image.intervalId);
				console.log(image);
				button.value = "Start";
			}else if(button.value === "Start"){
				button.value = "Stop";

				//reset the interfval
				var time = (Math.random() * 4 + 1) * 1000;
				image.intervalId = setInterval(changePic, time, image, srcImages);
			}

		});



	});

}


function changePic(image, srcImages){
	// images to rotate

	// var srcImages = ["https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png", 
	// "http://animalinstances.com/wp-content/uploads/2016/05/Holopainen_Image02.jpg",
	// "http://1.bp.blogspot.com/--Gdts_t9wsM/TcGWqDH9wCI/AAAAAAAACY8/j5Z7N0IO5us/s1600/Cool+Images+by+cool+images786+%25281%2529.jpg",
	// "http://images5.fanpop.com/image/photos/31900000/LIFE-IS-BEAUTIFUL-beautiful-pictures-31995666-1400-790.jpg",
	// "http://thegraphicsfairy.com/wp-content/uploads/2014/01/French-Handwriting-Transfer-Rev-GraphicsFairy-sm.jpg",
	// "http://1.bp.blogspot.com/-UOXywCVmec4/T96Oy2BM0aI/AAAAAAAAIXU/EoyxVR8dDO4/s1600/Forbidden+City+china+05.jpg",

	// ];

	// var allImages = document.getElementsByClassName("images");


	// Array.prototype.forEach.call(allImages, function(image){
	// 	srcImages.push(image.src);
	// });
	// console.log(image.src);
	// console.log(srcImages.length);
	image.src = srcImages[Math.floor(Math.random() * srcImages.length)]; 
	// console.log(Math.floor(Math.random() * srcImages.length));
	// console.log(image.src);

	// console.log(srcImages);

}
