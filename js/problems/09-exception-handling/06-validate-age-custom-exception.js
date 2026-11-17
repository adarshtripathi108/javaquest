/* JavaQuest — Problem: Validate Age (Custom Exception) (Exception Handling, Medium) */
PROBLEMS.push({
  id: '9-06',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Validate Age (Custom Exception)',
  difficulty: 'Medium',
  statement: '<p>Ek custom exception InvalidAgeException banao (Exception ko extend karke). Ek method checkAge likho jo age 0 se 150 ke beech ho to "Valid age: X" return kare, warna InvalidAgeException throw karke use catch karke "Invalid: Age must be between 0 and 150" return kare.</p>',
  examples: [
    { input: 'checkAge(25)', output: 'Valid age: 25', explanation: '25 valid range me hai.' },
    { input: 'checkAge(-5)', output: 'Invalid: Age must be between 0 and 150', explanation: 'Negative age par custom exception throw aur catch hoti hai.' },
    { input: 'checkAge(200)', output: 'Invalid: Age must be between 0 and 150', explanation: '200 range se bahar hai.' }
  ],
  constraints: ['Age koi bhi integer ho sakta hai', 'InvalidAgeException ko Exception extend karna hai'],
  starter: 'class Solution {\n    String checkAge(int age) {\n        // TODO: custom exception se age validate karo\n        return "";\n    }\n}',
  solution: 'class InvalidAgeException extends Exception {\n    InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\nclass Solution {\n    String checkAge(int age) {\n        try {\n            if (age < 0 || age > 150) {\n                throw new InvalidAgeException("Age must be between 0 and 150");\n            }\n            return "Valid age: " + age;\n        } catch (InvalidAgeException e) {\n            return "Invalid: " + e.getMessage();\n        }\n    }\n}',
  explanation: '<p>Custom exception banane ke liye Exception class ko extend karo aur constructor me super(message) call karo. Galat age par throw karo, aur catch me getMessage se message nikal kar return karo.</p>'
});
