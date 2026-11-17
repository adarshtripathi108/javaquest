/* JavaQuest — Problem: Safe Division (Exception Handling, Easy) */
PROBLEMS.push({
  id: '9-01',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Safe Division',
  difficulty: 'Easy',
  statement: '<p>Do integers a aur b diye gaye hain. a ko b se divide karo aur quotient return karo. Agar b zero hai to ArithmeticException aayegi — use try-catch se sambhalo aur us case me -1 return karo, program crash nahi hona chahiye.</p>',
  examples: [
    { input: 'safeDivide(10, 2)', output: '5', explanation: '10 / 2 = 5, koi exception nahi aati.' },
    { input: 'safeDivide(10, 0)', output: '-1', explanation: 'Zero se divide karne par ArithmeticException catch hoti hai aur -1 return hota hai.' },
    { input: 'safeDivide(7, 3)', output: '2', explanation: 'Integer division me 7 / 3 = 2.' }
  ],
  constraints: ['-1000 <= a, b <= 1000', 'Division integer division hai'],
  starter: 'class Solution {\n    int safeDivide(int a, int b) {\n        // TODO: try-catch se divide karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int safeDivide(int a, int b) {\n        try {\n            return a / b;\n        } catch (ArithmeticException e) {\n            return -1;\n        }\n    }\n}',
  explanation: '<p>Division ko try block me rakho. b zero hone par JVM ArithmeticException throw karta hai, jo catch block pakad leta hai aur -1 return kar deta hai.</p>'
});
