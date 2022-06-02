function main(){
    const pg =document.querySelectorAll('.pagenation li');
    const mnImg  = document.querySelectorAll('.mnImg');
    function pgNation(e,crn,ind){
        for(let i=0; i< pg.length;i++){
            mnImg[i].classList.remove('on');
            pg[i].classList.remove('clicked');
        }
        mnImg[ind].className= mnImg[ind].className+' on';
        crn.className ='clicked';
    }

    pg.forEach((e,ind)=>{
        e.onclick=(e)=>{
            pgNation(e,e.currentTarget,ind);
        }
    });
}

export default main;