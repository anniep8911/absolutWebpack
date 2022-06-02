function main(){
    const pg =document.querySelectorAll('.pagenation li');
    const mnImg  = document.querySelectorAll('.mnImg');
    const slideRight = document.querySelector('.cnt01 .btnR');
    const slideLeft = document.querySelector('.cnt01 .btnL');
    const slideGr = document.querySelector('.cnt01 .artGroup');
    const cnt3Btn =  document.querySelector('.cnt03 button');
    const cnt2more = document.querySelector('.cnt02>.btn>button');

    let [crnPg,flag,hg,cnt] = [0,false,0,1];

    function pgNation(ind){
        for(let i=0; i< pg.length;i++){
            mnImg[i].classList.remove('on');
            pg[i].classList.remove('clicked');
        }
        mnImg[ind].className= mnImg[ind].className+' on';
        pg[ind].className ='clicked';
    }
    
    function back(dir,gr,bgSet){            
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
    }
    
    function slide(dir,deg,gr,bgSet){
        gr.animate({
            marginLeft:deg
        },{
            duration:500,
            fill:'forwards'
        });
        back(dir,gr,bgSet);
    }

    function more(cnt,gr,endInd,btn){
        if(!flag) hg = gr.clientHeight;
        if(cnt<=endInd)gr.style.height = `${hg*cnt}px`;
        else btn.innerText='close';
    }

    const autoRolling = setInterval(function(){
        crnPg++;
        crnPg=crnPg%3; 
        pgNation(crnPg);
    },1500);

    console.log(document.querySelector('.cnt02 section'));
    slideRight.onclick=()=>{slide('right','0%',slideGr,'-33.33%')};
    slideLeft.onclick=()=>{slide('left','-66.66%',slideGr,'-33.33%')};
    cnt3Btn.onclick=()=>{slide('left','-50%',document.querySelector('.cnt03 .artGroup'),'-25%')};
    cnt2more.onclick=(e)=>{cnt++;more(cnt,document.querySelector('.cnt02 section'),2,e.currentTarget); flag=true;};
    
    pg.forEach((e,ind)=>{
        e.onclick=()=>{
            pgNation(ind);
            clearInterval(autoRolling);
        }
    });

}
export default main;