/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     if(s.length !== t.length) return false;

    const sMap = {};
    const tMap = {};

    for(let i=0; i<s.length; i++){
        const sChar = s[i];
        const tChar = t[i];

        if(!sMap[sChar])
            sMap[sChar] = tChar;
        else
            if(sMap[sChar] !== tChar) return false;

        if(!tMap[tChar])
            tMap[tChar] = sChar;
        else
            if(tMap[tChar] !== sChar) return false;
    }
    
    return true
};