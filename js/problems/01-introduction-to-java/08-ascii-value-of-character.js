/* JavaQuest — Problem: ASCII Value of a Character (Introduction to Java, Medium) */
PROBLEMS.push({
  id: '01-08',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'ASCII Value of a Character',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek character diya gaya hai. Uska <b>ASCII value</b> (number) return karo. Jaise A ka ASCII 65 hota hai. Java me <b>char</b> ko <b>int</b> me cast karke ye value milti hai.</p>',
  examples: [ { input: 'ch = \'A\'', output: '65', explanation: 'Capital A ka ASCII value 65 hai.' }, { input: 'ch = \'a\'', output: '97', explanation: 'Small a ka ASCII value 97 hai.' }, { input: 'ch = \'0\'', output: '48', explanation: 'Digit 0 ka ASCII value 48 hai.' } ],
  constraints: [ 'ch ek printable ASCII character hai.' ],
  starter: 'class Solution {\n    public int asciiValue(char ch) {\n        // TODO: (int) ch return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int asciiValue(char ch) {\n        return (int) ch;\n    }\n}',
  explanation: '<p>Java me har <b>char</b> andar se ek number hota hai. <b>(int) ch</b> likhke us number ko pa sakte ho. Ye <b>type casting</b> ka example hai.</p>'
});
