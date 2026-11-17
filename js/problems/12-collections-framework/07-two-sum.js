/* JavaQuest — Problem: Two Sum (Collections Framework, Medium) */
PROBLEMS.push({
  id: '12-07',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Two Sum',
  difficulty: 'Medium',
  statement: '<p>Ek integer array aur ek target diya gaya hai. Aise do indices dhoondho jinke numbers ka sum target ke barabar ho, aur un indices ko array me return karo. HashMap me har number ke saath uska index rakho — har number ke liye check karo ki target minus number pehle se map me hai ya nahi.</p>',
  examples: [
    { input: 'twoSum([2, 7, 11, 15], 9)', output: '[0, 1]', explanation: '2 + 7 = 9, indices 0 aur 1.' },
    { input: 'twoSum([3, 2, 4], 6)', output: '[1, 2]', explanation: '2 + 4 = 6, indices 1 aur 2.' }
  ],
  constraints: ['Har input me exactly ek solution hai', 'Ek hi element do baar use nahi kar sakte'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int[] twoSum(int[] nums, int target) {\n        // TODO: HashMap se do indices dhoondho\n        return new int[]{-1, -1};\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int need = target - nums[i];\n            if (seen.containsKey(need)) {\n                return new int[]{seen.get(need), i};\n            }\n            seen.put(nums[i], i);\n        }\n        return new int[]{-1, -1};\n    }\n}',
  explanation: '<p>Har number ke liye uska complement (target minus number) map me dhoondho. Mil jaye to dono indices return karo, warna current number ko map me daal kar aage badho. Ye O(n) solution hai, nested loop se bahut tez.</p>'
});
