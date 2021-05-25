$(document).ready(function(){
  
  // 手機版 菜單開關控制
  var menuShow = true;

  $('.m-menu-btn').click(function(){

    menuShow = !menuShow;

    if(menuShow){
      $('.m-menu-bg').css("display","none");
      $('.m-menu-list').css("display","none");
      $('.m-menu-open').css("display","block");
    } else {
      $('.m-menu-bg').css("display","block");
      $('.m-menu-list').css("display","flex");
      $('.m-menu-open').css("display","none");
    }
    
  });


  // 相片點擊放大
  $('.photo-container li').on( "click", function(){
    $('.myphoto').css('display','block');
  });
  // 放大相片關閉鈕
  $('.myclose').on( "click", function(){
    $('.myphoto').css('display','none');
  });

});
