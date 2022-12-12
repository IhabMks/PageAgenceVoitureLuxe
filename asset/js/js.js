let backTop = document.getElementById('backTop');
backTop.addEventListener("click", function(e){
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
  //smooth permet d'aller en haut avec un movement fluide
  });
window.addEventListener("scroll", function(){
  if(window.scrollY==0){
  //Utilisateur est en haut, donc pas la peine d'afficher le bouton
    backTop.classList.remove('show');;
  } else {
    backTop.classList.add('show');
  }
});