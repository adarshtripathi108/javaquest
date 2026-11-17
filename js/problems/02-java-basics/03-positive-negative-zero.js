/* JavaQuest — Problem: Positive, Negative or Zero (Java Basics, Easy) */
PROBLEMS.push({
  id: '02-03',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Positive, Negative or Zero',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Agar n positive hai to <b>Positive</b>, negative hai to <b>Negative</b>, aur zero hai to <b>Zero</b> return karo.</p>',
  examples: [ { input: 'n = 5', output: 'Positive', explanation: '5 zero se bada hai.' }, { input: 'n = -3', output: 'Negative', explanation: '-3 zero se chhota hai.' }, { input: 'n = 0', output: 'Zero', explanation: '0 na positive hai na negative.' } ],
  constraints: [ '-100000 <= n <= 100000' ],
  starter: 'class Solution {\n    public String check(int n) {\n        // TODO: if-else se Positive, Negative ya Zero return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String check(int n) {\n        if (n > 0) {\n            return "Positive";\n        } else if (n < 0) {\n            return "Negative";\n        } else {\n            return "Zero";\n        }\n    }\n}',
  explanation: '<p><b>if-else if-else</b> chain se teen cases handle karo: pehle <b>n &gt; 0</b> check karo, phir <b>n &lt; 0</b>, warna bacha hua case zero hi hai.</p>'
});
