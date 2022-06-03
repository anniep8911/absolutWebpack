import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './index.scss';
import hdr from './header.html';
import ftr from './footer.html';
import main from './main.html';
import sub1 from './sub1.html';
import sub2 from './sub2.html';
import sub3 from './sub3.html';
import sub4 from './sub4.html';
import onon from './main';
import sub1fn from './sub1';
import sub2fn from './sub2';
import sub3fn from './sub3';
import sub4fn from './sub4';

const subpages= [sub1,sub2,sub3,sub4];
const subfn = [sub1fn,sub2fn,sub3fn,sub4fn];
const pageStart = document.querySelector('.page');

pageStart.innerHTML = main;
pageStart.className = 'page index';
onon();

document.querySelector('.hdrWrap').innerHTML = hdr;
document.querySelector('.ftrWrap').innerHTML = ftr;

document.querySelector('.hdrWrap h1').onclick=function(){
    pageStart.innerHTML = main;
    pageStart.className = 'page index';
    onon();
};



document.querySelectorAll('.hdrWrap li').forEach((e,ind)=>{
    e.onclick=function(){
        pageStart.innerHTML = subpages[ind];
        subfn[ind]();
        pageStart.className = `page sub${ind+1}`;
    }
})