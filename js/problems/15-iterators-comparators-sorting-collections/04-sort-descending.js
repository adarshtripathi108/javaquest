/* JavaQuest — Problem: Sort Numbers in Descending Order (Iterators, Comparators & Sorting Collections, Easy) */
PROBLEMS.push({
  id: '15-04',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Numbers in Descending Order',
  difficulty: 'Easy',
  statement: '<p>Integers ki ek list ko descending order (bade se chhote) me sort karo aur sorted list return karo. <code>Comparator.reverseOrder()</code> ka use karo.</p><p><code>List.sort()</code> method ek Comparator leta hai — <code>reverseOrder()</code> natural order ka ulta comparator deta hai, isliye numbers bade se chhote sort ho jate hain.</p>',
  examples: [
    { input: '[3, 1, 4, 2]', output: '[4, 3, 2, 1]', explanation: 'Sabse bada 4 pehle aata hai, phir 3, 2 aur aakhir me 1.' },
    { input: '[5] (ek hi element)', output: '[5]', explanation: 'Ek element wali list waisi hi rehti hai.' }
  ],
  constraints: ['List me 0 se 1000 numbers ho sakte hain.', 'Comparator.reverseOrder() ka use karo.', 'Sort descending hona chahiye.'],
  starter: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<Integer> sortDescending(List<Integer> list) {\n        // TODO: list ko descending order me sort karo\n        return list;\n    }\n}',
  solution: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<Integer> sortDescending(List<Integer> list) {\n        list.sort(Comparator.reverseOrder());\n        return list;\n    }\n}',
  explanation: '<p><code>Comparator.reverseOrder()</code> natural order ka ulta comparison karta hai. <code>list.sort()</code> us comparator ke hisaab se list ko in-place sort kar deta hai — numbers bade se chhote ho jate hain.</p>'
});
