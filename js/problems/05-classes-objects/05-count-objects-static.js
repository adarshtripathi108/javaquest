/* JavaQuest — Problem: Count Objects with Static (Classes & Objects, Easy) */
PROBLEMS.push({
  id: '5-05',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Count Objects with Static',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Counter</code> class banao jisme ek static variable <code>count</code> ho. Har baar jab naya Counter object bane, constructor <code>count</code> ko 1 se badhaye. Method <code>objectsCreated</code> ko <code>n</code> milega — use <code>n</code> Counter objects bana kar total count return karna hai.</p>',
  examples: [
    { input: 'n = 3', output: '3', explanation: 'Teen objects bane, constructor teen baar chala, count 3 ho gaya.' },
    { input: 'n = 5', output: '5', explanation: 'Paanch objects bane, count 5 ho gaya.' }
  ],
  constraints: ['n ek positive integer hoga'],
  starter: 'class Solution {\n    static class Counter {\n        static int count = 0;\n        Counter() {\n            // TODO: count badhao\n        }\n    }\n    int objectsCreated(int n) {\n        // TODO: n Counter objects banao aur count return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    static class Counter {\n        static int count = 0;\n        Counter() {\n            count++;\n        }\n    }\n    int objectsCreated(int n) {\n        Counter.count = 0;\n        for (int i = 0; i < n; i++) {\n            new Counter();\n        }\n        return Counter.count;\n    }\n}',
  explanation: '<p>Static variable kisi ek object ka nahi, poori class ka hota hai — saare objects use share karte hain. Isliye har naya object constructor ke through wahi ek <code>count</code> badhata hai. Method ke shuru me count ko 0 karna sirf repeatable testing ke liye hai.</p>'
});
