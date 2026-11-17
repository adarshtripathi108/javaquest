/* JavaQuest — Problem: First Non-Repeating Character (Collections Framework, Easy) */
PROBLEMS.push({
  id: '12-05',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'First Non-Repeating Character',
  difficulty: 'Easy',
  statement: '<p>Ek string di gayi hai. Pehla aisa character dhoondho jo sirf ek baar aaya ho, aur use return karo. Agar aisa koi character nahi hai to dash (-) return karo. LinkedHashMap use karo taaki characters ka original order barkarar rahe.</p>',
  examples: [
    { input: 'firstUnique("leetcode")', output: 'l', explanation: '"l" sirf ek baar aata hai aur sabse pehle hai.' },
    { input: 'firstUnique("aabb")', output: '-', explanation: 'Har character do baar aata hai, koi unique nahi.' },
    { input: 'firstUnique("swiss")', output: 'w', explanation: '"s" teen baar aata hai, "w" ek baar aur "i" se pehle hai.' }
  ],
  constraints: ['String lowercase letters ki hogi', 'String ki length 1 se 1000 tak'],
  starter: 'import java.util.*;\n\nclass Solution {\n    char firstUnique(String s) {\n        // TODO: pehla non-repeating character dhoondho\n        return 0;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    char firstUnique(String s) {\n        Map<Character, Integer> freq = new LinkedHashMap<>();\n        for (char c : s.toCharArray()) {\n            freq.put(c, freq.getOrDefault(c, 0) + 1);\n        }\n        for (Map.Entry<Character, Integer> e : freq.entrySet()) {\n            if (e.getValue() == 1) {\n                return e.getKey();\n            }\n        }\n        return \'-\';\n    }\n}',
  explanation: '<p>LinkedHashMap insertion order bacha kar rakhta hai, isliye entrySet par pehle se aakhir tak loop karne par pehla unique character hi pehle milega. Koi unique na ho to dash return karo.</p>'
});
