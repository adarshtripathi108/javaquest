/* JavaQuest — Problem: Count Digits in a Number (Java Basics, Medium) */
PROBLEMS.push({
  id: '02-08',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Count Digits in a Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Usme kitne digits hain, ye gino aur return karo. Negative number ka <b>-</b> sign digit nahi gina jata, aur 0 me ek digit hota hai.</p>',
  examples: [ { input: 'n = 12345', output: '5', explanation: '12345 me 5 digits hain.' }, { input: 'n = 0', output: '1', explanation: '0 me ek digit hai.' }, { input: 'n = -99', output: '2', explanation: 'Sign ko chhod kar 99 me 2 digits hain.' } ],
  constraints: [ '-1000000000 <= n <= 1000000000' ],
  starter: 'class Solution {\n    public int countDigits(int n) {\n        // TODO: / 10 se digits hata kar gino\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int countDigits(int n) {\n        if (n == 0) {\n            return 1;\n        }\n        n = Math.abs(n);\n        int count = 0;\n        while (n > 0) {\n            count++;\n            n = n / 10;\n        }\n        return count;\n    }\n}',
  explanation: '<p>Har baar <b>n / 10</b> karne se ek digit kam ho jata hai. Jab tak n zero nahi hota, ginti badhate raho. <b>Math.abs</b> se negative sign hat jata hai aur 0 ko alag se handle karna padta hai.</p>'
});
