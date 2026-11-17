/* JavaQuest — Problem: Rectangle Area and Perimeter (Classes & Objects, Easy) */
PROBLEMS.push({
  id: '5-02',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Rectangle Area and Perimeter',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Rectangle</code> class banao jisme <code>length</code> aur <code>width</code> fields hon, ek constructor jo dono set kare, aur do methods — <code>area()</code> aur <code>perimeter()</code>. Method <code>rectangleInfo</code> ko length aur width milega aur use <code>Area: X, Perimeter: Y</code> format me string return karni hai.</p>',
  examples: [
    { input: 'length = 5, width = 4', output: '"Area: 20, Perimeter: 18"', explanation: 'Area 5 * 4 = 20 aur perimeter 2 * (5 + 4) = 18.' },
    { input: 'length = 3, width = 3', output: '"Area: 9, Perimeter: 12"', explanation: 'Area 3 * 3 = 9 aur perimeter 2 * (3 + 3) = 12.' }
  ],
  constraints: ['length aur width positive integers honge'],
  starter: 'class Solution {\n    class Rectangle {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            // TODO: fields set karo\n        }\n        int area() {\n            // TODO: area return karo\n            return 0;\n        }\n        int perimeter() {\n            // TODO: perimeter return karo\n            return 0;\n        }\n    }\n    String rectangleInfo(int length, int width) {\n        // TODO: Rectangle object banao aur "Area: X, Perimeter: Y" return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Rectangle {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        int area() {\n            return length * width;\n        }\n        int perimeter() {\n            return 2 * (length + width);\n        }\n    }\n    String rectangleInfo(int length, int width) {\n        Rectangle r = new Rectangle(length, width);\n        return "Area: " + r.area() + ", Perimeter: " + r.perimeter();\n    }\n}',
  explanation: '<p>Constructor object bante hi fields ko initialize karta hai. Phir <code>area()</code> length * width aur <code>perimeter()</code> 2 * (length + width) return karte hain.</p>'
});
