/* JavaQuest — Problem: Check Palindrome (Strings, Easy) */
PROBLEMS.push({
  id: '8-02',
  topicId: 8,
  topic: 'Strings',
  title: 'Check Palindrome',
  difficulty: 'Easy',
  statement: '<p>Palindrome wo string hoti hai jo aage se aur peeche se ek jaisi padhi jaaye, jaise <code>madam</code>. Do pointers use karo — ek shuru se, ek aakhir se — aur dono taraf ke characters compare karte hue beech tak pahuncho. Agar saare match karein to true, warna false.</p>',
  examples: [
    { input: 's = "madam"', output: 'true', explanation: 'madam aage se aur peeche se ek jaisi hai.' },
    { input: 's = "hello"', output: 'false', explanation: 'h aur o match nahi karte, isliye palindrome nahi hai.' },
    { input: 's = "racecar"', output: 'true', explanation: 'racecar dono taraf se ek jaisi padhi jati hai.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi', 'sirf lowercase English letters honge'],
  starter: 'class Solution {\n    boolean isPalindrome(String s) {\n        // TODO: do pointers se check karo ki string palindrome hai ya nahi\n        return false;\n    }\n}',
  solution: 'class Solution {\n    boolean isPalindrome(String s) {\n        int left = 0;\n        int right = s.length() - 1;\n        while (left < right) {\n            if (s.charAt(left) != s.charAt(right)) {\n                return false;\n            }\n            left++;\n            right--;\n        }\n        return true;\n    }\n}',
  explanation: '<p>Two-pointer technique me left pointer shuru se aur right pointer aakhir se chalta hai. Pehla mismatch milte hi false return ho jata hai, warna loop beech tak pahunch kar true return karta hai. Time O(n) aur extra space O(1) hai.</p>'
});
