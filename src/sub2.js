import fnc from './fnc';
function sub2fn(){
   const coBtn = document.querySelectorAll('article .btn button');
   const lb = document.querySelector('.lightBox');
   const close = document.querySelector('.lightBox button');
   const slideGr = document.querySelector('.cnt01 .artGr');
   const slideGr2 = document.querySelector('.cnt02 .artGr');

   coBtn.forEach(e=>{e.onclick=()=>{lb.className = lb.className + ' checked';}});
   close.onclick=()=>{lb.classList.remove('checked');}

   if(fnc.wd <= 1024){
      if(fnc.wd <= 700){
         fnc.touch(slideGr,'-66.66%','-33.33%');
         fnc.touch(slideGr2,'-93%','-45%');
      }else{
            fnc.touch(slideGr,'-50%','-25%');
            fnc.touch(slideGr2,'-93%','-45%');
      }
   }
}
export default sub2fn;