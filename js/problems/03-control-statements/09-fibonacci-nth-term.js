/* JavaQuest — Problem: Nth Fibonacci Number (Control Statements, Medium) */
PROBLEMS.push({
  id: '03-09',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Nth Fibonacci Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. <b>Fibonacci series</b> ka n-th term return karo. Series 0, 1 se shuru hoti hai aur har agla term pichhle do terms ka sum hota hai: 0, 1, 1, 2, 3, 5, 8, 13, ... Yahan pehla term (n = 0) 0 hai.</p>',
  examples: [ { input: 'n = 0', output: '0', explanation: '0th term 0 hai.' }, { input: 'n = 6', output: '8', explanation: 'Series: 0, 1, 1, 2, 3, 5, 8. 6th term 8 hai.' }, { input: 'n = 10', output: '55', explanation: '10th term 55 hai.' } ],
  constraints: [ '0 <= n <= 40' ],
  starter: 'class Solution {\n    public int fibonacci(int n) {\n        // TODO: loop se n-th Fibonacci term nikaalo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int fibonacci(int n) {\n        if (n == 0) {\n            return 0;\n        }\n        if (n == 1) {\n            return 1;\n        }\n        int a = 0;\n        int b = 1;\n        for (int i = 2; i <= n; i++) {\n            int next = a + b;\n            a = b;\n            b = next;\n        }\n        return b;\n    }\n}',
  explanation: '<p>Sirf pichhle do terms (<b>a</b> aur <b>b</b>) yaad rakho. Har step me <b>next = a + b</b> banao, phir a ko b aur b ko next bana do. Loop ke baad b me n-th term hota hai.</p>'
});
