/* JavaQuest — Problem: Print Hello Java (Introduction to Java, Easy) */
PROBLEMS.push({
  id: '01-01',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Print Hello Java',
  difficulty: 'Easy',
  statement: '<p>Java me apna pehla program likho. Tumhe ek method likhna hai jo <b>Hello Java</b> text return kare. Ye wahi pehla program hai jo har Java seekhne wala likhta hai.</p>',
  examples: [ { input: '(koi input nahi)', output: 'Hello Java', explanation: 'Method bina kisi input ke Hello Java return karta hai.' }, { input: '(koi input nahi)', output: 'Hello Java', explanation: 'Har baar output same rahega, kyunki text fixed hai.' } ],
  constraints: [ 'Method koi argument nahi leta.', 'Output bilkul Hello Java hona chahiye, spelling aur capital H aur J ke saath.' ],
  starter: 'class Solution {\n    public String sayHello() {\n        // TODO: "Hello Java" return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String sayHello() {\n        return "Hello Java";\n    }\n}',
  explanation: '<p>Java me text ko <b>String</b> kehte hain aur double quotes me likhte hain. Method sirf fixed string return karta hai, isliye koi calculation nahi chahiye.</p>'
});
