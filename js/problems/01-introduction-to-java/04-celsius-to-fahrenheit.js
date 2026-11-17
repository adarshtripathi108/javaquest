/* JavaQuest — Problem: Celsius to Fahrenheit (Introduction to Java, Easy) */
PROBLEMS.push({
  id: '01-04',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Celsius to Fahrenheit',
  difficulty: 'Easy',
  statement: '<p>Tumhe temperature Celsius me diya gaya hai. Use Fahrenheit me convert karke return karo. Formula hai: <b>F = (C x 9 / 5) + 32</b>. Is problem me <b>double</b> data type ka use samajh aayega.</p>',
  examples: [ { input: 'c = 0', output: '32.0', explanation: '(0 x 9 / 5) + 32 = 32.' }, { input: 'c = 100', output: '212.0', explanation: '(100 x 9 / 5) + 32 = 180 + 32 = 212.' }, { input: 'c = 37', output: '98.6', explanation: '(37 x 9 / 5) + 32 = 66.6 + 32 = 98.6.' } ],
  constraints: [ '-100 <= c <= 100' ],
  starter: 'class Solution {\n    public double toFahrenheit(double c) {\n        // TODO: (c * 9 / 5) + 32 return karo\n        return 0.0;\n    }\n}',
  solution: 'class Solution {\n    public double toFahrenheit(double c) {\n        return (c * 9 / 5) + 32;\n    }\n}',
  explanation: '<p><b>double</b> decimal values ke liye hota hai. Formula seedha apply karo. Dhyan rakho: <b>9 / 5</b> ko int division mat samajhna, yahan c double hai isliye poori calculation decimal me hoti hai.</p>'
});
