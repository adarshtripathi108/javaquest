/* JavaQuest — Problem: Day of the Week (Control Statements, Easy) */
PROBLEMS.push({
  id: '03-05',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Day of the Week',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek number <b>day</b> (1 se 7) diya gaya hai. Us din ka naam return karo: 1 Monday, 2 Tuesday, 3 Wednesday, 4 Thursday, 5 Friday, 6 Saturday, 7 Sunday. Agar number 1 se 7 ke bahar hai to <b>Invalid</b> return karo. <b>switch statement</b> use karo.</p>',
  examples: [ { input: 'day = 1', output: 'Monday', explanation: '1 ka matlab Monday hai.' }, { input: 'day = 5', output: 'Friday', explanation: '5 ka matlab Friday hai.' }, { input: 'day = 9', output: 'Invalid', explanation: '9 koi valid din nahi hai.' } ],
  constraints: [ '-10 <= day <= 10' ],
  starter: 'class Solution {\n    public String dayName(int day) {\n        // TODO: switch se din ka naam return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String dayName(int day) {\n        switch (day) {\n            case 1:\n                return "Monday";\n            case 2:\n                return "Tuesday";\n            case 3:\n                return "Wednesday";\n            case 4:\n                return "Thursday";\n            case 5:\n                return "Friday";\n            case 6:\n                return "Saturday";\n            case 7:\n                return "Sunday";\n            default:\n                return "Invalid";\n        }\n    }\n}',
  explanation: '<p><b>switch</b> ek value ke kai cases handle karta hai. Har din ke liye ek <b>case</b> hai aur galat number ke liye <b>default</b> case Invalid return karta hai.</p>'
});
