/* JavaQuest — Problem: FizzBuzz Check (Control Statements, Medium) */
PROBLEMS.push({
  id: '03-06',
  topicId: 3,
  topic: 'Control Statements',
  title: 'FizzBuzz Check',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. Agar n 3 aur 5 dono se divisible hai to <b>FizzBuzz</b> return karo. Sirf 3 se divisible hai to <b>Fizz</b>, sirf 5 se to <b>Buzz</b>, aur kisi se nahi to number ko string me return karo. Dhyan rakho: dono wali condition <b>pehle</b> check karni hai.</p>',
  examples: [ { input: 'n = 15', output: 'FizzBuzz', explanation: '15, 3 aur 5 dono se divisible hai.' }, { input: 'n = 10', output: 'Buzz', explanation: '10 sirf 5 se divisible hai.' }, { input: 'n = 7', output: '7', explanation: '7 na 3 se na 5 se divisible hai, isliye khud ko string me return karta hai.' } ],
  constraints: [ '1 <= n <= 1000' ],
  starter: 'class Solution {\n    public String fizzBuzz(int n) {\n        // TODO: pehle 15, phir 3, phir 5 se divisibility check karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    public String fizzBuzz(int n) {\n        if (n % 15 == 0) {\n            return "FizzBuzz";\n        } else if (n % 3 == 0) {\n            return "Fizz";\n        } else if (n % 5 == 0) {\n            return "Buzz";\n        } else {\n            return String.valueOf(n);\n        }\n    }\n}',
  explanation: '<p>Order bahut important hai: <b>15 se divisibility pehle</b> check karo, kyunki 15 se divisible number 3 se bhi divisible hota hai. Agar 3 wali condition pehle aa gayi to FizzBuzz kabhi nahi milega.</p>'
});
