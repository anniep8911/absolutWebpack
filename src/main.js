import fnc from './fnc';
function main(){
    const pg =document.querySelectorAll('.pagenation li');
    const mnImg  = document.querySelectorAll('.mnImg');
    const slideRight = document.querySelector('.cnt01 .btnR');
    const slideLeft = document.querySelector('.cnt01 .btnL');
    const slideGr = document.querySelector('.cnt01 .artGroup');
    const cnt3Btn =  document.querySelector('.cnt03 button');
    const cnt2more = document.querySelector('.cnt02>.btn>button');

    let [crnPg,flag,hg,cnt,onoff] = [0,false,0,1,false];

    function more(cnt,gr,endInd,btn){
        if(!flag) hg = gr.clientHeight;
        if(cnt<=endInd){
            gr.style.height = `${hg*cnt}px`;
            if(cnt == endInd){
                btn.innerText='닫기';
            }
        }
    }

    function sw(inded,btn){
        if(!onoff){
            cnt++;
            if(cnt==inded){
                onoff=true;
            }
        }else{
            cnt--;
            if(cnt==1){
                onoff=false;
                btn.innerText='더보기';
            }
        }
    }

    const autoRolling = setInterval(function(){
        crnPg++;
        crnPg=crnPg%3;
        fnc.pgNation(pg,mnImg,crnPg); 
    },1500);

    slideRight.onclick=()=>{fnc.slide('right','0%',slideGr,'-33.33%')};
    slideLeft.onclick=()=>{fnc.slide('left','-66.66%',slideGr,'-33.33%')};
    cnt3Btn.onclick=()=>{fnc.slide('left','-50%',document.querySelector('.cnt03 .artGroup'),'-25%')};
    cnt2more.onclick=(e)=>{
        sw(2,e.currentTarget);
        more(cnt,document.querySelector('.cnt02 section'),2,e.currentTarget); 
        flag=true;
    };
    
    pg.forEach((e,ind)=>{
        e.onclick=()=>{
            fnc.pgNation(pg,mnImg,ind);
            clearInterval(autoRolling);
        }
    });
}
export default main;