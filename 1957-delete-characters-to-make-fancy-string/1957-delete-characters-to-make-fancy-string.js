/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if(s.length < 2) return s
    let result = ""
    let count = 0

    for(let i = 0; i < s.length; i++){
        if(i > 0 && s[i] === s[i-1]){
            count++
        }else{
            count = 1
        }

        if(count <= 2){
            result += s[i]
        }
    }

    return result
};