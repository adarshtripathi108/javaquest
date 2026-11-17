/* JavaQuest — Problem: Minimum Window Substring (Strings, Hard) */
PROBLEMS.push({
  id: '8-12',
  topicId: 8,
  topic: 'Strings',
  title: 'Minimum Window Substring',
  difficulty: 'Hard',
  statement: '<p>String <code>s</code> me wo sabse chhota window (substring) dhoondo jisme string <code>t</code> ke saare characters (frequency ke saath) aa jaayein. Sliding window use karo — right pointer se window badhao jab tak saare characters na mil jaayein, phir left pointer se window chhota karke minimum dhoondo. Agar aisa window na ho to khaali string return karo.</p>',
  examples: [
    { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Aakhir ke chaar characters BANC me A, B aur C teeno hain — isse chhota valid window nahi hai.' },
    { input: 's = "a", t = "a"', output: '"a"', explanation: 'Poori string hi minimum window hai.' },
    { input: 's = "a", t = "aa"', output: '""', explanation: 's me sirf ek a hai, do chahiye — koi valid window nahi hai.' }
  ],
  constraints: ['s aur t ki length 1 se 10000 ke beech hogi', 'sirf English letters honge'],
  starter: 'class Solution {\n    String minWindow(String s, String t) {\n        // TODO: sliding window se sabse chhota window dhoondo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String minWindow(String s, String t) {\n        int[] need = new int[128];\n        for (int i = 0; i < t.length(); i++) {\n            need[t.charAt(i)]++;\n        }\n        int required = t.length();\n        int[] window = new int[128];\n        int have = 0;\n        int left = 0;\n        int minLen = Integer.MAX_VALUE;\n        int minStart = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (need[c] > 0) {\n                window[c]++;\n                if (window[c] <= need[c]) {\n                    have++;\n                }\n            }\n            while (have == required) {\n                if (right - left + 1 < minLen) {\n                    minLen = right - left + 1;\n                    minStart = left;\n                }\n                char lc = s.charAt(left);\n                if (need[lc] > 0) {\n                    if (window[lc] <= need[lc]) {\n                        have--;\n                    }\n                    window[lc]--;\n                }\n                left++;\n            }\n        }\n        if (minLen == Integer.MAX_VALUE) {\n            return "";\n        }\n        return s.substring(minStart, minStart + minLen);\n    }\n}',
  explanation: '<p>Sliding window me right pointer window badhata hai aur <code>have</code> ginata hai ki t ke kitne characters mil gaye. Jab saare mil jaayein to left pointer se window chhota kiya jata hai aur minimum record hota hai. Har character zyada se zyada do baar visit hota hai, isliye time O(n) hai.</p>'
});
