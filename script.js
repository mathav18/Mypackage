Array.prototype.sumOfArray=function(){
  var arr=this;
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}




String.prototype.vowelsRemover=function(){
     let result="";
  let str=this;
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
