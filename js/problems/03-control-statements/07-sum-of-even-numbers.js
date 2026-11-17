/* JavaQuest — Problem: Sum of Even Numbers up to N (Control Statements, Medium) */
PROBLEMS.push({
  id: '03-07',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Sum of Even Numbers up to N',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. <b>1 se n tak</b> ke saare even numbers ka sum return karo. Jaise n = 10 ho to 2 + 4 + 6 + 8 + 10 = 30.</p>',
  examples: [ { input: 'n = 10', output: '30', explanation: '2 + 4 + 6 + 8 + 10 = 30.' }, { input: 'n = 5', output: '6', explanation: '2 + 4 = 6.' }, { input: 'n = 1', output: '0', explanation: '1 tak koi even number nahi hai, isliye sum 0.' } ],
  constraints: [ '1 <= n <= 100000' ],
  starter: 'class Solution {\n    public int sumEven(int n) {\n        // TODO: loop me even numbers jodte jao\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int sumEven(int n) {\n        int sum = 0;\n        for (int i = 2; i <= n; i += 2) {\n            sum += i;\n        }\n        return sum;\n    }\n}',
  explanation: '<p>Loop <b>i = 2</b> se shuru karo aur har baar <b>2</b> badhao, taaki sirf even numbers aayein. Har even number ko sum me jodte jao.</p>'
});
