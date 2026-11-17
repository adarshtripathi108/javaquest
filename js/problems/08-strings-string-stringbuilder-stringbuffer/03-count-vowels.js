/* JavaQuest — Problem: Count Vowels (Strings, Easy) */
PROBLEMS.push({
  id: '8-03',
  topicId: 8,
  topic: 'Strings',
  title: 'Count Vowels',
  difficulty: 'Easy',
  statement: '<p>Ek string me vowels (a, e, i, o, u — chhote aur bade dono) ki ginti karo. Har character ko ek ek karke check karo aur vowel milne par count badhao. Method <code>countVowels</code> ko string milegi aur use vowels ki total sankhya return karni hai.</p>',
  examples: [
    { input: 's = "adarsh"', output: '2', explanation: 'Do a hain, baaki sab consonants hain.' },
    { input: 's = "Hello World"', output: '3', explanation: 'e, o aur o — total teen vowels hain.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi'],
  starter: 'class Solution {\n    int countVowels(String s) {\n        // TODO: har character check karo aur vowels gino\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int countVowels(String s) {\n        int count = 0;\n        String vowels = "aeiouAEIOU";\n        for (int i = 0; i < s.length(); i++) {\n            if (vowels.indexOf(s.charAt(i)) != -1) {\n                count++;\n            }\n        }\n        return count;\n    }\n}',
  explanation: '<p>Saare vowels ek string me rakh liye gaye hain. Har character ke liye <code>indexOf</code> check karta hai ki wo vowels wali string me hai ya nahi — -1 ka matlab hai vowel nahi hai.</p>'
});
