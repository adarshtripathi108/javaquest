/* JavaQuest — Problem: LRU Cache (Collections Framework, Medium) */
PROBLEMS.push({
  id: '12-08',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'LRU Cache',
  difficulty: 'Medium',
  statement: '<p>Ek LRU (Least Recently Used) cache banao jo LinkedHashMap ko extend kare. Constructor me capacity lo aur access-order true rakho, aur removeEldestEntry ko override karke size capacity se bada hone par sabse purani entry hata do. Capacity 2 wale cache me 1 aur 2 daalo, 1 ko access karo, phir 3 daalo — 2 evict ho jayega kyunki wo least recently used tha.</p>',
  examples: [
    { input: 'testLRU()', output: 'get(2)=-1, get(1)=10, get(3)=30', explanation: '2 evict ho gaya, 1 aur 3 cache me hain.' },
    { input: 'testLRU() (dobara chalane par)', output: 'get(2)=-1, get(1)=10, get(3)=30', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Cache ki capacity 2 hai', 'removeEldestEntry ko override karna hai'],
  starter: 'import java.util.*;\n\nclass Solution {\n    String testLRU() {\n        // TODO: LinkedHashMap se LRU cache banao aur test karo\n        return "";\n    }\n}',
  solution: 'import java.util.*;\n\nclass LRUCache extends LinkedHashMap<Integer, Integer> {\n    private int capacity;\n\n    LRUCache(int capacity) {\n        super(capacity, 0.75f, true);\n        this.capacity = capacity;\n    }\n\n    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {\n        return size() > capacity;\n    }\n\n    int getValue(int key) {\n        return getOrDefault(key, -1);\n    }\n}\n\nclass Solution {\n    String testLRU() {\n        LRUCache cache = new LRUCache(2);\n        cache.put(1, 10);\n        cache.put(2, 20);\n        cache.getValue(1);\n        cache.put(3, 30);\n        return "get(2)=" + cache.getValue(2) + ", get(1)=" + cache.getValue(1) + ", get(3)=" + cache.getValue(3);\n    }\n}',
  explanation: '<p>LinkedHashMap ka accessOrder true rakhne par har get us entry ko sabse recent bana deta hai. removeEldestEntry size capacity se bada hote hi sabse purani (least recently used) entry hata deta hai — isi se LRU cache ban jata hai.</p>'
});
