/* JavaQuest — Problem: Constructor Overloading (Classes & Objects, Easy) */
PROBLEMS.push({
  id: '5-04',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Constructor Overloading',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Book</code> class banao jisme do constructors hon — ek sirf <code>title</code> leta hai aur author ko <code>Unknown</code> set karta hai, doosra <code>title</code> aur <code>author</code> dono leta hai. Ek <code>info()</code> method <code>Title by Author</code> format me string return kare. Dono constructors ko use karke book ki details return karo.</p>',
  examples: [
    { input: 'bookInfo("Java Basics")', output: '"Java Basics by Unknown"', explanation: 'Ek-parameter wala constructor chala, author default Unknown raha.' },
    { input: 'bookInfo("Java Basics", "Adarsh")', output: '"Java Basics by Adarsh"', explanation: 'Do-parameter wala constructor chala aur author set ho gaya.' }
  ],
  constraints: ['title khaali string nahi hoga'],
  starter: 'class Solution {\n    class Book {\n        String title;\n        String author;\n        Book(String title) {\n            // TODO: title set karo, author ko "Unknown" rakho\n        }\n        Book(String title, String author) {\n            // TODO: dono fields set karo\n        }\n        String info() {\n            // TODO: "Title by Author" return karo\n            return "";\n        }\n    }\n    String bookInfo(String title) {\n        return "";\n    }\n    String bookInfo(String title, String author) {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Book {\n        String title;\n        String author;\n        Book(String title) {\n            this.title = title;\n            this.author = "Unknown";\n        }\n        Book(String title, String author) {\n            this.title = title;\n            this.author = author;\n        }\n        String info() {\n            return title + " by " + author;\n        }\n    }\n    String bookInfo(String title) {\n        Book b = new Book(title);\n        return b.info();\n    }\n    String bookInfo(String title, String author) {\n        Book b = new Book(title, author);\n        return b.info();\n    }\n}',
  explanation: '<p>Constructor overloading ka matlab hai ek hi class me kai constructors — compiler arguments dekh kar decide karta hai kaunsa chalega. Yahan ek-parameter wala constructor author ko default value deta hai.</p>'
});
