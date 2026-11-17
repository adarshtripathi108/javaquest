/* JavaQuest — Problem: Abstract Class Constructor (Abstract Classes, Packages & Interfaces, Easy) */
PROBLEMS.push({
  id: '7-04',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Abstract Class Constructor',
  difficulty: 'Easy',
  statement: '<p>Abstract class ka object nahi banta, lekin uska constructor zaroor hota hai — subclass ka constructor <code>super()</code> se use call karta hai. Abstract class <code>Animal</code> me <code>name</code> field aur constructor ho jo naam set kare. <code>Dog</code> class Animal ko extend karke naam pass kare. Method <code>dogName</code> ko naam milega aur use <code>Dog: Naam</code> format me return karna hai.</p>',
  examples: [
    { input: 'name = "Bruno"', output: '"Dog: Bruno"', explanation: 'Dog ke constructor ne super() se Animal ka constructor call kiya aur naam set hua.' },
    { input: 'name = "Tommy"', output: '"Dog: Tommy"', explanation: 'Wahi pattern — "Dog: Tommy".' }
  ],
  constraints: ['name khaali string nahi hoga'],
  starter: 'class Solution {\n    abstract class Animal {\n        String name;\n        Animal(String name) {\n            this.name = name;\n        }\n        abstract String sound();\n    }\n    class Dog extends Animal {\n        Dog(String name) {\n            // TODO: super(name) call karo\n        }\n        String sound() {\n            return "Bark";\n        }\n        String label() {\n            // TODO: "Dog: " + name return karo\n            return "";\n        }\n    }\n    String dogName(String name) {\n        // TODO: Dog banao aur label() return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    abstract class Animal {\n        String name;\n        Animal(String name) {\n            this.name = name;\n        }\n        abstract String sound();\n    }\n    class Dog extends Animal {\n        Dog(String name) {\n            super(name);\n        }\n        String sound() {\n            return "Bark";\n        }\n        String label() {\n            return "Dog: " + name;\n        }\n    }\n    String dogName(String name) {\n        Dog d = new Dog(name);\n        return d.label();\n    }\n}',
  explanation: '<p>Abstract class ka constructor subclass ke object banne par <code>super()</code> se chalta hai. Isse common fields (jaise <code>name</code>) ek hi jagah initialize hote hain, har subclass me dobara code likhne ki zaroorat nahi.</p>'
});
