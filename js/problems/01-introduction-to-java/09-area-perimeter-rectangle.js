/* JavaQuest — Problem: Area and Perimeter of Rectangle (Introduction to Java, Medium) */
PROBLEMS.push({
  id: '01-09',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Area and Perimeter of Rectangle',
  difficulty: 'Medium',
  statement: '<p>Ek rectangle ki length aur width di gayi hai. Uska <b>area</b> (length x width) aur <b>perimeter</b> (2 x (length + width)) nikaal kar ek array me return karo, jisme pehla element area aur dusra perimeter ho.</p>',
  examples: [ { input: 'length = 5, width = 3', output: '[15, 16]', explanation: 'Area = 5 x 3 = 15, Perimeter = 2 x (5 + 3) = 16.' }, { input: 'length = 10, width = 10', output: '[100, 40]', explanation: 'Area = 10 x 10 = 100, Perimeter = 2 x (10 + 10) = 40.' } ],
  constraints: [ '1 <= length, width <= 1000' ],
  starter: 'class Solution {\n    public int[] rectangle(int length, int width) {\n        // TODO: {area, perimeter} return karo\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] rectangle(int length, int width) {\n        int area = length * width;\n        int perimeter = 2 * (length + width);\n        return new int[] {area, perimeter};\n    }\n}',
  explanation: '<p>Pehle <b>area</b> aur <b>perimeter</b> alag variables me nikaalo, phir dono ko <b>new int[] {area, perimeter}</b> se array me return karo.</p>'
});
