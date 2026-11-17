/* JavaQuest — Problem: Transfer Marks in a Transaction (JDBC Connectivity, Medium) */
PROBLEMS.push({
  id: '14-10',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Transfer Marks in a Transaction',
  difficulty: 'Medium',
  statement: '<p>Ek student se dusre student ko marks transfer karo — ek transaction ke andar. Pehle student ke marks ghatao aur dusre ke badhao, aur dono updates tabhi save hon jab dono safal hon. Koi bhi update fail ho to poora kaam rollback ho jana chahiye.</p><p>Transaction ke liye <code>setAutoCommit(false)</code> karo, dono updates chalao, safal hone par <code>commit()</code> karo aur fail hone par <code>rollback()</code>. Aakhir me auto-commit wapas purani setting pe rakh do.</p>',
  examples: [
    { input: 'fromId = 101 (marks 85), toId = 102 (marks 92), marks = 5', output: 'true', explanation: 'Dono updates safal hote hain, commit hota hai — 101 ke marks 80 aur 102 ke 97 ho jate hain.' },
    { input: 'fromId = 101, toId = 999 (nahi hai), marks = 5', output: 'false', explanation: 'Dusra update 0 rows affect karta hai, isliye rollback hota hai aur 101 ke marks 85 hi rehte hain.' }
  ],
  constraints: ['Dono updates ek transaction me hone chahiye.', 'Koi update fail ho to rollback karo.', 'Aakhir me auto-commit wapas restore karo.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public boolean transferMarks(Connection con, int fromId, int toId, int marks) throws SQLException {\n        // TODO: transaction me marks transfer karo\n        return false;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public boolean transferMarks(Connection con, int fromId, int toId, int marks) throws SQLException {\n        boolean oldAutoCommit = con.getAutoCommit();\n        try {\n            con.setAutoCommit(false);\n            try (PreparedStatement ps1 = con.prepareStatement("UPDATE students SET marks = marks - ? WHERE id = ?");\n                 PreparedStatement ps2 = con.prepareStatement("UPDATE students SET marks = marks + ? WHERE id = ?")) {\n                ps1.setInt(1, marks);\n                ps1.setInt(2, fromId);\n                int r1 = ps1.executeUpdate();\n                ps2.setInt(1, marks);\n                ps2.setInt(2, toId);\n                int r2 = ps2.executeUpdate();\n                if (r1 == 1 && r2 == 1) {\n                    con.commit();\n                    return true;\n                }\n                con.rollback();\n                return false;\n            }\n        } catch (SQLException e) {\n            con.rollback();\n            throw e;\n        } finally {\n            con.setAutoCommit(oldAutoCommit);\n        }\n    }\n}',
  explanation: '<p><code>setAutoCommit(false)</code> se transaction shuru hota hai. Dono updates ke result check karte hain — dono 1 hon to <code>commit()</code>, warna <code>rollback()</code> taaki aadha kaam save na ho. Exception aane par bhi rollback hota hai, aur <code>finally</code> me auto-commit wapas restore ho jata hai.</p>'
});
