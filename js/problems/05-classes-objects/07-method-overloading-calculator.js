/* JavaQuest — Problem: Method Overloading Calculator (Classes & Objects, Medium) */
PROBLEMS.push({
  id: '5-07',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Method Overloading Calculator',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Calculator</code> class banao jisme <code>add</code> naam ke do overloaded methods hon — ek do <code>int</code> jodta hai aur doosra do <code>double</code> jodta hai. Method <code>addNumbers</code> bhi overloaded hogi — int version int sum return karegi aur double version double sum.</p>',
  examples: [
    { input: 'addNumbers(2, 3)', output: '5', explanation: 'Int wala add chala, 2 + 3 = 5.' },
    { input: 'addNumbers(2.5, 3.5)', output: '6.0', explanation: 'Double wala add chala, 2.5 + 3.5 = 6.0.' }
  ],
  constraints: ['inputs normal numeric range me honge'],
  starter: 'class Solution {\n    class Calculator {\n        int add(int a, int b) {\n            // TODO: int sum return karo\n            return 0;\n        }\n        double add(double a, double b) {\n            // TODO: double sum return karo\n            return 0;\n        }\n    }\n    int addNumbers(int a, int b) {\n        return 0;\n    }\n    double addNumbers(double a, double b) {\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Calculator {\n        int add(int a, int b) {\n            return a + b;\n        }\n        double add(double a, double b) {\n            return a + b;\n        }\n    }\n    int addNumbers(int a, int b) {\n        Calculator c = new Calculator();\n        return c.add(a, b);\n    }\n    double addNumbers(double a, double b) {\n        Calculator c = new Calculator();\n        return c.add(a, b);\n    }\n}',
  explanation: '<p>Method overloading me ek hi naam ke kai methods hote hain, bas parameters alag hote hain. Compiler call ke arguments dekh kar decide karta hai kaunsa version chalega — isliye ise compile-time polymorphism kehte hain.</p>'
});
