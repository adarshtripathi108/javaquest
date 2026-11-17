/* JavaQuest — Problem: Armstrong Number (Java Basics, Hard) */
PROBLEMS.push({
  id: '02-11',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Armstrong Number',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Check karo ki wo <b>Armstrong number</b> hai ya nahi. Armstrong number wo hota hai jisme har digit ko digits ki ginti ki power me uthakar jodne par wahi number ban jaye. Jaise 153 me 3 digits hain aur 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.</p>',
  examples: [ { input: 'n = 153', output: 'true', explanation: '1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.' }, { input: 'n = 370', output: 'true', explanation: '3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370.' }, { input: 'n = 123', output: 'false', explanation: '1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36, jo 123 nahi hai.' } ],
  constraints: [ '0 <= n <= 100000' ],
  starter: 'class Solution {\n    public boolean isArmstrong(int n) {\n        // TODO: digits gino, har digit ki power ka sum nikaalo, n se compare karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isArmstrong(int n) {\n        int original = n;\n        int digits = 0;\n        int temp = n;\n        if (temp == 0) {\n            digits = 1;\n        }\n        while (temp > 0) {\n            digits++;\n            temp = temp / 10;\n        }\n        int sum = 0;\n        temp = n;\n        while (temp > 0) {\n            int d = temp % 10;\n            int p = 1;\n            for (int i = 0; i < digits; i++) {\n                p = p * d;\n            }\n            sum += p;\n            temp = temp / 10;\n        }\n        return sum == original;\n    }\n}',
  explanation: '<p>Pehle digits gino, phir har digit ko digits ki power me uthakar sum karo. Power ke liye chhota loop use karo taaki <b>Math.pow</b> ki decimal galti se bacha ja sake. Aakhir me sum ko original se compare karo.</p>'
});
