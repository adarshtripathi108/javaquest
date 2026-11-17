/* JavaQuest — Problem: Wildcard Capture Swap (Generics, Hard) */
PROBLEMS.push({
  id: '11-11',
  topicId: 11,
  topic: 'Generics',
  title: 'Wildcard Capture Swap',
  difficulty: 'Hard',
  statement: '<p>Ek method swapFirstTwo likho jo List<?> le aur uske pehle do elements ko aapas me badal de. List<?> me seedha set nahi kar sakte — compiler type nahi jaanta. Isliye ek private generic helper <T> void swapHelper(List<T> list) banao jo actual swap kare; compiler helper call par wildcard ko capture karke T bana deta hai.</p>',
  examples: [
    { input: 'swapDemo()', output: '[2, 1, 3]', explanation: 'List [1, 2, 3] ke pehle do elements badal kar [2, 1, 3] bante hain.' },
    { input: 'swapDemo() (dobara chalane par)', output: '[2, 1, 3]', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['swapFirstTwo ka parameter List<?> hona chahiye', 'Actual swap generic helper method me hona chahiye'],
  starter: 'import java.util.*;\n\nclass Solution {\n    void swapFirstTwo(List<?> list) {\n        // TODO: helper se pehle do elements badlo\n    }\n\n    String swapDemo() {\n        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));\n        swapFirstTwo(list);\n        return list.toString();\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    void swapFirstTwo(List<?> list) {\n        swapHelper(list);\n    }\n\n    private <T> void swapHelper(List<T> list) {\n        T temp = list.get(0);\n        list.set(0, list.get(1));\n        list.set(1, temp);\n    }\n\n    String swapDemo() {\n        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));\n        swapFirstTwo(list);\n        return list.toString();\n    }\n}',
  explanation: '<p>List<?> me set karna compile error deta hai kyunki ? ka type unknown hai. Generic helper me call karne par compiler wildcard capture karta hai — ? ko ek fresh type T maan kar set allow kar deta hai. Ye wildcard capture ka classic pattern hai.</p>'
});
