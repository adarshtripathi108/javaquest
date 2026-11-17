/* JavaQuest — Problem: Simple Interest (Introduction to Java, Medium) */
PROBLEMS.push({
  id: '01-07',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Simple Interest',
  difficulty: 'Medium',
  statement: '<p>Principal amount <b>P</b>, rate <b>R</b> (percent per year) aur time <b>T</b> (years) diye gaye hain. Simple Interest nikaalo. Formula hai: <b>SI = (P x R x T) / 100</b>.</p>',
  examples: [ { input: 'P = 1000, R = 5, T = 2', output: '100.0', explanation: '(1000 x 5 x 2) / 100 = 10000 / 100 = 100.' }, { input: 'P = 5000, R = 8, T = 3', output: '1200.0', explanation: '(5000 x 8 x 3) / 100 = 120000 / 100 = 1200.' } ],
  constraints: [ '0 < P <= 100000', '0 < R <= 20', '0 < T <= 30' ],
  starter: 'class Solution {\n    public double simpleInterest(double p, double r, double t) {\n        // TODO: (p * r * t) / 100 return karo\n        return 0.0;\n    }\n}',
  solution: 'class Solution {\n    public double simpleInterest(double p, double r, double t) {\n        return (p * r * t) / 100;\n    }\n}',
  explanation: '<p>Formula seedha apply karo. <b>double</b> use karne se decimal answer bhi sahi aata hai, int division ki galti nahi hoti.</p>'
});
