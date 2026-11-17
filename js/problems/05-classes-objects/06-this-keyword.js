/* JavaQuest — Problem: Use of this Keyword (Classes & Objects, Medium) */
PROBLEMS.push({
  id: '5-06',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Use of this Keyword',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Box</code> class banao jisme <code>length</code>, <code>width</code> aur <code>height</code> fields hon. Constructor ke parameters ke naam fields jaisi hi hon, isliye values set karne ke liye <code>this</code> keyword use karna hoga. Ek <code>volume()</code> method box ka volume return kare. Method <code>boxVolume</code> ko teeno dimensions milenge aur use volume return karna hai.</p>',
  examples: [
    { input: 'length = 2, width = 3, height = 4', output: '24', explanation: 'Volume 2 * 3 * 4 = 24.' },
    { input: 'length = 5, width = 5, height = 5', output: '125', explanation: 'Volume 5 * 5 * 5 = 125.' }
  ],
  constraints: ['saare dimensions positive integers honge'],
  starter: 'class Solution {\n    class Box {\n        int length;\n        int width;\n        int height;\n        Box(int length, int width, int height) {\n            // TODO: this keyword se fields set karo\n        }\n        int volume() {\n            // TODO: volume return karo\n            return 0;\n        }\n    }\n    int boxVolume(int length, int width, int height) {\n        // TODO: Box object banao aur volume return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Box {\n        int length;\n        int width;\n        int height;\n        Box(int length, int width, int height) {\n            this.length = length;\n            this.width = width;\n            this.height = height;\n        }\n        int volume() {\n            return length * width * height;\n        }\n    }\n    int boxVolume(int length, int width, int height) {\n        Box b = new Box(length, width, height);\n        return b.volume();\n    }\n}',
  explanation: '<p>Jab parameter ka naam field jaisa ho to parameter field ko shadow kar deta hai — <code>this.length</code> current object ke field ki taraf point karta hai aur <code>length</code> parameter ki taraf. <code>this</code> ke bina field kabhi set hi nahi hota.</p>'
});
