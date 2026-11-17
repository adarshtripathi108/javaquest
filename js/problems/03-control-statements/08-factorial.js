/* JavaQuest — Problem: Factorial of a Number (Control Statements, Medium) */
PROBLEMS.push({
  id: '03-08',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Factorial of a Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. Uska <b>factorial</b> return karo, matlab 1 se n tak ke saare numbers ka product. Jaise 5! = 1 x 2 x 3 x 4 x 5 = 120. Yaad rakho, <b>0! = 1</b> hota hai. Answer bada ho sakta hai isliye <b>long</b> return karo.</p>',
  examples: [ { input: 'n = 5', output: '120', explanation: '1 x 2 x 3 x 4 x 5 = 120.' }, { input: 'n = 0', output: '1', explanation: '0 ka factorial 1 hota hai.' }, { input: 'n = 10', output: '3628800', explanation: '1 se 10 tak ka product 3628800 hai.' } ],
  constraints: [ '0 <= n <= 20' ],
  starter: 'class Solution {\n    public long factorial(int n) {\n        // TODO: loop se 1..n ka product nikaalo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public long factorial(int n) {\n        long result = 1;\n        for (int i = 2; i <= n; i++) {\n            result = result * i;\n        }\n        return result;\n    }\n}',
  explanation: '<p><b>result = 1</b> se shuru karo aur 2 se n tak har number se multiply karo. n = 0 ho to loop chalega hi nahi aur jawab 1 milega, jo sahi hai.</p>'
});
