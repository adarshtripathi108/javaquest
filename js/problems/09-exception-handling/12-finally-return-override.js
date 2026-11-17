/* JavaQuest — Problem: Finally Return Override (Exception Handling, Hard) */
PROBLEMS.push({
  id: '9-12',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Finally Return Override',
  difficulty: 'Hard',
  statement: '<p>Ek method mystery likho: try me n zero ho to ArithmeticException throw karo, warna 10 / n return karo. catch me -1 return karo. finally block me return 99 likho. Socho — finally me return likhne se kya hota hai? Dono inputs par method kya return karega?</p>',
  examples: [
    { input: 'mystery(5)', output: '99', explanation: 'try 2 return karna chahta hai, par finally ka return 99 use override kar deta hai.' },
    { input: 'mystery(0)', output: '99', explanation: 'catch -1 return karna chahta hai, par finally ka return 99 use bhi override kar deta hai.' }
  ],
  constraints: ['-1000 <= n <= 1000', 'finally block me return statement hona chahiye'],
  starter: 'class Solution {\n    int mystery(int n) {\n        // TODO: try-catch-finally likho, finally me return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int mystery(int n) {\n        try {\n            if (n == 0) {\n                throw new ArithmeticException("zero");\n            }\n            return 10 / n;\n        } catch (ArithmeticException e) {\n            return -1;\n        } finally {\n            return 99;\n        }\n    }\n}',
  explanation: '<p>finally block me return likha ho to wahi value return hoti hai — try ya catch ka return override ho jata hai. Ye tricky behavior hai, isliye real code me finally me return likhne se bachte hain, par interview me ye sawal bahut poocha jata hai.</p>'
});
