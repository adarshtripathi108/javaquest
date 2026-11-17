/* JavaQuest — Problem: Join List Elements with an Iterator (Iterators, Comparators & Sorting Collections, Easy) */
PROBLEMS.push({
  id: '15-01',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Join List Elements with an Iterator',
  difficulty: 'Easy',
  statement: '<p>Strings ki ek list di gayi hai. <code>Iterator</code> ka use karke saare elements ko ek String me jodo, har do elements ke beech <code>", "</code> lagakar. Aakhir me koi extra comma nahi hona chahiye.</p><p><code>hasNext()</code> batata hai ki aage koi element bacha hai ya nahi, aur <code>next()</code> agla element return karta hai. Iterator ka yehi basic pattern hai jo har collection pe kaam karta hai.</p>',
  examples: [
    { input: '["Java", "Python", "C++"]', output: '"Java, Python, C++"', explanation: 'Teeno elements comma-space se judte hain, aakhir me koi comma nahi hota.' },
    { input: '[] (khaali list)', output: '"" (khaali string)', explanation: 'Koi element nahi hai to hasNext pehle hi false deta hai aur khaali string return hoti hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'Iterator ka use karna hai, index loop ka nahi.', 'Aakhir me extra separator nahi hona chahiye.'],
  starter: 'import java.util.Iterator;\nimport java.util.List;\n\nclass Solution {\n    public String joinWithIterator(List<String> list) {\n        // TODO: Iterator se elements jodo\n        return "";\n    }\n}',
  solution: 'import java.util.Iterator;\nimport java.util.List;\n\nclass Solution {\n    public String joinWithIterator(List<String> list) {\n        StringBuilder sb = new StringBuilder();\n        Iterator<String> it = list.iterator();\n        while (it.hasNext()) {\n            sb.append(it.next());\n            if (it.hasNext()) {\n                sb.append(", ");\n            }\n        }\n        return sb.toString();\n    }\n}',
  explanation: '<p>Har element append karne ke baad <code>hasNext()</code> se check karo ki koi element aur bacha hai ya nahi — bacha hai to hi comma lagao. Isse aakhir me extra comma nahi aata, aur ye pattern kisi bhi List pe kaam karta hai.</p>'
});
