/* JavaQuest — Problem: Leap Year Check (Java Basics, Easy) */
PROBLEMS.push({
  id: '02-05',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Leap Year Check',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek year diya gaya hai. Check karo ki wo <b>leap year</b> hai ya nahi. Leap year ka rule: year 4 se divisible ho aur 100 se divisible na ho, <b>ya</b> year 400 se divisible ho.</p>',
  examples: [ { input: 'year = 2024', output: 'true', explanation: '2024 ko 4 se divide kiya ja sakta hai aur 100 se nahi, isliye leap year hai.' }, { input: 'year = 1900', output: 'false', explanation: '1900 ko 4 se divide kiya ja sakta hai lekin 100 se bhi, aur 400 se nahi, isliye leap year nahi hai.' }, { input: 'year = 2000', output: 'true', explanation: '2000 ko 400 se divide kiya ja sakta hai, isliye leap year hai.' } ],
  constraints: [ '1 <= year <= 10000' ],
  starter: 'class Solution {\n    public boolean isLeapYear(int year) {\n        // TODO: leap year rule apply karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isLeapYear(int year) {\n        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n    }\n}',
  explanation: '<p>Do conditions <b>||</b> (OR) se jodi hain: <b>(4 se divisible aur 100 se nahi)</b> ya <b>(400 se divisible)</b>. Brackets se pehli condition ek saath evaluate hoti hai.</p>'
});
