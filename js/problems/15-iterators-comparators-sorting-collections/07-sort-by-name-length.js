/* JavaQuest — Problem: Sort Strings by Length, Then Alphabetically (Iterators, Comparators & Sorting Collections, Medium) */
PROBLEMS.push({
  id: '15-07',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Strings by Length, Then Alphabetically',
  difficulty: 'Medium',
  statement: '<p>Strings ki ek list ko pehle length ke hisaab se sort karo (chhoti pehle), aur barabar length wali strings ko alphabetical order me rakho. <code>thenComparing()</code> se do comparators ko chain karo.</p><p>Chained comparator pehle length compare karta hai — agar barabar hai to hi dusra rule (alphabetical) lagta hai. Ye multi-level sorting ka basic pattern hai.</p>',
  examples: [
    { input: '["java", "c", "python", "go"]', output: '["c", "go", "java", "python"]', explanation: 'Length ke hisaab se: c (1), go (2), java (4), python (6).' },
    { input: '["bb", "aa", "c"]', output: '["c", "aa", "bb"]', explanation: 'c sabse chhota hai (1). "aa" aur "bb" dono length 2 ke hain, to alphabetical tie-break se aa pehle aata hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'thenComparing() ka use karo.', 'Pehla rule length, dusra alphabetical hona chahiye.'],
  starter: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortByLength(List<String> list) {\n        // TODO: length se sort karo, tie ho to alphabetical\n        return list;\n    }\n}',
  solution: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    public List<String> sortByLength(List<String> list) {\n        list.sort(Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder()));\n        return list;\n    }\n}',
  explanation: '<p><code>comparingInt(String::length)</code> length ka comparator banata hai, aur <code>thenComparing(Comparator.naturalOrder())</code> uske baad alphabetical rule jod deta hai. Chain tabhi aage badhti hai jab pehla comparison tie (0) deta hai.</p>'
});
