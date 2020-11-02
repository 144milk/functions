var arr = [];
var numArr = [];
var j,len,count=0,min,max;

function set_min(e) {
  min = e.value;
  console.log(min);
}

function set_max(e) {
  max = e.value;
  console.log(max);
}

function random() {
  for(var i=0; i < 5; i++){
    arr[i]=i+1;
  }

  for(j = 0, len = arr.length; j < 5; j++, len--) {
    var rndNum = Math.floor(Math.random()*len);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len-1];
  }
}