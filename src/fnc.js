export default{
    cnt:1,
    now:'on',
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
    }
}

