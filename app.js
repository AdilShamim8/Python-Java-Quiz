const pythonQuestions = [
    { question: "1. Which keyword is used to define a function in Python?", options: { a: "def", b: "func", c: "define", d: "lambda" }, answer: "a" },
    { question: "2. Which symbol is used for comments in Python?", options: { a: "//", b: "/* */", c: "#", d: "<!-- -->" }, answer: "c" },
    { question: "3. What is the method to find the length of a list in Python?", options: { a: "count()", b: "len()", c: "size()", d: "length()" }, answer: "b" },
    { question: "4. What is the output of print(type([])) in Python?", options: { a: "<class 'list'>", b: "list", c: "array", d: "[]"}, answer: "a" },
    { question: "5. How do you start a while loop in Python?", options: { a: "while i < 10:", b: "while (i < 10)", c: "while i < 10{}", d: "loop while i < 10"}, answer: "a" },
    { question: "6. Which of the following is a mutable data type in Python?", options: { a: "list", b: "tuple", c: "string", d: "int"}, answer: "a" },
    { question: "7. How can you create a dictionary in Python?", options: { a: "dict = {}", b: "dict = []", c: "dict = ()", d: "dict = <> "}, answer: "a" },
    { question: "8. What is the keyword used to handle exceptions in Python?", options: { a: "try", b: "catch", c: "handle", d: "except"}, answer: "a" },
    { question: "9. What does 'len' function return for a dictionary?", options: { a: "the number of keys", b: "the number of values", c: "the total length", d: "None of the above"}, answer: "a" },
    { question: "10. Which operator is used for floor division in Python?", options: { a: "//", b: "/", c: "%", d: "**"}, answer: "a" },
    { question: "11. Which module in Python is used for regular expressions?", options: { a: "regex", b: "re", c: "regexp", d: "regexlib"}, answer: "b" },
    { question: "12. Which of the following is not a valid data type in Python?", options: { a: "list", b: "dictionary", c: "hashset", d: "string"}, answer: "c" },
    { question: "13. What does 'break' do in Python?", options: { a: "Exit the loop", b: "Continue to the next iteration", c: "Pause execution", d: "None of the above"}, answer: "a" },
    { question: "14. How do you create a virtual environment in Python?", options: { a: "python venv", b: "python -m venv", c: "venv create", d: "create venv"}, answer: "b" },
    { question: "15. Which function is used to read a file in Python?", options: { a: "read()", b: "open()", c: "get()", d: "fileRead()"}, answer: "b" }
];

const javaQuestions = [
    { question: "1. What is the correct way to create an object in Java?", options: { a: "new Object()", b: "Object obj = new Object();", c: "create Object", d: "Object()" }, answer: "b" },
    { question: "2. Which keyword is used to inherit a class in Java?", options: { a: "extend", b: "extends", c: "inherit", d: "inherits" }, answer: "b" },
    { question: "3. What is the return type of the main method in Java?", options: { a: "void", b: "int", c: "String", d: "None" }, answer: "a" },
    { question: "4. Which of the following is a valid declaration of a char?", options: { a: "char c = 'a';", b: "char c = \"a\";", c: "char c = a;", d: "char c = a; char c = 'a';"}, answer: "a" },
    { question: "5. Which collection allows duplicate elements in Java?", options: { a: "Set", b: "List", c: "Map", d: "None of the above" }, answer: "b" },
    { question: "6. What is the keyword used to create a new thread in Java?", options: { a: "new Thread", b: "Thread.start()", c: "Thread.run()", d: "Thread.create()"}, answer: "a" },
    { question: "7. Which of these is a valid constructor in Java?", options: { a: "public ClassName()", b: "ClassName public()", c: "void ClassName()", d: "public ClassName{}"}, answer: "a" },
    { question: "8. How do you declare an array in Java?", options: { a: "int arr[];", b: "int arr();", c: "array int[];", d: "array arr[];"}, answer: "a" },
    { question: "9. What is the default value of a boolean variable in Java?", options: { a: "true", b: "false", c: "0", d: "1"}, answer: "b" },
    { question: "10. Which of the following is not a primitive data type in Java?", options: { a: "int", b: "boolean", c: "String", d: "char"}, answer: "c" }
];

const allQuestions = [...pythonQuestions, ...javaQuestions];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    allQuestions.forEach((q, index) => {
        const quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");
        quizItem.innerHTML = `
            <p>${q.question}</p>
            <div class="options">
                ${Object.keys(q.options).map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option.toUpperCase()}: ${q.options[option]}
                    </label>
                `).join("")}
            </div>
        `;
        quizContainer.appendChild(quizItem);
    });
}

function calculateScore() {
    let score = 0;
    allQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    document.getElementById("result").innerText = `Your Score: ${score} / ${allQuestions.length}`;
}

document.getElementById("submitBtn").addEventListener("click", calculateScore);

loadQuiz();
