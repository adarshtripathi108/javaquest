/* JavaQuest — Problem: Top K Frequent Elements (Collections Framework, Medium) */
PROBLEMS.push({
  id: '12-10',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Top K Frequent Elements',
  difficulty: 'Medium',
  statement: '<p>Ek integer array aur ek number k diye gaye hain. Sabse zyada baar aane wale k numbers return karo. Pehle HashMap se frequency gino, phir min-heap (PriorityQueue) me sirf top k entries rakho — heap ka size k se bada hote hi sabse kam frequency wali entry nikal do.</p>',
  examples: [
    { input: 'topKFrequent([1, 1, 1, 2, 2, 3], 2)', output: '[1, 2]', explanation: '1 teen baar aur 2 do baar aata hai — top 2.' },
    { input: 'topKFrequent([1], 1)', output: '[1]', explanation: 'Ek hi number hai.' }
  ],
  constraints: ['1 <= k <= alag numbers ki count', 'Array ki length 1 se 1000 tak'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int[] topKFrequent(int[] nums, int k) {\n        // TODO: top k frequent numbers nikalo\n        return new int[0];\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int[] topKFrequent(int[] nums, int k) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int n : nums) {\n            freq.put(n, freq.getOrDefault(n, 0) + 1);\n        }\n        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());\n        for (Map.Entry<Integer, Integer> e : freq.entrySet()) {\n            pq.offer(e);\n            if (pq.size() > k) {\n                pq.poll();\n            }\n        }\n        int[] result = new int[k];\n        for (int i = k - 1; i >= 0; i--) {\n            result[i] = pq.poll().getKey();\n        }\n        return result;\n    }\n}',
  explanation: '<p>Min-heap me sabse kam frequency wali entry upar rehti hai. Heap me k se zyada entries hote hi sabse chhoti nikal do — aakhir me heap me sirf top k frequent entries bachti hain.</p>'
});
