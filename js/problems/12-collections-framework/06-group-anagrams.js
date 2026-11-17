/* JavaQuest — Problem: Group Anagrams (Collections Framework, Medium) */
PROBLEMS.push({
  id: '12-06',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Group Anagrams',
  difficulty: 'Medium',
  statement: '<p>Strings ka ek array diya gaya hai. Anagrams ko ek saath group karo — jo strings ek doosre ki anagram hain wo ek hi group me aayengi. Har string ke letters ko sort karke key banao: anagrams ki sorted key same hoti hai. HashMap me key se group banao aur groups ki list return karo.</p>',
  examples: [
    { input: 'groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])', output: '[["eat", "tea", "ate"], ["bat"], ["tan", "nat"]]', explanation: '"eat", "tea", "ate" ek group; "tan", "nat" ek group; "bat" akela. Groups ka order alag ho sakta hai.' },
    { input: 'groupAnagrams(["a"])', output: '[["a"]]', explanation: 'Ek hi string hai, ek hi group.' }
  ],
  constraints: ['Array ki length 1 se 100 tak', 'Strings lowercase letters ki hongi'],
  starter: 'import java.util.*;\n\nclass Solution {\n    List<List<String>> groupAnagrams(String[] strs) {\n        // TODO: anagrams ko group karo\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] chars = s.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}',
  explanation: '<p>Anagrams ke letters sort karne par ek hi key banti hai — jaise "eat" aur "tea" dono ki key "aet" hai. computeIfAbsent se key ke liye list ban jati hai ya mil jati hai, phir string usme add ho jati hai.</p>'
});
