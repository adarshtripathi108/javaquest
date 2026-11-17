/* JavaQuest — Problem: Reverse Each Word with StringBuffer (Strings, Medium) */
PROBLEMS.push({
  id: '8-10',
  topicId: 8,
  topic: 'Strings',
  title: 'Reverse Each Word with StringBuffer',
  difficulty: 'Medium',
  statement: '<p>Ek sentence ke har word ko alag se ulta karo, lekin words ka order waisa hi rakho. <code>StringBuffer</code> ka <code>reverse()</code> method har word ko ulta kar dega — sentence ko words me todo, har word ko StringBuffer se reverse karo, aur phir se jod do.</p>',
  examples: [
    { input: 's = "hello world"', output: '"olleh dlrow"', explanation: 'hello ulta olleh aur world ulta dlrow bana, order waisa hi raha.' },
    { input: 's = "Java is fun"', output: '"avaJ si nuf"', explanation: 'Har word ulta hua — avaJ, si, nuf.' }
  ],
  constraints: ['words ke beech ek hi space hogi', 'shuru ya aakhir me space nahi hogi'],
  starter: 'class Solution {\n    String reverseEachWord(String s) {\n        // TODO: StringBuffer se har word ulta karo, order same rakho\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String reverseEachWord(String s) {\n        String[] words = s.split(" ");\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < words.length; i++) {\n            StringBuffer reversed = new StringBuffer(words[i]);\n            reversed.reverse();\n            result.append(reversed.toString());\n            if (i < words.length - 1) {\n                result.append(" ");\n            }\n        }\n        return result.toString();\n    }\n}',
  explanation: '<p><code>StringBuffer</code> mutable hai aur thread-safe bhi hai — uska <code>reverse()</code> har word ko jagah par ulta kar deta hai. Words ka order loop ke order se waisa hi rehta hai, sirf har word ke andar ke characters ulte hote hain.</p>'
});
