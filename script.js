let input=document.getElementById("input");
let input2=document.getElementById("input2");
let equal=document.getElementById("equal")
equal.addEventListener("click",()=>{
  
 if(input.value==""){
  input2.value="0"
 }
 else{
  let string=input.value.toString()
 input2.value=eval(string)
 input.placeholder=input.value;
 input.value="";
 }
})
let ac=document.getElementById("ac");
ac.addEventListener("click",()=>{
  input.placeholder="0";
  input2.value=""
})