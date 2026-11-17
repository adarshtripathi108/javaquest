/* JavaQuest — Problem: Write Lines to a Text File (IO Streams & Serialization, Easy) */
PROBLEMS.push({
  id: '13-03',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Write Lines to a Text File',
  difficulty: 'Easy',
  statement: '<p>Strings ki ek list di gayi hai. Har string ko ek text file me alag line pe likho. Tumhe <code>BufferedWriter</code> ka use karna hai aur har line ke baad <code>newLine()</code> call karni hai.</p><p>Agar file pehle se exist karti hai to uska purana content overwrite ho jayega — ye <code>FileWriter</code> ka default behaviour hai.</p>',
  examples: [
    { input: 'lines = ["Ram", "Shyam"], path = "names.txt"', output: 'names.txt me 2 lines likhi gayi: "Ram" aur "Shyam"', explanation: 'Har string ek nayi line pe likhi jati hai, isliye file me 2 lines ban jati hain.' },
    { input: 'lines = [], path = "empty.txt"', output: 'empty.txt khaali file ban jati hai', explanation: 'List khaali hai to koi line nahi likhi jati, par file create ho jati hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'Har string ki length 200 se kam hai.', 'File pehle se exist kare to overwrite karo.'],
  starter: 'import java.io.*;\nimport java.util.List;\n\nclass Solution {\n    public void writeLines(String path, List<String> lines) throws IOException {\n        // TODO: BufferedWriter se har line likho\n    }\n}',
  solution: 'import java.io.*;\nimport java.util.List;\n\nclass Solution {\n    public void writeLines(String path, List<String> lines) throws IOException {\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter(path))) {\n            for (String line : lines) {\n                writer.write(line);\n                writer.newLine();\n            }\n        }\n    }\n}',
  explanation: '<p>BufferedWriter likhne ko fast karta hai kyunki wo data ko pehle buffer me rakhta hai. Har string ke baad <code>newLine()</code> system ke hisaab se sahi line separator daal deta hai, aur try-with-resources writer ko band karke buffer flush kar deta hai.</p>'
});
