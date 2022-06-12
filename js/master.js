//Create The Main Div 
let mainDiv=document.createElement("div");
//Add Class To The Main Div
mainDiv.className="maindiv";
//Create The Inside Div
let insideDiv=document.createElement("div");
//Add Class To The Inside Div
insideDiv.className="inside";
//Create The Name And The Input Name
let theInput=document.createElement("input");
let theName=document.createTextNode("My Name:");
// Add theInput and theName to the insideDev
insideDiv.appendChild(theName);
insideDiv.appendChild(theInput);
// add the mainDiv and insideDev to the body;
document.body.appendChild(mainDiv);
document.body.appendChild(insideDiv);
//Add Enter button
let enter=document.createElement("span");
//Add class To Enter Button
enter.className="enter";
//Create The Text Enter
let textEnter=document.createTextNode("ENTER");
//Add The Text To The Enter Button
enter.appendChild(textEnter);
// Add The Enter To The Body
document.body.appendChild(enter);

let Name = document.querySelector(".name span")
enter.addEventListener("click",()=>{
    if(theInput.value===""){
        Name.append("Unknow");
    }
    else{
        Name.append(theInput.value);
    }
    mainDiv.remove();
    insideDiv.remove();
    enter.remove();
});
//Create The Arry Which Contict Numbers 
let NumberArry=[1,2,3,4,5,6,7,8,9];
let contener=document.querySelectorAll(".body >div >div");
let elements= document.querySelectorAll(".body div div div")
let theBody=document.querySelector(".body");
let theMainDiv=document.querySelectorAll(".body> div");
for(let i=0;i<50;i++){
    // Choose The Randume Numbers From Arry
    let randomContener=Math.floor(Math.random()*NumberArry.length);
    let randumeNumber=Math.floor(Math.random()*NumberArry.length);
    let randomElement=Math.floor(Math.random()*NumberArry.length);
    let element =contener[randomContener].children[randumeNumber];
    if(element.innerHTML===""){
        let span=document.createElement("span");
        let strong=document.createElement("strong");
        strong.append(randomElement+1)
        span.append(strong);
        element.appendChild(span);
        
        for(let r=0;r<81;r++){
            let l=elements[r];
            if(l.innerHTML===""){
                continue;
            }else{
                for(let z=0;z<81;z++){
                    let q=elements[z];
                    if(z===r){
                        continue;
                    }else if(l.innerHTML===q.innerHTML){
                        if((l.classList[0]===q.classList[0]||l.classList[1]===q.classList[1])){
                            
                            span.remove();
        
                        }else if(l.parentNode.classList===q.parentNode.classList){
                            
                            span.remove();

                        }else{
                            continue;
                        }
                    }
                }
            }
        }
    }
    
}

let NumBtn=document.querySelectorAll(".numbers div");
let arry=[];
for(let t=0;t<NumBtn.length;t++){
    arry.push(NumBtn[t]);
}
arry.forEach(element=>{
    element.addEventListener("click",(e)=>{
     
        for(let i=0;i<9;i++){

            e.target.parentNode.children[i].classList.remove("activ");
        }
        e.target.classList.add("activ");
        for(let r=0;r,81;r++){
            let el=elements[r];
            el.classList.remove("true");
            localStorage.setItem("valu",e.target.dataset.number);
            el.classList.remove("activ");
            if(e.target.textContent===el.textContent){
                el.classList.add("activ");
                
            }
        }
    })
})
let elementArry=[];

for(let l=0;l<81;l++){
    elementArry.push(elements[l]);
}
elementArry.forEach(element => {
    element.addEventListener("click",(e)=>{
       

        let span=document.createElement("span");
        let num=document.createTextNode(localStorage.getItem("valu",e.target.dataset.number))
        if(e.target.innerHTML===""){
            span.appendChild(num); 
            e.target.appendChild(span);
            
           
        }else if(e.target.innerHTML!==""){
            for(let t=0;t<81;t++){
                if(elements[t].textContent===e.target.textContent){
                    if(elements[t].classList[0]===e.target.classList[0]||elements[t].classList[1]===e.target.classList[1]){
                        elements[t].classList.remove("error");
                    }else if(elements[t].parentNode.classList===e.target.parentNode.classList){
                        elements[t].classList.remove("error");
                    }
                }
            }
            
            let strong=document.querySelectorAll("strong");
            if(e.target.innerHTML!==strong){
                e.target.innerHTML="";
                span.appendChild(num); 
                e.target.appendChild(span);
                e.target.classList.remove("error");
            }
        }
        for(let r=0;r<81;r++){
            let q=e.target;
            let z=elements[r];
            if(z!==q){
                if(q.textContent===z.textContent){
                    if(q.classList[0]===z.classList[0]||q.classList[1]===z.classList[1]){
                        q.classList.add("error");
                        z.classList.add("error");
                    }else if(q.parentNode.classList===z.parentNode.classList){
                        q.classList.add("error");
                        z.classList.add("error");
                    }else{
                        q.classList.add("true");
                        z.classList.add("true");
                    }
                }
            }
        }
      
    })
});