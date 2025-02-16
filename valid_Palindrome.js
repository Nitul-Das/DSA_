var validPalindrome = function(s) {
    let i = 0, j = s.length - 1; 

    while (i < j) { 
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++; 
            continue;
        }
        
        if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--; 
            continue;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false; 
        }

        i++;
        j--;
    }
    
    return true; 
};

console.log(validPalindrome("A man, a plan, a canal: Panama")); // true
console.log(validPalindrome("race a car")); // false
console.log(validPalindrome(" ")); //