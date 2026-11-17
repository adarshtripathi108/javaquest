/* JavaQuest — Problem: Sum of First N Natural Numbers (Java Basics, Easy) */
PROBLEMS.push({
  id: '02-04',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Sum of First N Natural Numbers',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. Pehle n natural numbers ka sum return karo, matlab <b>1 + 2 + ... + n</b>. Formula bhi use kar sakte ho: <b>n x (n + 1) / 2</b>.</p>',
  examples: [ { input: 'n = 5', output: '15', explanation: '1 + 2 + 3 + 4 + 5 = 15.' }, { input: 'n = 10', output: '55', explanation: '1 se 10 tak ka sum 55 hai.' }, { input: 'n = 1', output: '1', explanation: 'Sirf 1 hi hai.' } ],
  constraints: [ '1 <= n <= 100000' ],
  starter: 'class Solution {\n    public int sum(int n) {\n        // TODO: n * (n + 1) / 2 return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int sum(int n) {\n        return n * (n + 1) / 2;\n    }\n}',
  explanation: '<p>Loop se bhi sum nikaal sakte ho, lekin <b>n x (n + 1) / 2</b> formula ek hi step me jawab deta hai. Ye Gauss ka famous formula hai.</p>'
});
