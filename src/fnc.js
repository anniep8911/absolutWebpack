export default{
    goHome:function(){
        pageStart.innerHTML = main;
        pageStart.className = 'page index';
        onon();
    },
    pgNation : function pgNation(pg,mn,ind){
        for(let i=0; i< pg.length;i++){
            mn[i].classList.remove('on');
            pg[i].classList.remove('clicked');
        }
        mn[ind].className= mn[ind].className+' on';
        pg[ind].className ='clicked';
    },
    back: function back(dir,gr,bgSet){            
        setTimeout(function(){
            gr.animate({
                marginLeft:bgSet
            },{
                duration:0,
                fill:'forwards'
            });
            if(dir == 'left'){
                gr.append(gr.firstElementChild);
            }else{
                gr.prepend(gr.lastElementChild);
            }

        },500);
    },
    slide:function slide(dir,deg,gr,bgSet){
        gr.animate({
            marginLeft:deg
        },{
            duration:500,
            fill:'forwards'
        });
        this.back(dir,gr,bgSet);
    },
}

