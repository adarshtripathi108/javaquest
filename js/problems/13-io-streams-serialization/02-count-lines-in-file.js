/* JavaQuest — Problem: Count Lines in a File (IO Streams & Serialization, Easy) */
PROBLEMS.push({
  id: '13-02',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Count Lines in a File',
  difficulty: 'Easy',
  statement: '<p>Ek text file me kitni lines hain, ye gino. Tumhe <code>BufferedReader</code> ka use karke file ko line by line padhna hai aur total lines ki sankhya return karni hai.</p><p><code>readLine()</code> method har call pe ek line return karta hai aur file khatam hone par <code>null</code> return karta hai — yehi loop ko rokne ka signal hai.</p>',
  examples: [
    { input: 'notes.txt me 3 lines hain: "Java", "Python", "C++"', output: '3', explanation: 'File me 3 lines hain, isliye method 3 return karta hai.' },
    { input: 'empty.txt khaali hai', output: '0', explanation: 'Khaali file me koi line nahi hai, pehla readLine hi null deta hai, isliye 0 return hota hai.' }
  ],
  constraints: ['File ek text file hai.', 'File ka size 1 MB se kam hai.', 'Khaali file ke liye 0 return karo.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public int countLines(String path) throws IOException {\n        // TODO: BufferedReader se lines gino\n        return 0;\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public int countLines(String path) throws IOException {\n        int count = 0;\n        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {\n            while (reader.readLine() != null) {\n                count++;\n            }\n        }\n        return count;\n    }\n}',
  explanation: '<p>BufferedReader file ko efficiently padhta hai. Jab tak <code>readLine()</code> null nahi deta, har line ke liye counter badhate jao — loop khatam hote hi counter me total lines hongi.</p>'
});
