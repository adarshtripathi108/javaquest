/* JavaQuest — Problem: Largest of Three Numbers (Control Statements, Easy) */
PROBLEMS.push({
  id: '03-03',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Largest of Three Numbers',
  difficulty: 'Easy',
  statement: '<p>Tumhe teen numbers <b>a</b>, <b>b</b> aur <b>c</b> diye gaye hain. Teenon me se sabse bada number return karo. <b>if-else</b> se compare karke jawab nikaalo.</p>',
  examples: [ { input: 'a = 5, b = 9, c = 3', output: '9', explanation: '9 sabse bada hai.' }, { input: 'a = 10, b = 10, c = 5', output: '10', explanation: '10 sabse bada hai (do baar aaya hai).' }, { input: 'a = -1, b = -5, c = -3', output: '-1', explanation: '-1, -5 aur -3 se bada hai.' } ],
  constraints: [ '-100000 <= a, b, c <= 100000' ],
  starter: 'class Solution {\n    public int largest(int a, int b, int c) {\n        // TODO: if-else se sabse bada number dhoondo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int largest(int a, int b, int c) {\n        if (a >= b && a >= c) {\n            return a;\n        } else if (b >= a && b >= c) {\n            return b;\n        } else {\n            return c;\n        }\n    }\n}',
  explanation: '<p>Pehle check karo ki <b>a</b> dono se bada ya barabar hai ya nahi. Agar nahi, to <b>b</b> check karo. Dono nahi to <b>c</b> hi sabse bada hai.</p>'
});
