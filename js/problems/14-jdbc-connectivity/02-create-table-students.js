/* JavaQuest — Problem: Create a Students Table (JDBC Connectivity, Easy) */
PROBLEMS.push({
  id: '14-02',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Create a Students Table',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Connection</code> di gayi hai. Usse ek <code>Statement</code> banao aur <code>students</code> naam ki table create karo jisme <code>id</code> (INT, primary key), <code>name</code> (VARCHAR) aur <code>marks</code> (INT) columns hon.</p><p>DDL statements jaise CREATE TABLE ke liye <code>execute()</code> method use hota hai. <code>IF NOT EXISTS</code> likhne se table pehle se ho to bhi error nahi aata.</p>',
  examples: [
    { input: 'Naya khaali database, students table abhi nahi hai', output: 'students table ban jati hai (id, name, marks columns ke saath)', explanation: 'CREATE TABLE statement chalti hai aur table database me ban jati hai.' },
    { input: 'students table pehle se exist karti hai', output: 'Koi error nahi aata, method normally khatam hota hai', explanation: 'IF NOT EXISTS ki wajah se existing table par statement safely ignore ho jati hai.' }
  ],
  constraints: ['Table ka naam students hona chahiye.', 'id column primary key hai.', 'Method kuch return nahi karta.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public void createTable(Connection con) throws SQLException {\n        // TODO: Statement se students table create karo\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public void createTable(Connection con) throws SQLException {\n        String sql = "CREATE TABLE IF NOT EXISTS students (id INT PRIMARY KEY, name VARCHAR(50), marks INT)";\n        try (Statement st = con.createStatement()) {\n            st.execute(sql);\n        }\n    }\n}',
  explanation: '<p><code>con.createStatement()</code> se Statement banta hai aur <code>execute()</code> DDL chala deta hai. Try-with-resources Statement ko apne aap band kar deta hai, taaki database resources leak na hon.</p>'
});
