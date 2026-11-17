/* JavaQuest — Problem: Interface Polymorphism (Abstract Classes, Packages & Interfaces, Medium) */
PROBLEMS.push({
  id: '7-06',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Interface Polymorphism',
  difficulty: 'Medium',
  statement: '<p>Interface type ka reference kisi bhi implement karne wali class ke object ko point kar sakta hai. <code>Shape</code> interface me <code>area()</code> ho, <code>Rectangle</code> aur <code>Circle</code> use implement karein. Method <code>totalArea</code> ko rectangle ke dimensions aur circle ka radius milega — dono ko Shape array me rakh kar unke areas ka total return karna hai.</p>',
  examples: [
    { input: 'length = 5, width = 4, radius = 10', output: '334.0', explanation: 'Rectangle 20.0 + Circle 314.0 = 334.0.' },
    { input: 'length = 3, width = 3, radius = 5', output: '87.5', explanation: 'Rectangle 9.0 + Circle 78.5 = 87.5.' }
  ],
  constraints: ['saare inputs positive integers honge'],
  starter: 'class Solution {\n    interface Shape {\n        double area();\n    }\n    class Rectangle implements Shape {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        public double area() {\n            // TODO: length * width return karo\n            return 0;\n        }\n    }\n    class Circle implements Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        public double area() {\n            // TODO: 3.14 * radius * radius return karo\n            return 0;\n        }\n    }\n    double totalArea(int length, int width, int radius) {\n        // TODO: Shape array banao aur areas ka total return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    interface Shape {\n        double area();\n    }\n    class Rectangle implements Shape {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        public double area() {\n            return length * width;\n        }\n    }\n    class Circle implements Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        public double area() {\n            return 3.14 * radius * radius;\n        }\n    }\n    double totalArea(int length, int width, int radius) {\n        Shape[] shapes = new Shape[2];\n        shapes[0] = new Rectangle(length, width);\n        shapes[1] = new Circle(radius);\n        double total = 0;\n        for (int i = 0; i < shapes.length; i++) {\n            total += shapes[i].area();\n        }\n        return total;\n    }\n}',
  explanation: '<p>Shape array me Rectangle aur Circle dono rakhe ja sakte hain kyunki dono Shape implement karte hain. Loop me <code>area()</code> call karne par har object ka apna version chalta hai — ye interface-based polymorphism hai.</p>'
});
