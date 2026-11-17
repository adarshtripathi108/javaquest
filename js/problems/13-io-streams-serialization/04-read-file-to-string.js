/* JavaQuest — Problem: Read Entire File into a String (IO Streams & Serialization, Easy) */
PROBLEMS.push({
  id: '13-04',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Read Entire File into a String',
  difficulty: 'Easy',
  statement: '<p>Ek text file ka poora content ek hi String me padhkar return karo. Har line ke baad newline aana chahiye, par aakhir me extra whitespace nahi hona chahiye.</p><p>Lines ko jodne ke liye <code>StringBuilder</code> ka use karo — loop ke andar <code>+</code> se String jodna slow hota hai kyunki har baar naya String object banta hai.</p>',
  examples: [
    { input: 'data.txt me 2 lines hain: "Java" aur "Rocks"', output: 'Java\nRocks', explanation: 'Dono lines ek newline se judkar ek String ban jati hain, aur aakhir ka extra newline trim ho jata hai.' },
    { input: 'single.txt me sirf "Hello" likha hai', output: 'Hello', explanation: 'Ek hi line hai to String wahi ek line hoti hai.' }
  ],
  constraints: ['File ek text file hai.', 'File ka size 1 MB se kam hai.', 'Aakhir me extra newline ya space nahi hona chahiye.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public String readFile(String path) throws IOException {\n        // TODO: poori file padhkar ek String return karo\n        return "";\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public String readFile(String path) throws IOException {\n        StringBuilder sb = new StringBuilder();\n        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                sb.append(line);\n                sb.append("\\n");\n            }\n        }\n        return sb.toString().trim();\n    }\n}',
  explanation: '<p>Har line ko StringBuilder me append karo aur uske baad newline jodo. Aakhir me <code>trim()</code> aakhiri newline ko hata deta hai, taaki result saaf String mile.</p>'
});
