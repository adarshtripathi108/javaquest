/* JavaQuest — Problem: Animal Sound Override (Inheritance, Easy) */
PROBLEMS.push({
  id: '6-01',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Animal Sound Override',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Animal</code> class banao jisme <code>sound()</code> method <code>Animal makes a sound</code> return kare. Phir ek <code>Dog</code> class banao jo Animal ko extend kare aur <code>sound()</code> ko override karke <code>Dog barks</code> return kare. Dono classes ke objects se sound nikaal kar return karo.</p>',
  examples: [
    { input: 'animalSound()', output: '"Animal makes a sound"', explanation: 'Animal ka apna sound() chala.' },
    { input: 'dogSound()', output: '"Dog barks"', explanation: 'Dog ne sound() ko override kiya, isliye uska version chala.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Animal {\n        String sound() {\n            // TODO: "Animal makes a sound" return karo\n            return "";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            // TODO: "Dog barks" return karo\n            return "";\n        }\n    }\n    String animalSound() {\n        return "";\n    }\n    String dogSound() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Animal {\n        String sound() {\n            return "Animal makes a sound";\n        }\n    }\n    class Dog extends Animal {\n        String sound() {\n            return "Dog barks";\n        }\n    }\n    String animalSound() {\n        Animal a = new Animal();\n        return a.sound();\n    }\n    String dogSound() {\n        Dog d = new Dog();\n        return d.sound();\n    }\n}',
  explanation: '<p>Subclass parent ke methods ko override kar sakti hai — same signature, naya behaviour. Dog ka object <code>sound()</code> call kare to Dog wala version chalta hai, Animal wala nahi.</p>'
});
