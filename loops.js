
function forLoop(array){
var msg1 = "I am 1 strange loop.";
var msg2 = "I am ${i} strange loops.";

for(var i = 0; i < 25; i++){
 if(i === 1){
   array.unshift(msg1);
 }else {
   array.unshift(msg2);
 }
    }
    return array;
}


function whileLoop(n){
   while(n > 0){
    console.log(--n);

  }
  return 'done';
}


function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array){
  do{
    maybeTrue();
  }
while(maybeTrue() || array.length === 0){
  array.length--;
}

return array;
}
