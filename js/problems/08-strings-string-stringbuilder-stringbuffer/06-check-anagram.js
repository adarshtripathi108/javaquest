/* JavaQuest — Problem: Check Anagram (Strings, Medium) */
PROBLEMS.push({
  id: '8-06',
  topicId: 8,
  topic: 'Strings',
  title: 'Check Anagram',
  difficulty: 'Medium',
  statement: '<p>Do strings anagram hoti hain agar unme wahi characters wahi frequency ke saath hon, bas order alag ho — jaise <code>listen</code> aur <code>silent</code>. Pehle length check karo, phir ek frequency array se pehli string ke characters gino aur doosri se ghatao. Agar sab zero ho jaaye to anagram hai.</p>',
  examples: [
    { input: 's = "listen", t = "silent"', output: 'true', explanation: 'Dono me wahi letters wahi ginti me hain.' },
    { input: 's = "hello", t = "world"', output: 'false', explanation: 'Letters alag hain, isliye anagram nahi hai.' }
  ],
  constraints: ['dono strings me sirf lowercase English letters honge', 'length 1 se 1000 ke beech hogi'],
  starter: 'class Solution {\n    boolean isAnagram(String s, String t) {\n        // TODO: frequency array se check karo ki dono anagram hain ya nahi\n        return false;\n    }\n}',
  solution: 'class Solution {\n    boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) {\n            return false;\n        }\n        int[] freq = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            freq[s.charAt(i) - \'a\']++;\n            freq[t.charAt(i) - \'a\']--;\n        }\n        for (int i = 0; i < 26; i++) {\n            if (freq[i] != 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n}',
  explanation: '<p>Ek hi loop me pehli string ke letters gine aur doosri ke ghatae jate hain. Agar dono anagram hain to har letter ka count aakhir me zero ho jayega. Sorting se bachne ki wajah se ye O(n) solution hai.</p>'
});
