$(document).ready(function() {
 $('[autofocus]:first').focus();
  var bell = new Audio("audio/Zen_Temple_Bell.mp3");
  var startHash = {   
  };
  startHash.startFunction = function() {
    //Bell || Gong sound
    bell.play()
      //Bell || Gong sound ending
      $('#getName').focus();
    $('.logo').css('width', 200);
    $('.slogon h1, h2').fadeOut(50);
    var name = $("#getName").val();
    $('#greetingByName').html(name);

    $('#bubble').animate({
      left: "+=1120",
    }, 2000, function() {

    })
      $('#start').click(function() {
    startHash.startFunction();
    setTimeout(startHash.bubbleAnimBack, 6000);
    // Ajax request for Menu(Rubrics)
    setTimeout(startHash.menuUpAnim, 3000);
     
  });
  // ***********Ending Sart button(categories)***********
  $('#getName').keypress(function(event) {
    if (event.which == 13) {
      startHash.startFunction();
      setTimeout(startHash.bubbleAnimBack, 6000);
      setTimeout(startHash.menuUpAnim, 4000);

    }
  });

  };
  // // *********** Animation of Speechbuble start ***********
  startHash.bubbleAnimBack = function() {
      $('#bubble').animate({
        left: "-=1020",
      }, 4000, function() {

      })
    }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + ' ' + ErrorStr);
  }


 

  // *********** Animation of Speechbuble End***********


 
  $('[data-toggle="tooltip"]').tooltip();

window.onhashchange=SwitchToStateFromURLHash;


function getContent(url, type){
$.ajax({
  url: url,
  dataType: type,
  success: function(data) {
    SuccessF(data, type);
  }     
})
}
function SuccessF(data, type) {
  switch(type) {
    case 'html':
      $('#content').html(data);
      break;
    // case 'json':
      
    //   break;
  }
   $('.link').click(function() {
      var hash = $(this).data('hash');
       $('.logo').css('width', 200);
        $('.slogon h1, h2').fadeOut(50);
      location.hash=hash;
    });
   $('#start').click(function() {
    startHash.startFunction();
    setTimeout(startHash.bubbleAnimBack, 6000);
    // Ajax request for Menu(Rubrics)
  
     
  });
  // ***********Ending Sart button(categories)***********
  $('#getName').keypress(function(event) {
    if (event.which == 13) {
      
      location.hash='start';
      startHash.startFunction();
      setTimeout(startHash.bubbleAnimBack, 6000);
      

    }
  });
 
   
  }

  var url = "",
    hash = location.hash,
    type = "";
  // вызывается при изменении закладки УРЛа
  // а также при первом открытии страницы
  // читает нужное состояние приложения из закладки УРЛа
  // и устанавливает+отображает его
  function SwitchToStateFromURLHash()
  {
    var url = "",
    hash = location.hash.substr(1),
    type = "";
switch(hash) {
  case 'start':
    url = 'ajax/menu.html';
    type = 'html';
    break;
 
   case 'animal':
    url = 'ajax/quizeAnimals.html';
    type = 'html';

    break;
  case 'home':
    url = 'ajax/quizeHouse.html';
    type = 'html';
    break;

  case'weather':
    url='ajax/quizeWeather.html';
    type = 'html';
    break;

  case 'main':
    url = 'ajax/index.html';
    type = 'html';
    break;
    
    case 'basics':
    url = 'ajax/quizeBasics.html';
    type = 'html';
    break;

  default :
    url = 'ajax/main.html';
    type = 'html';
} 
getContent(url, type);
  }

  if(hash == 'animal'){
    $('.logo').css('width', 250);
    $('.slogon h1, h2').fadeOut(50);
  }

  // переключаемся в состояние, которое сейчас прописано в закладке УРЛ
  SwitchToStateFromURLHash();

//****************************** QUIZE ANIMALS Starts ************************************

  });//doc ready
// 
function focus(){
  $('#getName').focus();
}
focus();