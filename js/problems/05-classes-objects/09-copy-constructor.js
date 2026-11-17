/* JavaQuest — Problem: Copy Constructor (Classes & Objects, Medium) */
PROBLEMS.push({
  id: '5-09',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Copy Constructor',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Point</code> class banao jisme <code>x</code> aur <code>y</code> fields hon, ek normal constructor aur ek <b>copy constructor</b> jo doosre Point object se values copy kare. Method <code>copyPoint</code> ko x aur y milenge — use pehle ek Point banao, phir copy constructor se uski copy banao, aur copy ke coordinates <code>x, y</code> format me return karo.</p>',
  examples: [
    { input: 'x = 3, y = 4', output: '"3, 4"', explanation: 'Pehle Point(3, 4) bana, phir copy constructor se copy bani, coordinates "3, 4".' },
    { input: 'x = 10, y = 20', output: '"10, 20"', explanation: 'Copy ke coordinates original jaisi hi hain — "10, 20".' }
  ],
  constraints: ['x aur y integers honge'],
  starter: 'class Solution {\n    class Point {\n        int x;\n        int y;\n        Point(int x, int y) {\n            // TODO: fields set karo\n        }\n        Point(Point p) {\n            // TODO: p se x aur y copy karo\n        }\n    }\n    String copyPoint(int x, int y) {\n        // TODO: Point banao, uski copy banao, copy ke coordinates return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Point {\n        int x;\n        int y;\n        Point(int x, int y) {\n            this.x = x;\n            this.y = y;\n        }\n        Point(Point p) {\n            this.x = p.x;\n            this.y = p.y;\n        }\n    }\n    String copyPoint(int x, int y) {\n        Point original = new Point(x, y);\n        Point copy = new Point(original);\n        return copy.x + ", " + copy.y;\n    }\n}',
  explanation: '<p>Copy constructor ek aisa constructor hai jo usi class ke doosre object ko parameter leta hai aur uski values copy karta hai. Isse original jaisa hi naya, independent object ban jata hai.</p>'
});
