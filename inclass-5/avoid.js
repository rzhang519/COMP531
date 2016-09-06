function moveObj(){
		// console.log("hi");
		var w = 600, h = 400; // width and height
		newWidth = Math.floor(Math.random()*w);
		newHeight = Math.floor(Math.random()*h);
		obj = document.getElementById("clickMe");
		obj.style.position="absolute";
		obj.style.left=newWidth+"px";
		obj.style.top=newHeight+"px";
	}

	function btnClick(){
		var btn = document.getElementById("clickMe");

		if (btn.value === "clickMe"){
			btn.value="Play again";
			document.getElementById("cong").style.display = "unset";
		}else{
			btn.value = "clickMe";
			btn.addEventListener("mouseover", moveObj);
			document.getElementById("cong").style.display = "none";
		}
	}


	window.onload = function(){

		var btn = document.getElementById("clickMe");
		btn.addEventListener("mouseover", moveObj);

		var keymsg = function(e){
			if (e.keyCode === 16){ // if  shift if pressed
				btn.removeEventListener("mouseover", moveObj);
				btn.addEventListener("click", btnClick);


			}
		}

		document.onkeydown = keymsg;
	}