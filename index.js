var btn = document.getElementById('btn-click');


btn.addEventListener('mousedown',function(){
    console.log("Mouse Down event triggered")
});

btn.addEventListener('mouseup',function(){
    console.log("Mouse Up event triggered")
});


btn.addEventListener('click',function(){
    console.log("Click event triggered")
});

btn.addEventListener('dblclick',function(){
    console.log("Double Click event triggered")
});


var over = document.getElementById('over');

var overCount = 0;

over.addEventListener('mouseover',function(){
    overCount += 1;
    document.querySelector('#over > p').innerHTML = overCount;
    console.log('Mouse Over event triggered')
});



var enter = document.getElementById('enter');

var enterCount = 0;

enter.addEventListener('mouseenter',function(){
    enterCount += 1;
    document.querySelector('#enter > p').innerHTML = enterCount;
    console.log('Mouse Enter event triggered')
});

var move = document.getElementById('move');

var moveCount = 0;

move.addEventListener('mousemove',function(){
    moveCount += 1;
    document.querySelector('#move > p').innerHTML = moveCount;
    console.log('Mouse Move event triggered')
});

