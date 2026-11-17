/* JavaQuest — Problem: Reverse a String (Strings, Easy) */
PROBLEMS.push({
  id: '8-01',
  topicId: 8,
  topic: 'Strings',
  title: 'Reverse a String',
  difficulty: 'Easy',
  statement: '<p>Ek string ko ulta karo. <code>StringBuilder</code> ka <code>reverse()</code> method is kaam ko ek line me kar deta hai — string ko StringBuilder me daalo, reverse karo, aur wapas string me badlo. Method <code>reverseString</code> ko ek string milegi aur use uska ulta version return karna hai.</p>',
  examples: [
    { input: 's = "hello"', output: '"olleh"', explanation: 'hello ulta karne par olleh banta hai.' },
    { input: 's = "Java"', output: '"avaJ"', explanation: 'Java ulta karne par avaJ banta hai.' }
  ],
  constraints: ['string ki length 1 se 1000 ke beech hogi'],
  starter: 'class Solution {\n    String reverseString(String s) {\n        // TODO: StringBuilder se string ulta karke return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String reverseString(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n}',
  explanation: '<p>String immutable hoti hai, isliye ulta karne ke liye <code>StringBuilder</code> use hota hai jo mutable hai. Uska built-in <code>reverse()</code> characters ko ulta kar deta hai aur <code>toString()</code> se wapas String mil jati hai.</p>'
});
