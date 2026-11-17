/* JavaQuest — Problem: Interface Static Method (Abstract Classes, Packages & Interfaces, Medium) */
PROBLEMS.push({
  id: '7-10',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Interface Static Method',
  difficulty: 'Medium',
  statement: '<p>Java 8 se interface me <code>static</code> methods bhi likhe ja sakte hain — inhe interface ke naam se call kiya jata hai, object se nahi. <code>MathUtil</code> interface me static method <code>square(int n)</code> ho jo n * n return kare. Method <code>squareNumber</code> use call karke result return kare.</p>',
  examples: [
    { input: 'n = 5', output: '25', explanation: 'MathUtil.square(5) = 5 * 5 = 25.' },
    { input: 'n = 9', output: '81', explanation: 'MathUtil.square(9) = 9 * 9 = 81.' }
  ],
  constraints: ['n ek non-negative integer hoga'],
  starter: 'class Solution {\n    interface MathUtil {\n        static int square(int n) {\n            return n * n;\n        }\n    }\n    int squareNumber(int n) {\n        // TODO: MathUtil.square(n) call karke return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    interface MathUtil {\n        static int square(int n) {\n            return n * n;\n        }\n    }\n    int squareNumber(int n) {\n        return MathUtil.square(n);\n    }\n}',
  explanation: '<p>Interface ke static methods interface se belong karte hain, kisi implementing class se nahi — isliye inhe <code>MathUtil.square(n)</code> ki tarah interface ke naam se call karte hain. Ye utility/helper methods ke liye useful hote hain.</p>'
});
