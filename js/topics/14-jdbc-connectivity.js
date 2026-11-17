/* JavaQuest — Topic 14: JDBC Connectivity (Season 5) */
TOPICS.push(
{
 id:14, season:5, title:"JDBC Connectivity", lectures:"Lecture 85, 88", mins:50,
 desc:"JDBC architecture, driver, connection banana, aur MySQL ke saath insert, update, delete, retrieve (CRUD) operations.",
 subs:[
  {t:"JDBC Introduction & Architecture", body:"<p><b>JDBC (Java Database Connectivity)</b> ek API hai jo Java program ko database (MySQL, Oracle) se jodta hai — program database-independent rehta hai, beech me <b>JDBC Driver</b> database ki bhasha samjhata hai. Architecture ke hisse: <b>Java Application → JDBC API → Driver Manager → JDBC Driver → Database</b>.</p><p>JDBC me 4 type ke drivers hote hain; aaj ke time me sabse common <b>Type 4 (Native Protocol / Thin driver)</b> hai — pure Java driver, jaise MySQL Connector/J.</p>", code:"// JDBC ka kaam ek line me:\n// Java code --(SQL)--> Driver --> Database --(result)--> Java code\n// Main interfaces (java.sql package):\n// DriverManager, Connection, Statement,\n// PreparedStatement, ResultSet, SQLException", out:"Package yaad rakho: java.sql"},
  {t:"Establishing Connection — 5 Steps", body:"<p>Har JDBC program ke <b>5 steps</b> fix hain — ye sequence exam me step-wise aata hai:</p><ul><li><b>Step 1:</b> Driver load/register karo (modern drivers auto-load hote hain)</li><li><b>Step 2:</b> Connection banao — <code>DriverManager.getConnection(url, user, password)</code>; URL format: <code>jdbc:mysql://localhost:3306/dbname</code></li><li><b>Step 3:</b> Statement banao — <code>createStatement()</code> ya <code>prepareStatement()</code></li><li><b>Step 4:</b> Query execute karo — SELECT ke liye <code>executeQuery()</code>, INSERT/UPDATE/DELETE ke liye <code>executeUpdate()</code></li><li><b>Step 5:</b> Result process karo aur connection <code>close()</code> karo</li></ul>", code:"import java.sql.*;\npublic class JdbcSteps {\n    public static void main(String[] args) throws Exception {\n        Connection con = DriverManager.getConnection(\n            \"jdbc:mysql://localhost:3306/college\", \"root\", \"pass\");\n        Statement st = con.createStatement();\n        ResultSet rs = st.executeQuery(\"SELECT * FROM students\");\n        while (rs.next()) {\n            System.out.println(rs.getInt(1) + \" \" + rs.getString(2));\n        }\n        con.close();\n    }\n}", out:"101 Adarsh (tumhare DB ke records ke hisaab se)"},
  {t:"CRUD Operations & PreparedStatement", body:"<p><b>CRUD</b> = Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE) — Lecture 88 ki practice bilkul yahi hai. <code>executeUpdate()</code> affected rows ki count return karta hai.</p><p><b>PreparedStatement</b> Statement se behtar hai: query pehle compile hoti hai, <code>?</code> placeholders se values baad me set hoti hain — fast bhi hai aur <b>SQL injection</b> se bhi bachata hai. Real projects me hamesha yahi use karo.</p>", code:"import java.sql.*;\npublic class CrudDemo {\n    public static void main(String[] args) throws Exception {\n        Connection con = DriverManager.getConnection(\n            \"jdbc:mysql://localhost:3306/college\", \"root\", \"pass\");\n        PreparedStatement ps = con.prepareStatement(\n            \"INSERT INTO students VALUES (?, ?)\");\n        ps.setInt(1, 102); ps.setString(2, \"Meena\");\n        int rows = ps.executeUpdate();\n        System.out.println(rows + \" row insert hui\");\n        con.close();\n    }\n}", out:"1 row insert hui"}
 ],
 practice:[
  {tag:"Coding · 10 marks", q:"Poora JDBC program likho: MySQL se connect karo, students table me ek record INSERT karo, phir SELECT se saare records print karo."},
  {tag:"Coding · 5 marks", q:"PreparedStatement se UPDATE (marks change) aur DELETE (ek record) operations karo — affected rows print karo."},
  {tag:"Theory · 5 marks", q:"JDBC ke 5 steps order me likho aur har step ka ek-line ka kaam batao."},
  {tag:"Theory · 2 marks", q:"executeQuery() aur executeUpdate() me farak kya hai? Dono ke return types likho."},
  {tag:"Theory · 2 marks", q:"Statement vs PreparedStatement — 3 farak, SQL injection wala point zaroor likho."},
  {tag:"Theory · 2 marks", q:"JDBC URL jdbc:mysql://localhost:3306/college ke har hisse ka matlab likho."}
 ],
 quiz:[
  {q:"JDBC kis package me hota hai?", o:["java.io","java.sql","java.util","java.net"], a:1, e:"Connection, Statement, ResultSet — saare java.sql package me hain."},
  {q:"Connection banane ka sahi tareeka?", o:["new Connection()","DriverManager.getConnection(url, user, pass)","Connection.open()","Driver.connectDB()"], a:1, e:"DriverManager.getConnection() hi connection deta hai."},
  {q:"SELECT query ke liye kaunsa method?", o:["executeUpdate()","executeQuery()","execute() hamesha","runQuery()"], a:1, e:"executeQuery() ResultSet deta hai. INSERT/UPDATE/DELETE ke liye executeUpdate() — int (rows affected) deta hai."},
  {q:"ResultSet me rows ek-ek karke aage badhne ka method?", o:["next()","move()","forward()","getRow()"], a:0, e:"rs.next() cursor ko agli row pe le jata hai aur boolean deta hai — while loop me use hota hai."},
  {q:"PreparedStatement Statement se behtar kyun hai?", o:["Chhota naam hai","Precompiled hai, fast hai, SQL injection se bachata hai","Connection khud banata hai","ResultSet nahi chahiye"], a:1, e:"? placeholders + precompilation = speed + safety."},
  {q:"Sabse common JDBC driver type kaunsa hai?", o:["Type 1 (JDBC-ODBC bridge)","Type 2","Type 3","Type 4 (Thin / Native Protocol)"], a:3, e:"Type 4 pure-Java driver hai — MySQL Connector/J isi type ka hai."},
  {q:"JDBC URL ki shuruaat hamesha kis se hoti hai?", o:["http://","jdbc:","mysql://","db:"], a:1, e:"Format: jdbc:subprotocol://host:port/database — jaise jdbc:mysql://localhost:3306/college."},
  {q:"Connection use ke baad kya karna chahiye?", o:["Kuch nahi","con.close() — resource release karna","System.exit","Driver unload"], a:1, e:"Connection close na karne se DB connections leak hote hain — limited pool khatam ho sakta hai."}
 ]
}
);
