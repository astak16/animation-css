var toggle = document.getElementById('toggle')
var inner = document.getElementById('inner')

var a = 0;
toggle.addEventListener('click',function(){
    if(a === 0){
        toggle.classList.add('active')
        inner.classList.add('active')
        a=1
    }else{
        toggle.classList.remove('active')
        inner.classList.remove('active')
        a=0
    }
})