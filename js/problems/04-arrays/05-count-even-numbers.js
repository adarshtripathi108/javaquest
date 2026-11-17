/* JavaQuest — Problem: Count Even Numbers in Array (Arrays, Easy) */
PROBLEMS.push({
  id: '04-05',
  topicId: 4,
  topic: 'Arrays',
  title: 'Count Even Numbers in Array',
  difficulty: 'Easy',
  statement: '<p>Tumhe integers ka ek array diya gaya hai. Usme kitne <b>even</b> (sam) numbers hain, wo gino aur return karo.</p>',
  examples: [ { input: 'arr = [1, 2, 3, 4, 5, 6]', output: '3', explanation: 'Even numbers 2, 4, 6 hain, total 3.' }, { input: 'arr = [1, 3, 5]', output: '0', explanation: 'Koi even number nahi hai.' }, { input: 'arr = [2, 4]', output: '2', explanation: 'Dono even hain.' } ],
  constraints: [ '1 <= arr.length <= 1000' ],
  starter: 'class Solution {\n    public int countEven(int[] arr) {\n        // TODO: har element par % 2 check karo aur gino\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int countEven(int[] arr) {\n        int count = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] % 2 == 0) {\n                count++;\n            }\n        }\n        return count;\n    }\n}',
  explanation: '<p>Har element par <b>% 2 == 0</b> check karo. Even milne par count badha do. Aakhir me count hi jawab hai.</p>'
});
