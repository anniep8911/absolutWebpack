export default{
    scoreContents : function ttCon(tt, title, btns, hashes){
    let conn =  '';
    let btnsDe=``;
    for(let i=0; i<tt; i++){
        if(btns.length > 1){
            for(let j=0; j<btns[i].length; j++){
                btnsDe += `<button>${btns[i][j]}</button>`
                }
        }else{
            for(let j=0; j<btns[0].length; j++){
                btnsDe += `<button>${btns[0][j]}</button>`
            }
        }
            conn+=`
            ${hashes? `<article data-hash="all ${hashes[i]}">`: `<article>`}
            <h3>${title[i]}</h3>
            <div class="image i${i+1}">${title[i]}</div>
            <div class="texts i${i+1}">
                <h4><span class="notranslate">${title[i]}<span></h4>
                <div class="btn">
                    ${
                        btnsDe
                    }
                </div>
                <p><span class="notranslate">★</span><span class="notranslate">★</span><span class="notranslate">★</span><span class="notranslate">★</span><span class="notranslate">★</span></p>
            </div>
        </article>
        ${
            btnsDe=''
        }`;
    }
    return conn;
}
}