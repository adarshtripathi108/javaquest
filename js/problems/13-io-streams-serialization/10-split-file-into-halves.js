/* JavaQuest — Problem: Split a File into Two Halves (IO Streams & Serialization, Medium) */
PROBLEMS.push({
  id: '13-10',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Split a File into Two Halves',
  difficulty: 'Medium',
  statement: '<p>Ek text file ko do files me baant do — pehli aadhi lines pehli file me aur baaki lines dusri file me. Agar lines ki sankhya odd hai to pehli file me ek line kam aayegi (jaise 5 lines me 2 aur 3).</p><p>Poori file ko <code>Files.readAllLines()</code> se ek List me padh lo, phir <code>size / 2</code> se beech ka point nikaal kar dono files me likh do.</p>',
  examples: [
    { input: 'File me 4 lines hain: L1, L2, L3, L4', output: 'Pehli file: L1, L2; Dusri file: L3, L4', explanation: '4 lines ka aadha 2 hai, isliye pehli file me 2 lines aur dusri me 2 lines jati hain.' },
    { input: 'File me 5 lines hain: L1, L2, L3, L4, L5', output: 'Pehli file: L1, L2; Dusri file: L3, L4, L5', explanation: '5 / 2 = 2 (integer division), isliye pehli file me 2 lines aur dusri me 3 lines jati hain.' }
  ],
  constraints: ['File ek text file hai.', 'File me 0 se 1000 lines ho sakti hain.', 'Odd lines me extra line dusri file me jati hai.'],
  starter: 'import java.io.*;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\nclass Solution {\n    public void splitFile(String path, String firstHalf, String secondHalf) throws IOException {\n        // TODO: file ko do aadhi files me baanto\n    }\n}',
  solution: 'import java.io.*;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\nclass Solution {\n    public void splitFile(String path, String firstHalf, String secondHalf) throws IOException {\n        List<String> lines = Files.readAllLines(Paths.get(path));\n        int mid = lines.size() / 2;\n        try (BufferedWriter w1 = new BufferedWriter(new FileWriter(firstHalf));\n             BufferedWriter w2 = new BufferedWriter(new FileWriter(secondHalf))) {\n            for (int i = 0; i < lines.size(); i++) {\n                if (i < mid) {\n                    w1.write(lines.get(i));\n                    w1.newLine();\n                } else {\n                    w2.write(lines.get(i));\n                    w2.newLine();\n                }\n            }\n        }\n    }\n}',
  explanation: '<p><code>Files.readAllLines()</code> poori file ek List me de deta hai. <code>mid = size / 2</code> beech ka point hai — <code>mid</code> se pehle ke index pehli file me aur baaki dusri file me jate hain. Integer division ki wajah se odd case me extra line apne aap dusri file me chali jati hai.</p>'
});
