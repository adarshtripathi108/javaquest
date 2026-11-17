/* JavaQuest — Problem: Copy File Converting Text to Uppercase (IO Streams & Serialization, Medium) */
PROBLEMS.push({
  id: '13-08',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Copy File Converting Text to Uppercase',
  difficulty: 'Medium',
  statement: '<p>Ek text file ko padho aur uska content ek nayi file me likho — par har line ko uppercase me badalkar. Tumhe <code>BufferedReader</code> se padhna hai aur <code>BufferedWriter</code> se likhna hai.</p><p>Ye character stream ka classic use hai: text ko padhte waqt transform karo aur likhte jao, poori file ko memory me laane ki zaroorat nahi hai.</p>',
  examples: [
    { input: 'source.txt me likha hai "hello" aur "java"', output: 'dest.txt me likha jata hai "HELLO" aur "JAVA"', explanation: 'Har line toUpperCase se badal jati hai, line order same rehta hai.' },
    { input: 'source.txt me likha hai "Java123 rocks!"', output: 'dest.txt me likha jata hai "JAVA123 ROCKS!"', explanation: 'Sirf letters uppercase hote hain, digits aur symbols waise hi rehte hain.' }
  ],
  constraints: ['File ek text file hai.', 'File ka size 1 MB se kam hai.', 'Line order same rehna chahiye.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public void toUpperCaseFile(String source, String dest) throws IOException {\n        // TODO: har line ko uppercase karke dest file me likho\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public void toUpperCaseFile(String source, String dest) throws IOException {\n        try (BufferedReader reader = new BufferedReader(new FileReader(source));\n             BufferedWriter writer = new BufferedWriter(new FileWriter(dest))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                writer.write(line.toUpperCase());\n                writer.newLine();\n            }\n        }\n    }\n}',
  explanation: '<p>Har line ko <code>readLine()</code> se padho, <code>toUpperCase()</code> se badlo aur <code>write()</code> se nayi file me likh do. Reader aur writer dono ko ek hi try-with-resources me kholna saaf aur safe rehta hai.</p>'
});
