import fnc from './fnc';
function sub1fn(){
    const coBtn = document.querySelectorAll('article .btn button:nth-of-type(1)');
    const likeBtn = document.querySelectorAll('article .btn button:nth-of-type(2)');
    const lb = document.querySelector('.lightBox');
    const close = document.querySelector('.lightBox button');
    const prd  = document.querySelectorAll('article');
    const thBtn = document.querySelectorAll('.btnGroup button');
    let findKey = '';
    
    prd.forEach((e)=>{
        e.className='show';
    });
    
    const stars = document.querySelectorAll('.texts h6');
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

    function prdd(findKey){   
        prd.forEach((e,ind)=>{
            if(e.attributes[0].value.split(' ').indexOf(findKey)>=0){
                prd[ind].className+=' show';
            }else{
                e.classList.remove('show');
            }
        });
    }

    thBtn.forEach(e=>{
        e.onclick=(e)=>{
            findKey= e.currentTarget.innerText.toLowerCase();
            prdd(findKey);
        }
    });

    stars.forEach(e=>{
        e.childNodes.forEach((f,ind)=>{
            f.onclick=()=>{fnc.score(e.childNodes,ind,'red');} 
        });
    });
}
export default sub1fn;