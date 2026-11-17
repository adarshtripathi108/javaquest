/* JavaQuest — Problem: Reverse a Number (Java Basics, Medium) */
PROBLEMS.push({
  id: '02-06',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Reverse a Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek non-negative integer <b>n</b> diya gaya hai. Uske digits ko ulta karke naya number return karo. Jaise 123 ulta hoke 321 ban jata hai. Aakhir ke zeros ulta karne par gayab ho jate hain.</p>',
  examples: [ { input: 'n = 123', output: '321', explanation: 'Digits ulte: 3, 2, 1.' }, { input: 'n = 100', output: '1', explanation: 'Ulta karne par 001 banta hai, jo number ke roop me 1 hai.' }, { input: 'n = 5', output: '5', explanation: 'Ek digit ka number ulta karne par same rehta hai.' } ],
  constraints: [ '0 <= n <= 1000000000' ],
  starter: 'class Solution {\n    public int reverse(int n) {\n        // TODO: % aur / se digits nikaal kar ulta number banao\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int reverse(int n) {\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + n % 10;\n            n = n / 10;\n        }\n        return rev;\n    }\n}',
  explanation: '<p><b>n % 10</b> aakhri digit deta hai aur <b>n / 10</b> aakhri digit hata deta hai. Har step me aakhri digit ko <b>rev</b> me jodte jao, number ulta ban jayega.</p>'
});
