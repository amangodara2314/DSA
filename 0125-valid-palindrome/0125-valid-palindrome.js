/**
 * @param {string} s
 * @return {boolean}
 */

var isLetter = (s) =>{
    const charCode = s.charCodeAt()

    return (
        (charCode >= "a".charCodeAt() && charCode <= "z".charCodeAt()) ||
        (charCode >= "A".charCodeAt() && charCode <= "Z".charCodeAt()) ||
        (charCode >= "0".charCodeAt() && charCode <= "9".charCodeAt())
    )
}
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1 

    while(left < right){
        while(left < right && !isLetter(s[left])) left++
        while(left < right && !isLetter(s[right])) right--
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++
        right--
    }

    return true
};

