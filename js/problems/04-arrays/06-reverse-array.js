/* JavaQuest — Problem: Reverse an Array (Arrays, Medium) */
PROBLEMS.push({
  id: '04-06',
  topicId: 4,
  topic: 'Arrays',
  title: 'Reverse an Array',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek array diya gaya hai. Use ulta karke return karo, matlab pehla element aakhri ban jaye aur aakhri pehla. <b>Two pointers</b> technique use karo: ek pointer shuru se, ek aakhir se, aur dono ko swap karte hue beech tak lao.</p>',
  examples: [ { input: 'arr = [1, 2, 3, 4]', output: '[4, 3, 2, 1]', explanation: 'Ulta karne par 4 pehle aur 1 aakhir me aa jata hai.' }, { input: 'arr = [7]', output: '[7]', explanation: 'Ek element ka array ulta karne par same rehta hai.' }, { input: 'arr = [1, 2, 3]', output: '[3, 2, 1]', explanation: '1 aur 3 swap hote hain, 2 beech me rehta hai.' } ],
  constraints: [ '1 <= arr.length <= 1000' ],
  starter: 'class Solution {\n    public int[] reverse(int[] arr) {\n        // TODO: left aur right pointer se swap karte hue ulta karo\n        return arr;\n    }\n}',
  solution: 'class Solution {\n    public int[] reverse(int[] arr) {\n        int left = 0;\n        int right = arr.length - 1;\n        while (left < right) {\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n        return arr;\n    }\n}',
  explanation: '<p><b>left</b> shuru se aur <b>right</b> aakhir se shuru karo. Dono elements swap karo, phir left aage aur right peeche badhao. Jab dono beech me mil jayein, array ulta ho chuka hai.</p>'
});
