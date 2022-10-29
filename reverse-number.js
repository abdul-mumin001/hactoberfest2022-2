function reverse(num){
  let rev=0;
while(num!=0){
  let LastDigit=num%10;
  rev=rev*10+LastDigit;
  num=Math.floor(num/10)
}  
  return rev
}
console.log(reverse(12345))
console.log(reverse(121))
