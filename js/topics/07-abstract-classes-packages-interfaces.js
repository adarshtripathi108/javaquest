/* JavaQuest — Topic 7: Abstract Classes, Packages & Interfaces (Season 3) */
TOPICS.push(
{
 id:7, season:3, title:"Abstract Classes, Packages & Interfaces", lectures:"Lectures 47–50", mins:55,
 desc:"Abstract methods & classes, built-in aur user-defined packages, interfaces — declaration, implementation aur extending.",
 subs:[
  {t:"Abstract Methods & Classes", body:"<p><b>Abstract class</b> wo class hai jiska object nahi ban sakta — wo sirf parent banne ke liye hoti hai. Usme <b>abstract methods</b> (bina body, sirf declaration) aur normal methods dono ho sakte hain. Child class ko saare abstract methods implement karne padte hain, warna child ko bhi abstract declare karna padega.</p>", code:"abstract class Shape {\n    abstract double area();              // sirf declaration\n    void info() { System.out.println(\"I am a shape\"); } // normal method\n}\nclass Square extends Shape {\n    double side = 4;\n    double area() { return side * side; }\n}\n// new Shape() GALAT | new Square().area() -> 16.0", out:"16.0"},
  {t:"Packages — Built-in & User-Defined", body:"<p><b>Package</b> = related classes ka folder/group, naam clash rokne aur organise karne ke liye. Built-in packages: <code>java.lang</code> (String, Math — auto import hota hai), <code>java.util</code> (Scanner, ArrayList), <code>java.io</code> (files). Apna package banane ke liye file ki <b>sabse pehli line</b> me <code>package</code> statement likhte hain.</p>", code:"package mypack;               // file ki pehli line\npublic class MyClass {\n    public void hello() { System.out.println(\"MyPack se hello\"); }\n}\n// Dusri file me: import mypack.MyClass;  ya  import mypack.*;", out:"package = classes ka surname samajh lo."},
  {t:"Interfaces — Declaration & Implementation", body:"<p><b>Interface</b> ek contract hai — 'kya karna hai' batata hai, 'kaise' nahi. Java 8 se pehle uske saare methods abstract hote the; variables <b>public static final</b> (constants) hote hain. Class interface ko <code>implements</code> karti hai, aur ek class <b>kai interfaces</b> implement kar sakti hai — yahi multiple inheritance ka Java wala rasta hai. Java 8+ se interface me <code>default</code> aur <code>static</code> methods (body ke saath) bhi aa sakte hain.</p>", code:"interface Printable { void print(); }\ninterface Showable { void show(); }\nclass Doc implements Printable, Showable {   // do interfaces — allowed!\n    public void print() { System.out.println(\"Printing\"); }\n    public void show() { System.out.println(\"Showing\"); }\n}", out:"Printing\nShowing"},
  {t:"Extending Interfaces & Abstract vs Interface", body:"<p>Interface dusre interface ko <code>extends</code> kar sakta hai. Exam ka favourite comparison:</p><table class='cmp'><tr><th>Point</th><th>Abstract Class</th><th>Interface</th></tr><tr><td>Methods</td><td>Abstract + normal dono</td><td>Abstract (default/static bhi ho sakte hain)</td></tr><tr><td>Variables</td><td>Koi bhi type</td><td>Sirf public static final</td></tr><tr><td>Multiple</td><td>Ek hi class extend</td><td>Kai interfaces implement</td></tr><tr><td>Constructor</td><td>Hota hai</td><td>Nahi hota</td></tr><tr><td>Object</td><td colspan='2'>Dono ka object nahi banta</td></tr></table>", code:"interface A { void a(); }\ninterface B extends A { void b(); }  // B ko a() + b() dono ka contract mila\nclass Impl implements B {\n    public void a() { System.out.println(\"A\"); }\n    public void b() { System.out.println(\"B\"); }\n}", out:"A\nB"}
 ],
 practice:[
  {tag:"Coding · 10 marks", q:"Abstract class Vehicle banao (abstract method start()), Bike aur Car child classes me implement karo — array of Vehicle se dynamic dispatch dikhao."},
  {tag:"Coding · 5 marks", q:"Apna user-defined package 'college' banao, usme Student class rakho, dusri file se import karke use karo."},
  {tag:"Coding · 5 marks", q:"Ek class do interfaces (Swimmable, Flyable) implement kare — Duck class wala classic program likho."},
  {tag:"Theory · 5 marks", q:"Abstract class vs Interface — 6 points ki comparison table banao."},
  {tag:"Theory · 2 marks", q:"Interface ke variables by default public static final kyun hote hain? Ek consequence likho."},
  {tag:"Theory · 2 marks", q:"java.lang package import kiye bina kyun chal jata hai? 2 aur built-in packages ke naam aur use likho."}
 ],
 quiz:[
  {q:"Abstract class ka object ban sakta hai?", o:["Haan, hamesha","Nahi, kabhi nahi","Sirf ek baar","Sirf main me"], a:1, e:"Abstract class ka object nahi banta — sirf uski child class ka banta hai."},
  {q:"Class interface ko kaise leti hai?", o:["extends","inherits","implements","uses"], a:2, e:"class Doc implements Printable — interfaces ke liye implements keyword hai."},
  {q:"Interface ke variables by default kaise hote hain?", o:["private","public static final","protected","sirf final"], a:1, e:"Interface ke saare variables public static final hote hain — constants."},
  {q:"Ek class kitne interfaces implement kar sakti hai?", o:["Sirf 1","Sirf 2","Kitne bhi","Ek bhi nahi"], a:2, e:"Kitne bhi — yahi Java me multiple inheritance ka safe rasta hai."},
  {q:"package statement kahan likhte hain?", o:["File ke end me","Class ke andar","File ki sabse pehli line me","Import ke baad"], a:2, e:"package statement hamesha source file ki pehli non-comment line hoti hai."},
  {q:"Kaunsa package bina import kiye auto-available hota hai?", o:["java.util","java.io","java.lang","java.sql"], a:2, e:"java.lang (String, Math, System) compiler khud import karta hai."},
  {q:"Abstract method ki pehchan?", o:["Body badi hoti hai","Koi body nahi, sirf declaration — semicolon pe khatam","Hamesha static","Return type nahi hota"], a:1, e:"abstract void draw(); — body ki jagah semicolon. Child ko implement karna padta hai."},
  {q:"Interface dusre interface ko kaise extend karta hai?", o:["implements","extends","super","new"], a:1, e:"Interface-to-interface ke liye extends hi use hota hai; class-to-interface ke liye implements."}
 ]
}
);
