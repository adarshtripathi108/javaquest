/* JavaQuest — Problem: Insert Using PreparedStatement (JDBC Connectivity, Medium) */
PROBLEMS.push({
  id: '14-06',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Insert Using PreparedStatement',
  difficulty: 'Medium',
  statement: '<p>Ek student ka record <code>students</code> table me <code>PreparedStatement</code> se insert karo. SQL me values ki jagah <code>?</code> placeholders likho aur phir <code>setInt</code> / <code>setString</code> se values bharkar query chalao.</p><p>PreparedStatement Statement se behtar hai: ye SQL injection se bachata hai, quotes ki tension khatam karta hai, aur same query baar-baar chalani ho to fast bhi hota hai. Placeholder ki numbering 1 se shuru hoti hai.</p>',
  examples: [
    { input: 'id = 103, name = "Rahul", marks = 78', output: '1', explanation: 'Teeno placeholders set hokar query chalti hai, ek row insert hoti hai.' },
    { input: 'id = 104, name = "Priya", marks = 88', output: '1', explanation: 'Dusra record bhi same tarike se insert hota hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'PreparedStatement ka use karna hai, Statement ka nahi.', 'Method affected rows ki sankhya return karta hai.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public int insertStudentPS(Connection con, int id, String name, int marks) throws SQLException {\n        // TODO: PreparedStatement se INSERT query chalao\n        return 0;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public int insertStudentPS(Connection con, int id, String name, int marks) throws SQLException {\n        String sql = "INSERT INTO students VALUES (?, ?, ?)";\n        try (PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setInt(1, id);\n            ps.setString(2, name);\n            ps.setInt(3, marks);\n            return ps.executeUpdate();\n        }\n    }\n}',
  explanation: '<p>SQL me <code>?</code> placeholder values ki jagah hote hain. <code>setInt(1, id)</code> pehle <code>?</code> ko, <code>setString(2, name)</code> dusre ko aur <code>setInt(3, marks)</code> teesre ko value deta hai. Driver values ko safely escape karke query chalata hai, isliye injection ka khatra nahi rehta.</p>'
});
