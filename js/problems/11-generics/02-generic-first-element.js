/* JavaQuest — Problem: Generic First Element (Generics, Easy) */
PROBLEMS.push({
  id: '11-02',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic First Element',
  difficulty: 'Easy',
  statement: '<p>Ek generic method firstElement likho jo kisi bhi type ke array ka pehla element return kare. Array null ho ya khaali ho to null return karo. Method ka signature <T> T firstElement(T[] arr) hona chahiye — T method ka apna type parameter hai.</p>',
  examples: [
    { input: 'firstElement(new Integer[]{10, 20, 30})', output: '10', explanation: 'Integer array ka pehla element 10 hai.' },
    { input: 'firstElement(new String[]{"a", "b"})', output: 'a', explanation: 'String array ka pehla element "a" hai.' },
    { input: 'firstElement(new Integer[]{})', output: 'null', explanation: 'Khaali array par null return hota hai.' }
  ],
  constraints: ['Method generic hona chahiye: <T> T firstElement(T[] arr)', 'Array null ya khaali ho sakta hai'],
  starter: 'class Solution {\n    <T> T firstElement(T[] arr) {\n        // TODO: pehla element return karo\n        return null;\n    }\n}',
  solution: 'class Solution {\n    <T> T firstElement(T[] arr) {\n        if (arr == null || arr.length == 0) {\n            return null;\n        }\n        return arr[0];\n    }\n}',
  explanation: '<p>Generic method me type parameter return type se pehle likhte hain: <T> T. Compiler call site se T ka type guess kar leta hai, isliye ek hi method Integer, String ya kisi bhi type ke array par chalta hai.</p>'
});
