var arr;
var numArr;
var j,len,count=0,min=0,max=0,shiftCnt=0,length;

function set_min(e) {
  min = e.value;
}

function set_max(e) {
  max = e.value;
}

function random() {
  if(max <= min){
    var temp = max;
    max = min;
    min = temp;
    document.getElementById("min").value = min;
    document.getElementById("max").value = max;
  }

  reset();

  length = Math.abs(max-min) +1;

  for(var i=0; i < length; i++){
    arr[i]= parseInt(min)+ parseInt(i);
  }

  for(j = 0, len = arr.length; j < length; j++, len--) {
    var rndNum = Math.floor(Math.random()*len);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len-1];
  }

  show();

}

function show() {
  document.getElementById("push").innerHTML = "<h1 id=\"content\">ランダム配列完成！！</h1>\n" +
      "<input type=\"button\" value=\"押せー\" onclick=\'shift()\'>\n" +
      "<input type=\"button\" value=\"配列を表示\" onclick=\'showArr()\'>";
}

function shift() {
  if(shiftCnt === length) shiftCnt = 0;
  document.getElementById("content").innerHTML = numArr[shiftCnt];
  shiftCnt++;
}

function showArr() {
  document.getElementById("content").innerHTML = numArr;
}

function reset() {
  arr = [];
  numArr = [];
  shiftCnt = 0;
}