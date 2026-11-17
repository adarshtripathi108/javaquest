/* JavaQuest — Problem: Power of a Number (Java Basics, Medium) */
PROBLEMS.push({
  id: '02-10',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Power of a Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek base aur ek exponent diye gaye hain. <b>base^exponent</b> (base ki power exponent) nikaal kar return karo. <b>Math.pow</b> use kiye bina, sirf loop se power nikaalni hai.</p>',
  examples: [ { input: 'base = 2, exp = 5', output: '32', explanation: '2 x 2 x 2 x 2 x 2 = 32.' }, { input: 'base = 5, exp = 0', output: '1', explanation: 'Kisi bhi number ki power 0 hamesha 1 hoti hai.' }, { input: 'base = 3, exp = 3', output: '27', explanation: '3 x 3 x 3 = 27.' } ],
  constraints: [ '0 <= base <= 10', '0 <= exp <= 10' ],
  starter: 'class Solution {\n    public int power(int base, int exp) {\n        // TODO: loop se base ko exp baar multiply karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int power(int base, int exp) {\n        int result = 1;\n        for (int i = 0; i < exp; i++) {\n            result = result * base;\n        }\n        return result;\n    }\n}',
  explanation: '<p>Power ka matlab hai base ko khud se <b>exp</b> baar multiply karna. <b>result = 1</b> se shuru karo aur loop me exp baar base se multiply karo.</p>'
});
