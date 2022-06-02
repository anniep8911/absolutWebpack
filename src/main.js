function main(){
    const pg =document.querySelectorAll('.pagenation li');
    const mnImg  = document.querySelectorAll('.mnImg');
    const slideRight = document.querySelector('.cnt01 .btnR');
    const slideLeft = document.querySelector('.cnt01 .btnL');
    const slideGr = document.querySelector('.cnt01 .artGroup');


    let crnPg = 0;
    function pgNation(ind){
        for(let i=0; i< pg.length;i++){
            mnImg[i].classList.remove('on');
            pg[i].classList.remove('clicked');
        }
        mnImg[ind].className= mnImg[ind].className+' on';
        pg[ind].className ='clicked';
    }

    function slide(dir){
        if(dir=='left'){
            slideGr.animate({
                marginLeft:'-66.66%'
            },{
                duration:500,
                fill:'forwards'
            });

            setTimeout(function(){
                slideGr.animate({
                    marginLeft:'-33.33%'
                },{
                    duration:0,
                    fill:'forwards'
                });
                slideGr.append(slideGr.firstElementChild);
            },500);
        }else{
            slideGr.animate({
                marginLeft:'-0%'
            },{
                duration:500,
                fill:'forwards'
            });
    
            setTimeout(function(){
                slideGr.animate({
                    marginLeft:'-33.33%'
                },{
                    duration:0,
                    fill:'forwards'
                });
                slideGr.prepend(slideGr.lastElementChild);
            },500);  
        }

    }

    function more(){
        
    }

    slideRight.onclick=()=>{slide('right')};
    slideLeft.onclick=()=>{slide('left')};


    const autoRolling = setInterval(function(){
        crnPg++;
        crnPg=crnPg%3; 
        pgNation(crnPg);
    },1500);


    pg.forEach((e,ind)=>{
        e.onclick=(e)=>{
            pgNation(ind);
            clearInterval(autoRolling);
        }
    });




}

export default main;