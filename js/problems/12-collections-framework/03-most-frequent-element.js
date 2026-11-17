/* JavaQuest — Problem: Most Frequent Element (Collections Framework, Easy) */
PROBLEMS.push({
  id: '12-03',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Most Frequent Element',
  difficulty: 'Easy',
  statement: '<p>Ek integer array diya gaya hai. HashMap se har number ki frequency gino aur sabse zyada baar aane wala number return karo. Agar tie ho to koi bhi ek sahi hai. Array khaali nahi hoga.</p>',
  examples: [
    { input: 'mostFrequent([1, 3, 2, 3, 4, 3])', output: '3', explanation: '3 teen baar aata hai, sabse zyada.' },
    { input: 'mostFrequent([5, 5, 1, 1, 5])', output: '5', explanation: '5 teen baar aata hai, 1 do baar.' }
  ],
  constraints: ['Array ki length 1 se 1000 tak', 'Array khaali nahi hoga'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int mostFrequent(int[] arr) {\n        // TODO: sabse zyada baar aane wala number dhoondho\n        return 0;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int mostFrequent(int[] arr) {\n        Map<Integer, Integer> freq = new HashMap<>();\n        for (int n : arr) {\n            freq.put(n, freq.getOrDefault(n, 0) + 1);\n        }\n        int best = arr[0];\n        for (Map.Entry<Integer, Integer> e : freq.entrySet()) {\n            if (e.getValue() > freq.get(best)) {\n                best = e.getKey();\n            }\n        }\n        return best;\n    }\n}',
  explanation: '<p>Pehle HashMap me har number ki count banao, phir entrySet par loop karke sabse badi count wala number dhoondho. Ye frequency-count pattern collections ke bahut se problems me kaam aata hai.</p>'
});
