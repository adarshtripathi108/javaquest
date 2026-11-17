/* JavaQuest — Problem: Rotate Array by K (Arrays, Hard) */
PROBLEMS.push({
  id: '04-12',
  topicId: 4,
  topic: 'Arrays',
  title: 'Rotate Array by K',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek array aur ek number <b>k</b> diya gaya hai. Array ko <b>right side</b> k positions rotate karke return karo, matlab aakhri k elements aage aa jayein. <b>Reversal trick</b> use karo: pehle poora array ulta karo, phir pehle k elements ulta karo, phir baaki ulta karo.</p>',
  examples: [ { input: 'arr = [1, 2, 3, 4, 5], k = 2', output: '[4, 5, 1, 2, 3]', explanation: 'Aakhri 2 elements 4 aur 5 aage aa jate hain.' }, { input: 'arr = [1, 2, 3], k = 3', output: '[1, 2, 3]', explanation: 'Poora ghoom kar array wapas same ho jata hai.' }, { input: 'arr = [1, 2, 3, 4], k = 1', output: '[4, 1, 2, 3]', explanation: 'Sirf aakhri element 4 aage aata hai.' } ],
  constraints: [ '1 <= arr.length <= 1000', '0 <= k <= 1000' ],
  starter: 'class Solution {\n    public int[] rotate(int[] arr, int k) {\n        // TODO: reversal trick se rotate karo\n        return arr;\n    }\n}',
  solution: 'class Solution {\n    public int[] rotate(int[] arr, int k) {\n        int n = arr.length;\n        k = k % n;\n        reverse(arr, 0, n - 1);\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n        return arr;\n    }\n\n    private void reverse(int[] arr, int left, int right) {\n        while (left < right) {\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n    }\n}',
  explanation: '<p><b>k = k % n</b> se extra ghoomna hat jata hai. Phir teen reversals: poora array ulta, pehle k ulta, baaki ulta. Ye trick array ko k positions right rotate kar deti hai bina extra array ke.</p>'
});
