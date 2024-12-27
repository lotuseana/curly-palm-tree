$(document).ready(function() {
  //top right date
  let datetime = new Date().toDateString();
  datetime = datetime.substring(0,3)+ "," +datetime.substring(3,datetime.length-4);
  $('#datetime').html(datetime);
  
  //mode toggle
  var lightOn = false;
    if(lightOn===false){
  $("#light-mode").hover(function(){
    $(this).css({
      filter: "invert(0.9) drop-shadow(0px 0px 5px white)"
    })
  },
      function(){
    $(this).css({
      filter: "invert(0.9) drop-shadow(0px 0px 0px white)"
    })
  });
    }
    
    if (lightOn===true){
  $("#dark-mode").hover(function(){
    $("#dark-mode").css({
      filter: "invert(0.9) drop-shadow(0px 0px 5px white)"
    })
  },
      function(){
    $("#dark-mode").css({
      filter: "invert(0.9) drop-shadow(0px 0px 0px white)"
    })
  });
    }
  
  
  $("#light-mode").click(function(){
    if (!lightOn){
      $("#mode-selector").animate({
        left:'-50px'},
        "fast"
      );  }
      lightOn=true;
      $("#light-mode").css({
        opacity:"var(--active)"
      });
      $(":root").css({
        "--bg-color":"rgba(215,216,220,1.0)",
        "--txt-color":"rgba(40, 41, 48, 1.0)",
        "--accent-color":"rgba(114, 158, 219,1.0)",
        "--highlight":"rgba(255,255,255,0.5)",
        "--menu-background":"rgba(221,223,232,1.0)",
        "--invert":"invert(0)"
      });
      $("#dark-mode").css({
      opacity:"var(--inactive)"
    });
  
    });
    
    $("#dark-mode").click(function(){
      if (lightOn){
       $("#mode-selector").animate({
        left:'5px'},
        "fast"
        );}
      lightOn=false;
      $("#dark-mode").css({
        opacity:"var(--active)"
      });
      $(":root").css({
        "--bg-color":"rgba(40, 41, 48, 1.0)",
        "--txt-color":"rgba(215,216,220,1.0)",
        "--accent-color":"rgba(161, 213, 238 ,1.0)",
        "--highlight":"rgba(0,0,0,0.5)",
        "--menu-background":"rgba(20, 21, 28, 1.0)",
        "--invert":"invert(0.9)"
      });
      $("#light-mode").css({
      opacity:"var(--inactive)"
    });
  
    });
    
  //menu sliding
    $("#menu").click(function(){
      $("#side-menu").show(400);
    });
    $("#side-menu").mouseleave(function(){
      $(this).hide(300);
    });
  });
  