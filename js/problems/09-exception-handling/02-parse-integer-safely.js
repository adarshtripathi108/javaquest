/* JavaQuest — Problem: Parse Integer Safely (Exception Handling, Easy) */
PROBLEMS.push({
  id: '9-02',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Parse Integer Safely',
  difficulty: 'Easy',
  statement: '<p>Ek string s di gayi hai jo ek integer ho sakti hai ya nahi. Use Integer.parseInt se integer me badlo. Agar string valid number nahi hai to NumberFormatException aayegi — use catch karke 0 return karo.</p>',
  examples: [
    { input: 'parseOrZero("123")', output: '123', explanation: '"123" valid number hai, parse ho jata hai.' },
    { input: 'parseOrZero("12a")', output: '0', explanation: '"12a" valid number nahi hai, NumberFormatException catch hoti hai.' },
    { input: 'parseOrZero("-45")', output: '-45', explanation: 'Negative number bhi parse ho jata hai.' }
  ],
  constraints: ['s ki length 0 se 10 tak', 's null nahi hogi'],
  starter: 'class Solution {\n    int parseOrZero(String s) {\n        // TODO: parse karo, invalid ho to 0 return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int parseOrZero(String s) {\n        try {\n            return Integer.parseInt(s);\n        } catch (NumberFormatException e) {\n            return 0;\n        }\n    }\n}',
  explanation: '<p>Integer.parseInt invalid string par NumberFormatException throw karta hai. try-catch se use sambhal kar 0 return kar do.</p>'
});
