var arrow = document.getElementById('arrow-icon');
var logoContainer = document.getElementById('logoHome');
var secondContainer = document.getElementById('secondContainer');

document.getElementById('arrow').addEventListener('click', fadeInOut);
function fadeInOut(){
  //var effectsOut = 'animate__animated,animate__fadeOutUp';
  //var effectsIn = 'animate__animated animate__fadeInUp';
  //var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  logoContainer.classList.add('animate__animated', 'animate__fadeOutUp', 'animate__slower');
  secondContainer.style.display = 'block';
  secondContainer.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s','animate__slow');

  function handleAnimationEnd() {
    logoContainer.style.display = 'invisible';
     logoContainer.classList.remove(`animate__animated`, 'animate__fadeOutUp');
     logoContainer.removeEventListener('animationend', handleAnimationEnd);
     logoContainer.style.display = 'none';
   }


   logoContainer.addEventListener('animationend', handleAnimationEnd);
}

/*
$(function() {


  $(arrow).click(function(){
    $(logoContainer).addClass(effects).one(effectsEnd, function({
      $(logoContainer).removeClass(effectsOut);
    }));
    $(secondContainer).addClass(effects).one(effectsEnd, function({
      $(secondContainer).removeClass(effectsIn);
    }));
  });
});*/
