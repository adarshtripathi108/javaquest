/* JavaQuest — Problem: Sum of Array Elements (Arrays, Easy) */
PROBLEMS.push({
  id: '04-03',
  topicId: 4,
  topic: 'Arrays',
  title: 'Sum of Array Elements',
  difficulty: 'Easy',
  statement: '<p>Tumhe integers ka ek array diya gaya hai. Uske saare elements ka sum return karo.</p>',
  examples: [ { input: 'arr = [1, 2, 3, 4]', output: '10', explanation: '1 + 2 + 3 + 4 = 10.' }, { input: 'arr = [5]', output: '5', explanation: 'Ek hi element hai.' }, { input: 'arr = [-2, 2]', output: '0', explanation: '-2 + 2 = 0.' } ],
  constraints: [ '1 <= arr.length <= 1000', '-10000 <= arr[i] <= 10000' ],
  starter: 'class Solution {\n    public int sum(int[] arr) {\n        // TODO: loop se saare elements jodo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int sum(int[] arr) {\n        int sum = 0;\n        for (int i = 0; i < arr.length; i++) {\n            sum += arr[i];\n        }\n        return sum;\n    }\n}',
  explanation: '<p><b>sum = 0</b> se shuru karo aur loop me har element ko sum me jodte jao. Loop ke baad sum hi total hai.</p>'
});
