/* JavaQuest — Problem: Generic Pair (Generics, Easy) */
PROBLEMS.push({
  id: '11-03',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Pair',
  difficulty: 'Easy',
  statement: '<p>Ek generic class Pair<K, V> banao jisme ek key aur ek value ho — constructor se dono set karo, getKey aur getValue se wapas lo. Phir Pair<String, Integer> ("Age", 25) bana kar "Age=25" return karo. Do type parameters se key aur value alag-alag type ke ho sakte hain.</p>',
  examples: [
    { input: 'pairDemo()', output: 'Age=25', explanation: 'Key "Age" aur value 25 se "Age=25" banta hai.' },
    { input: 'pairDemo() (dobara chalane par)', output: 'Age=25', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Pair class me do type parameters hone chahiye: <K, V>', 'Key aur value alag types ke ho sakte hain'],
  starter: 'class Solution {\n    String pairDemo() {\n        // TODO: generic Pair banao aur "Age=25" return karo\n        return "";\n    }\n}',
  solution: 'class Pair<K, V> {\n    private K key;\n    private V value;\n\n    Pair(K key, V value) {\n        this.key = key;\n        this.value = value;\n    }\n\n    K getKey() {\n        return key;\n    }\n\n    V getValue() {\n        return value;\n    }\n}\n\nclass Solution {\n    String pairDemo() {\n        Pair<String, Integer> p = new Pair<>("Age", 25);\n        return p.getKey() + "=" + p.getValue();\n    }\n}',
  explanation: '<p>Ek class me ek se zyada type parameters ho sakte hain — K key ke liye aur V value ke liye. Map.Entry bhi isi pattern par bana hai.</p>'
});
