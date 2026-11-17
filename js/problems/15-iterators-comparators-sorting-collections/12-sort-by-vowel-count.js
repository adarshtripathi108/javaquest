/* JavaQuest — Problem: Sort Strings by Vowel Count (Iterators, Comparators & Sorting Collections, Hard) */
PROBLEMS.push({
  id: '15-12',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Strings by Vowel Count',
  difficulty: 'Hard',
  statement: '<p>Strings ki ek list ko unme maujood vowels (a, e, i, o, u) ki sankhya ke hisaab se sort karo — zyada vowels wali string pehle. Barabar vowels hon to alphabetical order use karo.</p><p>Iske liye ek helper method likho jo kisi string me vowels gine, aur phir us helper ko <code>Comparator.comparingInt()</code> ke andar use karo. Custom logic ko comparator se alag rakhna code ko saaf rakhta hai.</p>',
  examples: [
    { input: '["sky", "java", "banana", "code"]', output: '["banana", "code", "java", "sky"]', explanation: 'Vowels: banana 3, java 2, code 2, sky 0. Descending me banana pehle, phir 2-vowel wale alphabetical (code, java), aakhir me sky.' },
    { input: '["bb", "aa"]', output: '["aa", "bb"]', explanation: '"aa" me 2 vowels hain aur "bb" me 0, isliye aa pehle aata hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'Vowels: a, e, i, o, u (bade aur chhote dono).', 'Order: vowel count desc, phir alphabetical.'],
  starter: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortByVowelCount(List<String> list) {\n        // TODO: vowel count se sort karo (hint: ek helper method banao)\n        return list;\n    }\n}',
  solution: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortByVowelCount(List<String> list) {\n        list.sort(Comparator.comparingInt((String s) -> countVowels(s)).reversed()\n            .thenComparing(Comparator.naturalOrder()));\n        return list;\n    }\n\n    private int countVowels(String s) {\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if ("aeiouAEIOU".indexOf(c) >= 0) {\n                count++;\n            }\n        }\n        return count;\n    }\n}',
  explanation: '<p><code>countVowels</code> helper har character ko <code>"aeiouAEIOU"</code> me dhoondhta hai — <code>indexOf</code> -1 se bada ho to wo vowel hai. Comparator is helper ko key ki tarah use karta hai, <code>reversed()</code> descending karta hai, aur <code>thenComparing</code> tie me alphabetical order deta hai.</p>'
});
