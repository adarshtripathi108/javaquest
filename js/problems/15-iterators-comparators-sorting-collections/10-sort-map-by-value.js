/* JavaQuest — Problem: Sort a Map by Value (Iterators, Comparators & Sorting Collections, Medium) */
PROBLEMS.push({
  id: '15-10',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort a Map by Value',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Map</code> di gayi hai jisme student ka naam uske marks se juda hai. Marks ke hisaab se ascending order me students ke naam ki list return karo.</p><p>Map khud sort nahi hoti, isliye pehle <code>entrySet()</code> ko ek List me badlo, phir <code>Map.Entry.comparingByValue()</code> se entries ko value ke hisaab se sort karo, aur aakhir me keys nikaal lo.</p>',
  examples: [
    { input: '{Adarsh=85, Meena=92, Rahul=78}', output: '["Rahul", "Adarsh", "Meena"]', explanation: 'Marks ascending: Rahul 78, Adarsh 85, Meena 92 — is order me naam return hote hain.' },
    { input: '{Meena=92} (ek hi entry)', output: '["Meena"]', explanation: 'Ek entry hai to wahi naam list me aata hai.' }
  ],
  constraints: ['Map me 0 se 1000 entries ho sakti hain.', 'Sort value (marks) ascending pe hona chahiye.', 'Sirf keys ki list return karo.'],
  starter: 'import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\n\nclass Solution {\n    public List<String> sortKeysByValue(Map<String, Integer> map) {\n        // TODO: entries ko value se sort karke keys return karo\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\n\nclass Solution {\n    public List<String> sortKeysByValue(Map<String, Integer> map) {\n        List<Map.Entry<String, Integer>> entries = new ArrayList<>(map.entrySet());\n        entries.sort(Map.Entry.comparingByValue());\n        List<String> keys = new ArrayList<>();\n        for (Map.Entry<String, Integer> e : entries) {\n            keys.add(e.getKey());\n        }\n        return keys;\n    }\n}',
  explanation: '<p><code>map.entrySet()</code> saari key-value jodiyan deta hai. Unhe ArrayList me daalkar <code>Map.Entry.comparingByValue()</code> se sort karo — ye entries ko value ke hisaab se compare karta hai. Aakhir me sorted entries se sirf keys nikaal kar list bana do.</p>'
});
