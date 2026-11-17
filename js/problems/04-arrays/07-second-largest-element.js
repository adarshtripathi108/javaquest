/* JavaQuest — Problem: Second Largest Element (Arrays, Medium) */
PROBLEMS.push({
  id: '04-07',
  topicId: 4,
  topic: 'Arrays',
  title: 'Second Largest Element',
  difficulty: 'Medium',
  statement: '<p>Tumhe integers ka ek array diya gaya hai. Usme <b>second largest</b> (dusra sabse bada) element return karo. Array me kam se kam 2 alag values hain, isliye jawab hamesha milega. Duplicate values ko dhyan se handle karo.</p>',
  examples: [ { input: 'arr = [3, 7, 2, 9, 1]', output: '7', explanation: 'Sabse bada 9 hai, dusra sabse bada 7 hai.' }, { input: 'arr = [10, 5, 10, 8]', output: '8', explanation: 'Sabse bada 10 hai, dusra sabse bada 8 hai (10 dobara nahi gina jata).' }, { input: 'arr = [1, 2]', output: '1', explanation: 'Sabse bada 2 hai, dusra sabse bada 1 hai.' } ],
  constraints: [ '2 <= arr.length <= 1000', 'Array me kam se kam 2 alag values hain.' ],
  starter: 'class Solution {\n    public int secondLargest(int[] arr) {\n        // TODO: largest aur secondLargest track karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int secondLargest(int[] arr) {\n        int largest = Integer.MIN_VALUE;\n        int second = Integer.MIN_VALUE;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] > largest) {\n                second = largest;\n                largest = arr[i];\n            } else if (arr[i] > second && arr[i] != largest) {\n                second = arr[i];\n            }\n        }\n        return second;\n    }\n}',
  explanation: '<p>Do variables rakho: <b>largest</b> aur <b>second</b>. Naya sabse bada mile to purana largest second ban jata hai. Agar number largest se chhota lekin second se bada hai to second update karo. <b>arr[i] != largest</b> check duplicate ko second banne se rokta hai.</p>'
});
