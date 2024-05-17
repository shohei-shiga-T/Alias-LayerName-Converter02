'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("runingJS");

function textConverter(){
    console.log("start_convert")
    const inputText = document.getElementById("input-window");
    const text = inputText.value;
    let SJIS = EscapeSJIS(text)
    let UTF8 = UnescapeUTF8(SJIS);

    const outputText = function(){
        if (UTF8.length === 0) {
            return "ここに結果が表示されます"
        } else{
            return UTF8
        }
    }

    const texpToPage = document.createElement('p');
    texpToPage.setAttribute("id","output-window")
    texpToPage.textContent = outputText();
    const oldtext = document.getElementById("output-window");
    const outputParent =  document.getElementById("output-arer");
    outputParent.replaceChild(texpToPage,oldtext);
}

const convertButton = document.getElementById("start-convert");
convertButton.addEventListener("click",textConverter);