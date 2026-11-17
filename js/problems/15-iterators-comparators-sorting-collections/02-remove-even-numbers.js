/* JavaQuest — Problem: Remove Even Numbers with Iterator (Iterators, Comparators & Sorting Collections, Easy) */
PROBLEMS.push({
  id: '15-02',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Remove Even Numbers with Iterator',
  difficulty: 'Easy',
  statement: '<p>Integers ki ek list se saare even numbers hatao aur list wapas return karo. Traverse karte waqt delete karne ke liye <code>Iterator.remove()</code> ka use karo.</p><p>For-each loop ke andar <code>list.remove()</code> call karoge to <code>ConcurrentModificationException</code> aayega — isliye safe tareeka <code>Iterator.remove()</code> hai, jo abhi visit kiye gaye element ko safely hata deta hai.</p>',
  examples: [
    { input: '[1, 2, 3, 4, 5]', output: '[1, 3, 5]', explanation: 'Even numbers 2 aur 4 remove ho jate hain, odd numbers bach jate hain.' },
    { input: '[2, 4, 6]', output: '[] (khaali list)', explanation: 'Saare numbers even hain, isliye sab remove ho jate hain.' }
  ],
  constraints: ['List me 0 se 1000 numbers ho sakte hain.', 'Iterator.remove() ka use karo.', 'Original list hi modify karke return karo.'],
  starter: 'import java.util.Iterator;\nimport java.util.List;\n\nclass Solution {\n    public List<Integer> removeEvens(List<Integer> list) {\n        // TODO: Iterator se even numbers hatao\n        return list;\n    }\n}',
  solution: 'import java.util.Iterator;\nimport java.util.List;\n\nclass Solution {\n    public List<Integer> removeEvens(List<Integer> list) {\n        Iterator<Integer> it = list.iterator();\n        while (it.hasNext()) {\n            if (it.next() % 2 == 0) {\n                it.remove();\n            }\n        }\n        return list;\n    }\n}',
  explanation: '<p><code>it.next()</code> se number lo, <code>% 2 == 0</code> se even check karo, aur even mile to <code>it.remove()</code> se use hata do. Iterator ka remove traverse ke dauraan safe hota hai kyunki wo collection ki internal state ko sahi tarike se update karta hai.</p>'
});
