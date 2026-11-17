/* JavaQuest — Problem: Find the Longest Line in a File (IO Streams & Serialization, Medium) */
PROBLEMS.push({
  id: '13-09',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Find the Longest Line in a File',
  difficulty: 'Medium',
  statement: '<p>Ek text file ki sabse lambi line dhoondhkar return karo. Lambaai characters ki sankhya se naapi jati hai. Agar do lines ki lambaai barabar hai to pehle aane wali line return karo.</p><p>File ko ek hi baar padhna hai — har line ko ab tak ki sabse lambi line se compare karte jao, aur lambi mile to use replace kar do.</p>',
  examples: [
    { input: 'File me lines hain "Hi", "Hello Java", "Yo"', output: 'Hello Java', explanation: '"Hello Java" 10 characters ki hai, jo sabse lambi hai.' },
    { input: 'File khaali hai', output: '"" (khaali string)', explanation: 'Koi line nahi hai to khaali string return hoti hai.' }
  ],
  constraints: ['File ek text file hai.', 'Barabar lambaai ho to pehli line return karo.', 'Khaali file ke liye khaali string return karo.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public String longestLine(String path) throws IOException {\n        // TODO: sabse lambi line dhoondho\n        return "";\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public String longestLine(String path) throws IOException {\n        String longest = "";\n        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                if (line.length() > longest.length()) {\n                    longest = line;\n                }\n            }\n        }\n        return longest;\n    }\n}',
  explanation: '<p><code>longest</code> variable me ab tak ki sabse lambi line rakhte hain, shuru me khaali string. Sirf <code>&gt;</code> (barabar nahi) se compare karne ki wajah se tie me pehli line hi rehti hai.</p>'
});
