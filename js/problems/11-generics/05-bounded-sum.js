/* JavaQuest — Problem: Bounded Type Sum (Generics, Easy) */
PROBLEMS.push({
  id: '11-05',
  topicId: 11,
  topic: 'Generics',
  title: 'Bounded Type Sum',
  difficulty: 'Easy',
  statement: '<p>Ek generic method sum likho jo do numbers ka sum double me return kare. Type parameter ko Number se bound karo: <T extends Number> double sum(T a, T b). Bound ki wajah se method sirf Number types (Integer, Double) par chalega aur doubleValue call kar sakega.</p>',
  examples: [
    { input: 'sum(10, 20)', output: '30.0', explanation: '10 + 20 = 30.0.' },
    { input: 'sum(2.5, 3.5)', output: '6.0', explanation: '2.5 + 3.5 = 6.0.' }
  ],
  constraints: ['Type parameter Number se bounded hona chahiye', 'Return type double hai'],
  starter: 'class Solution {\n    <T extends Number> double sum(T a, T b) {\n        // TODO: dono numbers ka sum return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    <T extends Number> double sum(T a, T b) {\n        return a.doubleValue() + b.doubleValue();\n    }\n}',
  explanation: '<p>extends Number bound batata hai ki T sirf Number ya uska subclass ho sakta hai. Isliye T par doubleValue jaise Number ke methods call kar sakte hain — bina bound ke ye compile nahi hota.</p>'
});
