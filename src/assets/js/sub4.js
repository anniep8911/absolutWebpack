import fnc from './fnc';

function sub4fn(){
    const btn  = document.querySelectorAll('.content button');
    const cntSect =  document.querySelectorAll('.content section');
    let [flag,cnt,hg,now,endIdx]=[[false,false],[1,1],[0,0],['on','on'],[4,2]];


    btn.forEach((e,ind)=>{
        e.onclick=(e)=>{
            if(!flag[ind])hg[ind] = cntSect[ind+1].clientHeight; flag[ind]=true;
            if(now[ind]=='on')cnt[ind]++;
            else cnt[ind]--;
            now[ind] = fnc.sw(cnt[ind],endIdx[ind],e.currentTarget);
            fnc.more(hg[ind],cnt[ind],cntSect[ind+1]);
        }
    });
}
export default sub4fn;