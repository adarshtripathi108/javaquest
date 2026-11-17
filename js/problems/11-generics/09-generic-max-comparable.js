/* JavaQuest — Problem: Generic Max with Comparable (Generics, Medium) */
PROBLEMS.push({
  id: '11-09',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Max with Comparable',
  difficulty: 'Medium',
  statement: '<p>Ek generic method max likho jo do comparable values me se badi return kare. Type parameter ko Comparable se bound karo: <T extends Comparable<T>> T max(T a, T b). compareTo ka use karo — ye method Integer aur String dono par chalega.</p>',
  examples: [
    { input: 'max(5, 9)', output: '9', explanation: '9 bada hai.' },
    { input: 'max("apple", "banana")', output: 'banana', explanation: 'Alphabet me "banana" "apple" ke baad aata hai.' }
  ],
  constraints: ['Type parameter Comparable<T> se bounded hona chahiye', 'Dono values same type ki hongi'],
  starter: 'class Solution {\n    <T extends Comparable<T>> T max(T a, T b) {\n        // TODO: badi value return karo\n        return a;\n    }\n}',
  solution: 'class Solution {\n    <T extends Comparable<T>> T max(T a, T b) {\n        return a.compareTo(b) >= 0 ? a : b;\n    }\n}',
  explanation: '<p>Comparable bound ki wajah se T par compareTo call kar sakte hain. compareTo negative deta hai agar a chhota hai, zero agar barabar hai, positive agar bada hai — isse bina type jaane compare ho jata hai.</p>'
});
