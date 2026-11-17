/* JavaQuest — Problem: Bank Withdrawal with Custom Exceptions (Exception Handling, Hard) */
PROBLEMS.push({
  id: '9-11',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Bank Withdrawal with Custom Exceptions',
  difficulty: 'Hard',
  statement: '<p>Do custom checked exceptions banao: InvalidAmountException aur InsufficientFundsException. Method withdraw(balance, amount) amount zero ya negative ho to InvalidAmountException throw kare, amount balance se bada ho to InsufficientFundsException throw kare, warna "Success! New balance: X" return kare. Dono exceptions ko alag catch blocks me pakad kar "Error: " ke saath unka message return karo.</p>',
  examples: [
    { input: 'withdraw(1000, 300)', output: 'Success! New balance: 700', explanation: '300 nikalne ke baad balance 700 bachta hai.' },
    { input: 'withdraw(500, 800)', output: 'Error: Insufficient funds: balance is 500', explanation: 'Amount balance se bada hai.' },
    { input: 'withdraw(1000, -50)', output: 'Error: Amount must be positive', explanation: 'Negative amount invalid hai.' }
  ],
  constraints: ['Balance aur amount integers hain', 'Dono exceptions checked (Exception extend) honi chahiye'],
  starter: 'class Solution {\n    String withdraw(int balance, int amount) {\n        // TODO: custom exceptions se withdrawal validate karo\n        return "";\n    }\n}',
  solution: 'class InvalidAmountException extends Exception {\n    InvalidAmountException(String message) {\n        super(message);\n    }\n}\n\nclass InsufficientFundsException extends Exception {\n    InsufficientFundsException(String message) {\n        super(message);\n    }\n}\n\nclass Solution {\n    String withdraw(int balance, int amount) {\n        try {\n            if (amount <= 0) {\n                throw new InvalidAmountException("Amount must be positive");\n            }\n            if (amount > balance) {\n                throw new InsufficientFundsException("Insufficient funds: balance is " + balance);\n            }\n            return "Success! New balance: " + (balance - amount);\n        } catch (InvalidAmountException e) {\n            return "Error: " + e.getMessage();\n        } catch (InsufficientFundsException e) {\n            return "Error: " + e.getMessage();\n        }\n    }\n}',
  explanation: '<p>Alag-alag galtiyon ke liye alag custom exceptions banao taaki caller ko exact problem pata chale. Har exception ka apna catch block hota hai, aur message se user ko saaf wajah milti hai.</p>'
});
