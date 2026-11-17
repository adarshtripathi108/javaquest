/* JavaQuest — Problem: Batch Insert Many Students (JDBC Connectivity, Hard) */
PROBLEMS.push({
  id: '14-11',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Batch Insert Many Students',
  difficulty: 'Hard',
  statement: '<p>Students ki ek list ko ek hi baar me database me insert karo — batch processing ka use karke. Har student ke liye alag query chalane ki jagah saare inserts ko ek batch me jodo aur <code>executeBatch()</code> se ek saath chalao.</p><p>Batch insert ek-ek karke insert karne se bahut fast hota hai kyunki database se baat-cheet ek hi round trip me ho jati hai. <code>executeBatch()</code> ek int array return karta hai jisme har statement ka result hota hai.</p>',
  examples: [
    { input: '3 students ki list: Adarsh, Meena, Rahul', output: '3', explanation: 'Teeno inserts batch me chalte hain, har ek 1 return karta hai, total 3 hota hai.' },
    { input: 'Khaali list', output: '0', explanation: 'Batch me kuch nahi hai, executeBatch khaali array deta hai, total 0 hota hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'Batch processing ka use karo, loop me executeUpdate nahi.', 'Method total inserted rows return karta hai.'],
  starter: 'import java.sql.*;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n    }\n\n    public int batchInsert(Connection con, List<Student> students) throws SQLException {\n        // TODO: addBatch aur executeBatch se saare students insert karo\n        return 0;\n    }\n}',
  solution: 'import java.sql.*;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n    }\n\n    public int batchInsert(Connection con, List<Student> students) throws SQLException {\n        String sql = "INSERT INTO students VALUES (?, ?, ?)";\n        try (PreparedStatement ps = con.prepareStatement(sql)) {\n            for (Student s : students) {\n                ps.setInt(1, s.rollNo);\n                ps.setString(2, s.name);\n                ps.setInt(3, s.marks);\n                ps.addBatch();\n            }\n            int[] results = ps.executeBatch();\n            int total = 0;\n            for (int r : results) {\n                total += r;\n            }\n            return total;\n        }\n    }\n}',
  explanation: '<p>Har student ke liye parameters set karke <code>addBatch()</code> call karo — isse query turant nahi chalti, batch me jud jati hai. Aakhir me <code>executeBatch()</code> saari queries ek saath chalata hai aur har ek ka affected-rows count array me deta hai, jinka sum total inserted rows hoti hai.</p>'
});
