/* JavaQuest — Problem: Update Student Marks (JDBC Connectivity, Medium) */
PROBLEMS.push({
  id: '14-08',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Update Student Marks',
  difficulty: 'Medium',
  statement: '<p>Ek student ke marks update karo. <code>PreparedStatement</code> se <code>UPDATE</code> query chalao aur affected rows ki sankhya return karo — student mil gaya to 1, nahi mila to 0.</p><p><code>UPDATE</code> me <code>WHERE</code> clause bhoolna bahut badi galti hai: bina WHERE ke table ki SAARI rows update ho jayengi. Hamesha WHERE se sahi row target karo.</p>',
  examples: [
    { input: 'id = 101, newMarks = 95 (101 ke marks pehle 85 the)', output: '1', explanation: 'Ek row update hoti hai, isliye executeUpdate 1 return karta hai aur marks 95 ho jate hain.' },
    { input: 'id = 999, newMarks = 50 (999 table me nahi hai)', output: '0', explanation: 'Koi row match nahi hoti, isliye 0 rows affected hoti hain.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'PreparedStatement ka use karo.', 'Method affected rows ki sankhya return karta hai.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public int updateMarks(Connection con, int id, int newMarks) throws SQLException {\n        // TODO: UPDATE query se marks badlo\n        return 0;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public int updateMarks(Connection con, int id, int newMarks) throws SQLException {\n        String sql = "UPDATE students SET marks = ? WHERE id = ?";\n        try (PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setInt(1, newMarks);\n            ps.setInt(2, id);\n            return ps.executeUpdate();\n        }\n    }\n}',
  explanation: '<p>Placeholder ka order SQL ke order se match hona chahiye: pehla <code>?</code> marks ke liye hai, dusra id ke liye. <code>executeUpdate()</code> batata hai kitni rows badli — 1 matlab update hua, 0 matlab wo id table me nahi hai.</p>'
});
