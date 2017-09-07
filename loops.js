function forLoop(array) { //array is ["I am 0 strange loops", "I am 1 strange loops"]
  for (let i = 0; i < 25; i++) { //i = 2
    if (i == 1) {
      array.push("I am 1 strange loop.")
    }else{
      array.push(`I am ${i} strange loops.`)
    }
  } return array
  }


function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
if(number==0) {
  return "done"
}  }
}

function doWhileLoop(array) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {array.shift();}
while (array.length > 0 && maybeTrue() );
return array }
