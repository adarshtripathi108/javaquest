/* JavaQuest — Problem: Count Word Occurrences in a File (IO Streams & Serialization, Easy) */
PROBLEMS.push({
  id: '13-05',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Count Word Occurrences in a File',
  difficulty: 'Easy',
  statement: '<p>Ek text file me ek khaas word kitni baar aaya hai, ye gino. Comparison case-insensitive hona chahiye — matlab "Java", "java" aur "JAVA" teeno ek hi word maane jayenge.</p><p>File ko line by line padho, har line ko space se todkar words banao, aur har word ko diye gaye word se <code>equalsIgnoreCase</code> se compare karo.</p>',
  examples: [
    { input: 'File me likha hai "Java is fun" aur "Java is easy", word = "java"', output: '2', explanation: 'Pehli line me "Java" ek baar aur dusri line me ek baar aata hai, total 2 baar.' },
    { input: 'Wahi file, word = "python"', output: '0', explanation: '"python" file me kahin nahi aata, isliye count 0 hai.' }
  ],
  constraints: ['File ek text file hai.', 'Word me sirf letters hain.', 'Comparison case-insensitive hai.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public int countWord(String path, String word) throws IOException {\n        // TODO: file me word ki occurrences gino\n        return 0;\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public int countWord(String path, String word) throws IOException {\n        int count = 0;\n        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                String[] words = line.split(" ");\n                for (String w : words) {\n                    if (w.equalsIgnoreCase(word)) {\n                        count++;\n                    }\n                }\n            }\n        }\n        return count;\n    }\n}',
  explanation: '<p>Har line ko <code>split(" ")</code> se words me todte hain. <code>equalsIgnoreCase</code> bade-chhote aksharon ka fark mita deta hai, isliye "Java" aur "java" dono match ho jate hain.</p>'
});
