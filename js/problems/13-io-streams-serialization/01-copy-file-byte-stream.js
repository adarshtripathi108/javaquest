/* JavaQuest — Problem: Copy File Using Byte Stream (IO Streams & Serialization, Easy) */
PROBLEMS.push({
  id: '13-01',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Copy File Using Byte Stream',
  difficulty: 'Easy',
  statement: '<p>Ek source file ke saare bytes ko ek destination file me copy karo. Tumhe <code>FileInputStream</code> aur <code>FileOutputStream</code> ka use karna hai aur method ko copy kiye gaye total bytes ki sankhya return karni hai.</p><p>Byte stream binary data ke liye best hota hai — image, PDF ya koi bhi file isse copy ki ja sakti hai. Buffer ka use karo taaki file ek-ek byte ki jagah chunk me copy ho.</p>',
  examples: [
    { input: 'source.txt me "Hello Java" likha hai (10 bytes), dest.txt khaali hai', output: '10', explanation: '"Hello Java" me 10 characters hain, isliye 10 bytes copy hote hain aur method 10 return karta hai.' },
    { input: 'source.txt khaali hai (0 bytes)', output: '0', explanation: 'Khaali file me copy karne ke liye kuch nahi hai, isliye 0 bytes return hote hain.' }
  ],
  constraints: ['File ka size 1 MB se kam hai.', 'Source file hamesha exist karti hai.', 'Method copied bytes ki sankhya return karta hai.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    public int copyFile(String source, String dest) throws IOException {\n        // TODO: FileInputStream aur FileOutputStream se file copy karo\n        return 0;\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    public int copyFile(String source, String dest) throws IOException {\n        int totalBytes = 0;\n        try (FileInputStream in = new FileInputStream(source);\n             FileOutputStream out = new FileOutputStream(dest)) {\n            byte[] buffer = new byte[1024];\n            int bytesRead;\n            while ((bytesRead = in.read(buffer)) != -1) {\n                out.write(buffer, 0, bytesRead);\n                totalBytes += bytesRead;\n            }\n        }\n        return totalBytes;\n    }\n}',
  explanation: '<p>Try-with-resources dono streams ko apne aap band kar deta hai. 1024 bytes ka buffer ek baar me ek chunk padhta hai, <code>read()</code> jab -1 return karta hai to file khatam samjho, aur har chunk ke bytes ko total me jodte jao.</p>'
});
