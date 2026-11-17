/* JavaQuest — Problem: Sliding Window Maximum (Collections Framework, Hard) */
PROBLEMS.push({
  id: '12-12',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Sliding Window Maximum',
  difficulty: 'Hard',
  statement: '<p>Ek integer array aur ek window size k diye gaye hain. Har size-k window ka maximum nikalo aur results ko array me return karo. Deque (double-ended queue) me indices rakho — deque ka front hamesha current window ka maximum rakhta hai, aur peeche se chhote elements hata do kyunki wo kabhi maximum nahi banenge.</p>',
  examples: [
    { input: 'maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)', output: '[3, 3, 5, 5, 6, 7]', explanation: 'Windows: [1,3,-1]=3, [3,-1,-3]=3, [-1,-3,5]=5, [-3,5,3]=5, [5,3,6]=6, [3,6,7]=7.' },
    { input: 'maxSlidingWindow([1], 1)', output: '[1]', explanation: 'Ek hi window hai.' }
  ],
  constraints: ['1 <= k <= array ki length', 'Array ki length 1 se 10000 tak'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int[] maxSlidingWindow(int[] nums, int k) {\n        // TODO: Deque se har window ka maximum nikalo\n        return new int[0];\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int[] maxSlidingWindow(int[] nums, int k) {\n        List<Integer> result = new ArrayList<>();\n        Deque<Integer> deque = new ArrayDeque<>();\n        for (int i = 0; i < nums.length; i++) {\n            while (!deque.isEmpty() && deque.peekFirst() <= i - k) {\n                deque.pollFirst();\n            }\n            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {\n                deque.pollLast();\n            }\n            deque.offerLast(i);\n            if (i >= k - 1) {\n                result.add(nums[deque.peekFirst()]);\n            }\n        }\n        int[] ans = new int[result.size()];\n        for (int i = 0; i < ans.length; i++) {\n            ans[i] = result.get(i);\n        }\n        return ans;\n    }\n}',
  explanation: '<p>Deque me indices decreasing order me rakhte hain — front par hamesha window ka maximum hota hai. Window se bahar gaye indices front se aur current se chhote elements back se hata do. Har element ek baar aata aur ek baar jata hai, isliye solution O(n) hai.</p>'
});
