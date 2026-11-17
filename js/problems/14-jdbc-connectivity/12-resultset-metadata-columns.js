/* JavaQuest — Problem: Read Column Info with ResultSetMetaData (JDBC Connectivity, Hard) */
PROBLEMS.push({
  id: '14-12',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Read Column Info with ResultSetMetaData',
  difficulty: 'Hard',
  statement: '<p><code>students</code> table ke har column ka naam aur type nikaalo — bina koi row padhe. <code>ResultSetMetaData</code> table ki structure (metadata) batata hai: kitne columns hain, unke naam kya hain aur unke types kya hain.</p><p>Har column ke liye <code>"name:type"</code> format me ek string banao aur saari strings ek List me return karo. Column ki numbering 1 se shuru hoti hai.</p>',
  examples: [
    { input: 'students table: id INT, name VARCHAR(50), marks INT', output: '["id:INT", "name:VARCHAR", "marks:INT"]', explanation: 'Teeno columns ke naam aur type metadata se milte hain.' },
    { input: 'students table khaali hai (koi row nahi)', output: '["id:INT", "name:VARCHAR", "marks:INT"]', explanation: 'Metadata rows par depend nahi karta — khaali table ki bhi structure same milti hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'Format "name:type" hona chahiye.', 'Column order table definition wala hona chahiye.'],
  starter: 'import java.sql.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    public List<String> getColumnInfo(Connection con) throws SQLException {\n        // TODO: ResultSetMetaData se column info nikaalo\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.sql.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    public List<String> getColumnInfo(Connection con) throws SQLException {\n        List<String> info = new ArrayList<>();\n        try (Statement st = con.createStatement();\n             ResultSet rs = st.executeQuery("SELECT * FROM students")) {\n            ResultSetMetaData meta = rs.getMetaData();\n            for (int i = 1; i <= meta.getColumnCount(); i++) {\n                info.add(meta.getColumnName(i) + ":" + meta.getColumnTypeName(i));\n            }\n        }\n        return info;\n    }\n}',
  explanation: '<p><code>rs.getMetaData()</code> ResultSet ki structure deta hai. <code>getColumnCount()</code> columns ki sankhya batata hai, aur <code>getColumnName(i)</code> / <code>getColumnTypeName(i)</code> har column ka naam aur type dete hain. Metadata ke liye rows ki zaroorat nahi hoti — query chalte hi structure mil jati hai.</p>'
});
