export default{
    cnt:1,
    now:'on',
    wd:window.innerWidth,
    stX:0,
    stY:0,
    enX:0,
    enY:0,
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
    scBase:function scBase(allnodes){
        allnodes.forEach(o=>{
            o.style.color='#ccc';
        });
    },
    score:function score(allnodes,ind,col){
        this.scBase(allnodes,ind);
        for(var i =0; i<=ind; i++){
            allnodes[i].style.color=col;
        }
    },
    sw:function sw(cnt,inded,btn){
        if(cnt >= inded){
            btn.innerText='닫기';
            this.now='off';
        }else if(cnt <= 1){
            btn.innerText='더보기';
            this.now='on';
        }
        return this.now;
    },
    more: function more(hg,cnt,gr){
        gr.style.height = `${hg*cnt}px`;
    },
    touch:function touch(dom,perLeft,base){
        dom.addEventListener('touchstart',(e)=>{
            this.stX = e.changedTouches[0].screenX;
            this.stY = e.changedTouches[0].screenY;
        },{passive:false});
        dom.addEventListener('touchend',(e) =>{
            this.enX = e.changedTouches[0].screenX;
            this.enY = e.changedTouches[0].screenY;
            console.log(Math.abs(this.stX-this.enX));
            
            if(this.stX>this.enX && Math.abs(this.stX-this.enX)>30 && Math.abs(this.stY-this.enY)<50){
                this.slide('left',perLeft,dom,base)
            }else if(this.stX<this.enX && Math.abs(this.stX-this.enX)>30 && Math.abs(this.stY-this.enY)<50){
                this.slide('right','0%',dom,base);
            }
        },{passive:false});
    }
}

