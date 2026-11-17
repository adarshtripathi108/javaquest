/* JavaQuest — Problem: Hierarchical Inheritance (Inheritance, Medium) */
PROBLEMS.push({
  id: '6-08',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Hierarchical Inheritance',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Shape</code> base class banao. <code>Rectangle</code> aur <code>Circle</code> dono Shape ko extend karein — Rectangle ka <code>area()</code> length * width return kare aur Circle ka <code>area()</code> 3.14 * radius * radius return kare. Method <code>shapeAreas</code> ko rectangle ke dimensions aur circle ka radius milega aur use <code>Rectangle area, Circle area</code> format me string return karni hai.</p>',
  examples: [
    { input: 'length = 5, width = 4, radius = 10', output: '"20, 314.0"', explanation: 'Rectangle area 5 * 4 = 20, circle area 3.14 * 100 = 314.0.' },
    { input: 'length = 3, width = 3, radius = 5', output: '"9, 78.5"', explanation: 'Rectangle area 3 * 3 = 9, circle area 3.14 * 25 = 78.5.' }
  ],
  constraints: ['saare inputs positive integers honge'],
  starter: 'class Solution {\n    class Shape {\n        String kind() {\n            return "Shape";\n        }\n    }\n    class Rectangle extends Shape {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        int area() {\n            // TODO: length * width return karo\n            return 0;\n        }\n    }\n    class Circle extends Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        double area() {\n            // TODO: 3.14 * radius * radius return karo\n            return 0;\n        }\n    }\n    String shapeAreas(int length, int width, int radius) {\n        // TODO: dono shapes banao aur "rectArea, circleArea" return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Shape {\n        String kind() {\n            return "Shape";\n        }\n    }\n    class Rectangle extends Shape {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        int area() {\n            return length * width;\n        }\n    }\n    class Circle extends Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        double area() {\n            return 3.14 * radius * radius;\n        }\n    }\n    String shapeAreas(int length, int width, int radius) {\n        Rectangle r = new Rectangle(length, width);\n        Circle c = new Circle(radius);\n        return r.area() + ", " + c.area();\n    }\n}',
  explanation: '<p>Hierarchical inheritance me ek parent ke kai child hote hain. Rectangle aur Circle dono Shape se aate hain, lekin har ek ka <code>area()</code> apna formula use karta hai — common cheez parent me, alag cheez child me.</p>'
});
