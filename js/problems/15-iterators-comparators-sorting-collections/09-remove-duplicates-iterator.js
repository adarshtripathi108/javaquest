/* JavaQuest — Problem: Remove Duplicates with Iterator and Set (Iterators, Comparators & Sorting Collections, Medium) */
PROBLEMS.push({
  id: '15-09',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Remove Duplicates with Iterator and Set',
  difficulty: 'Medium',
  statement: '<p>Strings ki ek list se saare duplicate values hatao, har value ki pehli occurrence bacha kar. Original order same rehna chahiye. <code>Iterator</code> aur <code>HashSet</code> ka combination use karo.</p><p><code>HashSet.add()</code> ek clever trick hai — ye <code>true</code> return karta hai agar value pehli baar add hui, aur <code>false</code> agar wo pehle se set me thi. False milte hi samjho duplicate hai.</p>',
  examples: [
    { input: '["java", "python", "java", "c", "python"]', output: '["java", "python", "c"]', explanation: 'Dusri "java" aur dusri "python" duplicate hain, isliye remove ho jati hain. Pehli occurrence aur order bach jata hai.' },
    { input: '["a", "b", "c"] (koi duplicate nahi)', output: '["a", "b", "c"]', explanation: 'Koi duplicate nahi hai to list waisi hi rehti hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'Pehli occurrence bachani hai, order same rakhna hai.', 'Iterator.remove() se delete karo.'],
  starter: 'import java.util.HashSet;\nimport java.util.Iterator;\nimport java.util.List;\nimport java.util.Set;\n\nclass Solution {\n    public List<String> removeDuplicates(List<String> list) {\n        // TODO: Iterator + HashSet se duplicates hatao\n        return list;\n    }\n}',
  solution: 'import java.util.HashSet;\nimport java.util.Iterator;\nimport java.util.List;\nimport java.util.Set;\n\nclass Solution {\n    public List<String> removeDuplicates(List<String> list) {\n        Set<String> seen = new HashSet<>();\n        Iterator<String> it = list.iterator();\n        while (it.hasNext()) {\n            String s = it.next();\n            if (!seen.add(s)) {\n                it.remove();\n            }\n        }\n        return list;\n    }\n}',
  explanation: '<p>Har element ko <code>seen</code> set me add karne ki koshish karo — <code>add()</code> false return kare to matlab wo pehle aa chuka hai, isliye <code>it.remove()</code> se use list se hata do. Pehli occurrence hamesha bach jati hai aur order bhi same rehta hai.</p>'
});
