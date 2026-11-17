/* JavaQuest — Problem: Establish a JDBC Connection (JDBC Connectivity, Easy) */
PROBLEMS.push({
  id: '14-01',
  topicId: 14,
  topic: 'JDBC Connectivity',
  title: 'Establish a JDBC Connection',
  difficulty: 'Easy',
  statement: '<p>Database se connect karne ke liye <code>DriverManager.getConnection()</code> ka use karo. Method ko database URL, username aur password milenge, aur use ek <code>Connection</code> object return karna hai.</p><p>JDBC 4 ke baad se driver apne aap load ho jata hai, isliye <code>Class.forName()</code> likhne ki zaroorat nahi hai. Connection milna matlab Java program aur database ke beech bridge ban gaya.</p>',
  examples: [
    { input: 'url = "jdbc:mysql://localhost:3306/school", user = "root", password = "root"', output: 'Connection object mil jata hai (null nahi)', explanation: 'Sahi credentials hone par DriverManager ek live Connection return karta hai.' },
    { input: 'Galat password diya gaya', output: 'SQLException throw hoti hai', explanation: 'Credentials galat hone par getConnection fail ho jata hai aur SQLException aati hai.' }
  ],
  constraints: ['MySQL database localhost pe chal rahi hai.', 'URL, user aur password method ko parameter me milenge.', 'Connection band karna caller ki zimmedari hai.'],
  starter: 'import java.sql.*;\n\nclass Solution {\n    public Connection getConnection(String url, String user, String password) throws SQLException {\n        // TODO: DriverManager se Connection banao aur return karo\n        return null;\n    }\n}',
  solution: 'import java.sql.*;\n\nclass Solution {\n    public Connection getConnection(String url, String user, String password) throws SQLException {\n        return DriverManager.getConnection(url, user, password);\n    }\n}',
  explanation: '<p><code>DriverManager.getConnection(url, user, password)</code> JDBC ka entry point hai — ye URL se sahi driver dhoondhta hai aur database se ek live connection kholkar return karta hai. Connection fail ho to <code>SQLException</code> throw hoti hai.</p>'
});
