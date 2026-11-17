/* JavaQuest — Problem: Multiplication Table (Introduction to Java, Hard) */
PROBLEMS.push({
  id: '01-11',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Multiplication Table',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. Uski multiplication table 1 se 10 tak banao aur ek string me return karo. Har line ka format hai <b>n x i = result</b> aur lines ke beech newline hota hai.</p>',
  examples: [ { input: 'n = 2', output: '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20', explanation: '2 ki table 1 se 10 tak, har line me 2 x i = answer.' }, { input: 'n = 5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50', explanation: '5 ki table 1 se 10 tak.' } ],
  constraints: [ '1 <= n <= 20', 'Aakhri line ke baad koi extra newline nahi.' ],
  starter: 'class Solution {\n    public String table(int n) {\n        // TODO: 1 se 10 tak ki table string me banao\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String table(int n) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 10; i++) {\n            sb.append(n).append(" x ").append(i).append(" = ").append(n * i);\n            if (i < 10) {\n                sb.append("\\n");\n            }\n        }\n        return sb.toString();\n    }\n}',
  explanation: '<p><b>StringBuilder</b> se string jodna fast hota hai. Loop <b>i = 1 se 10</b> tak chalao, har baar <b>n x i = n*i</b> jodo, aur aakhri line ke alawa har line ke baad <b>\\n</b> daalo.</p>'
});
