/* JavaQuest — Problem: Multiple Catch Blocks (Exception Handling, Medium) */
PROBLEMS.push({
  id: '9-07',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Multiple Catch Blocks',
  difficulty: 'Medium',
  statement: '<p>Do strings a aur b di gayi hain. Dono ko integer me parse karke divide karo aur "Result: q" return karo. Agar string valid number nahi hai to "Invalid number" return karo, aur agar divisor zero hai to "Cannot divide by zero" return karo. Har exception ke liye alag catch block use karo.</p>',
  examples: [
    { input: 'parseAndDivide("10", "2")', output: 'Result: 5', explanation: 'Dono parse hote hain aur 10 / 2 = 5.' },
    { input: 'parseAndDivide("10", "0")', output: 'Cannot divide by zero', explanation: 'Zero se divide par ArithmeticException catch hoti hai.' },
    { input: 'parseAndDivide("ten", "2")', output: 'Invalid number', explanation: '"ten" parse nahi hota, NumberFormatException catch hoti hai.' }
  ],
  constraints: ['Strings ki length 0 se 10 tak', 'Catch blocks ka order specific se general hona chahiye'],
  starter: 'class Solution {\n    String parseAndDivide(String a, String b) {\n        // TODO: multiple catch blocks se handle karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String parseAndDivide(String a, String b) {\n        try {\n            int x = Integer.parseInt(a);\n            int y = Integer.parseInt(b);\n            return "Result: " + (x / y);\n        } catch (NumberFormatException e) {\n            return "Invalid number";\n        } catch (ArithmeticException e) {\n            return "Cannot divide by zero";\n        }\n    }\n}',
  explanation: '<p>Ek try ke saath multiple catch blocks lag sakte hain. JVM pehle matching catch ko chalata hai — isliye specific exceptions pehle aur general (Exception) baad me likhte hain.</p>'
});
