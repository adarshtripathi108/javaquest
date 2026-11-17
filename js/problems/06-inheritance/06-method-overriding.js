/* JavaQuest — Problem: Method Overriding (Inheritance, Medium) */
PROBLEMS.push({
  id: '6-06',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Method Overriding',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Animal</code> class banao jisme <code>sound()</code> method <code>Animal makes a sound</code> return kare. <code>Dog</code> aur <code>Cat</code> classes Animal ko extend karke sound() ko override karein — Dog <code>Bark</code> aur Cat <code>Meow</code> return kare. Method <code>animalSound</code> ko animal ka type milega aur use us animal ki awaaz return karni hai.</p>',
  examples: [
    { input: 'type = "dog"', output: '"Bark"', explanation: 'Dog ka overridden sound() chala.' },
    { input: 'type = "cat"', output: '"Meow"', explanation: 'Cat ka overridden sound() chala.' },
    { input: 'type = "cow"', output: '"Animal makes a sound"', explanation: 'Koi match nahi, isliye Animal ka default sound() chala.' }
  ],
  constraints: ['type lowercase me hoga'],
  starter: 'class Solution {\n    class Animal {\n        String sound() {\n            return "Animal makes a sound";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            // TODO: "Bark" return karo\n            return "";\n        }\n    }\n    class Cat extends Animal {\n        String sound() {\n            // TODO: "Meow" return karo\n            return "";\n        }\n    }\n    String animalSound(String type) {\n        // TODO: type ke hisaab se sahi animal ka sound return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Animal {\n        String sound() {\n            return "Animal makes a sound";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            return "Bark";\n        }\n    }\n    class Cat extends Animal {\n        String sound() {\n            return "Meow";\n        }\n    }\n    String animalSound(String type) {\n        if (type.equals("dog")) {\n            Dog d = new Dog();\n            return d.sound();\n        }\n        if (type.equals("cat")) {\n            Cat c = new Cat();\n            return c.sound();\n        }\n        Animal a = new Animal();\n        return a.sound();\n    }\n}',
  explanation: '<p>Overriding me subclass parent ke method ko apne version se replace karti hai — signature same, body nayi. Kaunsa version chalega ye object ke type se decide hota hai, isliye Dog ka object <code>Bark</code> aur Cat ka <code>Meow</code> deta hai.</p>'
});
