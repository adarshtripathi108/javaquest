/* JavaQuest — Problem: First Non-Repeating Character (Strings, Easy) */
PROBLEMS.push({
  id: '8-04',
  topicId: 8,
  topic: 'Strings',
  title: 'First Non-Repeating Character',
  difficulty: 'Easy',
  statement: '<p>Ek string me pehla aisa character dhoondo jo sirf ek baar aaya ho, aur uska index return karo. Agar koi bhi character unique na ho to -1 return karo. Pehle har character ki frequency gino, phir string ko dobara scan karke pehla frequency-1 wala character dhoondo.</p>',
  examples: [
    { input: 's = "aabbc"', output: '4', explanation: 'a aur b do do baar aaye, c ek baar aaya — index 4 par.' },
    { input: 's = "aabb"', output: '-1', explanation: 'Koi bhi character unique nahi hai.' },
    { input: 's = "leetcode"', output: '0', explanation: 'l sirf ek baar aaya hai, index 0 par.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi', 'sirf lowercase English letters honge'],
  starter: 'class Solution {\n    int firstUniqueIndex(String s) {\n        // TODO: pehle unique character ka index return karo, na mile to -1\n        return -1;\n    }\n}',
  solution: 'class Solution {\n    int firstUniqueIndex(String s) {\n        int[] freq = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            freq[s.charAt(i) - \'a\']++;\n        }\n        for (int i = 0; i < s.length(); i++) {\n            if (freq[s.charAt(i) - \'a\'] == 1) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}',
  explanation: '<p>Pehle pass me 26 size ki frequency array me har letter ki ginti hoti hai (<code>ch - a</code> se index nikalta hai). Doosre pass me pehla wahi character milta hai jiski frequency 1 hai — uska index answer hai.</p>'
});
