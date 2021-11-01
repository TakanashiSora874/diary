function sleep(waitMsec){
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}

function noScroll(event) {
  event.preventDefault();
}

var n,m,l;

function set (){
  async: false
  n = 0;
  $("[id=frame2]").hide();
  $("[id=frame3]").hide();
  for(i=1; i<=8; i++){
    $("#diary-last" + i).hide();
  }
  for(i=1; i<=4; i++){
    $("#last-diary-text" + i).hide();
  }
  $("[id=reveal]").hide();
  $("[id=last-text]").hide();
  $(function(){
  scrollTo(0,0);
  });
  m = 2907;
  l = 2980;
  var date1 = new Date();
  const nowMonth1 = document.getElementById("now-month1");
  const nowDay1 = document.getElementById("now-day1");
  const nowHour1 = document.getElementById("now-hour1");
  const nowMinute1 = document.getElementById("now-minute1");
  if (date1.getMonth() <= 8){
    nowMonth1.innerHTML = '0' + date1.getMonth() + 1;
  } else {
    nowMonth1.innerHTML = date1.getMonth() + 1;
  }
  if (date1.getDate() <= 9){
    nowDay1.innerHTML = '0' + date1.getDate();
  } else {
    nowDay1.innerHTML = date1.getDate();
  }
  if (date1.getHours() <= 9){
    nowHour1.innerHTML = '0' + date1.getHours();
  } else {
    nowHour1.innerHTML = date1.getHours();
  }
  if (date1.getMinutes() <= 9){
    nowMinute1.innerHTML = '0' + date1.getMinutes();
  } else {
    nowMinute1.innerHTML = date1.getMinutes();
  }
}

window.onscroll = function(){
  var a = document.documentElement.scrollTop;
  console.log(a,n)
  if (a == m && n == 0){
    document.addEventListener('touchmove', noScroll, { passive: false });
    document.addEventListener('mousewheel', noScroll, { passive: false });
    $(function() {
      $("#diary-last1").show();
      scrollBy(0,24);
      sleep(2000);
    });
  }
  if (a == m + 24 && n == 0){
    $(function() {
      $("#diary-last2").show();
      scrollBy(0,24);
      sleep(1500);
    });
  }
  if (a == m + 48 && n == 0){
    $(function() {
      $("#diary-last3").show();
      scrollBy(0,24);
      sleep(1300);
    });
  }
  if (a == m + 72 && n == 0){
    $(function() {
      $("#diary-last4").show();
      scrollBy(0,24);
      sleep(1000);
    });
  }
  if (a == m + 96 && n == 0){
    $(function() {
      $("#diary-last5").show();
      scrollBy(0,24);
      sleep(800);
    });
  }if (a == m + 120 && n == 0){
    $(function() {
      $("#diary-last6").show();
      scrollBy(0,24);
      sleep(500);
    });
  }if (a == m + 144 && n == 0){
    $(function() {
      $("#diary-last7").show();
      scrollBy(0,24);
      sleep(400);
    });
  }
  if (a == m + 168 && n == 0){
    $(function() {
      $("#diary-last8").show();
      scrollBy(0,24);
      sleep(300);
    });
    $(function(){
      sleep(2000);
      $("[id=color-red]").css({"color":"red"});
    });
    $(function() {
        sleep(500);
        $("#frame1").animate({"marginTop":"2150px"},7000,function() {
          scrollBy(0,-1)
        });
    });
  }

  if (a == m + 191 && n == 0){
    sleep(500);
    $("[id=button]").hide();
    $("#escape").hide();
    $("[id=frame1]").hide();
    $("[id=frame3]").show();
    sleep(500);
    $(function(){
      $("#message-text1").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text2").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text3").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text4").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text5").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text6").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text7").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text8").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text9").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text10").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      $("#message-text11").css({"color":"red"});
      scrollBy(0,0);
      sleep(1000);
    });
    $(function(){
      sleep(2000)
      $("[id=frame3]").hide();
      $("[id=frame1]").show();
      $("[id=frame2]").show();
      $("[id=first-text]").hide();
      for(i=1; i<=8; i++){
        $("#diary-last" + i).hide();
      }
      $("[id=last-text]").show();
      $("#frame1").css({"marginTop":"0px"});
      $("[id=title]").css({"color":"red"});
      $("#diary-image").hide();
      scrollTo(0,0);
      n++;
      document.removeEventListener('touchmove', noScroll, { passive: false });
      document.removeEventListener('mousewheel', noScroll, { passive: false });
      var date2 = new Date();
      const nowMonth2 = document.getElementById("now-month2");
      const nowDay2 = document.getElementById("now-day2");
      const nowHour2 = document.getElementById("now-hour2");
      const nowMinute2 = document.getElementById("now-minute2");
      if (date2.getMonth() <= 8){
        nowMonth2.innerHTML = '0' + date2.getMonth() + 1;
      } else {
        nowMonth2.innerHTML = date2.getMonth() + 1;
      }
      if (date2.getDate() <= 9){
        nowDay2.innerHTML = '0' + date2.getDate();
      } else {
        nowDay2.innerHTML = date2.getDate();
      }
      if (date2.getHours() <= 9){
        nowHour2.innerHTML = '0' + date2.getHours();
      } else {
        nowHour2.innerHTML = date2.getHours();
      }
      if (date2.getMinutes() <= 9){
        nowMinute2.innerHTML = '0' + date2.getMinutes();
      } else {
        nowMinute2.innerHTML = date2.getMinutes();
      }
    });
    $(function(){
      window.alert('新着メッセージが1件あります');
    });
  }
  if (a >= l - 383 && n == 1){
    $(function(){
      document.addEventListener('touchmove', noScroll, { passive: false });
      document.addEventListener('mousewheel', noScroll, { passive: false });
      scrollTo(0,l);
      n++;
    });
  }
  if (a == l && n == 2){
    $(function(){
      $("#last-diary-text1").show();
      scrollBy(0,24);
      sleep(2500);
    });
  }
  if (a == l + 24 && n == 2){
    $(function(){
      $("#last-diary-text2").show();
      scrollBy(0,24);
      sleep(2500);
    });
  }
  if (a == l + 48 && n == 2){
    $(function(){
      $("#last-diary-text3").show();
      scrollBy(0,24);
      sleep(2500);
    });
  }
  if (a == l + 72 && n == 2){
    $(function(){
      $("#last-diary-text4").show();
      scrollBy(0,24);
      sleep(2500);
    });
  }
  if (a == l + 96 && n == 2){
    $(function(){
      $("#behind0").css({"color":"white"});
      sleep(2500);
    });
    $(function(){
      $("#behind1").css({"color":"red"});
      sleep(1500);
    });
    $(function(){
      $("#behind2").css({"color":"red"});
      sleep(800);
    });
    $(function(){
      $("#behind3").css({"color":"red"});
      sleep(800);
    });
    $(function(){
      $("#behind4").css({"color":"red"});
      sleep(800);
    });
    $(function(){
      $("#behind5").css({"color":"red"});
      sleep(800);
    });
    $(function(){
      $("[id=reveal]").show();
      sleep(3000);
      scrollTo(0,l + 216);
    });
    $(function(){
      document.removeEventListener('touchmove', noScroll, { passive: false });
      document.removeEventListener('mousewheel', noScroll, { passive: false });
      n++;
    });
  }
  $("#escape").on('click',function(){
    n = 10;
  });
  if (n == 10){
    document.addEventListener('touchmove', noScroll, { passive: false });
    document.addEventListener('mousewheel', noScroll, { passive: false });
    $(function(){
      sleep(1000);
      $("#secret-message1").css({"color":"white"});
      scrollBy(0,0);
      n++;
    });
    $(function(){
      sleep(2000);
      $("#secret-message2").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message3").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message4").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message5").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message6").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message7").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message8").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message9").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message10").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message11").css({"color":"white"});
      scrollBy(0,48);
    });
    $(function(){
      sleep(2000);
      $("#secret-message12").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message13").css({"color":"white"});
      scrollBy(0,48);
    });
    $(function(){
      sleep(2000);
      $("#secret-message14").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message15").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message16").css({"color":"white"});
      scrollBy(0,48);
    });
    $(function(){
      sleep(2000);
      $("#secret-message17").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message18").css({"color":"white"});
      scrollBy(0,24);
    });
    $(function(){
      sleep(2000);
      $("#secret-message19").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message20").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#secret-message21").css({"color":"white"});
      scrollBy(0,0);
    });
    $(function(){
      sleep(2000);
      $("#end").css({"color":"white"});
      document.removeEventListener('touchmove', noScroll, { passive: false });
      document.removeEventListener('mousewheel', noScroll, { passive: false });
      n++;
    });
  }
}

window.addEventListener('load', set);