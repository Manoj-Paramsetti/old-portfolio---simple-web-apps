function contact() {
    document.body.style.overflow = "hidden"
    console.log("About me")
    document.getElementById("aboutme").style.display = "flex"
}


function hideContact() {
    document.body.style.overflow = "scroll";
    console.log("Closed");
    document.getElementById("aboutme").style.display = "none"
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2500
});

/*removing vanilla scroll effect
addEventListener("scroll",e=>{
  var query = document.querySelectorAll("#leftcontent")
  length = query.length
  for(i=0;i<query.length;i++){
    var introPosition = query[i].getBoundingClientRect().top
    var screen = window.innerWidth
    console.log(screen)
    if (screen > 1000){
      if (introPosition >= 350){
        query[i].style.opacity = 0
        query[i].style.width = "0%"
      }
      else{
        query[i].style.opacity = 1
        query[i].style.width = "50%"
      }
    }
    else{
      if (introPosition >= 350){
        query[i].style.opacity = 0
        query[i].style.width = "0%"
      }
      else{
        query[i].style.opacity = 1
        query[i].style.width = "100%"
      }
    }
  }
})

addEventListener("keydown",e=>{
  var things = ["#Home","#Education","#Experience","#Project", "#Contact"]
  console.log(e["key"])
  if (e["key"] == "a" || e["key"] == "A"){
    document.body.style.overflow = "hidden"
    console.log("About me")
    document.getElementById("Contact").style.display = "flex"
  } 
  if (e["key"] == "f" || e["key"] == "F"){
    var body = document.getElementById("body")
    if(i==0){
      i=1
      if (body.requestFullscreen) {
        body.requestFullscreen()
      } else if (body.webkitRequestFullscreen) {
        body.webkitRequestFullscreen()
      } else if (body.msRequestFullscreen) { 
        body.msRequestFullscreen()
      }
    }
    //closeFullScreen
    else if(i==1){
      console.log("exitfullscreen")
      i=0
      if(document.exitFullscreen) {
        document.exitFullscreen()
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
    else{alert("something went wrong. Try to refresh the page.")}  
  }
  if (e["key"] == "c" || e["key"] == "x" || e["key"] == "q" || e["key"] == "C" || e["key"] == "X" || e["key"] == "Q"){
    if(document.getElementById("aboutme").style.display == "flex"){
      document.body.style.overflow = "scroll";
      console.log("Closed");
      document.getElementById("aboutme").style.display = "none"
    }
  }
})*/
