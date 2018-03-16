
var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(tablica);

function sortowanieBabelkowe(){
  
  var n=tablica.length;
  do 
{
for(var i=0; i<n-1; i++)
  {
  if ( tablica[i]>tablica[i+1])
    {
  var babel=tablica[i];
  tablica[i]=tablica[i+1];
  tablica[i+1]=babel;
    }
  }
  n=n-1;
} while (n>1)

}

console.log(sortowanieBabelkowe());
console.log(tablica);
    
    

