/* JavaQuest — Problem: Even or Odd (Java Basics, Easy) */
PROBLEMS.push({
  id: '02-01',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Even or Odd',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Check karo ki wo <b>even</b> (sam) hai ya <b>odd</b> (visham). Agar even hai to <b>true</b> return karo, warna <b>false</b>. Hint: <b>%</b> (modulo) operator se remainder milta hai.</p>',
  examples: [ { input: 'n = 4', output: 'true', explanation: '4 ko 2 se divide karne par remainder 0 aata hai, isliye even hai.' }, { input: 'n = 7', output: 'false', explanation: '7 ko 2 se divide karne par remainder 1 aata hai, isliye odd hai.' }, { input: 'n = 0', output: 'true', explanation: '0 even hota hai kyunki 0 % 2 = 0.' } ],
  constraints: [ '-100000 <= n <= 100000' ],
  starter: 'class Solution {\n    public boolean isEven(int n) {\n        // TODO: n % 2 == 0 check karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isEven(int n) {\n        return n % 2 == 0;\n    }\n}',
  explanation: '<p><b>n % 2</b> n ko 2 se divide karke remainder deta hai. Even number ka remainder 0 hota hai, odd ka 1 (ya -1 negative numbers ke liye).</p>'
});
