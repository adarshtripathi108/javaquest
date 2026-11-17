/* JavaQuest — Problem: Remove Duplicate Characters (Strings, Easy) */
PROBLEMS.push({
  id: '8-05',
  topicId: 8,
  topic: 'Strings',
  title: 'Remove Duplicate Characters',
  difficulty: 'Easy',
  statement: '<p>Ek string se duplicate characters hatao, pehli occurrence ka order bana kar rakhte hue. <code>StringBuilder</code> me result banate jao — har character ko sirf tab jodo jab wo pehle se result me na ho. Method <code>removeDuplicates</code> ko string milegi aur use duplicate-free string return karni hai.</p>',
  examples: [
    { input: 's = "banana"', output: '"ban"', explanation: 'b, phir a, phir n — dobara aane wale a aur n ignore hue.' },
    { input: 's = "hello"', output: '"helo"', explanation: 'h, e, l, o — doosra l ignore hua.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi'],
  starter: 'class Solution {\n    String removeDuplicates(String s) {\n        // TODO: StringBuilder se duplicate characters hata kar return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String removeDuplicates(String s) {\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (result.indexOf(String.valueOf(ch)) == -1) {\n                result.append(ch);\n            }\n        }\n        return result.toString();\n    }\n}',
  explanation: '<p><code>StringBuilder.indexOf</code> batata hai ki character result me pehle se hai ya nahi. Sirf naya character hi append hota hai, isliye order bana rehta hai aur duplicates gayab ho jate hain.</p>'
});
