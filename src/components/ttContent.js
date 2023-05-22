export default{
    titleContents : function ttCon(tt, title, titVis, btlVis){
    let conn =  '';
    for(let i=0; i<tt; i++){
            conn+=`<article>
            <h3>${title[i]}</h3>
            ${
                btlVis===1?`<div class="imgBottle imges i${i+1}">${title[i]}</div>`:``
            }
            <div class="image imges i${i+1}">${title[i]}</div>
            ${
                titVis===1?`<div class="texts"><h2>${title[i]}</h2></div>`:``
            }
            </article>`;
    }
    return conn;
}
}