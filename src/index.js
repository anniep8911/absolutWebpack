import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './assets/style/index.scss';
import hdr from './inc/header.html';
import ftr from './inc/footer.html';
import main from './main.html';
import sub1 from './sub1.html';
import sub2 from './sub2.html';
import sub3 from './sub3.html';
import sub4 from './sub4.html';
import onon from './assets/js/main';
import sub1fn from './assets/js/sub1';
import sub2fn from './assets/js/sub2';
import sub3fn from './assets/js/sub3';
import sub4fn from './assets/js/sub4';

const subpages= [sub1,sub2,sub3,sub4];
const subfn = [sub1fn,sub2fn,sub3fn,sub4fn];
const subTitle = ['앱솔루트, 보드카!', '당신을 위한 제품추천', '앱솔루트 보드카와 함께하세요!','앱솔루트,콜라보레이션'];
const pageStart = document.querySelector('.page');
const title  = document.querySelector('title');


pageStart.innerHTML = main;
pageStart.className = 'page index';
title.innerText =subTitle[0];
onon();

document.querySelector('.hdrWrap').innerHTML = hdr;
document.querySelector('.ftrWrap').innerHTML = ftr;


document.querySelector('.hdrWrap h1').onclick=function(){
    pageStart.innerHTML = main;
    pageStart.className = 'page index';
    title.innerText =subTitle[0];
    onon();
};

document.querySelectorAll('.navBox li').forEach((e,ind)=>{
    e.onclick=function(){
            if(document.querySelector('.navBox').classList.contains('show')){
            if(ind != 4){
                pageStart.innerHTML = subpages[ind];
                subfn[ind]();
                pageStart.className = `page sub${ind+1}`;
                document.querySelector('.navBox').classList.remove('show');
            }else{
                document.querySelector('.navBox').classList.remove('show');
            }
        }
    }
});

document.querySelectorAll('.hdrWrap header li').forEach((e,ind)=>{
    e.onclick=function(){
        if(ind != 4){
            pageStart.innerHTML = subpages[ind];
            title.innerText = subTitle[ind+1];
            subfn[ind]();
            pageStart.className = `page sub${ind+1}`;
        }else{
            document.querySelector('.navBox').className += ' show';
        }
    }
});
