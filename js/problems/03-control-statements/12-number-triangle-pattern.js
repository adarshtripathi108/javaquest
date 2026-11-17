/* JavaQuest — Problem: Number Triangle Pattern (Control Statements, Hard) */
PROBLEMS.push({
  id: '03-12',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Number Triangle Pattern',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. Ek number triangle pattern banao aur string me return karo. Pattern me <b>n</b> rows hoti hain aur i-th row me 1 se i tak ke numbers space se alag hokar likhe hote hain. Rows ke beech newline hota hai.</p>',
  examples: [ { input: 'n = 3', output: '1\n1 2\n1 2 3', explanation: 'Row 1: 1, Row 2: 1 2, Row 3: 1 2 3.' }, { input: 'n = 1', output: '1', explanation: 'Sirf ek row hai.' }, { input: 'n = 4', output: '1\n1 2\n1 2 3\n1 2 3 4', explanation: '4 rows ka triangle.' } ],
  constraints: [ '1 <= n <= 20', 'Aakhri row ke baad koi extra newline nahi.' ],
  starter: 'class Solution {\n    public String numberTriangle(int n) {\n        // TODO: nested loop se triangle pattern banao\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String numberTriangle(int n) {\n        StringBuilder sb = new StringBuilder();\n        for (int row = 1; row <= n; row++) {\n            for (int num = 1; num <= row; num++) {\n                if (num > 1) {\n                    sb.append(" ");\n                }\n                sb.append(num);\n            }\n            if (row < n) {\n                sb.append("\\n");\n            }\n        }\n        return sb.toString();\n    }\n}',
  explanation: '<p><b>Nested loop</b> use karo: bahar wala loop rows ke liye, andar wala loop us row ke numbers ke liye. Har number ke pehle (pehle ke alawa) space daalo, aur har row ke baad (aakhri ke alawa) newline daalo.</p>'
});
