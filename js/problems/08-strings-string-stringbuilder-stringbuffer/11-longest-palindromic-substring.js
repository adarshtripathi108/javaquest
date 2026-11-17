/* JavaQuest — Problem: Longest Palindromic Substring (Strings, Hard) */
PROBLEMS.push({
  id: '8-11',
  topicId: 8,
  topic: 'Strings',
  title: 'Longest Palindromic Substring',
  difficulty: 'Hard',
  statement: '<p>Ek string ka sabse lamba palindromic substring dhoondo. Har index ko center maan kar dono taraf expand karo — ek baar odd length ke liye (ek character center) aur ek baar even length ke liye (do characters center). Jo sabse lamba palindrome mile use return karo.</p>',
  examples: [
    { input: 's = "babad"', output: '"bab"', explanation: 'Center index 1 se expand karne par "bab" milta hai, jo sabse lamba palindrome hai.' },
    { input: 's = "cbbd"', output: '"bb"', explanation: 'Center 1 aur 2 ke beech expand karne par "bb" milta hai.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi', 'sirf lowercase English letters honge'],
  starter: 'class Solution {\n    int expand(String s, int left, int right) {\n        // TODO: dono taraf expand karo aur palindrome ki length return karo\n        return 0;\n    }\n    String longestPalindrome(String s) {\n        // TODO: har center se expand karke sabse lamba palindrome return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    int expand(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n    String longestPalindrome(String s) {\n        int start = 0;\n        int maxLen = 1;\n        for (int i = 0; i < s.length(); i++) {\n            int len1 = expand(s, i, i);\n            int len2 = expand(s, i, i + 1);\n            int len = len1 > len2 ? len1 : len2;\n            if (len > maxLen) {\n                maxLen = len;\n                start = i - (len - 1) / 2;\n            }\n        }\n        return s.substring(start, start + maxLen);\n    }\n}',
  explanation: '<p>Expand-around-center me har index do tarah ka center banta hai — odd palindrome ke liye ek character aur even ke liye do. Dono taraf characters match karte rahen to expand hota rehta hai. Sabse lamba palindrome track karke <code>substring</code> se nikala jata hai. Time O(n^2), space O(1).</p>'
});
