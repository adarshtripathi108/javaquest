/* JavaQuest — Problem: Null-Safe String Length (Exception Handling, Easy) */
PROBLEMS.push({
  id: '9-04',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Null-Safe String Length',
  difficulty: 'Easy',
  statement: '<p>Ek string s di gayi hai jo null bhi ho sakti hai. Uska length return karo. Agar s null hai to s.length() call karne par NullPointerException aayegi — use catch karke 0 return karo.</p>',
  examples: [
    { input: 'safeLength("Java")', output: '4', explanation: '"Java" ki length 4 hai.' },
    { input: 'safeLength(null)', output: '0', explanation: 'Null string par NullPointerException catch hoti hai aur 0 return hota hai.' },
    { input: 'safeLength("")', output: '0', explanation: 'Khali string ki length 0 hai.' }
  ],
  constraints: ['s null ho sakti hai', 's ki length 0 se 1000 tak'],
  starter: 'class Solution {\n    int safeLength(String s) {\n        // TODO: length return karo, null ho to 0\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int safeLength(String s) {\n        try {\n            return s.length();\n        } catch (NullPointerException e) {\n            return 0;\n        }\n    }\n}',
  explanation: '<p>Null reference par method call karne se NullPointerException aati hai. try-catch se use pakad kar 0 return kar do. Real code me null check bhi ek option hai, par yahan exception handling practice karni hai.</p>'
});
