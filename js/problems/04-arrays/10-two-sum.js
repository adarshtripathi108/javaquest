/* JavaQuest — Problem: Two Sum (Arrays, Medium) */
PROBLEMS.push({
  id: '04-10',
  topicId: 4,
  topic: 'Arrays',
  title: 'Two Sum',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek array aur ek <b>target</b> number diya gaya hai. Array me aise <b>do alag indices</b> dhoondo jinke elements ka sum target ke barabar ho, aur un indices ko array me return karo. Aisa ek hi pair hoga aur ek element ko dobara use nahi kar sakte.</p>',
  examples: [ { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9.' }, { input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]', explanation: 'nums[1] + nums[2] = 2 + 4 = 6.' }, { input: 'nums = [3, 3], target = 6', output: '[0, 1]', explanation: 'nums[0] + nums[1] = 3 + 3 = 6.' } ],
  constraints: [ '2 <= nums.length <= 1000', 'Ek hi valid pair hai.' ],
  starter: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // TODO: HashMap se har number ka complement dhoondo\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        java.util.HashMap<Integer, Integer> seen = new java.util.HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int need = target - nums[i];\n            if (seen.containsKey(need)) {\n                return new int[] {seen.get(need), i};\n            }\n            seen.put(nums[i], i);\n        }\n        return new int[0];\n    }\n}',
  explanation: '<p>Har number ke liye <b>complement (target - nums[i])</b> chahiye. <b>HashMap</b> me pehle dekhe gaye numbers aur unke index rakho. Agar complement map me mil jaye to dono indices mil gaye.</p>'
});
