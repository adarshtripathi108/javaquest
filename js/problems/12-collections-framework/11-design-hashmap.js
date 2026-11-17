/* JavaQuest — Problem: Design HashMap (Collections Framework, Hard) */
PROBLEMS.push({
  id: '12-11',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Design HashMap',
  difficulty: 'Hard',
  statement: '<p>Apna khud ka HashMap banao — bina java.util.HashMap use kiye. 1000 buckets ki list rakho, har bucket ek list hai jo key-value pairs (int arrays) rakhti hai. put, get aur remove methods likho; hash function key % 1000 hai. Collision tab hoti hai jab do keys ek hi bucket me jaayein — jaise 1 aur 1001 dono bucket 1 me jaate hain.</p>',
  examples: [
    { input: 'hashMapDemo()', output: 'get(1)=10, get(1001)=30, get(2)=-1', explanation: '1 aur 1001 same bucket me hain par alag values rakhte hain; 2 remove karne ke baad -1 milta hai.' },
    { input: 'hashMapDemo() (dobara chalane par)', output: 'get(1)=10, get(1001)=30, get(2)=-1', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Keys 0 se 1000000 tak hongi', 'HashMap class use nahi karni hai'],
  starter: 'import java.util.*;\n\nclass Solution {\n    String hashMapDemo() {\n        // TODO: apna HashMap banao aur test karo\n        return "";\n    }\n}',
  solution: 'import java.util.*;\n\nclass MyHashMap {\n    private List<List<int[]>> buckets;\n\n    MyHashMap() {\n        buckets = new ArrayList<>();\n        for (int i = 0; i < 1000; i++) {\n            buckets.add(new LinkedList<>());\n        }\n    }\n\n    private int hash(int key) {\n        return key % 1000;\n    }\n\n    void put(int key, int value) {\n        List<int[]> bucket = buckets.get(hash(key));\n        for (int[] pair : bucket) {\n            if (pair[0] == key) {\n                pair[1] = value;\n                return;\n            }\n        }\n        bucket.add(new int[]{key, value});\n    }\n\n    int get(int key) {\n        for (int[] pair : buckets.get(hash(key))) {\n            if (pair[0] == key) {\n                return pair[1];\n            }\n        }\n        return -1;\n    }\n\n    void remove(int key) {\n        List<int[]> bucket = buckets.get(hash(key));\n        bucket.removeIf(pair -> pair[0] == key);\n    }\n}\n\nclass Solution {\n    String hashMapDemo() {\n        MyHashMap map = new MyHashMap();\n        map.put(1, 10);\n        map.put(2, 20);\n        map.put(1001, 30);\n        int a = map.get(1);\n        int b = map.get(1001);\n        map.remove(2);\n        int c = map.get(2);\n        return "get(1)=" + a + ", get(1001)=" + b + ", get(2)=" + c;\n    }\n}',
  explanation: '<p>HashMap ke andar buckets hoti hain aur hash function key ko bucket number deta hai. Collision hone par bucket ke andar list me dhoondhna padta hai — isi ko chaining kehte hain. Yehi Java ke HashMap ka basic design hai.</p>'
});
