let outpnumEl=document.getElementById('outpnum')

function tab(){ 
    outpnumEl.innerHTML='';
    let startEl=parseInt(document.getElementById('start').value);
    let endEl=parseInt(document.getElementById('ending').value) ;
    let resultEl=parseInt(document.getElementById('result').value );
    for (num=startEl; num<endEl;num++){
        outpnumEl.innerHTML+=`${resultEl} x ${num} = ${num*resultEl}<br>`
    }
}