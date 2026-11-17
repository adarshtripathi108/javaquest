/* JavaQuest — Problem: Dynamic Method Dispatch (Inheritance, Medium) */
PROBLEMS.push({
  id: '6-09',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Dynamic Method Dispatch',
  difficulty: 'Medium',
  statement: '<p>Runtime polymorphism dekho — <code>Animal</code> type ka reference <code>Dog</code> ya <code>Cat</code> object ko point kar sakta hai, aur <code>sound()</code> call karne par object ke hisaab se overridden method chalta hai, reference ke hisaab se nahi. Method <code>dispatchedSound</code> ko type milega, use Animal reference se sahi object bana kar uski awaaz return karni hai.</p>',
  examples: [
    { input: 'type = "dog"', output: '"Bark"', explanation: 'Animal reference Dog object ko point karta hai, isliye Dog wala sound() chala.' },
    { input: 'type = "cat"', output: '"Meow"', explanation: 'Animal reference Cat object ko point karta hai, isliye Cat wala sound() chala.' }
  ],
  constraints: ['type "dog" ya "cat" hoga'],
  starter: 'class Solution {\n    class Animal {\n        String sound() {\n            return "Animal makes a sound";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            return "Bark";\n        }\n    }\n    class Cat extends Animal {\n        String sound() {\n            return "Meow";\n        }\n    }\n    String dispatchedSound(String type) {\n        // TODO: Animal reference se Dog ya Cat object banao aur sound() return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Animal {\n        String sound() {\n            return "Animal makes a sound";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            return "Bark";\n        }\n    }\n    class Cat extends Animal {\n        String sound() {\n            return "Meow";\n        }\n    }\n    String dispatchedSound(String type) {\n        Animal a;\n        if (type.equals("dog")) {\n            a = new Dog();\n        } else {\n            a = new Cat();\n        }\n        return a.sound();\n    }\n}',
  explanation: '<p>Ye dynamic method dispatch hai — method call runtime par resolve hoti hai. Reference <code>Animal</code> type ka hai, lekin object <code>Dog</code> ka hai, isliye JVM Dog wala <code>sound()</code> chalata hai. Ise runtime polymorphism kehte hain.</p>'
});
