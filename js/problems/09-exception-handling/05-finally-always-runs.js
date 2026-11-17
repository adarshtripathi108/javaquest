/* JavaQuest — Problem: Finally Always Runs (Exception Handling, Easy) */
PROBLEMS.push({
  id: '9-05',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Finally Always Runs',
  difficulty: 'Easy',
  statement: '<p>Do integers a aur b diye gaye hain. Ek message string banao: division safal ho to "Result: q" jahan q quotient hai, aur zero se divide ho to "Error: Division by zero". Dono cases me finally block se message ke end me " | Finally executed" jodna hai, taaki dikh sake ki finally hamesha chalta hai.</p>',
  examples: [
    { input: 'divideMessage(10, 2)', output: 'Result: 5 | Finally executed', explanation: 'Division safal hoti hai, phir bhi finally chalta hai.' },
    { input: 'divideMessage(10, 0)', output: 'Error: Division by zero | Finally executed', explanation: 'Exception ke baad bhi finally chalta hai.' }
  ],
  constraints: ['-1000 <= a, b <= 1000', 'Message ka format exactly same hona chahiye'],
  starter: 'class Solution {\n    String divideMessage(int a, int b) {\n        // TODO: try-catch-finally se message banao\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String divideMessage(int a, int b) {\n        String result;\n        try {\n            result = "Result: " + (a / b);\n        } catch (ArithmeticException e) {\n            result = "Error: Division by zero";\n        } finally {\n            result += " | Finally executed";\n        }\n        return result;\n    }\n}',
  explanation: '<p>finally block hamesha execute hota hai — chahe try safal ho ya exception aaye. Isliye message ke end me finally wala part dono cases me jud jata hai.</p>'
});
