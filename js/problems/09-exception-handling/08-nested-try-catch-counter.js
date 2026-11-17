/* JavaQuest — Problem: Nested Try-Catch Counter (Exception Handling, Medium) */
PROBLEMS.push({
  id: '9-08',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Nested Try-Catch Counter',
  difficulty: 'Medium',
  statement: '<p>Strings ka ek array diya gaya hai. Har string ko integer me parse karke 100 ko usse divide karo. Jo entries safal hoti hain unhe gino aur count return karo. Kharab entry (invalid number ya zero) ko inner catch se skip karo. Agar poora array hi null hai to outer catch se -1 return karo.</p>',
  examples: [
    { input: 'countSuccessful(["10", "0", "abc", "25"])', output: '2', explanation: '"10" aur "25" safal hote hain, "0" aur "abc" skip hote hain.' },
    { input: 'countSuccessful(null)', output: '-1', explanation: 'Null array par outer catch se -1 return hota hai.' },
    { input: 'countSuccessful(["5", "4"])', output: '2', explanation: 'Dono entries safal hain.' }
  ],
  constraints: ['Array null ho sakta hai', 'Array ki length 0 se 100 tak'],
  starter: 'class Solution {\n    int countSuccessful(String[] inputs) {\n        // TODO: nested try-catch se safal entries gino\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int countSuccessful(String[] inputs) {\n        int count = 0;\n        try {\n            for (String s : inputs) {\n                try {\n                    int n = Integer.parseInt(s);\n                    int r = 100 / n;\n                    count++;\n                } catch (Exception e) {\n                    // kharab entry skip karo\n                }\n            }\n        } catch (NullPointerException e) {\n            return -1;\n        }\n        return count;\n    }\n}',
  explanation: '<p>Inner try-catch har entry ki galti ko alag se sambhalta hai taaki loop rukta nahi. Outer try-catch poore array ke null hone ki galti ko pakadta hai. Nested try isi tarah alag-alag level ki galtiyan sambhalta hai.</p>'
});
