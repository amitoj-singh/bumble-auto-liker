//https://github.com/amitoj-singh/bumble-auto-liker/
setInterval( function () {
  //select right swipe button element and fire a click event
  likeBtn = document.querySelector(".encounters-action.tooltip-activator.encounters-action--like"); 
  likeBtn.click();
}, 5000); //time in miliseconds after which like button will be clicked
