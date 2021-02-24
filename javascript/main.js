function parru(){
  document.body.style.overflow = "hidden";
  console.log("About me");
  document.getElementById("aboutme").style.display = "flex";
}

function showme(){
  console.log("About me");
}

function visic() {
  document.body.style.overflow = "scroll";
  console.log("Closed");
  var content2 = document.getElementById('sub-container');
  var content3 = document.getElementById('sub-container-1');
  document.getElementById("aboutme").style.display = "none";
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200
});

addEventListener("scroll",e=>{
  var query = document.querySelectorAll("#leftcontent");
  length = query.length;
  for(i=0;i<query.length;i++){
    var introPosition = query[i].getBoundingClientRect().top;
    if (introPosition >= 300){query[i].style.opacity = 0;}
    else{query[i].style.opacity = 1;}
    console.log(introPosition);
  }
});
