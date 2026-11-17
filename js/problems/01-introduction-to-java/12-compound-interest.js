/* JavaQuest — Problem: Compound Interest (Introduction to Java, Hard) */
PROBLEMS.push({
  id: '01-12',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Compound Interest',
  difficulty: 'Hard',
  statement: '<p>Principal <b>P</b>, annual rate <b>R</b> percent aur time <b>T</b> years diye gaye hain. Compound Interest ke baad total amount nikaalo. Formula hai: <b>Amount = P x (1 + R/100)^T</b>. Answer ko 2 decimal places tak round karke return karo. Power ke liye <b>Math.pow</b> use karo.</p>',
  examples: [ { input: 'P = 1000, R = 10, T = 2', output: '1210.0', explanation: '1000 x (1.10)^2 = 1000 x 1.21 = 1210.' }, { input: 'P = 2000, R = 10, T = 3', output: '2662.0', explanation: '2000 x (1.10)^3 = 2000 x 1.331 = 2662.' }, { input: 'P = 1500, R = 8, T = 2', output: '1749.6', explanation: '1500 x (1.08)^2 = 1500 x 1.1664 = 1749.6.' } ],
  constraints: [ '0 < P <= 100000', '0 < R <= 20', '1 <= T <= 10' ],
  starter: 'class Solution {\n    public double compoundInterest(double p, double r, double t) {\n        // TODO: Math.pow use karke amount nikaalo aur 2 decimal tak round karo\n        return 0.0;\n    }\n}',
  solution: 'class Solution {\n    public double compoundInterest(double p, double r, double t) {\n        double amount = p * Math.pow(1 + r / 100, t);\n        return Math.round(amount * 100.0) / 100.0;\n    }\n}',
  explanation: '<p><b>Math.pow(base, exponent)</b> power nikalta hai. Amount nikalne ke baad 2 decimal tak round karne ke liye <b>Math.round(amount * 100.0) / 100.0</b> use karo.</p>'
});
