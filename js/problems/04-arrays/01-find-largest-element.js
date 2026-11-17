/* JavaQuest — Problem: Find Largest Element (Arrays, Easy) */
PROBLEMS.push({
  id: '04-01',
  topicId: 4,
  topic: 'Arrays',
  title: 'Find Largest Element',
  difficulty: 'Easy',
  statement: '<p>Tumhe integers ka ek array diya gaya hai. Usme sabse bada element dhoondh kar return karo. Array ka pehla element hi starting max maan kar aage badho.</p>',
  examples: [ { input: 'arr = [3, 7, 2, 9, 1]', output: '9', explanation: '9 sabse bada element hai.' }, { input: 'arr = [-5, -2, -9]', output: '-2', explanation: 'Negative numbers me -2 sabse bada hai.' }, { input: 'arr = [4]', output: '4', explanation: 'Ek hi element hai, wahi sabse bada hai.' } ],
  constraints: [ '1 <= arr.length <= 1000', '-100000 <= arr[i] <= 100000' ],
  starter: 'class Solution {\n    public int largest(int[] arr) {\n        // TODO: max variable se sabse bada element dhoondo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int largest(int[] arr) {\n        int max = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] > max) {\n                max = arr[i];\n            }\n        }\n        return max;\n    }\n}',
  explanation: '<p><b>max</b> ko pehle element se shuru karo, phir har element se compare karo. Agar koi element max se bada mile to max update kar do. Aakhir me max hi jawab hai.</p>'
});
