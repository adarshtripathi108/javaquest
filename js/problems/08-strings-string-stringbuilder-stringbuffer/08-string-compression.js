/* JavaQuest — Problem: String Compression (Strings, Medium) */
PROBLEMS.push({
  id: '8-08',
  topicId: 8,
  topic: 'Strings',
  title: 'String Compression',
  difficulty: 'Medium',
  statement: '<p>Ek string ko compress karo — lagatar aane wale same characters ko character + count ke roop me likho. Jaise <code>aaabbc</code> banega <code>a3b2c1</code>. <code>StringBuilder</code> se result banate jao aur har group ke characters gin kar likhte jao.</p>',
  examples: [
    { input: 's = "aaabbc"', output: '"a3b2c1"', explanation: 'Teen a, do b, ek c — har group character + count me likha gaya.' },
    { input: 's = "abcd"', output: '"a1b1c1d1"', explanation: 'Har character ek baar aaya, isliye har ek ke saath 1 likha gaya.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi', 'sirf lowercase English letters honge'],
  starter: 'class Solution {\n    String compress(String s) {\n        // TODO: lagatar same characters ko character + count me badlo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String compress(String s) {\n        StringBuilder result = new StringBuilder();\n        int i = 0;\n        while (i < s.length()) {\n            char ch = s.charAt(i);\n            int count = 0;\n            while (i < s.length() && s.charAt(i) == ch) {\n                count++;\n                i++;\n            }\n            result.append(ch);\n            result.append(count);\n        }\n        return result.toString();\n    }\n}',
  explanation: '<p>Outer loop har naye group se shuru hota hai aur inner loop us group ke saare same characters gin leta hai. Phir character aur count <code>StringBuilder</code> me jod diye jate hain — string ko baar baar jodne se behtar hai.</p>'
});
