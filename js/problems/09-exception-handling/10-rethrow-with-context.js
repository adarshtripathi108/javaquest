/* JavaQuest — Problem: Rethrow with Context (Exception Handling, Medium) */
PROBLEMS.push({
  id: '9-10',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Rethrow with Context',
  difficulty: 'Medium',
  statement: '<p>Ek method process likho jo 100 ko x se divide karke "Result: q" return kare. Agar x zero hai to inner catch me ArithmeticException pakdo, usme context jod kar nayi ArithmeticException("Failed for x=0") throw karo (rethrow), aur outer catch me use pakad kar "Error: Failed for x=0" return karo.</p>',
  examples: [
    { input: 'process(5)', output: 'Result: 20', explanation: '100 / 5 = 20, koi exception nahi.' },
    { input: 'process(0)', output: 'Error: Failed for x=0', explanation: 'Inner catch rethrow karta hai, outer catch message return karta hai.' }
  ],
  constraints: ['-1000 <= x <= 1000', 'Rethrow me original value ka context hona chahiye'],
  starter: 'class Solution {\n    String process(int x) {\n        // TODO: catch karke context ke saath rethrow karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String process(int x) {\n        try {\n            try {\n                int r = 100 / x;\n                return "Result: " + r;\n            } catch (ArithmeticException e) {\n                throw new ArithmeticException("Failed for x=" + x);\n            }\n        } catch (ArithmeticException e) {\n            return "Error: " + e.getMessage();\n        }\n    }\n}',
  explanation: '<p>Rethrowing ka matlab hai exception pakad kar use aur jaankari ke saath dobara throw karna. Inner catch context jodta hai aur outer catch final handling karta hai — debugging me ye bahut kaam aata hai.</p>'
});
