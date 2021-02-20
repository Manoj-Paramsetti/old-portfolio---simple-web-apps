function parru(){
  document.body.style.overflow = "hidden";
  console.log("About me");
  document.getElementById("aboutme").style.display = "flex";
}

function visic() {
  document.body.style.overflow = "scroll";
  console.log("Closed");
  var content2 = document.getElementById('sub-container');
  var content3 = document.getElementById('sub-container-1');
  document.getElementById("aboutme").style.display = "none";
}
