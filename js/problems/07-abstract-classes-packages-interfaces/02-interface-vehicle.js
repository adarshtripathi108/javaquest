/* JavaQuest — Problem: Vehicle Interface (Abstract Classes, Packages & Interfaces, Easy) */
PROBLEMS.push({
  id: '7-02',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Vehicle Interface',
  difficulty: 'Easy',
  statement: '<p>Ek interface <code>Vehicle</code> banao jisme <code>start()</code> method ka declaration ho. <code>Car</code> aur <code>Bike</code> classes Vehicle ko implement karke start() ko apne tareeke se define karein — Car <code>Car started</code> aur Bike <code>Bike started</code> return kare.</p>',
  examples: [
    { input: 'startCar()', output: '"Car started"', explanation: 'Car ne Vehicle ke start() ko apne tareeke se implement kiya.' },
    { input: 'startBike()', output: '"Bike started"', explanation: 'Bike ne Vehicle ke start() ko apne tareeke se implement kiya.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    interface Vehicle {\n        String start();\n    }\n    class Car implements Vehicle {\n        public String start() {\n            // TODO: "Car started" return karo\n            return "";\n        }\n    }\n    class Bike implements Vehicle {\n        public String start() {\n            // TODO: "Bike started" return karo\n            return "";\n        }\n    }\n    String startCar() {\n        return "";\n    }\n    String startBike() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    interface Vehicle {\n        String start();\n    }\n    class Car implements Vehicle {\n        public String start() {\n            return "Car started";\n        }\n    }\n    class Bike implements Vehicle {\n        public String start() {\n            return "Bike started";\n        }\n    }\n    String startCar() {\n        Car c = new Car();\n        return c.start();\n    }\n    String startBike() {\n        Bike b = new Bike();\n        return b.start();\n    }\n}',
  explanation: '<p>Interface ek contract hai — sirf method signatures batata hai, implementation nahi. Implement karne wali har class ko saare methods define karne padte hain, aur interface ke methods public hote hain isliye implementation me bhi <code>public</code> likhna zaroori hai.</p>'
});
