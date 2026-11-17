/* JavaQuest — Problem: Maximum of Two Numbers (Java Basics, Easy) */
PROBLEMS.push({
  id: '02-02',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Maximum of Two Numbers',
  difficulty: 'Easy',
  statement: '<p>Tumhe do numbers <b>a</b> aur <b>b</b> diye gaye hain. Dono me se bada number return karo. Agar dono barabar hain to koi bhi ek return kar sakte ho.</p>',
  examples: [ { input: 'a = 5, b = 9', output: '9', explanation: '9 bada hai.' }, { input: 'a = 10, b = 3', output: '10', explanation: '10 bada hai.' }, { input: 'a = -2, b = -8', output: '-2', explanation: '-2, -8 se bada hai.' } ],
  constraints: [ '-100000 <= a, b <= 100000' ],
  starter: 'class Solution {\n    public int max(int a, int b) {\n        // TODO: bada number return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int max(int a, int b) {\n        return a > b ? a : b;\n    }\n}',
  explanation: '<p><b>Ternary operator ( ? : )</b> ek chhota if-else hai. Agar <b>a &gt; b</b> hai to <b>a</b> return karo, warna <b>b</b>.</p>'
});
