window.addEventListener('load', function () {
    console.log('hello world');
    var b_nav=document.querySelector('.b_nav');
    var lis = b_nav.querySelectorAll('li');
    var tb = document.querySelectorAll('.tb');


    for (var i = 0; i < lis.length; i++){
        lis[i].setAttribute('index', i);
        // console.log(i);
        lis[i].onclick=function(){
            for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
            this.className = 'focue_lis';
            
            var index = this.getAttribute('index');
            for (var i = 0; i < tb.length; i++){
                console.log(i);
                tb[i].style.display = 'none';
            }
            tb[index].style.display = 'block';
        }
    }
})

