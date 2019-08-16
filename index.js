function getFirstSelector(selector){
  var s = document.querySelector(selector);
  return s;
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  
  return document.querySelector('div#grand-node div div div div');
}

function increaseRankBy(n){
  var a;
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for(var i = 0; i < list.length; i++){
    a = parseInt(list[i].innerHTML = (i + 1));
  }
  return a;
}