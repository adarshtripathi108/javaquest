/* JavaQuest — Problem: Insert a Record Using Statement (JDBC Connectivity, Easy) */
PROBLEMS.push({
  id: '14-03',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Insert a Record Using Statement',
  difficulty: 'Easy',
  statement: '<p>Ek student ka record <code>students</code> table me insert karo — <code>Statement</code> aur <code>executeUpdate()</code> ka use karke. Method ko affected rows ki sankhya return karni hai (successful insert ke liye 1).</p><p>SQL string banate waqt dhyaan rakho: number values waise hi likhi jati hain, par String values ko single quotes ke andar likhna padta hai.</p>',
  examples: [
    { input: 'id = 101, name = "Adarsh", marks = 85', output: '1', explanation: 'Ek row insert hoti hai, isliye executeUpdate 1 return karta hai.' },
    { input: 'id = 102, name = "Meena", marks = 92', output: '1', explanation: 'Dusra record bhi successfully insert hota hai, return value phir 1 hoti hai.' }
  ],
  constraints: ['Table students pehle se exist karti hai.', 'id unique hai (primary key).', 'Method affected rows ki sankhya return karta hai.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public int insertStudent(Connection con, int id, String name, int marks) throws SQLException {\n        // TODO: Statement se INSERT query chalao\n        return 0;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public int insertStudent(Connection con, int id, String name, int marks) throws SQLException {\n        String sql = "INSERT INTO students VALUES (" + id + ", \'" + name + "\', " + marks + ")";\n        try (Statement st = con.createStatement()) {\n            return st.executeUpdate(sql);\n        }\n    }\n}',
  explanation: '<p>INSERT ke liye <code>executeUpdate()</code> use hota hai jo affected rows return karta hai. String value <code>name</code> ko SQL me single quotes ke andar rakhna zaroori hai, warna query fail ho jayegi. (Real code me SQL injection se bachne ke liye PreparedStatement behtar hai — aage ke problems me wahi seekhenge.)</p>'
});
