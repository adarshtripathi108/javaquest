/* JavaQuest — Problem: Generic Entry to String (Generics, Medium) */
PROBLEMS.push({
  id: '11-10',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Entry to String',
  difficulty: 'Medium',
  statement: '<p>Ek generic method entryToString likho jo do type parameters le — K key ke liye aur V value ke liye — aur unhe "key=value" format ki string me jod kar return kare. Jaise ("name", "Adarsh") se "name=Adarsh" aur (1, 100) se "1=100" bane.</p>',
  examples: [
    { input: 'entryToString("name", "Adarsh")', output: 'name=Adarsh', explanation: 'String key aur String value judte hain.' },
    { input: 'entryToString(1, 100)', output: '1=100', explanation: 'Integer key aur Integer value judte hain.' }
  ],
  constraints: ['Method me do type parameters hone chahiye: <K, V>', 'Key aur value alag types ke ho sakte hain'],
  starter: 'class Solution {\n    <K, V> String entryToString(K key, V value) {\n        // TODO: "key=value" string banao\n        return "";\n    }\n}',
  solution: 'class Solution {\n    <K, V> String entryToString(K key, V value) {\n        return key + "=" + value;\n    }\n}',
  explanation: '<p>Ek method me ek se zyada type parameters ho sakte hain — <K, V> likh kar key aur value ke types alag-alag rakh sakte hain. String concatenation har type ka toString use karta hai.</p>'
});
