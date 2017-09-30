const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  let arr = kittens;
  arr.push(name);
  return arr;
}

function prependKitten(name){
  let arr = kittens.unshift(name);
  return arr;
}

function removeLastKitten(){
  let arr = kittens.pop;
  return arr;
}

function removeFirstKitten() {
  return kittens.unshift();
}
