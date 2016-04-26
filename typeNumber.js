/*
typeNumber is a module on Vanilla JS for create input like input[type=number] with easy support css styles.
License: GPLv2
Source: https://github.com/EmgrtE/typeNumber.git
Author: EmgrtE
*/

function simpNumber(input,minValue,maxValue,nameMore,nameLess){
    /*settings*/
    nameMore=nameMore||'more';
    nameLess=nameLess||'less';
    maxValue=maxValue||Infinity;
    minValue=minValue||1;
    input=input||'input[type=number]';

    /*detect elements by selector*/
    var numb=document.querySelectorAll(input);

    /*create new elements*/
    for(var i=0;i<numb.length;i++){
        if(numb[i].type=='number'){
            var inp=document.createElement('input');
            numb[i].style.display='none';
        }else if(numb[i].type=='text'){
            var inp=numb[i];
        }else{
            console.log('oh no! your type of input is not support, please use input[type=text] or input[type=number]');
            return;
        }

        var cont=document.createElement('div'),
            l1=document.createElement('input'),
            l2=document.createElement('input'),
            val=numb[i].value;

        cont.className='type-number-cont';
        inp.setAttribute('data-max',maxValue);
        inp.setAttribute('data-min',minValue);
        inp.className='type-number-input';
        inp.value=val;
        l1.className='type-number-more';
        l2.className='type-number-less';
        l1.value=nameMore;
        l2.value=nameLess;
        l1.type='button';
        l2.type='button';
        numb[i].parentNode.insertBefore(cont,numb[i]);
        cont.appendChild(inp);
        cont.appendChild(l1);
        cont.appendChild(l2);
        if(parseInt(val)<=minValue){
            var classes=l2.className+' inactive';
            l2.className=classes;
        }
        if(parseInt(val)>=maxValue){
            var classes=l1.className+' inactive';
            l1.className=classes;
        }
    }

    /*detect new buttons*/
    var btnMore=document.querySelectorAll('.type-number-more'),
        btnLess=document.querySelectorAll('.type-number-less');

    /*action of btn more*/
    for(var i=0;i<btnMore.length;i++){
        btnMore[i].onclick=function(){
            var newCont=this.parentNode,
                newNumb=newCont.nextSibling,
                newInp=this.previousSibling,
                newMax=newInp.getAttribute('data-max'),
                newVal=newInp.value,
                newL2=this.nextSibling;
            if(newMax!=Infinity){
                newMax=parseInt(newMax);
            }
            if(newVal==newMax-1){
                if(newNumb.type=='number'){
                    newNumb.value=parseInt(newVal)+1;
                }
                newInp.value=parseInt(newVal)+1;
                if(this.className=='type-number-more inactive'){
                    this.className='type-number-more';
                }
                this.className='type-number-more inactive';
            }else if(newVal<newMax){
                if(newNumb.type=='number'){
                    newNumb.value=parseInt(newVal)+1;
                }
                newInp.value=parseInt(newVal)+1;
                if(this.className=='type-number-more inactive'){
                    this.className='type-number-more';
                }
            }else{
                this.className='type-number-more inactive';
            }
            if(newL2.className=='type-number-less inactive'){
                newL2.className='type-number-less';
            }
        };
    }

    /*action of btn less*/
    for(var i=0;i<btnLess.length;i++){
        btnLess[i].onclick=function(){
            var newCont=this.parentNode,
                newNumb=newCont.nextSibling,
                newL1=this.previousSibling,
                newInp=newL1.previousSibling,
                newMin=newInp.getAttribute('data-min'),
                newVal=newInp.value;
            if(parseInt(newVal)==parseInt(newMin)+1){
                if(newNumb.type=='number'){
                    newNumb.value=parseInt(newVal)-1;
                }
                newInp.value=parseInt(newVal)-1;
                this.className='type-number-less inactive';
            }else if(parseInt(newVal)>parseInt(newMin)){
                if(newNumb.type=='number'){
                    newNumb.value=parseInt(newVal)-1;
                }
                newInp.value=parseInt(newVal)-1;
            }else{
                this.className='type-number-less inactive';
            }
            if(newL1.className=='type-number-more inactive'){
                newL1.className='type-number-more';
            }
        };
    }
}

/*
 ___________________________
 | q w e r t y u i o p [ ] |
 |  a s d f g h j k l ; '  |
 |   z x c v b n m , . /   |
 |=========================|
*/
