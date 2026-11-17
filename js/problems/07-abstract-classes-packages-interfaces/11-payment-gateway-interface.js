/* JavaQuest — Problem: Payment Gateway Interface (Abstract Classes, Packages & Interfaces, Hard) */
PROBLEMS.push({
  id: '7-11',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Payment Gateway Interface',
  difficulty: 'Hard',
  statement: '<p>Ek <code>Payment</code> interface banao jisme <code>pay(double amount)</code> method ho. <code>UPI</code> class <code>Paid X via UPI</code> aur <code>Card</code> class <code>Paid X via Card</code> return kare, jahan X amount hai. Method <code>processPayment</code> ko payment method aur amount milega — Payment reference se sahi implementation choose karke result return karna hai.</p>',
  examples: [
    { input: 'method = "upi", amount = 500', output: '"Paid 500.0 via UPI"', explanation: 'Payment reference UPI object ko point karta hai, UPI wala pay() chala.' },
    { input: 'method = "card", amount = 1000', output: '"Paid 1000.0 via Card"', explanation: 'Payment reference Card object ko point karta hai, Card wala pay() chala.' }
  ],
  constraints: ['method "upi" ya "card" hoga', 'amount ek positive number hoga'],
  starter: 'class Solution {\n    interface Payment {\n        String pay(double amount);\n    }\n    class UPI implements Payment {\n        public String pay(double amount) {\n            // TODO: "Paid " + amount + " via UPI" return karo\n            return "";\n        }\n    }\n    class Card implements Payment {\n        public String pay(double amount) {\n            // TODO: "Paid " + amount + " via Card" return karo\n            return "";\n        }\n    }\n    String processPayment(String method, double amount) {\n        // TODO: Payment reference se sahi implementation choose karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    interface Payment {\n        String pay(double amount);\n    }\n    class UPI implements Payment {\n        public String pay(double amount) {\n            return "Paid " + amount + " via UPI";\n        }\n    }\n    class Card implements Payment {\n        public String pay(double amount) {\n            return "Paid " + amount + " via Card";\n        }\n    }\n    String processPayment(String method, double amount) {\n        Payment p;\n        if (method.equals("upi")) {\n            p = new UPI();\n        } else {\n            p = new Card();\n        }\n        return p.pay(amount);\n    }\n}',
  explanation: '<p>Ye interface-based design ka real-world pattern hai — calling code sirf <code>Payment</code> interface ko jaanta hai, implementation ko nahi. Kal ko naya payment method (jaise Wallet) aaye to sirf ek nayi class likhni hogi, calling code waisa hi rahega.</p>'
});
