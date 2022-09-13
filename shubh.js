// 1.Count Characters
const countCharacters = (s) => 
{
  let upperA=0,upperD=0,small=0;
  let arr = [];
  for(let i=0;i<s.length;i++){
    if(s[i]=="A"){
      upperA++;
    }
    if(s[i]=="D"){
      upperD++;
    }
  }  
  arr.unshift(upperA,upperD);
  return arr   
}

// 2.Count the Heads
var Count_Occ = (s) => 
{
  let count=1;
  let str='';
  let op="";
  for(let i=0;i<s.length;i++){
    for(j=i+1;j<s.length;j++){
      if(s[i]==s[j]){
        count++;
        
      }
      
    }if(count>1){
      str=s[i];
      op=op+" "+s[i]+count;
      s=s.replace(str,' ');
      s=s.split(str).join('');
      
    }
    count=1;
    
  }return op.split(' ').sort().join('');  
};

// 3. Count the Vowels
var Count_Vowels= (s) => 
{
  let count=0;
   for(let i=0;i<s.length;i++){
     if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
       count++;
     }
   } 
   return count;
};

// 4.Concatenate the Strings

var Concatenate_Strings = (S1, S2) => 
{
     return S1+S2; 
};

//5. Find Length

const findLength = (S) => 
{
  return S.length;  
};

// 6.Find the Winner

var Game_Winner = (s) => 
{
  let count1=0;
  let count2=0;
  for(let i=0; i<s.length; i++ ){
    if(s[i]=="A"){
      count1=count1+1;
    }else{
      count2=count2+1;
    }
  }
  if(count1>count2){
    return "Aditya";
  }else if(count1<count2){
    return "Danish";
  }else{
    return "Draw";
  }
}

// 7.Join Strings

const joinStrings = (S, P) => 
{
   return S.concat(P);
};


// 8.Plaindrome Check

var Palin_Check = (str) =>
{
	   let name1="True", name2="False";
	 let flag=true;
	 let i=0,j=str.length-1;
	 while(i<j){
	   if(str[i]!==str[j]){
	     flag=false;
	     break;
	   }
	   i++;
	   j--;
	 }
	 if(flag==true){
	   return name1;
	 }else{
	   return name2;
	 }
}


// 9.Reverse the String

var Reverse_String = (str) => 
{ 
 let newString="";
 for(let i=str.length-1;i>=0;i--){
   newString+=str[i];
 }
  return newString;
};


// 10.Match the Strings

var String_Match = (S1,S2) => 
{
      if(S1===S2){
        return "YES";
      }
      else{
        return "NO";
      }
};

// 11.String Replace
var Replace = (s, pattern , text) => 
{
    return s.replace(pattern,text) ; 
};

// 12.Split the String

var Split_the_string = (S) => 
{
  
      return S.split(" ");  
};

// 13. Count the Vowels and Consonants
var Count_Vowels= (s) => 
{
   let count=0;
     for(let i=0;i<s.length;i++){
      if (s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
       result=++count;
      }
     }
     return result;
};
var Count_Consonants= (s) => 
{
    let count=0;
    for(let i=0;i<s.length;i++){
      if(s[i]!=="a" && s[i]!=="e" && s[i]!=="i" && s[i]!=="o" && s[i]!=="u"){
        result = ++count;  
      }
    }
    return result;
};

