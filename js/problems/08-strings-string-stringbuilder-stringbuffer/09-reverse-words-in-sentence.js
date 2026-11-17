/* JavaQuest — Problem: Reverse Words in a Sentence (Strings, Medium) */
PROBLEMS.push({
  id: '8-09',
  topicId: 8,
  topic: 'Strings',
  title: 'Reverse Words in a Sentence',
  difficulty: 'Medium',
  statement: '<p>Ek sentence me words ka order ulta karo, lekin har word ke andar ke characters waise hi rehne do. Sentence ko spaces par split karo, words ko ulta order me <code>StringBuilder</code> se jodte jao, aur beech me ek space rakho.</p>',
  examples: [
    { input: 's = "hello world java"', output: '"java world hello"', explanation: 'Words ka order ulta hua, words khud nahi badle.' },
    { input: 's = "one two"', output: '"two one"', explanation: 'Do words ka order ulta hua.' }
  ],
  constraints: ['words ke beech ek hi space hogi', 'shuru ya aakhir me space nahi hogi'],
  starter: 'class Solution {\n    String reverseWords(String s) {\n        // TODO: words ka order ulta karke sentence return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String reverseWords(String s) {\n        String[] words = s.split(" ");\n        StringBuilder result = new StringBuilder();\n        for (int i = words.length - 1; i >= 0; i--) {\n            result.append(words[i]);\n            if (i > 0) {\n                result.append(" ");\n            }\n        }\n        return result.toString();\n    }\n}',
  explanation: '<p><code>split(" ")</code> sentence ko words ki array me tod deta hai. Phir array ko peeche se aage ki taraf padh kar words <code>StringBuilder</code> me jode jate hain — aakhir wale word ke baad extra space nahi aati.</p>'
});
