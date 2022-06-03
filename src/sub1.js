function sub1fn(){
    const coBtn = document.querySelectorAll('article .btn button:nth-of-type(1)');
    const likeBtn = document.querySelectorAll('article .btn button:nth-of-type(2)');
    const lb = document.querySelector('.lightBox');
    const close = document.querySelector('.lightBox button');
    const prd  = document.querySelectorAll('article');
    
    coBtn.forEach(e=>{
        e.onclick=()=>{
            lb.className = lb.className + ' checked';
        }
    });
    
    likeBtn.forEach((e,ind)=>{
        let flag =false;
        e.onclick=()=>{
            if(!flag){
                prd[ind].className = prd[ind].className + ' like';
            }else{
                prd[ind].classList.remove('like');
            }
            flag= !flag;
        }
    })
    
    close.onclick=()=>{
        lb.classList.remove('checked');
    }
}
export default sub1fn;