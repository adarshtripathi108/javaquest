/* JavaQuest — Problem: Delete a Student Record (JDBC Connectivity, Medium) */
PROBLEMS.push({
  id: '14-09',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Delete a Student Record',
  difficulty: 'Medium',
  statement: '<p>Ek student ka record <code>students</code> table se delete karo. <code>PreparedStatement</code> se <code>DELETE</code> query chalao aur <code>true</code> return karo agar record delete hua, <code>false</code> agar wo id table me nahi mila.</p><p>DELETE bhi UPDATE ki tarah <code>WHERE</code> ke bina khatarnak hai — bina WHERE ke poori table khaali ho jayegi. Delete se pehle hamesha WHERE clause check karo.</p>',
  examples: [
    { input: 'id = 101, table me 101 = Adarsh hai', output: 'true', explanation: 'Ek row delete hoti hai, executeUpdate 1 deta hai, isliye true return hota hai.' },
    { input: 'id = 999, table me 999 nahi hai', output: 'false', explanation: 'Koi row delete nahi hoti, executeUpdate 0 deta hai, isliye false return hota hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'PreparedStatement ka use karo.', 'Record mile to true, na mile to false return karo.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public boolean deleteStudent(Connection con, int id) throws SQLException {\n        // TODO: DELETE query se record hatao\n        return false;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public boolean deleteStudent(Connection con, int id) throws SQLException {\n        String sql = "DELETE FROM students WHERE id = ?";\n        try (PreparedStatement ps = con.prepareStatement(sql)) {\n            ps.setInt(1, id);\n            return ps.executeUpdate() > 0;\n        }\n    }\n}',
  explanation: '<p><code>executeUpdate() &gt; 0</code> ka matlab hai kam se kam ek row delete hui. Ye check delete ko safe banata hai — caller ko pata chal jata hai ki record tha bhi ya nahi.</p>'
});
