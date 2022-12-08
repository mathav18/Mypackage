Array.prototype.sumOfArray=function(){
  var arr=this;
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
let arr=[1,2,3,4,5,6];
//const temp1=new Array();
console.log(arr.sumOfArray());
String.prototype.vowelsRemover=function(str){
     let result="";
     str=str.toUpperCase();
     str=str.split("");
     let vowels=["A","E","I","O","U"];
     for(let i=0;i<str.length;i++){
          if(vowels.includes(str[i]))
          {
          }
          else
          {
              result+=str[i];
          }
        }
        return result;
}
const temp2=new String();
console.log(temp2.vowelsRemover("hello world hello jasa"))
