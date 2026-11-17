/* JavaQuest — Problem: Print Star Pattern (Introduction to Java, Easy) */
PROBLEMS.push({
  id: '01-05',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Print Star Pattern',
  difficulty: 'Easy',
  statement: '<p>Ek fixed star pattern return karo jisme 3 lines hain: pehli line me 1 star, dusri me 2 stars, teesri me 3 stars. Har line ke beech me <b>newline (\\n)</b> aata hai. Ye problem escape sequences sikhata hai.</p>',
  examples: [ { input: '(koi input nahi)', output: '*\n**\n***', explanation: 'Teen lines: pehli me 1 star, dusri me 2, teesri me 3.' }, { input: '(koi input nahi)', output: '*\n**\n***', explanation: 'Pattern har baar same rehta hai kyunki ye fixed hai.' } ],
  constraints: [ 'Pattern me bilkul 3 lines honi chahiye.', 'Aakhri line ke baad koi extra newline nahi.' ],
  starter: 'class Solution {\n    public String pattern() {\n        // TODO: "*\\n**\\n***" return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String pattern() {\n        return "*\\n**\\n***";\n    }\n}',
  explanation: '<p>Java me <b>\\n</b> ek escape sequence hai jo nayi line shuru karta hai. String me stars ke beech <b>\\n</b> daal do, teen lines ban jayengi.</p>'
});
