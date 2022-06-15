import fnc from './fnc';
function main(){
    const pg =document.querySelectorAll('.pagenation li');
    const mnImg  = document.querySelectorAll('.mnImg');
    const slideRight = document.querySelector('.cnt01 .btnR');
    const slideLeft = document.querySelector('.cnt01 .btnL');
    const slideGr = document.querySelector('.cnt01 .artGroup');
    const cnt3Btn =  document.querySelector('.cnt03 button');
    const cnt2more = document.querySelector('.cnt02>.btn>button');
    const stars =  document.querySelectorAll('.cnt02 .texts p');
    const cnt02Sect = document.querySelector('.cnt02 section .artGroup');

    let [crnPg,flag,hg,cnt,now,endIdx,stX,stY,enX,enY] = [0,false,0,1,'on',2,0,0,0,0];

    const autoRolling = setInterval(function(){
        crnPg++;
        crnPg=crnPg%3;
        fnc.pgNation(pg,mnImg,crnPg); 
    },1500);
    
    slideRight.onclick=()=>{fnc.slide('right','0%',slideGr,'-33.33%');};
    slideLeft.onclick=()=>{fnc.slide('left','-66.66%',slideGr,'-33.33%')};
    cnt3Btn.onclick=()=>{fnc.slide('left','-50%',document.querySelector('.cnt03 .artGroup'),'-25%')};
    cnt2more.onclick=(e)=>{
        if(!flag)hg = cnt02Sect.clientHeight; flag=true;
        if(now=='on')cnt++;
        else cnt--;
        now = fnc.sw(cnt,endIdx,e.currentTarget);
        fnc.more(hg,cnt,cnt02Sect);
    };
    
    pg.forEach((e,ind)=>{
        e.onclick=()=>{
            fnc.pgNation(pg,mnImg,ind);
            clearInterval(autoRolling);
        }
    });

    stars.forEach(e=>{
        e.childNodes.forEach((f,ind)=>{
            f.onclick=()=>{
                fnc.score(e.childNodes,ind,'black');
            }
        })
    });

    if(fnc.wd<=1024){
        if(fnc.wd <= 700){
            fnc.touch(slideGr,'-50%','-25%');
            fnc.touch(document.querySelector('.cnt02 .artGroup'),'-200%','-100%');
        }else{
            fnc.touch(slideGr,'-100%','-50.33%');
            fnc.touch(document.querySelector('.cnt02 .artGroup'),'-100%','-50%');
        }
        fnc.touch(document.querySelector('.cnt03 .artGroup'),'-40%','-20%');
    }
}
export default main;