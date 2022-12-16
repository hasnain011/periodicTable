let modal = document.getElementById("myModal");

function openModal(el){
  modal.style.display = "block";
  let y = el.innerText;
  console.log(y);
  document.getElementById("head").innerText = y;
  
}

function closeModal(){
    modal.style.display = "none";
    
}


