/* JavaQuest — Problem: Count Word Frequency (Collections Framework, Easy) */
PROBLEMS.push({
  id: '12-01',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Count Word Frequency',
  difficulty: 'Easy',
  statement: '<p>Ek sentence aur ek word diye gaye hain. HashMap se har word ki frequency gino aur diye gaye word ki count return karo. Agar word sentence me nahi hai to 0 return karo. Sentence ko space se split karo.</p>',
  examples: [
    { input: 'countWord("java is fun and java is powerful", "java")', output: '2', explanation: '"java" sentence me 2 baar aata hai.' },
    { input: 'countWord("hello world", "java")', output: '0', explanation: '"java" sentence me nahi hai.' }
  ],
  constraints: ['Sentence me words space se alag hote hain', 'Word lowercase me hoga'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int countWord(String sentence, String word) {\n        // TODO: HashMap se word ki frequency gino\n        return 0;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int countWord(String sentence, String word) {\n        Map<String, Integer> freq = new HashMap<>();\n        for (String w : sentence.split(" ")) {\n            freq.put(w, freq.getOrDefault(w, 0) + 1);\n        }\n        return freq.getOrDefault(word, 0);\n    }\n}',
  explanation: '<p>HashMap me word ko key aur uski count ko value banao. getOrDefault se naya word 0 se shuru hota hai aur har baar ek badhta hai. Aakhir me maange gaye word ki count nikal lo.</p>'
});
