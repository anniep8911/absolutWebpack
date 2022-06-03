function sub2fn(){
   const coBtn = document.querySelectorAll('article .btn button');
   const lb = document.querySelector('.lightBox');
   const close = document.querySelector('.lightBox button');

   coBtn.forEach(e=>{e.onclick=()=>{lb.className = lb.className + ' checked';}});
   close.onclick=()=>{lb.classList.remove('checked');}
}
export default sub2fn;