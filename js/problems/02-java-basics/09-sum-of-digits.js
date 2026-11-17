/* JavaQuest — Problem: Sum of Digits (Java Basics, Medium) */
PROBLEMS.push({
  id: '02-09',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Sum of Digits',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Uske saare digits ka sum return karo. Jaise 123 ke digits 1, 2, 3 hain aur unka sum 6 hai.</p>',
  examples: [ { input: 'n = 123', output: '6', explanation: '1 + 2 + 3 = 6.' }, { input: 'n = 999', output: '27', explanation: '9 + 9 + 9 = 27.' }, { input: 'n = 0', output: '0', explanation: '0 ka sum 0 hai.' } ],
  constraints: [ '-1000000000 <= n <= 1000000000' ],
  starter: 'class Solution {\n    public int sumDigits(int n) {\n        // TODO: % 10 se digit nikaal kar sum me jodo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int sumDigits(int n) {\n        n = Math.abs(n);\n        int sum = 0;\n        while (n > 0) {\n            sum += n % 10;\n            n = n / 10;\n        }\n        return sum;\n    }\n}',
  explanation: '<p><b>n % 10</b> se aakhri digit milta hai, use sum me jodo, phir <b>n / 10</b> se wo digit hata do. Jab tak digits bache hain, ye repeat karo.</p>'
});
