let reverseString = function(s){

   let i = 0,j = s.length-1;
    while(i<j){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;   
    }
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
