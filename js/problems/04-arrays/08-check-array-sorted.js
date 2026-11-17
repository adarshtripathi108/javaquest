/* JavaQuest — Problem: Check if Array is Sorted (Arrays, Medium) */
PROBLEMS.push({
  id: '04-08',
  topicId: 4,
  topic: 'Arrays',
  title: 'Check if Array is Sorted',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek array diya gaya hai. Check karo ki wo <b>ascending order</b> (badhti hui) me sorted hai ya nahi. Agar har element apne pichhle element se bada ya barabar hai to <b>true</b> return karo, warna <b>false</b>.</p>',
  examples: [ { input: 'arr = [1, 2, 3, 4]', output: 'true', explanation: 'Har element pichhle se bada hai.' }, { input: 'arr = [1, 3, 2]', output: 'false', explanation: '3 ke baad 2 aata hai, isliye sorted nahi hai.' }, { input: 'arr = [5, 5, 5]', output: 'true', explanation: 'Barabar values bhi sorted mani jati hain.' } ],
  constraints: [ '1 <= arr.length <= 1000' ],
  starter: 'class Solution {\n    public boolean isSorted(int[] arr) {\n        // TODO: har element ko pichhle se compare karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isSorted(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] < arr[i - 1]) {\n                return false;\n            }\n        }\n        return true;\n    }\n}',
  explanation: '<p>Dusre element se shuru karke har element ko pichhle se compare karo. Agar koi element pichhle se chhota mile to array sorted nahi hai. Poora array pass ho jaye to sorted hai.</p>'
});
