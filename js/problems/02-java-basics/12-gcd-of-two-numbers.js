/* JavaQuest — Problem: GCD of Two Numbers (Java Basics, Hard) */
PROBLEMS.push({
  id: '02-12',
  topicId: 2,
  topic: 'Java Basics',
  title: 'GCD of Two Numbers',
  difficulty: 'Hard',
  statement: '<p>Tumhe do positive integers <b>a</b> aur <b>b</b> diye gaye hain. Unka <b>GCD</b> (Greatest Common Divisor) return karo, matlab sabse bada number jo dono ko divide kare. <b>Euclid ka algorithm</b> use karo: bade number ko chhote se divide karke remainder lo, aur jab tak remainder zero na ho, repeat karo.</p>',
  examples: [ { input: 'a = 12, b = 18', output: '6', explanation: '12 aur 18 dono ko divide karne wala sabse bada number 6 hai.' }, { input: 'a = 7, b = 13', output: '1', explanation: '7 aur 13 co-prime hain, inka GCD 1 hai.' }, { input: 'a = 48, b = 36', output: '12', explanation: '48 aur 36 ka GCD 12 hai.' } ],
  constraints: [ '1 <= a, b <= 100000' ],
  starter: 'class Solution {\n    public int gcd(int a, int b) {\n        // TODO: Euclid algorithm: jab tak b != 0, remainder lo aur swap karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int gcd(int a, int b) {\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return a;\n    }\n}',
  explanation: '<p><b>Euclid algorithm</b>: <b>a % b</b> remainder nikaalo, phir a me b aur b me remainder daal do. Jab b zero ho jaye, tab a hi GCD hai. Ye method bahut fast hai.</p>'
});
