/* JavaQuest — Problem: Serialize a List of Objects (IO Streams & Serialization, Hard) */
PROBLEMS.push({
  id: '13-11',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Serialize a List of Objects',
  difficulty: 'Hard',
  statement: '<p>Students ki ek poori list ko ek hi baar me file me save karo aur phir wapas padhkar batayo ki kitne students wapas mile. Ek-ek object likhne ki jagah poori <code>ArrayList</code> ko ek object ki tarah serialize karo.</p><p><code>ArrayList</code> khud <code>Serializable</code> hai, isliye list ke andar ke saare <code>Student</code> objects ek hi <code>writeObject()</code> call me save ho jate hain — bas Student class ko Serializable hona chahiye.</p>',
  examples: [
    { input: '3 students ki list: Adarsh, Meena, Rahul', output: '3', explanation: 'Teeno students serialize hokar wapas padhe jate hain, isliye loaded list ka size 3 hota hai.' },
    { input: 'Khaali list', output: '0', explanation: 'Khaali list serialize hokar khaali hi wapas aati hai, isliye size 0 hota hai.' }
  ],
  constraints: ['Student class Serializable honi chahiye.', 'List me 0 se 1000 students ho sakte hain.', 'Method wapas padhe gaye students ki sankhya return karta hai.'],
  starter: 'import java.io.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    static class Student implements Serializable {\n        private static final long serialVersionUID = 1L;\n        String name;\n        int rollNo;\n\n        Student(String name, int rollNo) {\n            this.name = name;\n            this.rollNo = rollNo;\n        }\n    }\n\n    public int saveStudents(List<Student> students, String path) throws IOException, ClassNotFoundException {\n        // TODO: poori list serialize karo, wapas padho, size return karo\n        return 0;\n    }\n}',
  solution: 'import java.io.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    static class Student implements Serializable {\n        private static final long serialVersionUID = 1L;\n        String name;\n        int rollNo;\n\n        Student(String name, int rollNo) {\n            this.name = name;\n            this.rollNo = rollNo;\n        }\n    }\n\n    public int saveStudents(List<Student> students, String path) throws IOException, ClassNotFoundException {\n        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(path))) {\n            out.writeObject(new ArrayList<>(students));\n        }\n        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(path))) {\n            List<Student> loaded = (List<Student>) in.readObject();\n            return loaded.size();\n        }\n    }\n}',
  explanation: '<p>Poori list ko <code>new ArrayList&lt;&gt;(students)</code> se ek Serializable ArrayList me badalkar ek hi <code>writeObject()</code> me save karte hain. Wapas padhte waqt <code>List&lt;Student&gt;</code> me cast karke uska size return kar dete hain.</p>'
});
