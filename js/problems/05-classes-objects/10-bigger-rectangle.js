/* JavaQuest — Problem: Bigger Rectangle (Classes & Objects, Medium) */
PROBLEMS.push({
  id: '5-10',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Bigger Rectangle',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Rectangle</code> class banao jisme <code>area()</code> method ho. Method <code>biggerArea</code> ko do rectangles ke dimensions milenge — dono ke objects banao, unke areas nikalo, aur bade wale rectangle ka area return karo. Agar dono barabar hon to pehle wale ka area return karo.</p>',
  examples: [
    { input: 'l1 = 5, w1 = 4, l2 = 3, w2 = 3', output: '20', explanation: 'Pehla area 20, doosra 9 — bada 20 hai.' },
    { input: 'l1 = 2, w1 = 2, l2 = 6, w2 = 1', output: '6', explanation: 'Pehla area 4, doosra 6 — bada 6 hai.' }
  ],
  constraints: ['saare dimensions positive integers honge'],
  starter: 'class Solution {\n    class Rectangle {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        int area() {\n            // TODO: area return karo\n            return 0;\n        }\n    }\n    int biggerArea(int l1, int w1, int l2, int w2) {\n        // TODO: dono rectangles banao aur bade wale ka area return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Rectangle {\n        int length;\n        int width;\n        Rectangle(int length, int width) {\n            this.length = length;\n            this.width = width;\n        }\n        int area() {\n            return length * width;\n        }\n    }\n    int biggerArea(int l1, int w1, int l2, int w2) {\n        Rectangle r1 = new Rectangle(l1, w1);\n        Rectangle r2 = new Rectangle(l2, w2);\n        if (r1.area() >= r2.area()) {\n            return r1.area();\n        }\n        return r2.area();\n    }\n}',
  explanation: '<p>Objects ko methods ke andar bana kar unke methods call kiye ja sakte hain. Yahan dono rectangles ke <code>area()</code> compare kiye gaye — <code>&gt;=</code> ki wajah se tie me pehle wale ka area return hota hai.</p>'
});
