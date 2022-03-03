//文字数カウンター
function viewStrLen(){
  var len = document.getElementById("text").value.length;
  document.getElementById("text-count").innerText = len + "文字";
}

//クリア処理
function clearTextarea() {
  var textareaForm = document.getElementById("text");
  textareaForm.value = '';
  document.getElementById("text-count").innerText = "0文字";
}

var onAnonymous = false;
var onName = false;
var onText = false;
var isName = "";
// 必須入力処理
function check_input(){

  if(document.getElementById("anonymous").checked){
    document.getElementById("name").disabled = true;
    isName = document.getElementById("name").value;
    document.getElementById("name").value = "匿名さん";
    onAnonymous = true;
  } else {
    document.getElementById("name").disabled = false;
    if(onAnonymous)document.getElementById("name").value = isName;
    onAnonymous = false;
  }
  
  if(document.getElementById("name").value.length && !onAnonymous)  onName = true;
  else  onName = false;

  if(document.getElementById("text").value.length) onText = true;
  else onText = false;

  if((onName||onAnonymous)&&onText) document.getElementById("submit_button").disabled = false;
  else document.getElementById("submit_button").disabled = true;
}

function submit_element(){
  document.getElementById("name").disabled = false;
}


//時間取得・表示
function showClock1() {
  var now = new Date();
  var year = now.getFullYear();
  var monthe = now.getMonth()+1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var sec = now.getSeconds();
  monthe = ('0' + monthe).slice(-2);
  day = ('0' + day).slice(-2);
  hour = ('0' + hour).slice(-2);
  minute = ('0' + minute).slice(-2);
  sec = ('0' + sec).slice(-2);
  var msg = "現在時刻は、" + year + "/" + monthe + "/" + day + " "+ hour + ":"+ minute + ":"+ sec;
  document.getElementById("RealtimeClockArea").innerHTML = msg;

  //表示更新処理
  if(sec % 10 == 0){
    console.log("reload");
    $.get(document.URL).done(function (data,textStatus,jqXHR){
      const doc = new DOMParser().parseFromString(data, 'text/html');
      $('.reload').html(doc.querySelector('.reload').innerHTML);
  });
  }
}
setInterval('showClock1()',1000);

//リロード禁止
history.pushState(null, null, location.href);
window.addEventListener('popstate', (e) => {
  history.go(1);
});

//トップに戻る
function topBtn(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}