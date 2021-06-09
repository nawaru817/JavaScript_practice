$(function(){
  $('button').on('click', function(){
    $('ul').children().toggleClass('ul-red');
  });
});