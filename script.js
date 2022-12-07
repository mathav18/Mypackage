const Person=function(firstName, lastName, favoriteColor,favoriteNumber){
    this.firstName=firstName;
    this.lastName=lastName;
    this.favoriteColor=favoriteColor;
    this.favoriteNumber=favoriteNumber;

    this.multiplyFavoriteNumber=function(num){
    return this.favoriteNumber*num;
    }
}

const student1=new Person("ThiruMani","Dinesh","Pink",3);
console.log(student1);
console.log(student1.multiplyFavoriteNumber(5));


Array.prototype.sumOfArray=function(arr){
    let sum=0;
    for(let i=0;i<this.length;i++)
    {
        sum+=this[i];
    }
    return sum;
}

let arr=[1,2,3,4,5];
const temp1=new Array();
console.log(temp1.sumOfArray(arr));


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