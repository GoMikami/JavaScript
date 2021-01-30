// 第4章
/*$(document).ready(function () {
  $("body").html("<h1>Hello jQuery!!</h1>");
});

// 第5章
$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});*/

/* $(function(){
  $('.box1').slideDown();
});*/

/*$(function(){
  $('.box1').slideUp();
});*/

/*$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
});*/

/*$(function(){
  $('.box1').hide();
});

$(function(){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});*/

// 第6章
/*$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});*/

// 第7章
/*$(function(){
  $('.bg1').on('click', function(){
    $('.bg1').slideUp();
  });

  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });

  $('.bg3').on('click', function(){
    $('.bg3').slideUp();
  });

  $('.bg4').on('click', function(){
    $('.bg4').slideUp();
  });
});

// this

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
}); */

// children

/*$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});*/