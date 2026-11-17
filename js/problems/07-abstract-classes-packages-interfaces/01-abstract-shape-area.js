/* JavaQuest — Problem: Abstract Shape Area (Abstract Classes, Packages & Interfaces, Easy) */
PROBLEMS.push({
  id: '7-01',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Abstract Shape Area',
  difficulty: 'Easy',
  statement: '<p>Ek abstract class <code>Shape</code> banao jisme ek abstract method <code>area()</code> ho. <code>Circle</code> class Shape ko extend karke area() ko implement kare — area 3.14 * radius * radius hoga. Method <code>circleArea</code> ko radius milega aur use circle ka area return karna hai.</p>',
  examples: [
    { input: 'radius = 10', output: '314.0', explanation: 'Area 3.14 * 10 * 10 = 314.0.' },
    { input: 'radius = 5', output: '78.5', explanation: 'Area 3.14 * 5 * 5 = 78.5.' }
  ],
  constraints: ['radius ek positive integer hoga'],
  starter: 'class Solution {\n    abstract class Shape {\n        abstract double area();\n    }\n    class Circle extends Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        double area() {\n            // TODO: 3.14 * radius * radius return karo\n            return 0;\n        }\n    }\n    double circleArea(int radius) {\n        // TODO: Circle banao aur area() return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    abstract class Shape {\n        abstract double area();\n    }\n    class Circle extends Shape {\n        int radius;\n        Circle(int radius) {\n            this.radius = radius;\n        }\n        double area() {\n            return 3.14 * radius * radius;\n        }\n    }\n    double circleArea(int radius) {\n        Circle c = new Circle(radius);\n        return c.area();\n    }\n}',
  explanation: '<p>Abstract method ki sirf declaration hoti hai, body nahi — subclass ko use implement karna hi padta hai. Abstract class ka object nahi banta, lekin wo subclasses ke liye ek common contract banati hai.</p>'
});
