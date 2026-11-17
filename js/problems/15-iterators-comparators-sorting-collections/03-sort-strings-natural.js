/* JavaQuest — Problem: Sort Strings in Natural Order (Iterators, Comparators & Sorting Collections, Easy) */
PROBLEMS.push({
  id: '15-03',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Strings in Natural Order',
  difficulty: 'Easy',
  statement: '<p>Strings ki ek list ko alphabetical (natural) order me sort karo aur sorted list return karo. <code>Collections.sort()</code> ka use karo.</p><p>String class <code>Comparable</code> implement karti hai, isliye uska natural order alphabetical hota hai — <code>Collections.sort()</code> bina kisi extra comparator ke yahi order use karta hai.</p>',
  examples: [
    { input: '["banana", "apple", "mango"]', output: '["apple", "banana", "mango"]', explanation: 'Alphabetical order me apple pehle, phir banana, phir mango aata hai.' },
    { input: '["apple", "banana"] (pehle se sorted)', output: '["apple", "banana"]', explanation: 'List pehle se sorted hai to waisi hi rehti hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'Saare strings lowercase hain.', 'Collections.sort() ka use karo.'],
  starter: 'import java.util.Collections;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortStrings(List<String> list) {\n        // TODO: list ko alphabetical order me sort karo\n        return list;\n    }\n}',
  solution: 'import java.util.Collections;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortStrings(List<String> list) {\n        Collections.sort(list);\n        return list;\n    }\n}',
  explanation: '<p><code>Collections.sort(list)</code> list ko uske elements ke natural order me sort kar deta hai — Strings ke liye ye alphabetical order hota hai. Sort in-place hota hai, matlab wahi list badal jati hai.</p>'
});
