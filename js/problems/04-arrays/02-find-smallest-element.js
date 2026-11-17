/* JavaQuest — Problem: Find Smallest Element (Arrays, Easy) */
PROBLEMS.push({
  id: '04-02',
  topicId: 4,
  topic: 'Arrays',
  title: 'Find Smallest Element',
  difficulty: 'Easy',
  statement: '<p>Tumhe integers ka ek array diya gaya hai. Usme sabse chhota element dhoondh kar return karo.</p>',
  examples: [ { input: 'arr = [3, 7, 2, 9, 1]', output: '1', explanation: '1 sabse chhota element hai.' }, { input: 'arr = [8, 8, 8]', output: '8', explanation: 'Saare elements barabar hain, isliye sabse chhota 8 hai.' }, { input: 'arr = [-1, 0, 5]', output: '-1', explanation: '-1 sabse chhota hai.' } ],
  constraints: [ '1 <= arr.length <= 1000', '-100000 <= arr[i] <= 100000' ],
  starter: 'class Solution {\n    public int smallest(int[] arr) {\n        // TODO: min variable se sabse chhota element dhoondo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int smallest(int[] arr) {\n        int min = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] < min) {\n                min = arr[i];\n            }\n        }\n        return min;\n    }\n}',
  explanation: '<p><b>min</b> ko pehle element se shuru karo, phir har element se compare karo. Agar koi element min se chhota mile to min update kar do.</p>'
});
