/* JavaQuest — Problem: Grade Calculator (Control Statements, Easy) */
PROBLEMS.push({
  id: '03-01',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Grade Calculator',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek student ke marks (0 se 100) diye gaye hain. Marks ke hisaab se grade return karo: <b>90 ya upar A</b>, <b>75 ya upar B</b>, <b>60 ya upar C</b>, <b>40 ya upar D</b>, aur isse kam <b>F</b>. Ye problem <b>if-else if</b> chain ki practice hai.</p>',
  examples: [ { input: 'marks = 95', output: 'A', explanation: '95, 90 ya usse upar hai, isliye grade A.' }, { input: 'marks = 72', output: 'C', explanation: '72, 75 se kam lekin 60 ya usse upar hai, isliye grade C.' }, { input: 'marks = 35', output: 'F', explanation: '35, 40 se kam hai, isliye grade F.' } ],
  constraints: [ '0 <= marks <= 100' ],
  starter: 'class Solution {\n    public String grade(int marks) {\n        // TODO: if-else if chain se grade return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String grade(int marks) {\n        if (marks >= 90) {\n            return "A";\n        } else if (marks >= 75) {\n            return "B";\n        } else if (marks >= 60) {\n            return "C";\n        } else if (marks >= 40) {\n            return "D";\n        } else {\n            return "F";\n        }\n    }\n}',
  explanation: '<p>Conditions ko <b>bade se chhote</b> order me check karo. Pehle 90, phir 75, phir 60, phir 40. Jo pehli condition true hogi, wahi grade milega.</p>'
});
