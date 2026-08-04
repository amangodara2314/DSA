/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    let count = 0

    if(s.length === 1){
        return romanMap[s]
    }

    let pos = s.length - 1

    while(pos >= 0) {
        const currNum = romanMap[s[pos]]
        const nextNum = romanMap[s[pos-1]]
        if(pos > 0 && currNum > nextNum){
            count = count + (currNum - nextNum)
            pos -= 2
        }else{
            count += currNum
            pos--
        }
    }

    return count 
};