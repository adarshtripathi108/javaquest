/* JavaQuest — Problem: Remove Duplicates from Sorted Array (Arrays, Medium) */
PROBLEMS.push({
  id: '04-09',
  topicId: 4,
  topic: 'Arrays',
  title: 'Remove Duplicates from Sorted Array',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek <b>sorted</b> array diya gaya hai jisme duplicate values ho sakti hain. Saare duplicates hatakar sirf unique values wala naya array return karo. Sorted hone ki wajah se duplicate values hamesha paas-paas hoti hain.</p>',
  examples: [ { input: 'arr = [1, 1, 2, 2, 3]', output: '[1, 2, 3]', explanation: 'Duplicates hatane par 1, 2, 3 bachte hain.' }, { input: 'arr = [1, 2, 3]', output: '[1, 2, 3]', explanation: 'Koi duplicate nahi hai, array same rehta hai.' }, { input: 'arr = [5, 5, 5, 5]', output: '[5]', explanation: 'Sirf ek unique value hai.' } ],
  constraints: [ '1 <= arr.length <= 1000', 'Array ascending order me sorted hai.' ],
  starter: 'class Solution {\n    public int[] removeDuplicates(int[] arr) {\n        // TODO: two pointers se unique values aage lao aur copyOf se naya array banao\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] removeDuplicates(int[] arr) {\n        int write = 1;\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] != arr[i - 1]) {\n                arr[write] = arr[i];\n                write++;\n            }\n        }\n        return java.util.Arrays.copyOf(arr, write);\n    }\n}',
  explanation: '<p><b>write</b> pointer unique values ki jagah batata hai. Jab <b>arr[i]</b> pichhle element se alag ho to wo unique hai, use write position par likho. Aakhir me <b>Arrays.copyOf</b> se pehle write elements ka naya array banao.</p>'
});
