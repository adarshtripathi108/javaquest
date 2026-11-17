/* JavaQuest — Problem: Add Two Numbers (Introduction to Java, Easy) */
PROBLEMS.push({
  id: '01-02',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Add Two Numbers',
  difficulty: 'Easy',
  statement: '<p>Tumhe do integers <b>a</b> aur <b>b</b> diye gaye hain. Unka sum return karo. Ye problem Java me variables aur <b>+ operator</b> samajhne ke liye hai.</p>',
  examples: [ { input: 'a = 5, b = 7', output: '12', explanation: '5 + 7 = 12.' }, { input: 'a = -3, b = 10', output: '7', explanation: '-3 + 10 = 7. Negative numbers bhi normally add hote hain.' }, { input: 'a = 0, b = 0', output: '0', explanation: '0 + 0 = 0.' } ],
  constraints: [ '-1000 <= a, b <= 1000' ],
  starter: 'class Solution {\n    public int add(int a, int b) {\n        // TODO: a aur b ka sum return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}',
  explanation: '<p>Java me <b>+</b> operator do integers ko add karta hai. Bas <b>a + b</b> return kar do.</p>'
});
