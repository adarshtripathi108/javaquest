/* JavaQuest — Problem: Count Rows in a Table (JDBC Connectivity, Easy) */
PROBLEMS.push({
  id: '14-05',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Count Rows in a Table',
  difficulty: 'Easy',
  statement: '<p><code>students</code> table me kitni rows hain, ye <code>SELECT COUNT(*)</code> query se nikaalo aur number return karo. Saari rows Java me laakar ginne ki jagah counting ka kaam database ko karne do — ye zyada fast hai.</p><p><code>COUNT(*)</code> hamesha ek hi row return karta hai jisme ek hi column hota hai, isliye <code>rs.next()</code> ek baar call karke <code>getInt(1)</code> se value padh lo.</p>',
  examples: [
    { input: 'Table me 3 students hain', output: '3', explanation: 'COUNT(*) 3 return karta hai, jo method wapas deta hai.' },
    { input: 'Table khaali hai', output: '0', explanation: 'Khaali table me COUNT(*) 0 hota hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'COUNT(*) query ka use karo.', 'Method int return karta hai.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public int countStudents(Connection con) throws SQLException {\n        // TODO: SELECT COUNT(*) se rows gino\n        return 0;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public int countStudents(Connection con) throws SQLException {\n        try (Statement st = con.createStatement();\n             ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM students")) {\n            if (rs.next()) {\n                return rs.getInt(1);\n            }\n            return 0;\n        }\n    }\n}',
  explanation: '<p><code>COUNT(*)</code> aggregate function hai — ye hamesha exactly ek row deta hai, isliye <code>if (rs.next())</code> kaafi hai, loop ki zaroorat nahi. <code>getInt(1)</code> pehle (aur yahaan ekmatra) column ki value padhta hai.</p>'
});
