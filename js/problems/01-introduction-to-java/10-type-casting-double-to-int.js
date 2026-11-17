/* JavaQuest — Problem: Type Casting: Double to Int (Introduction to Java, Medium) */
PROBLEMS.push({
  id: '01-10',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Type Casting: Double to Int',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek <b>double</b> value di gayi hai. Use <b>int</b> me convert karke return karo. Yaad rakho, double se int me cast karne par decimal part <b>kaat diya</b> jata hai, round nahi hota. Jaise 9.99 ka int 9 hota hai.</p>',
  examples: [ { input: 'd = 9.99', output: '9', explanation: 'Decimal part .99 kaat diya jata hai, bachta hai 9.' }, { input: 'd = -3.7', output: '-3', explanation: 'Negative me bhi decimal kaat kar -3 milta hai, -4 nahi.' }, { input: 'd = 5.0', output: '5', explanation: '5.0 ka int 5 hai.' } ],
  constraints: [ '-100000.0 <= d <= 100000.0' ],
  starter: 'class Solution {\n    public int castToInt(double d) {\n        // TODO: (int) d return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int castToInt(double d) {\n        return (int) d;\n    }\n}',
  explanation: '<p><b>(int) d</b> explicit type casting hai. Ye decimal part hata deta hai aur number ko zero ki taraf truncate karta hai. Isliye -3.7 ka jawab -3 hota hai, -4 nahi.</p>'
});
