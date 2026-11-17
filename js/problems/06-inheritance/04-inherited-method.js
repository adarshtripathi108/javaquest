/* JavaQuest — Problem: Inherited Method (Inheritance, Easy) */
PROBLEMS.push({
  id: '6-04',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Inherited Method',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Shape</code> class banao jisme <code>display()</code> method <code>I am a Shape</code> return kare. <code>Circle</code> class Shape ko extend kare aur koi naya method na likhe — phir bhi Circle ka object <code>display()</code> call kar sakega, kyunki method inherit hota hai. Circle ke object se display() ka result return karo.</p>',
  examples: [
    { input: 'circleDisplay()', output: '"I am a Shape"', explanation: 'Circle ne display() ko inherit kiya, khud likha nahi.' },
    { input: 'shapeDisplay()', output: '"I am a Shape"', explanation: 'Shape ka apna display() bhi wahi string deta hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Shape {\n        String display() {\n            // TODO: "I am a Shape" return karo\n            return "";\n        }\n    }\n    class Circle extends Shape {\n        // koi method nahi — display() inherit hoga\n    }\n    String circleDisplay() {\n        return "";\n    }\n    String shapeDisplay() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Shape {\n        String display() {\n            return "I am a Shape";\n        }\n    }\n    class Circle extends Shape {\n        // koi method nahi — display() inherit hoga\n    }\n    String circleDisplay() {\n        Circle c = new Circle();\n        return c.display();\n    }\n    String shapeDisplay() {\n        Shape s = new Shape();\n        return s.display();\n    }\n}',
  explanation: '<p>Inheritance ka sabse seedha fayda ye hai — subclass ko parent ke saare public aur protected methods mil jate hain bina dobara likhe. Circle me <code>display()</code> likha hi nahi, phir bhi wo call ho jata hai.</p>'
});
