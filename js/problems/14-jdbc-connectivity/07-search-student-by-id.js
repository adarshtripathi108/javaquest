/* JavaQuest — Problem: Search Student by ID (JDBC Connectivity, Medium) */
PROBLEMS.push({
  id: '14-07',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Search Student by ID',
  difficulty: 'Medium',
  statement: '<p>Ek student ka <code>id</code> diya gaya hai. <code>PreparedStatement</code> se <code>SELECT</code> query chalakar us student ka naam dhoondho aur return karo. Agar us id ka koi student nahi hai to <code>null</code> return karo.</p><p><code>WHERE id = ?</code> wali query sirf matching row laati hai. ResultSet khaali ho sakta hai, isliye <code>next()</code> ka result check karna zaroori hai — bina check kiye <code>getString</code> call karoge to error aayega.</p>',
  examples: [
    { input: 'id = 101, table me 101 = Adarsh hai', output: '"Adarsh"', explanation: 'Query ek row laati hai aur uska name column "Adarsh" return hota hai.' },
    { input: 'id = 999, table me 999 nahi hai', output: 'null', explanation: 'Koi row match nahi hoti, next() false deta hai, isliye null return hota hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'PreparedStatement ka use karo.', 'Student na mile to null return karo.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public String findNameById(Connection con, int id) throws SQLException {\n        // TODO: id se student ka naam dhoondho\n        return null;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public String findNameById(Connection con, int id) throws SQLException {\n        String sql = "SELECT name FROM students WHERE id = ?";\n        try (PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setInt(1, id);\n            try (ResultSet rs = ps.executeQuery()) {\n                if (rs.next()) {\n                    return rs.getString("name");\n                }\n                return null;\n            }\n        }\n    }\n}',
  explanation: '<p><code>WHERE id = ?</code> sirf us ek row ko laata hai. <code>if (rs.next())</code> check karta hai ki row mili ya nahi — mili to naam return karo, nahi mili to <code>null</code>. ResultSet ko alag try-with-resources me band karna saaf rehta hai.</p>'
});
