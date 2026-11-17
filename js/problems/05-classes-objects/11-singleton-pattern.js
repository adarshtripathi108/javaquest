/* JavaQuest — Problem: Singleton Pattern (Classes & Objects, Hard) */
PROBLEMS.push({
  id: '5-11',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Singleton Pattern',
  difficulty: 'Hard',
  statement: '<p>Ek <code>Singleton</code> class banao jiska sirf ek hi object ban sake — constructor private ho, ek private static instance ho, aur ek public static <code>getInstance()</code> method jo hamesha wahi ek instance return kare. Method <code>checkSingleton</code> ko <code>n</code> milega — use <code>getInstance()</code> ko <code>n</code> baar call karke batana hai ki kya saare references ek hi object ki taraf point karte hain.</p>',
  examples: [
    { input: 'n = 2', output: 'true', explanation: 'Dono baar getInstance() ne wahi ek object diya, isliye references barabar hain.' },
    { input: 'n = 5', output: 'true', explanation: 'Paanch baar call karne par bhi har baar wahi ek instance mila.' }
  ],
  constraints: ['n ek positive integer hoga'],
  starter: 'class Solution {\n    static class Singleton {\n        private static Singleton instance;\n        private Singleton() {\n        }\n        public static Singleton getInstance() {\n            // TODO: agar instance null hai to banao, phir wahi return karo\n            return null;\n        }\n    }\n    boolean checkSingleton(int n) {\n        // TODO: getInstance() ko n baar call karo, sab same hain to true return karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    static class Singleton {\n        private static Singleton instance;\n        private Singleton() {\n        }\n        public static Singleton getInstance() {\n            if (instance == null) {\n                instance = new Singleton();\n            }\n            return instance;\n        }\n    }\n    boolean checkSingleton(int n) {\n        Singleton first = Singleton.getInstance();\n        for (int i = 1; i < n; i++) {\n            if (Singleton.getInstance() != first) {\n                return false;\n            }\n        }\n        return true;\n    }\n}',
  explanation: '<p>Singleton pattern me private constructor bahar se <code>new</code> rok deta hai aur static <code>getInstance()</code> ek hi shared instance deta hai. Pehli call par instance banta hai, baad ki har call wahi return karti hai — isliye <code>==</code> comparison hamesha true hota hai.</p>'
});
