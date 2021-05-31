// //メイン
// var alertString;
// alertString = addString("WebCamp");

// //関数呼び出し
// alert(alertString);

// //関数
// function addString(strA){
//   var addStr = "Hello " + strA;
//   return addStr;
// }

// var promptStr = prompt('何か好きな文字を入力してください。');

// alertString = addString(promptStr);

// alert(alertString);

//自分の手を入力
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//相手の手をランダムで選択する関数を呼び出す
js_hand = getJShand();

//結果を調べる関数を呼び出す
judge = judgeHand(user_hand,js_hand);

//結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。 ' + '相手が選んだ手は' + js_hand + 'です。 ' + 'あなたの' + judge + 'です。');

//相手の手をランダムで選択する関数
function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand == 2){
    js_hand = "パー";
  }

  return js_hand;
}

//結果を調べる関数
function judgeHand(user_hand,js_hand){

  if(user_hand == js_hand){
    judge = "あいこ";
  } else if(user_hand == "グー" && js_hand == "チョキ") {
    judge = "かち";
  } else if(user_hand == "グー" && js_hand == "パー") {
    judge = "まけ";
  } else if(user_hand == "チョキ" && js_hand == "パー") {
    judge = "かち";
  } else if(user_hand == "チョキ" && js_hand == "グー") {
    judge = "まけ";
  } else if(user_hand == "パー" && js_hand == "グー") {
    judge = "かち";
  } else if(user_hand == "パー" && js_hand == "チョキ") {
    judge = "まけ";
  }

  return judge;
}