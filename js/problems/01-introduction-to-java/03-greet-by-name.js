/* JavaQuest — Problem: Greet By Name (Introduction to Java, Easy) */
PROBLEMS.push({
  id: '01-03',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Greet By Name',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek naam diya gaya hai. Us naam se ek greeting message banao aur return karo, jaise <b>Hello, Adarsh!</b> Ye problem Java me <b>String concatenation</b> (jodna) sikhata hai.</p>',
  examples: [ { input: 'name = "Adarsh"', output: 'Hello, Adarsh!', explanation: 'Hello, ke baad naam aur phir ! jod diya.' }, { input: 'name = "Priya"', output: 'Hello, Priya!', explanation: 'Hello, Priya! banega.' } ],
  constraints: [ 'Naam ek non-empty string hai.', 'Naam me sirf letters hain.' ],
  starter: 'class Solution {\n    public String greet(String name) {\n        // TODO: "Hello, " + name + "!" return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String greet(String name) {\n        return "Hello, " + name + "!";\n    }\n}',
  explanation: '<p>Java me <b>+</b> operator strings ko jodta hai. <b>Hello, </b> ke aage naam aur aakhir me <b>!</b> laga do.</p>'
});
