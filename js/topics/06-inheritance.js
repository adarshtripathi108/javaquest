/* JavaQuest — Topic 6: Inheritance (Season 3) */
TOPICS.push(
{
 id:6, season:3, title:"Inheritance", lectures:"Lectures 39–46", mins:60,
 desc:"Inheritance ke types, super keyword, method overriding, dynamic method dispatch aur final keyword.",
 subs:[
  {t:"Inheritance Basics & Types", body:"<p><b>Inheritance</b> me child class (subclass) parent class (superclass) ke variables aur methods ko <code>extends</code> keyword se le leti hai — code reuse + is-a relationship (<i>Dog <b>is a</b> Animal</i>).</p><table class='cmp'><tr><th>Type</th><th>Structure</th><th>Java support</th></tr><tr><td>Single</td><td>A → B</td><td>✓</td></tr><tr><td>Multilevel</td><td>A → B → C</td><td>✓</td></tr><tr><td>Hierarchical</td><td>A → B, A → C</td><td>✓</td></tr><tr><td>Multiple</td><td>A, B → C</td><td>✗ classes se nahi (ambiguity) — interfaces se hota hai</td></tr><tr><td>Hybrid</td><td>Mix</td><td>Interfaces ke saath</td></tr></table>", code:"class Animal { void eat() { System.out.println(\"Eating...\"); } }\nclass Dog extends Animal { void bark() { System.out.println(\"Barking...\"); } }\n// Dog d = new Dog(); d.eat(); d.bark();  // dono chalenge", out:"Eating...\nBarking..."},
  {t:"super Keyword", body:"<p><b>super</b> parent class ko refer karta hai. Teen uses: (1) parent ka variable access karna jab child me same naam ho, (2) parent ka method call karna, (3) <code>super()</code> se parent ka constructor call karna — ye child constructor ki <b>pehli statement</b> honi chahiye. Har child constructor chaahe tum likho ya na likho, pehle parent ka constructor chalta hai.</p>", code:"class Vehicle {\n    Vehicle() { System.out.println(\"Vehicle bana\"); }\n}\nclass Car extends Vehicle {\n    Car() { super(); System.out.println(\"Car bana\"); }\n}\n// new Car() -> pehle \"Vehicle bana\", phir \"Car bana\"", out:"Vehicle bana\nCar bana"},
  {t:"Method Overriding & Dynamic Dispatch", body:"<p><b>Overriding</b>: child class parent ke method ko <b>same signature</b> ke saath apne hisaab se dobara likhti hai. <b>Dynamic method dispatch</b>: parent type ka reference child object ko point kare, to call pe <b>child ka version</b> chalta hai — decision runtime pe hota hai, isliye ise <b>runtime polymorphism</b> kehte hain.</p><div class='callout'><b>Overloading vs Overriding:</b> Overloading = same class, alag parameters, compile-time. Overriding = child class, same signature, runtime.</div>", code:"class Shape { void draw() { System.out.println(\"Shape\"); } }\nclass Circle extends Shape {\n    @Override void draw() { System.out.println(\"Circle\"); }\n}\n// Shape s = new Circle(); s.draw();  -> \"Circle\" print hoga", out:"Circle"},
  {t:"final Keyword", body:"<p><b>final</b> = 'bas, isse aage nahi'. Teen jagah lagta hai:</p><ul><li><b>final variable</b> — value ek baar set, phir change nahi (constant). Naam UPPER_CASE me likhte hain.</li><li><b>final method</b> — child use override nahi kar sakta.</li><li><b>final class</b> — uski koi child class nahi ban sakti (jaise String class final hai).</li></ul>", code:"final class Constants {\n    static final double PI = 3.14159;\n}\n// PI = 3.0;            // GALAT — final change nahi hota\n// class X extends Constants {}  // GALAT — final class extend nahi hoti", out:"final = lock laga diya."}
 ],
 practice:[
  {tag:"Coding · 10 marks", q:"Single aur multilevel inheritance ka ek-ek program banao — Student → Exam → Result jaisi chain ke saath."},
  {tag:"Coding · 5 marks", q:"Method overriding dikhao: Bank class ka getRate() SBI, HDFC child classes me alag rates ke saath override karo, dynamic dispatch se call karo."},
  {tag:"Coding · 5 marks", q:"super() aur super.method() dono ka use ek hi program me dikhao — constructor chain ka output bhi print karo."},
  {tag:"Theory · 5 marks", q:"Overloading aur overriding ka comparison table banao — kam se kam 5 points."},
  {tag:"Theory · 2 marks", q:"Java classes ke through multiple inheritance kyun support nahi karta? Is problem ko kya kehte hain?"},
  {tag:"Theory · 2 marks", q:"final keyword ke teen uses ek-ek line ke example ke saath likho."}
 ],
 quiz:[
  {q:"Inheritance ke liye keyword kaunsa hai?", o:["inherits","extends","super","implements"], a:1, e:"class Dog extends Animal — extends se inheritance hota hai. implements interfaces ke liye hai."},
  {q:"Java classes se kaunsi inheritance support NAHI hoti?", o:["Single","Multilevel","Hierarchical","Multiple"], a:3, e:"Multiple inheritance classes se nahi hoti — diamond problem/ambiguity ki wajah se. Interfaces se possible hai."},
  {q:"Dynamic method dispatch me kaunsa method chalta hai?", o:["Reference type wala","Object type (actual child) wala","Jo pehle define hua","Compiler randomly chun-ta hai"], a:1, e:"Runtime pe actual object ka overridden method chalta hai — yahi runtime polymorphism hai."},
  {q:"super() call kahan hona chahiye?", o:["Constructor ke end me","Constructor ki pehli statement","Method ke bahar","Kahin bhi"], a:1, e:"super() child constructor ki sabse pehli statement honi chahiye."},
  {q:"final class ka kya matlab hai?", o:["Usme objects nahi bante","Use extend nahi kiya ja sakta","Uske methods static hote hain","Wo abstract hoti hai"], a:1, e:"final class ki koi subclass nahi ban sakti — jaise String class."},
  {q:"Overriding ke liye zaroori shart kya hai?", o:["Parameters alag hon","Method signature same ho","Return type hamesha void ho","Method static ho"], a:1, e:"Overriding me naam + parameters bilkul same hote hain; overloading me parameters alag hote hain."},
  {q:"Parent reference se child object ko point karna kya kehlata hai?", o:["Downcasting","Upcasting","Boxing","Cloning"], a:1, e:"Shape s = new Circle() upcasting hai — safe aur dynamic dispatch ka base."},
  {q:"@Override annotation ka kaam kya hai?", o:["Method ko fast karna","Compiler ko batana ki ye overriding hai — galti ho to error mile","Method ko final karna","Access badhana"], a:1, e:"@Override se compiler check karta hai ki parent me sach me aisa method hai — typo pe compile error milta hai."}
 ]
}
);
