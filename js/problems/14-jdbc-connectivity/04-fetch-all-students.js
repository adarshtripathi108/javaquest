/* JavaQuest — Problem: Fetch All Student Names (JDBC Connectivity, Easy) */
PROBLEMS.push({
  id: '14-04',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Fetch All Student Names',
  difficulty: 'Easy',
  statement: '<p><code>students</code> table ke saare students ke naam ek List me laakar return karo. <code>SELECT</code> query ke liye <code>executeQuery()</code> use hota hai jo <code>ResultSet</code> return karta hai.</p><p><code>ResultSet</code> ek cursor ki tarah kaam karta hai — shuru me pehli row se pehle hota hai, aur har <code>next()</code> call use agli row pe le jati hai. <code>getString("name")</code> us row ka name column padhta hai.</p>',
  examples: [
    { input: 'Table me 2 students hain: Adarsh (101), Meena (102)', output: '["Adarsh", "Meena"]', explanation: 'Dono rows read hoti hain aur naam List me judte jate hain.' },
    { input: 'Table khaali hai', output: '[] (khaali list)', explanation: 'Koi row nahi hai to pehla next() hi false deta hai aur khaali list return hoti hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'Naam insert hone ke order me return karo.', 'Table khaali ho to khaali list return karo.'],
  starter: 'import java.sql.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    public List<String> getAllNames(Connection con) throws SQLException {\n        // TODO: SELECT query se saare naam laao\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.sql.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Solution {\n    public List<String> getAllNames(Connection con) throws SQLException {\n        List<String> names = new ArrayList<>();\n        try (Statement st = con.createStatement();\n             ResultSet rs = st.executeQuery("SELECT name FROM students")) {\n            while (rs.next()) {\n                names.add(rs.getString("name"));\n            }\n        }\n        return names;\n    }\n}',
  explanation: '<p><code>executeQuery()</code> SELECT ke liye hota hai aur ResultSet deta hai. <code>while (rs.next())</code> loop har row pe jaata hai, aur <code>getString("name")</code> se naam nikaalkar List me add kar dete hain. Statement aur ResultSet dono try-with-resources me band ho jate hain.</p>'
});
