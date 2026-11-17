/* JavaQuest — Problem: PECS Copy (Generics, Hard) */
PROBLEMS.push({
  id: '11-12',
  topicId: 11,
  topic: 'Generics',
  title: 'PECS Copy',
  difficulty: 'Hard',
  statement: '<p>Ek generic method copyList likho jo ek source list se doosri destination list me saare elements copy kare: <T> void copyList(List<? extends T> src, List<? super T> dest). Source producer hai (extends — sirf read), destination consumer hai (super — sirf write). Ye PECS rule hai: Producer Extends, Consumer Super.</p>',
  examples: [
    { input: 'copyDemo()', output: '[1, 2, 3]', explanation: 'Integer list [1, 2, 3] Number list me copy hoti hai.' },
    { input: 'copyDemo() (dobara chalane par)', output: '[1, 2, 3]', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Source List<? extends T> aur destination List<? super T> hone chahiye', 'Method generic <T> hona chahiye'],
  starter: 'import java.util.*;\n\nclass Solution {\n    <T> void copyList(List<? extends T> src, List<? super T> dest) {\n        // TODO: src ke elements dest me copy karo\n    }\n\n    String copyDemo() {\n        List<Integer> src = Arrays.asList(1, 2, 3);\n        List<Number> dest = new ArrayList<>();\n        copyList(src, dest);\n        return dest.toString();\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    <T> void copyList(List<? extends T> src, List<? super T> dest) {\n        for (T item : src) {\n            dest.add(item);\n        }\n    }\n\n    String copyDemo() {\n        List<Integer> src = Arrays.asList(1, 2, 3);\n        List<Number> dest = new ArrayList<>();\n        copyList(src, dest);\n        return dest.toString();\n    }\n}',
  explanation: '<p>PECS rule yaad rakho: jahan se data nikalte ho wahan extends, jahan data daalte ho wahan super. Isse List<Integer> ko List<Number> me copy kar sakte hain — bina wildcards ke ye compile nahi hota.</p>'
});
