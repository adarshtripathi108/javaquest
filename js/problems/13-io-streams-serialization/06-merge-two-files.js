/* JavaQuest — Problem: Merge Two Files Line by Line (IO Streams & Serialization, Medium) */
PROBLEMS.push({
  id: '13-06',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Merge Two Files Line by Line',
  difficulty: 'Medium',
  statement: '<p>Do text files ki lines ko ek nayi file me alternate karke likho — pehle file1 ki pehli line, phir file2 ki pehli line, phir file1 ki dusri line, aur aise hi aage.</p><p>Agar ek file dusri se lambi hai to uski bachi hui lines aakhir me waise hi likh di jayengi, bina kisi line ko chhode.</p>',
  examples: [
    { input: 'file1 = "A1", "A2"; file2 = "B1", "B2", "B3"', output: 'Merged file: "A1", "B1", "A2", "B2", "B3"', explanation: 'Lines alternate hoti hain: A1, B1, A2, B2. file1 khatam ho jati hai to file2 ki aakhiri line B3 waise hi likh di jati hai.' },
    { input: 'file1 khaali hai; file2 = "X1"', output: 'Merged file: "X1"', explanation: 'file1 me kuch nahi hai to sirf file2 ki line likhi jati hai.' }
  ],
  constraints: ['Dono files text files hain.', 'Har file me 0 se 1000 lines ho sakti hain.', 'Koi bhi line chhootni nahi chahiye.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public void mergeFiles(String file1, String file2, String out) throws IOException {\n        // TODO: dono files ki lines alternate karke out file me likho\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public void mergeFiles(String file1, String file2, String out) throws IOException {\n        try (BufferedReader r1 = new BufferedReader(new FileReader(file1));\n             BufferedReader r2 = new BufferedReader(new FileReader(file2));\n             BufferedWriter writer = new BufferedWriter(new FileWriter(out))) {\n            String line1 = r1.readLine();\n            String line2 = r2.readLine();\n            while (line1 != null || line2 != null) {\n                if (line1 != null) {\n                    writer.write(line1);\n                    writer.newLine();\n                    line1 = r1.readLine();\n                }\n                if (line2 != null) {\n                    writer.write(line2);\n                    writer.newLine();\n                    line2 = r2.readLine();\n                }\n            }\n        }\n    }\n}',
  explanation: '<p>Dono files se ek-ek line pehle se padhkar rakho. Loop tab tak chalta hai jab tak dono me se koi ek line bachi ho — har round me jo line available hai use likh do aur agli line padh lo. Isse lambi file ki extra lines bhi aakhir me likh di jati hain.</p>'
});
