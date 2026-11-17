/* JavaQuest — Problem: Wildcard Sum (Generics, Medium) */
PROBLEMS.push({
  id: '11-07',
  topicId: 11,
  topic: 'Generics',
  title: 'Wildcard Sum',
  difficulty: 'Medium',
  statement: '<p>Ek method sumList likho jo List<? extends Number> le aur uske saare numbers ka sum double me return kare. Upper-bounded wildcard ? extends Number ki wajah se ye method List<Integer> aur List<Double> dono par chalta hai — plain List<Number> par nahi chalta.</p>',
  examples: [
    { input: 'sumList(Arrays.asList(1, 2, 3))', output: '6.0', explanation: 'Integer list ka sum 6.0 hai.' },
    { input: 'sumList(Arrays.asList(1.5, 2.5))', output: '4.0', explanation: 'Double list ka sum 4.0 hai.' }
  ],
  constraints: ['Parameter type List<? extends Number> hona chahiye', 'List khaali nahi hogi'],
  starter: 'import java.util.*;\n\nclass Solution {\n    double sumList(List<? extends Number> list) {\n        // TODO: list ke numbers ka sum nikalo\n        return 0;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    double sumList(List<? extends Number> list) {\n        double sum = 0;\n        for (Number n : list) {\n            sum += n.doubleValue();\n        }\n        return sum;\n    }\n}',
  explanation: '<p>List<Integer> List<Number> ki subclass nahi hoti, isliye plain List<Number> parameter Integer list accept nahi karta. ? extends Number wildcard Number ke kisi bhi subclass ki list accept kar leta hai.</p>'
});
