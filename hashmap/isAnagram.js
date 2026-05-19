/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const charCount = map.get(char) || 0;

    if (charCount === 0) {
      return false;
    }

    map.set(char, charCount - 1);
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
