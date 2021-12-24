export const questions = [
  /*
  {
    question: "Inside which element do you put JavaScript?",
    answers: [
      { choice: "<var>", isTrue: false },
      { choice: "<script>", isTrue: true },
      { choice: "<section>", isTrue: false },
      { choice: "<code>", isTrue: false },
    ],
  },
  {
    question: "Which is the correct way to write a comment in JavaScript?",
    answers: [
      { choice: "{# ... #}", isTrue: false },
      { choice: "<!--- .... ---!>", isTrue: false },
      { choice: "// ....", isTrue: true },
      { choice: "\\ ...", isTrue: false },
    ],
  },
  {
    question:
      "How can you detect the application name of the client’s browser?",
    answers: [
      { choice: "navigator.appName", isTrue: true },
      { choice: "navigator.browserName", isTrue: false },
      { choice: "browser.name", isTrue: false },
    ],
  },
  {
    question: "How do you declare a new date in JavaScript?",
    answers: [
      { choice: "var date = Date();", isTrue: false },
      { choice: "var date = date('now');", isTrue: false },
      { choice: "var date = new Date();", isTrue: true },
      { choice: "var date = date().current();", isTrue: false },
    ],
  },
  {
    question: "How do you round the number 5.35 to the nearest integer?",
    answers: [
      { choice: "rnd(5.35)", isTrue: false },
      { choice: "Math.rnd(5.35)", isTrue: false },
      { choice: "round(5.35)", isTrue: false },
      { choice: "Math.round(5.35)", isTrue: true },
    ],
  },
  {
    question: "How do you get cookies in JavaScript?",
    answers: [
      { choice: "window.cookies", isTrue: false },
      { choice: "location.cookies", isTrue: false },
      { choice: "document.cookie", isTrue: true },
      { choice: "document.cookies", isTrue: false },
    ],
  },
  {
    question:
      "Which of the following events occurs when the user clicks on an HTML element?",
    answers: [
      { choice: "onchange", isTrue: false },
      { choice: "onmouseover", isTrue: false },
      { choice: "onmouseclick", isTrue: false },
      { choice: "onclick", isTrue: true },
    ],
  },
  {
    question: "How do you get the DOM element with id in JavaScript?",
    answers: [
      { choice: "window.getElementById(...)", isTrue: false },
      { choice: "document.getElementById(...)", isTrue: true },
      { choice: "page.getElementById(...)", isTrue: false },
      { choice: "document.innerHTML.getElementById(...)", isTrue: false },
    ],
  },
  {
    question: "How do you create a JavaScript array?",
    answers: [
      { choice: 'var fruits = "banana", "apple", "peach";', isTrue: false },
      { choice: 'var fruits = ["banana", "apple", "peach"];', isTrue: true },
      {
        choice: 'var fruits = (1:"banana", 2:"apple", 3:"peach");',
        isTrue: false,
      },
      {
        choice: 'var fruits = 1 = ("banana"), 2 = ("apple"), 3 = ("peach");',
        isTrue: false,
      },
    ],
  },
  {
    question: "Can you set any style to HTML tag using JavaScript?",
    answers: [
      { choice: "yes", isTrue: true },
      { choice: "no", isTrue: false },
    ],
  },
  {
    question: "The JavaScript Date is fundamentally specified as ___",
    answers: [
      {
        choice: "The number of milliseconds elapsed since January 1, 1970",
        isTrue: true,
      },
      {
        choice: "The number of picoseconds elapsed since January 1, 1970",
        isTrue: false,
      },
      {
        choice: "The number of minutes elapsed since January 1, 1980",
        isTrue: false,
      },
      {
        choice: "The number of days that have elapsed since January 1, 1980",
        isTrue: false,
      },
    ],
  },
  {
    question: "Which of the following is the correct way to write an array?",
    answers: [
      {
        choice: 'let fruits = new Array(1:"apple",2:"peach",3:"banana");',
        isTrue: false,
      },
      {
        choice: 'let fruits = new Array:1=(" apple ")2=("peach")3=("banana");',
        isTrue: false,
      },
      {
        choice: 'let fruits = new Array("apple ","peach","banana");',
        isTrue: true,
      },
      {
        choice: 'let fruits = new Array="apple","peach","banana";',
        isTrue: false,
      },
    ],
  },
  {
    question:
      "Which of the following is the correct way to write “Welcome to W3docs” on the web page?",
    answers: [
      { choice: "document.write(“Welcome to W3docs”);", isTrue: true },
      { choice: "system.out.println(“Welcome to W3docs”);", isTrue: false },
      { choice: "print(“Welcome to W3docs”);", isTrue: false },
      { choice: "response.write(“Welcome to W3docs”);", isTrue: false },
    ],
  },
  {
    question: "Which of the following does the pop() method do?",
    answers: [
      { choice: "It increments the total length by 1", isTrue: false },
      { choice: "It decrements the total length by 1", isTrue: true },
      {
        choice: "It prints the first element but no effect on the length",
        isTrue: false,
      },
      { choice: "None of the above options", isTrue: false },
    ],
  },
  {
    question: "Which are closures?",
    answers: [
      { choice: "Variables", isTrue: false },
      { choice: "Objects", isTrue: false },
      { choice: "Functions", isTrue: false },
      { choice: "All of the above options", isTrue: true },
    ],
  },
  {
    question: "What kind of scope does JavaScript use?",
    answers: [
      { choice: "Segmental", isTrue: false },
      { choice: "Literal", isTrue: false },
      { choice: "Sequential", isTrue: false },
      { choice: "Lexical", isTrue: true },
    ],
  },
  {
    question:
      "Which of the following options is the opposite of the lexical scoping?",
    answers: [
      { choice: "Literal scoping", isTrue: false },
      { choice: "Dynamic scoping", isTrue: true },
      { choice: "Generic scoping", isTrue: false },
      { choice: "Static scoping", isTrue: false },
    ],
  },
  {
    question: "Which of the following options is right for dynamic scoping?",
    answers: [
      { choice: "Variables can be declared outside the scope", isTrue: true },
      {
        choice: "Variables cannot be declared outside the scope",
        isTrue: false,
      },
      { choice: "Variables must be declared outside the scope", isTrue: false },
      { choice: "None of the mentioned", isTrue: false },
    ],
  },
  {
    question: "JavaScript is not a case-sensitive language.",
    answers: [
      { choice: "True", isTrue: false },
      { choice: "False", isTrue: true },
    ],
  },
  {
    question:
      "Which of the following is used for assigning a value to a variable?",
    answers: [
      { choice: "*", isTrue: false },
      { choice: "=", isTrue: true },
      { choice: "-", isTrue: false },
      { choice: "x", isTrue: false },
    ],
  },
  */
  {
    question: "ما هى عاصمة بولندا ؟",
    answers: [
      { choice: "زيوريخ", isTrue: false },
      { choice: "وارسو", isTrue: true },
      { choice: "بروكسيل", isTrue: false },
      { choice: "موسكو", isTrue: false },
    ],
  },
  {
    question: "ما اكثر التطبيقات تحميلا فى عام 2020 ؟",
    answers: [
      { choice: "الفيس بوك", isTrue: false },
      { choice: "سيجنال", isTrue: false },
      { choice: "التيك توك", isTrue: true },
      { choice: "كلوب هاوس", isTrue: false },
    ],
  },
  {
    question: "اى الاندية هو الاكثر هزيمة فى تاريخ الدروى الانجليزى ؟",
    answers: [
      { choice: "ايفرتون", isTrue: true },
      { choice: "استون فيلا", isTrue: false },
      { choice: "نيو كاسل", isTrue: false },
      { choice: "ويست هام", isTrue: false },
    ],
  },
  {
    question: "كم عدد الميداليات الذهبية التى فاز بها محمد فرح ؟",
    answers: [
      { choice: "2", isTrue: false },
      { choice: "3", isTrue: false },
      { choice: "4", isTrue: true },
      { choice: "5", isTrue: false },
    ],
  },
  {
    question: "فى اى عام تاسس الدورى الانجليزى الممتاز ؟",
    answers: [
      { choice: "1990", isTrue: false },
      { choice: "1985", isTrue: false },
      { choice: "1980", isTrue: false },
      { choice: "1992", isTrue: true },
    ],
  },
  {
    question: "كم هو متوسط عدد الاسنان للشخص البالغ ؟",
    answers: [
      { choice: "30", isTrue: false },
      { choice: "32", isTrue: true },
      { choice: "36", isTrue: false },
      { choice: "34", isTrue: false },
    ],
  },
  {
    question:
      "ما هى اول دولة فى العالم اعطت المراة حق التصويت فى الانتخابات عام 1893 ؟",
    answers: [
      { choice: "امريكا", isTrue: false },
      { choice: "فرنسا", isTrue: false },
      { choice: "كندا", isTrue: false },
      { choice: "نيوزيلندا", isTrue: true },
    ],
  },
  {
    question: "ما هو لون لسان الزرافة ؟",
    answers: [
      { choice: "برتقالى", isTrue: false },
      { choice: "ازرق", isTrue: true },
      { choice: "اصفر", isTrue: false },
      { choice: "اخضر", isTrue: false },
    ],
  },
  {
    question: "فى اى عام اصدر الجزء الاول من فيلم الاب الروحى ؟",
    answers: [
      { choice: "1974", isTrue: false },
      { choice: "1972", isTrue: true },
      {
        choice: "1973",
        isTrue: false,
      },
      {
        choice: "1976",
        isTrue: false,
      },
    ],
  },
  {
    question: "ما المنتخب الذى فاز بكاس العالم عام 1982 ؟",
    answers: [
      { choice: "ايطاليا", isTrue: true },
      { choice: "البرازيل", isTrue: false },
      { choice: "المانيا", isTrue: false },
      { choice: "انجلترا", isTrue: false },
    ],
  },
  {
    question: "ما هو اسم أكبر شركة تكنولوجيا في كوريا الجنوبية ؟",
    answers: [
      {
        choice: "سامسونج",
        isTrue: true,
      },
      {
        choice: "شاومى",
        isTrue: false,
      },
      {
        choice: "هواوى",
        isTrue: false,
      },
      {
        choice: "اوبو",
        isTrue: false,
      },
    ],
  },
  {
    question: "ما هى عاصمة البرتغال ؟",
    answers: [
      {
        choice: "بورتو",
        isTrue: false,
      },
      {
        choice: "أمادورا",
        isTrue: false,
      },
      {
        choice: "لشبونة",
        isTrue: true,
      },
      {
        choice: "براجا",
        isTrue: false,
      },
    ],
  },
  {
    question: "كم مرة فاز محمد صلاح بالحذاء الذهبى للدورى الانجليزى ؟",
    answers: [
      { choice: "1", isTrue: false },
      { choice: "2", isTrue: true },
      { choice: "3", isTrue: false },
      { choice: "4", isTrue: false },
    ],
  },
  {
    question: "كم عدد الأنفاس التي يتنفسها جسم الإنسان يوميًا ؟",
    answers: [
      { choice: "50,000 يوميا", isTrue: false },
      { choice: "20,000 يوميا", isTrue: true },
      {
        choice: "40,000 يوميا",
        isTrue: false,
      },
      { choice: "30,000 يوميا", isTrue: false },
    ],
  },
  {
    question: "متى انتهت الحرب العالمية الاولى ؟",
    answers: [
      { choice: "1917", isTrue: false },
      { choice: "1918", isTrue: true },
      { choice: "1916", isTrue: false },
      { choice: "1919", isTrue: false },
    ],
  },
  {
    question: "لى أقرب ألف ، كم شعرة الموجودة على رأس الإنسان النموذجي ؟",
    answers: [
      { choice: "30,000 شعرة", isTrue: false },
      { choice: "50,000 شعرة", isTrue: false },
      { choice: "60,000 شعرة", isTrue: false },
      { choice: "10,000 شعرة", isTrue: true },
    ],
  },
  {
    question: "أي مدينة في العالم تحمل شعار: “What Happens Here, Stays Here”",
    answers: [
      { choice: "لندن", isTrue: false },
      { choice: "لاس فيجاس", isTrue: true },
      { choice: "باريس", isTrue: false },
      { choice: "شيكاجو", isTrue: false },
    ],
  },
  {
    question: "خلال الحرب العالمية الثانية ، متى هاجمت ألمانيا فرنسا؟",
    answers: [
      { choice: "1940", isTrue: true },
      {
        choice: "1941",
        isTrue: false,
      },
      { choice: "1942", isTrue: false },
      { choice: "1943", isTrue: false },
    ],
  },
  {
    question: "الدكتور ذاكر حسين كان",
    answers: [
      { choice: "النائب الأول لرئيس الهند", isTrue: false },
      { choice: "أول رئيس للمؤتمر الوطني الهندي", isTrue: false },
      { choice: "أول رئيس للهند", isTrue: false },
      { choice: "أول رئيس مسلم للهند", isTrue: true },
    ],
  },
  {
    question:
      "في عالم كرة القدم ، من هو الفريق الذي فاز بدوري أبطال أوروبا (كأس أوروبا سابقًا) أكثر ؟",
    answers: [
      { choice: "مانشيستر يونايتد", isTrue: false },
      { choice: "ريال مدريد", isTrue: true },
      { choice: "برشلونة", isTrue: false },
      { choice: "بايرن ميونخ", isTrue: false },
    ],
  },
];
