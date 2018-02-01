function TotopicDetails() {
  $('.content').scroll(function(){
    var scrollHeight = $('.content').scrollTop();
    if(scrollHeight>0 && scrollHeight<=100){
      $('.topShowOrHide').show();
      $('.topShowOrHide').css('opacity',0.3)
    }else if(scrollHeight>100){
      $('.topShowOrHide').show();
      $('.topShowOrHide').css('opacity',1)
    }else{
      $('.topShowOrHide').hide();
      $('.topShowOrHide').css('opacity',0);
    }
  })
}