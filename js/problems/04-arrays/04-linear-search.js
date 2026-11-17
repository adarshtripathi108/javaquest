/* JavaQuest — Problem: Linear Search (Arrays, Easy) */
PROBLEMS.push({
  id: '04-04',
  topicId: 4,
  topic: 'Arrays',
  title: 'Linear Search',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek array aur ek <b>target</b> value di gayi hai. Target array me kis <b>index</b> par hai, wo return karo. Agar target array me nahi hai to <b>-1</b> return karo. Agar target kai baar hai to pehla index return karo.</p>',
  examples: [ { input: 'arr = [10, 20, 30, 40], target = 30', output: '2', explanation: '30 index 2 par hai.' }, { input: 'arr = [10, 20, 30], target = 99', output: '-1', explanation: '99 array me nahi hai.' }, { input: 'arr = [5, 5, 5], target = 5', output: '0', explanation: '5 pehli baar index 0 par milta hai.' } ],
  constraints: [ '1 <= arr.length <= 1000' ],
  starter: 'class Solution {\n    public int search(int[] arr, int target) {\n        // TODO: har element ko target se compare karo, milne par index return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int search(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}',
  explanation: '<p>Array ko shuru se aakhir tak scan karo. Jaise hi element target ke barabar mile, uska index return kar do. Poora array dekhne ke baad bhi na mile to <b>-1</b> return karo.</p>'
});
