/* JavaQuest — Problem: Template Method Pattern (Abstract Classes, Packages & Interfaces, Medium) */
PROBLEMS.push({
  id: '7-09',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Template Method Pattern',
  difficulty: 'Medium',
  statement: '<p><b>Template method pattern</b> me abstract class ek final method define karti hai jo steps ka order fix karta hai, aur subclasses sirf steps ko implement karti hain. Abstract class <code>Report</code> me final method <code>generate()</code> ho jo <code>header() + " -> " + body() + " -> Done"</code> return kare. <code>SalesReport</code> aur <code>InventoryReport</code> header aur body implement karein.</p>',
  examples: [
    { input: 'generateSalesReport()', output: '"Sales Header -> Sales Data -> Done"', explanation: 'SalesReport ke header aur body template order me jude.' },
    { input: 'generateInventoryReport()', output: '"Inventory Header -> Inventory Data -> Done"', explanation: 'InventoryReport ke header aur body template order me jude.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    abstract class Report {\n        abstract String header();\n        abstract String body();\n        final String generate() {\n            return header() + " -> " + body() + " -> Done";\n        }\n    }\n    class SalesReport extends Report {\n        String header() {\n            // TODO: "Sales Header" return karo\n            return "";\n        }\n        String body() {\n            // TODO: "Sales Data" return karo\n            return "";\n        }\n    }\n    class InventoryReport extends Report {\n        String header() {\n            // TODO: "Inventory Header" return karo\n            return "";\n        }\n        String body() {\n            // TODO: "Inventory Data" return karo\n            return "";\n        }\n    }\n    String generateSalesReport() {\n        return "";\n    }\n    String generateInventoryReport() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    abstract class Report {\n        abstract String header();\n        abstract String body();\n        final String generate() {\n            return header() + " -> " + body() + " -> Done";\n        }\n    }\n    class SalesReport extends Report {\n        String header() {\n            return "Sales Header";\n        }\n        String body() {\n            return "Sales Data";\n        }\n    }\n    class InventoryReport extends Report {\n        String header() {\n            return "Inventory Header";\n        }\n        String body() {\n            return "Inventory Data";\n        }\n    }\n    String generateSalesReport() {\n        SalesReport r = new SalesReport();\n        return r.generate();\n    }\n    String generateInventoryReport() {\n        InventoryReport r = new InventoryReport();\n        return r.generate();\n    }\n}',
  explanation: '<p><code>generate()</code> final hai, isliye koi subclass uska order nahi badal sakti — steps ka sequence parent me lock hai. Subclasses sirf abstract steps (<code>header()</code>, <code>body()</code>) ko apna content deti hain. Ye template method pattern hai.</p>'
});
