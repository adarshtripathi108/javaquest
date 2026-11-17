/* JavaQuest — Problem: Anagram Check (Collections Framework, Easy) */
PROBLEMS.push({
  id: '12-04',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Anagram Check',
  difficulty: 'Easy',
  statement: '<p>Do strings di gayi hain. Check karo ki wo anagram hain ya nahi — matlab dono me wahi letters wahi count me hon, bas order alag ho. HashMap se pehli string ke letters gino, phir doosri string ke letters ghatao; aakhir me map khaali ho to anagram hai.</p>',
  examples: [
    { input: 'isAnagram("listen", "silent")', output: 'true', explanation: 'Dono me wahi letters hain, bas order alag hai.' },
    { input: 'isAnagram("hello", "world")', output: 'false', explanation: 'Letters alag hain.' }
  ],
  constraints: ['Strings lowercase letters ki hongi', 'Strings ki length 0 se 1000 tak'],
  starter: 'import java.util.*;\n\nclass Solution {\n    boolean isAnagram(String a, String b) {\n        // TODO: HashMap se anagram check karo\n        return false;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    boolean isAnagram(String a, String b) {\n        if (a.length() != b.length()) {\n            return false;\n        }\n        Map<Character, Integer> freq = new HashMap<>();\n        for (char c : a.toCharArray()) {\n            freq.put(c, freq.getOrDefault(c, 0) + 1);\n        }\n        for (char c : b.toCharArray()) {\n            if (!freq.containsKey(c)) {\n                return false;\n            }\n            freq.put(c, freq.get(c) - 1);\n            if (freq.get(c) == 0) {\n                freq.remove(c);\n            }\n        }\n        return freq.isEmpty();\n    }\n}',
  explanation: '<p>Pehli string se frequency map banao, phir doosri string ke har letter ki count ghatao. Agar koi letter map me nahi hai to anagram nahi hai. Aakhir me map khaali hona chahiye.</p>'
});
