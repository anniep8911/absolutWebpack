import fnc from './fnc';

function sub4fn(){
    const btn  = document.querySelectorAll('.content button');
    const cntSect =  document.querySelectorAll('.content section');
    let flag=[false,false];
    let cnt = [0,0];
    let hg = [0,0];

    btn[0].onclick=(e)=>{  
        if(!flag[0])hg[0] = cntSect[1].clientHeight; flag[0]=true;
        cnt[0] = fnc.sw(4,e.currentTarget);
        fnc.more(hg[0],cnt[0],cntSect[1]);
        console.log(cnt);
    }
    btn[1].onclick=(e)=>{  
        if(!flag[1])hg[1] = cntSect[2].clientHeight; flag[1]=true;
        cnt[1] = fnc.sw(2,e.currentTarget);
        fnc.more(hg[1],cnt[1],cntSect[2]);
        console.log(cnt);
    }



    // btn.forEach((e,ind)=>{
    //     let flag=false;
    //     let cnt = 0;
    //     let hg = 0;
    //     let indend=0;
    //     if(ind==0)indend=4;
    //     else if(ind==1) indend=2;
    //     e.onclick=(e)=>{
    //         if(!flag)hg = cntSect[ind+1].clientHeight; flag=true;
    //         cnt = fnc.sw(indend,e.currentTarget);
    //         fnc.more(hg,cnt,cntSect[ind+1]);
    //     }

    // })
}
export default sub4fn;