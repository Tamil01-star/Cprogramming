// Auto-generated comprehensive C Programming Interview Questions dataset
// Total Questions: 201 (All questions from C_Programming_Mock_Interview_Question_Bank.pdf)

import { Question, SectionMeta, TopicMeta } from '../types';

export const SECTIONS: SectionMeta[] = [
  {
    id: 1,
    title: "Technical Interview Questions",
    shortTitle: "Technical Interview",
    description: "Core C language fundamentals, data types, memory concepts, pointers, storage classes, and structures.",
    count: 51,
    color: "#2563eb",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    badgeText: "text-blue-700"
  },
  {
    id: 2,
    title: "Programming Logic & Pseudocode",
    shortTitle: "Logic & Pseudocode",
    description: "Algorithms, math problems, pattern printing, string manipulation, searching and sorting logic.",
    count: 40,
    color: "#0891b2",
    badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
    badgeText: "text-cyan-700"
  },
  {
    id: 3,
    title: "Placement Coding & Hard Dry Run",
    shortTitle: "Hard Dry Run",
    description: "In-depth code tracing, complex nested loops, pointers, dynamic memory, bitwise operations, and recursion.",
    count: 60,
    color: "#7c3aed",
    badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
    badgeText: "text-purple-700"
  },
  {
    id: 4,
    title: "Output Prediction Questions",
    shortTitle: "Output Prediction",
    description: "Tricky syntax rules, operator precedence, evaluation orders, and scope rules.",
    count: 30,
    color: "#d97706",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-700",
    badgeText: "text-amber-700"
  },
  {
    id: 5,
    title: "Debugging Questions",
    shortTitle: "Debugging",
    description: "Common compilation errors, segmentation faults, memory leaks, and logical pitfalls with bug fixes.",
    count: 20,
    color: "#e11d48",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
    badgeText: "text-rose-700"
  }
];

export const TOPIC_COUNTS = {
  "Basics of C": 4,
  "Data Types": 3,
  "Variables": 2,
  "Operators": 11,
  "Decision Making": 2,
  "Loops": 14,
  "Functions": 17,
  "Recursion": 14,
  "Arrays": 16,
  "Strings": 13,
  "Storage Classes": 5,
  "Pointers": 17,
  "Dynamic Memory Allocation": 8,
  "Structures": 10,
  "Unions": 2,
  "Enumeration": 2,
  "Programming Logic": 40,
  "Bitwise Operators": 9,
  "Increment & Decrement": 1,
  "Nested Loops": 1,
  "Switch": 1,
  "Variable Scope": 1,
  "Semicolon Errors": 2,
  "Braces": 2,
  "malloc()": 2,
  "scanf()": 1,
  "printf()": 1
};

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "pdfId": "Q1",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Basics of C",
    "subtopic": "Language Fundamentals",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What are the key features of the C programming language?",
    "answer": {
      "directAnswer": "C is a procedural, general-purpose, middle-level programming language developed by Dennis Ritchie at Bell Labs in 1972, known for its high execution speed, hardware-level memory access, and high portability.",
      "explanation": [
        "**Middle-Level Language**: Combines the high-level language user-friendliness with low-level assembly language speed and direct hardware control (via pointers and bitwise operators).",
        "**Structured & Modular**: Supports functions and code blocks that allow breaking complex programs into manageable, reusable modules.",
        "**Speed & Efficiency**: Compiles directly into native machine code with minimal runtime overhead, making it ideal for operating systems, compilers, and embedded systems.",
        "**Rich Library Support**: Standard C Library (`libc`) provides extensive built-in functions for I/O, mathematical computations, memory allocation, and string operations.",
        "**Extensibility**: Functions and libraries can be easily written and incorporated into existing programs."
      ],
      "interviewTip": "When interviewers ask why C is called a 'middle-level' language, emphasize that it provides abstraction (like loops and functions) while still allowing direct hardware manipulation via memory addresses and pointers."
    }
  },
  {
    "id": 2,
    "pdfId": "Q2",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Basics of C",
    "subtopic": "Compilation Process",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Explain the steps involved in compiling and executing a C program.",
    "answer": {
      "directAnswer": "The compilation process of a C program converts human-readable source code (.c) into machine-executable binary (.exe / a.out) through four sequential stages: Preprocessing, Compilation, Assembly, and Linking.",
      "explanation": [
        "**1. Preprocessing (`gcc -E file.c -o file.i`)**: Expands header files (`#include`), substitutes macros (`#define`), and strips source comments. Generates `.i` file.",
        "**2. Compilation (`gcc -S file.i -o file.s`)**: Analyzes C syntax, semantics, and optimizes code to translate C code into architecture-specific Assembly code. Generates `.s` file.",
        "**3. Assembly (`gcc -c file.s -o file.o`)**: The Assembler translates assembly code into relocatable machine-readable machine code (Object file). Generates `.o` or `.obj` file.",
        "**4. Linking (`gcc file.o -o file.exe`)**: The Linker merges object code with system library code (e.g. `printf` from `libc`) and resolves external references to produce the final executable binary."
      ],
      "comparisonTable": {
        "headers": [
          "Stage",
          "Input",
          "Tool",
          "Output File"
        ],
        "rows": [
          [
            "Preprocessing",
            ".c (Source Code)",
            "Preprocessor (`cpp`)",
            ".i (Expanded Source)"
          ],
          [
            "Compilation",
            ".i (Expanded)",
            "Compiler (`cc1`)",
            ".s (Assembly Code)"
          ],
          [
            "Assembly",
            ".s (Assembly)",
            "Assembler (`as`)",
            ".o / .obj (Object Code)"
          ],
          [
            "Linking",
            ".o + Libraries",
            "Linker (`ld`)",
            ".exe / a.out (Executable)"
          ]
        ]
      },
      "interviewTip": "Remember the acronym **P-C-A-L**: Preprocessing → Compilation → Assembly → Linking."
    }
  },
  {
    "id": 3,
    "pdfId": "Q3",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Basics of C",
    "subtopic": "Header Files",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is the purpose of the #include directive and header files in C?",
    "answer": {
      "directAnswer": "The `#include` preprocessor directive tells the preprocessor to insert the contents of the specified header file into the current source file before actual compilation begins.",
      "explanation": [
        "**Purpose of Header Files (`.h`)**: Header files contain function declarations (prototypes), macro definitions, type definitions (`typedef`), and struct definitions shared across multiple source files.",
        "**Angle Brackets `<filename.h>`**: Tells the preprocessor to search in the standard system library directories (e.g., `#include <stdio.h>`).",
        "**Double Quotes `\"filename.h\"`**: Instructs the preprocessor to first search in the current working project directory; if not found, it falls back to system include directories."
      ],
      "codeExample": "#include <stdio.h>   // System header for standard I/O (printf, scanf)\n#include \"myconfig.h\" // User-defined custom header in local folder\n\nint main() {\n    printf(\"Standard header used.\\n\");\n    return 0;\n}",
      "interviewTip": "Never include `.c` files using `#include`. Include only `.h` header files containing declarations to prevent duplicate symbol linker errors."
    }
  },
  {
    "id": 4,
    "pdfId": "Q4",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Basics of C",
    "subtopic": "Keywords vs Identifiers",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Differentiate between a keyword and an identifier in C.",
    "answer": {
      "directAnswer": "Keywords are predefined, reserved words having fixed meanings recognized by the compiler, while identifiers are programmer-defined names given to program entities like variables, functions, and arrays.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Keyword",
          "Identifier"
        ],
        "rows": [
          [
            "Definition",
            "Predefined reserved words in the language",
            "User-defined names for variables, functions, tags"
          ],
          [
            "Total Count",
            "32 in standard C89 (44 in C99/C11)",
            "Unlimited user-created names"
          ],
          [
            "Case",
            "Must always be lowercase in C",
            "Can have uppercase, lowercase, digits, and `_`"
          ],
          [
            "Meaning",
            "Fixed meaning; compiler knows their action",
            "Meaning determined by programmer"
          ],
          [
            "Special Characters",
            "No special symbols allowed",
            "Cannot use special characters except underscore `_`"
          ],
          [
            "Examples",
            "`int`, `return`, `for`, `volatile`, `sizeof`",
            "`studentAge`, `calcSum`, `MAX_BUFFER`"
          ]
        ]
      },
      "interviewTip": "Can a keyword be used as a variable identifier? No, doing so triggers a compilation syntax error."
    }
  },
  {
    "id": 5,
    "pdfId": "Q5",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Data Types",
    "subtopic": "Data Type Sizes",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is the difference between int, float, and double data types?",
    "answer": {
      "directAnswer": "`int` stores whole integer numbers without fractional parts, `float` stores single-precision 32-bit floating-point decimal numbers, and `double` stores double-precision 64-bit floating-point numbers with higher precision.",
      "comparisonTable": {
        "headers": [
          "Data Type",
          "Typical Size",
          "Format Specifier",
          "Precision",
          "Range"
        ],
        "rows": [
          [
            "`int`",
            "4 bytes (32-bit arch)",
            "`%d` or `%i`",
            "Whole numbers only",
            "-2,147,483,648 to 2,147,483,647"
          ],
          [
            "`float`",
            "4 bytes (32 bits)",
            "`%f`",
            "6 to 7 decimal digits",
            "~1.2E-38 to ~3.4E+38"
          ],
          [
            "`double`",
            "8 bytes (64 bits)",
            "`%lf`",
            "15 to 17 decimal digits",
            "~2.3E-308 to ~1.7E+308"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int count = 42;\n    float pi_f = 3.141592f;\n    double pi_d = 3.141592653589793;\n\n    printf(\"int: %d (size: %zu)\\n\", count, sizeof(count));\n    printf(\"float: %f (size: %zu)\\n\", pi_f, sizeof(pi_f));\n    printf(\"double: %lf (size: %zu)\\n\", pi_d, sizeof(pi_d));\n    return 0;\n}",
      "interviewTip": "In `scanf()`, you must use `%f` for `float` and `%lf` for `double`. In `printf()`, `%f` works for both due to default argument promotions, but using `%lf` for double is modern best practice."
    }
  },
  {
    "id": 6,
    "pdfId": "Q6",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Data Types",
    "subtopic": "Type Modifiers",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Explain the use of signed, unsigned, short, and long type modifiers.",
    "answer": {
      "directAnswer": "Type modifiers in C alter the data storage size or range of basic types (primarily `int` and `char`) to optimize memory and handle specific value ranges.",
      "explanation": [
        "**`signed`**: Stores both positive and negative values. The most significant bit (MSB) acts as the sign bit (0 for positive, 1 for negative). Default for integer types.",
        "**`unsigned`**: Stores strictly non-negative values (0 and positive). The MSB is part of the magnitude, doubling the positive range (e.g. `unsigned int` is 0 to 4,294,967,295).",
        "**`short`**: Restricts the integer to at least 16 bits (typically 2 bytes), reducing memory consumption when smaller values suffice.",
        "**`long`**: Expands the integer size to at least 32 bits (and typically 64 bits on 64-bit systems), or `long double` for 80/128-bit floating-point numbers."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    short int s = 32767;              // 2 bytes: -32768 to 32767\n    unsigned short int us = 65535;    // 2 bytes: 0 to 65535\n    long int l = 2147483647L;         // 4 or 8 bytes\n    unsigned int u = 4000000000U;     // 4 bytes: 0 to 4.29 billion\n\n    printf(\"short: %d, unsigned short: %u\\n\", s, us);\n    return 0;\n}",
      "interviewTip": "Remember that assigning a negative value to an `unsigned int` does not cause a compilation error; it wraps around modulo $2^{32}$ into a very large positive number."
    }
  },
  {
    "id": 7,
    "pdfId": "Q7",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Data Types",
    "subtopic": "Type Casting",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Differentiate between implicit and explicit type conversion with examples.",
    "answer": {
      "directAnswer": "Implicit type conversion (coercion) is performed automatically by the compiler to prevent data loss when mixing types, whereas explicit type conversion (type casting) is manually enforced by the programmer using the cast operator `(type)`.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Implicit Conversion (Widening)",
          "Explicit Conversion (Type Casting)"
        ],
        "rows": [
          [
            "Initiator",
            "Performed automatically by compiler",
            "Manually specified by programmer"
          ],
          [
            "Direction",
            "Lower data type promoted to higher data type",
            "Can be higher to lower or vice-versa"
          ],
          [
            "Data Loss",
            "No loss of precision or information",
            "May cause truncation or loss of precision"
          ],
          [
            "Syntax",
            "Automatic: `int a = 5; float b = a;`",
            "Cast operator: `(type)expression`"
          ],
          [
            "Example",
            "`double d = 10; // 10 -> 10.0`",
            "`int a = (int)3.99; // a becomes 3`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 5, b = 2;\n\n    // Implicit: Integer division truncates to 2, then assigned to float 2.0\n    float res1 = a / b;\n\n    // Explicit: 'a' cast to float, forces floating-point division yielding 2.5\n    float res2 = (float)a / b;\n\n    printf(\"Implicit: %f\\n\", res1); // 2.000000\n    printf(\"Explicit: %f\\n\", res2); // 2.500000\n    return 0;\n}",
      "interviewTip": "A classic interview viva trap is `float x = 5 / 2;`. Students expect 2.5, but in C `5 / 2` is integer division yielding `2`, which is then implicitly cast to `2.0`."
    }
  },
  {
    "id": 8,
    "pdfId": "Q8",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Variables",
    "subtopic": "Declaration vs Definition",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is the difference between declaration and definition of a variable?",
    "answer": {
      "directAnswer": "A variable declaration informs the compiler about the variable's name and type without allocating memory, while a variable definition specifies the type, name, and physically allocates storage in memory.",
      "comparisonTable": {
        "headers": [
          "Aspect",
          "Declaration",
          "Definition"
        ],
        "rows": [
          [
            "Memory Allocation",
            "No memory is allocated",
            "Memory is allocated immediately"
          ],
          [
            "Frequency",
            "Can be declared multiple times",
            "Can be defined only once in a scope"
          ],
          [
            "Compiler Role",
            "Tells compiler: 'This entity exists elsewhere'",
            "Allocates address space in RAM"
          ],
          [
            "Keyword used",
            "Often preceded by `extern`",
            "Type followed by name (e.g. `int x;`)"
          ],
          [
            "Example",
            "`extern int counter;`",
            "`int counter = 10;` or `int counter;`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\n// Declaration: Tells compiler 'val' exists in some translation unit\nextern int val; \n\n// Definition: Memory is allocated for 'total'\nint total = 100; \n\nint main() {\n    printf(\"total defined with memory = %d\\n\", total);\n    return 0;\n}",
      "interviewTip": "In C, `int a;` outside or inside a function is both a declaration AND a tentative definition because storage is reserved."
    }
  },
  {
    "id": 9,
    "pdfId": "Q9",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Variables",
    "subtopic": "Scope and Lifetime",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Explain scope and lifetime of a variable in C with an example.",
    "answer": {
      "directAnswer": "Scope defines the region of code where a variable can be accessed, while lifetime (storage duration) defines the time period during program execution in which the variable retains allocated memory.",
      "explanation": [
        "**Local Scope (Block Scope)**: Accessible only within the `{}` block where defined.",
        "**Global Scope (File Scope)**: Accessible throughout the entire file from its declaration to the end.",
        "**Automatic Lifetime**: Created on the stack when the block is entered, destroyed upon exit.",
        "**Static Lifetime**: Retains memory for the entire program execution lifecycle."
      ],
      "codeExample": "#include <stdio.h>\n\nint globalVar = 100; // Scope: Entire file | Lifetime: Program duration\n\nvoid testFunction() {\n    int localVar = 10;        // Scope: testFunction | Lifetime: Function call\n    static int staticVar = 1; // Scope: testFunction | Lifetime: Program duration\n\n    localVar++;\n    staticVar++;\n    printf(\"localVar=%d, staticVar=%d\\n\", localVar, staticVar);\n}\n\nint main() {\n    testFunction(); // localVar=11, staticVar=2\n    testFunction(); // localVar=11, staticVar=3 (retained value!)\n    return 0;\n}",
      "interviewTip": "Note that a `static` local variable has local block scope (accessible only inside that function) but global static lifetime (persists across calls)."
    }
  },
  {
    "id": 10,
    "pdfId": "Q10",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Arithmetic Operators",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is the difference between the modulus operator and the division operator?",
    "answer": {
      "directAnswer": "The division operator (`/`) returns the quotient of dividing two numbers, whereas the modulus operator (`%`) returns the remainder after integer division.",
      "explanation": [
        "**Division (`/`)**: Can be used on integers (truncates fractional part) and floating-point types (`float`, `double`).",
        "**Modulus (`%`)**: Operates strictly on integer types (`int`, `char`, `long`). Applying `%` to floating-point operands causes a compilation error (for floating modulus, `fmod()` in `math.h` is used).",
        "**Sign of Modulus**: In C99 and later, the sign of `a % b` matches the sign of the dividend `a` (`-7 % 3` is `-1`)."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 14, b = 4;\n    printf(\"Division (Quotient): 14 / 4 = %d\\n\", a / b); // Output: 3\n    printf(\"Modulus (Remainder): 14 %% 4 = %d\\n\", a % b); // Output: 2\n\n    float f = 14.0f / 4.0f;\n    printf(\"Floating division: 14.0 / 4.0 = %.2f\\n\", f); // Output: 3.50\n    return 0;\n}",
      "interviewTip": "Always remember: Division by zero (`x / 0` or `x % 0`) invokes undefined behavior and typically results in a runtime crash (`SIGFPE` / Floating point exception)."
    }
  },
  {
    "id": 11,
    "pdfId": "Q11",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Relational Operators",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Explain how relational operators are evaluated in C and what value they return.",
    "answer": {
      "directAnswer": "Relational operators in C compare two operands and evaluate to an integer boolean value: returning integer `1` if the condition is true, and integer `0` if the condition is false.",
      "explanation": [
        "**The Six Relational Operators**: `<` (less than), `<=` (less than or equal to), `>` (greater than), `>=` (greater than or equal to), `==` (equal to), `!=` (not equal to).",
        "**Return Type**: Unlike languages with a native primitive boolean type, standard C evaluates relational expressions to type `int` (`1` or `0`).",
        "**Associativity**: Relational operators associate from left to right. This causes subtle pitfalls: `a < b < c` is evaluated as `(a < b) < c` (comparing the result `0` or `1` with `c`)."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 5, b = 10, c = 2;\n    \n    printf(\"5 < 10 returns: %d\\n\", (a < b));  // 1 (true)\n    printf(\"5 == 10 returns: %d\\n\", (a == b)); // 0 (false)\n\n    // Common Trap:\n    // (a < b < c) => (5 < 10) < 2 => 1 < 2 => 1 (true!)\n    printf(\"(5 < 10 < 2) returns: %d\\n\", (a < b < c)); \n    return 0;\n}",
      "interviewTip": "To check if `x` is between `a` and `b`, never write `a < x < b`. Always write `(a < x) && (x < b)`."
    }
  },
  {
    "id": 12,
    "pdfId": "Q12",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Logical Operators",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Differentiate between logical AND (&&) and bitwise AND (&) operators.",
    "answer": {
      "directAnswer": "Logical AND (`&&`) evaluates the truth value of two boolean expressions with short-circuiting, returning `1` or `0`, while bitwise AND (`&`) performs an individual bit-by-bit logical AND operation on the binary representations of integer operands.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Logical AND (`&&`)",
          "Bitwise AND (`&`)"
        ],
        "rows": [
          [
            "Operation",
            "Combines boolean condition expressions",
            "Operates on individual bits of numbers"
          ],
          [
            "Operands",
            "Truth values (zero = false, non-zero = true)",
            "Integers (binary bit patterns)"
          ],
          [
            "Return Value",
            "Strictly `1` (true) or `0` (false)",
            "Integer with corresponding bit results"
          ],
          [
            "Short-Circuit",
            "Yes: if left operand is false, right is not evaluated",
            "No: both operands are always evaluated"
          ],
          [
            "Example",
            "`5 && 2` evaluates to `1` (true && true)",
            "`5 & 2` -> `(101 & 010) = 000` -> `0`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 5; // 0101 in binary\n    int b = 3; // 0011 in binary\n\n    printf(\"Logical AND: 5 && 3 = %d\\n\", a && b); // 1\n    printf(\"Bitwise AND: 5 & 3  = %d\\n\", a & b);  // 1 (0001 in binary)\n\n    // Short-circuit demonstration:\n    int x = 0;\n    if (x && ++a) { } \n    printf(\"a is still %d (not incremented)\\n\", a); // a = 5\n    return 0;\n}",
      "interviewTip": "Interviewers frequently test short-circuit evaluation: if the left operand of `&&` is 0, the right-hand operand is completely skipped (saving execution time and preventing null-pointer dereferences)."
    }
  },
  {
    "id": 13,
    "pdfId": "Q13",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Assignment Operators",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What are compound assignment operators? Give three examples.",
    "answer": {
      "directAnswer": "Compound assignment operators (shorthand assignment operators) combine a binary arithmetic or bitwise operation with the assignment operator into a single compact expression of the form `variable op= expression`.",
      "explanation": [
        "**Syntax**: `x op= y` is equivalent to `x = x op (y)`, but the left-hand operand `x` is evaluated only once.",
        "**Common Compound Operators**: `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`.",
        "**Performance & Safety**: Helps prevent duplicate side-effects when accessing complex lvalues like array indices: `arr[i++] += 5` increments `i` only once."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int x = 10;\n\n    // Example 1: Additive assignment\n    x += 5; // equivalent to x = x + 5 (x becomes 15)\n\n    // Example 2: Multiplicative assignment\n    x *= 2; // equivalent to x = x * 2 (x becomes 30)\n\n    // Example 3: Modulus assignment\n    x %= 7; // equivalent to x = x % 7 (x becomes 2)\n\n    printf(\"Final x = %d\\n\", x); // Output: 2\n    return 0;\n}",
      "interviewTip": "Notice operator precedence in compound assignments: `a *= b + 3` evaluates as `a = a * (b + 3)`, NOT `a = a * b + 3`."
    }
  },
  {
    "id": 14,
    "pdfId": "Q14",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Increment/Decrement",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Explain the difference between pre-increment and post-increment operators (++i vs i++).",
    "answer": {
      "directAnswer": "Pre-increment (`++i`) increments the variable's value by 1 first and then returns the newly updated value, whereas post-increment (`i++`) returns the current original value in the expression first and increments the variable afterward.",
      "comparisonTable": {
        "headers": [
          "Operator",
          "Syntax",
          "Order of Execution",
          "Returned Expression Value"
        ],
        "rows": [
          [
            "Pre-increment",
            "`++i`",
            "Increment first, then use",
            "Returns value after increment ($i + 1$)"
          ],
          [
            "Post-increment",
            "`i++`",
            "Use first, then increment",
            "Returns original value before increment ($i$)"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n\n    int pre = ++a; // a becomes 6, pre receives 6\n    int post = b++; // post receives 5, b becomes 6\n\n    printf(\"Pre-increment: a=%d, result=%d\\n\", a, pre);   // a=6, result=6\n    printf(\"Post-increment: b=%d, result=%d\\n\", b, post); // b=6, result=5\n    return 0;\n}",
      "interviewTip": "Never modify the same variable more than once in a single expression (e.g. `printf(\"%d %d\", i++, ++i)` or `a = i++ + ++i`). Doing so invokes undefined behavior in C standard specifications."
    }
  },
  {
    "id": 15,
    "pdfId": "Q15",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Bitwise Operators",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Explain the working of bitwise AND, OR, XOR, and NOT operators with examples.",
    "answer": {
      "directAnswer": "Bitwise operators manipulate data at the individual binary bit level: AND (`&`) yields 1 only if both bits are 1; OR (`|`) yields 1 if at least one bit is 1; XOR (`^`) yields 1 if bits differ; and NOT (`~`) inverts all bits (one's complement).",
      "comparisonTable": {
        "headers": [
          "Bit A",
          "Bit B",
          "AND (`A & B`)",
          "OR (`A | B`)",
          "XOR (`A ^ B`)",
          "NOT (`~A`)"
        ],
        "rows": [
          [
            "0",
            "0",
            "0",
            "0",
            "0",
            "1"
          ],
          [
            "0",
            "1",
            "0",
            "1",
            "1",
            "1"
          ],
          [
            "1",
            "0",
            "0",
            "1",
            "1",
            "0"
          ],
          [
            "1",
            "1",
            "1",
            "1",
            "0",
            "0"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    unsigned char a = 5; // 0000 0101\n    unsigned char b = 3; // 0000 0011\n\n    printf(\"a & b = %d\\n\", a & b); // 0000 0001 -> 1\n    printf(\"a | b = %d\\n\", a | b); // 0000 0111 -> 7\n    printf(\"a ^ b = %d\\n\", a ^ b); // 0000 0110 -> 6\n    printf(\"~a    = %d\\n\", (unsigned char)~a); // 1111 1010 -> 250\n    return 0;\n}",
      "interviewTip": "XOR has two famous interview properties: $x \\oplus x = 0$ and $x \\oplus 0 = x$. This is used to find the single non-repeating number in an array or swap two variables without extra memory."
    }
  },
  {
    "id": 16,
    "pdfId": "Q16",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Bitwise Operators",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the use of the left shift (<<) and right shift (>>) operators?",
    "answer": {
      "directAnswer": "Left shift (`<<`) shifts all bits to the left by $n$ positions, filling empty right bits with zeros (equivalent to multiplying by $2^n$). Right shift (`>>`) shifts bits to the right by $n$ positions (equivalent to integer division by $2^n$).",
      "explanation": [
        "**Left Shift (`x << n`)**: Multiplies `x` by $2^n$. E.g., `5 << 1` is $5 \\times 2^1 = 10$; `5 << 2` is $5 \\times 4 = 20$.",
        "**Right Shift (`x >> n`)**: Divides `x` by $2^n$. E.g., `16 >> 2` is $16 / 4 = 4$.",
        "**Logical vs Arithmetic Right Shift**: For `unsigned` types, empty left bits are always filled with 0. For `signed` negative types, sign bits (1s) are typically shifted in."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 6;  // 0000 0110\n    printf(\"6 << 2 = %d\\n\", a << 2); // 6 * 4 = 24 (0001 1000)\n    \n    int b = 40; // 0010 1000\n    printf(\"40 >> 3 = %d\\n\", b >> 3); // 40 / 8 = 5 (0000 0101)\n    return 0;\n}",
      "interviewTip": "Shift operations are executed directly by ALU barrel shifters in a single CPU cycle, making them significantly faster than arithmetic multiplication or division in embedded C."
    }
  },
  {
    "id": 17,
    "pdfId": "Q17",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Operators",
    "subtopic": "Operator Precedence",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is operator precedence and associativity? Why are they important?",
    "answer": {
      "directAnswer": "Operator precedence determines which operator is evaluated first when an expression contains multiple different operators. Associativity determines the evaluation direction (left-to-right or right-to-left) when two operators have the same precedence.",
      "explanation": [
        "**Precedence**: High-precedence operators (like `*`, `/`) bind tighter than low-precedence ones (`+`, `-`). In `2 + 3 * 4`, multiplication occurs first ($2 + 12 = 14$).",
        "**Associativity**: Most operators (arithmetic, relational, logical) are Left-to-Right (`10 - 5 - 2` -> `(10 - 5) - 2 = 3`). Unary operators (`++`, `--`, `*`, `&`), ternary (`?:`), and assignment operators (`=`, `+=`) are Right-to-Left (`a = b = c = 5`).",
        "**Importance**: Essential for avoiding compiler evaluation bugs and ensuring unambiguous expressions."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 5;\n    \n    // '*' has higher precedence than '+'\n    int r1 = a + b * c;     // 10 + (20 * 5) = 110\n    \n    // Parentheses override precedence\n    int r2 = (a + b) * c;   // (10 + 20) * 5 = 150\n    \n    // Right-to-left associativity of assignment\n    int x, y, z;\n    x = y = z = 50; // z=50 first, then y=50, then x=50\n\n    printf(\"r1=%d, r2=%d, x=%d\\n\", r1, r2, x);\n    return 0;\n}",
      "interviewTip": "Best practice tip: When in doubt, always use parentheses `()` to make evaluation order completely explicit and readable."
    }
  },
  {
    "id": 18,
    "pdfId": "Q18",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Decision Making",
    "subtopic": "if-else vs switch",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "When should a switch statement be preferred over multiple if-else statements?",
    "answer": {
      "directAnswer": "A `switch` statement should be preferred when testing a single integral or character variable against multiple fixed discrete constant values (such as menu options, state machines, or error codes).",
      "comparisonTable": {
        "headers": [
          "Aspect",
          "`switch` Statement",
          "`if-else` Chain"
        ],
        "rows": [
          [
            "Condition Types",
            "Only integer or character constants",
            "Any relational, logical, or range expression"
          ],
          [
            "Execution Mechanism",
            "Jump table / branch table (O(1) lookup)",
            "Sequential checking of conditions (O(N))"
          ],
          [
            "Floating Points",
            "Not allowed (`float` / `double` error)",
            "Fully supported (`if (val > 3.14)`)"
          ],
          [
            "Readability",
            "Clean, structured for multi-way branches",
            "Can become messy with nested ladders"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    char grade = 'B';\n    // Clean, efficient jump-table execution:\n    switch(grade) {\n        case 'A': printf(\"Excellent!\\n\"); break;\n        case 'B': printf(\"Good job!\\n\"); break;\n        case 'C': printf(\"Fair.\\n\"); break;\n        default:  printf(\"Invalid grade.\\n\"); break;\n    }\n    return 0;\n}",
      "interviewTip": "Remember to always include `break;` at the end of every case; otherwise, execution falls through into the subsequent case regardless of its match."
    }
  },
  {
    "id": 19,
    "pdfId": "Q19",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Decision Making",
    "subtopic": "Nested Conditions",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is a dangling else problem in nested if-else statements?",
    "answer": {
      "directAnswer": "The dangling else problem is an ambiguity that arises in nested `if-else` statements without braces, where it is unclear to which `if` an `else` belongs. In C, the rule is that an `else` always pairs with the closest unmatched preceding `if`.",
      "explanation": [
        "**Ambiguity**: When writing nested `if` statements without curly braces `{}`, indentation might visually mislead the programmer, but the C compiler strictly matches `else` to the innermost open `if`.",
        "**Solution**: Always enclose body statements inside curly braces `{}` to explicitly define scope."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int a = 5, b = 20;\n\n    // Misleading visual indentation:\n    if (a > 10)\n        if (b > 10)\n            printf(\"Both greater than 10\\n\");\n    else\n        printf(\"Is this else for 'a' or 'b'?\\n\"); \n    // In C, the 'else' matches 'if (b > 10)', so NOTHING is printed!\n\n    // Clear and correct approach:\n    if (a > 10) {\n        if (b > 10) {\n            printf(\"Both greater than 10\\n\");\n        }\n    } else {\n        printf(\"a is not greater than 10\\n\");\n    }\n    return 0;\n}",
      "interviewTip": "Golden coding rule for interviews: Never omit curly braces for conditional blocks, even for single-line statements."
    }
  },
  {
    "id": 20,
    "pdfId": "Q20",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Loops",
    "subtopic": "Loop Types",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Differentiate between while, do-while, and for loops in C.",
    "answer": {
      "directAnswer": "`for` and `while` loops are entry-controlled loops where condition is checked before executing loop body (0 or more executions), while `do-while` is an exit-controlled loop where condition is checked after the body executes (guaranteeing at least 1 execution).",
      "comparisonTable": {
        "headers": [
          "Feature",
          "`for` Loop",
          "`while` Loop",
          "`do-while` Loop"
        ],
        "rows": [
          [
            "Control Type",
            "Entry-controlled",
            "Entry-controlled",
            "Exit-controlled"
          ],
          [
            "Syntax",
            "`for (init; cond; upd)`",
            "`while (cond)`",
            "`do { ... } while (cond);`"
          ],
          [
            "Minimum Executions",
            "0 times",
            "0 times",
            "1 time (always)"
          ],
          [
            "Best Used When",
            "Number of iterations is known",
            "Loop depends on condition, iterations unknown",
            "Must execute at least once (e.g. Menu)"
          ],
          [
            "Trailing Semicolon",
            "No semicolon after header",
            "No semicolon after header",
            "Mandatory semicolon: `while (cond);`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int i = 10;\n\n    // while loop: does not execute because 10 < 5 is false\n    while (i < 5) {\n        printf(\"while: %d\\n\", i);\n    }\n\n    // do-while loop: executes body once before checking condition\n    do {\n        printf(\"do-while executed at least once! i=%d\\n\", i);\n    } while (i < 5);\n\n    return 0;\n}",
      "interviewTip": "Notice the semicolon `;` at the end of `do { ... } while (condition);`. Omitting it is a common syntax error."
    }
  },
  {
    "id": 21,
    "pdfId": "Q21",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Loops",
    "subtopic": "break and continue",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Explain the difference between the break and continue statements.",
    "answer": {
      "directAnswer": "`break` terminates the entire enclosing loop or switch statement immediately, while `continue` skips the remainder of the current iteration and jumps directly to the loop's next iteration test.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "`break` Statement",
          "`continue` Statement"
        ],
        "rows": [
          [
            "Action",
            "Exits the entire loop immediately",
            "Skips current iteration, starts next"
          ],
          [
            "Applicability",
            "Can be used in loops (`for`, `while`, `do-while`) and `switch`",
            "Can ONLY be used in loops (`for`, `while`, `do-while`)"
          ],
          [
            "Flow Control",
            "Jumps to statement following the loop",
            "Jumps to increment/condition check of loop"
          ],
          [
            "Use Case",
            "Early termination upon finding an element",
            "Bypassing specific unwanted iterations"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) continue; // Skips printing 3\n        if (i == 5) break;    // Stops loop before printing 5\n        printf(\"%d \", i);     // Output: 1 2 4 \n    }\n    return 0;\n}",
      "interviewTip": "`continue` cannot be used inside a standalone `switch` block unless the switch is inside an outer loop (in which case continue affects the outer loop)."
    }
  },
  {
    "id": 22,
    "pdfId": "Q22",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Loops",
    "subtopic": "Infinite Loops",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "How is an infinite loop created intentionally in C? Give an example.",
    "answer": {
      "directAnswer": "An intentional infinite loop in C is created when the loop condition is made unconditionally non-zero (true) or omitted, commonly using `while(1)`, `for(;;)`, or `do { } while(1);`.",
      "explanation": [
        "**Real-world Use Cases**: Operating system event loops, embedded system firmware (`super-loops` in microcontrollers), and server listening daemons.",
        "**Idioms in C**:",
        "1. `while(1)`: Clear and widely used.",
        "2. `for(;;)`: Standard canonical C idiom (the compiler knows condition is permanently true without evaluating any condition register).",
        "3. Controlled termination inside the loop using `if (should_stop) break;`."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int count = 0;\n    // Intentional infinite loop\n    for (;;) {\n        printf(\"Loop running: %d\\n\", ++count);\n        if (count >= 3) {\n            break; // Controlled exit\n        }\n    }\n    return 0;\n}",
      "interviewTip": "In microcontroller programming (ARM, AVR, 8051), `while(1) { /* process sensors */ }` is the fundamental architecture preventing main from terminating."
    }
  },
  {
    "id": 23,
    "pdfId": "Q23",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Functions",
    "subtopic": "Function Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is a function prototype and why is it necessary?",
    "answer": {
      "directAnswer": "A function prototype is a declaration statement that specifies the function's name, return type, and parameter types before its actual definition, enabling the compiler to perform type checking on calls.",
      "explanation": [
        "**Format**: `return_type function_name(param1_type, param2_type);`",
        "**Necessity**:",
        "1. **Type Checking**: Enables the compiler to verify whether arguments match parameter types and numbers, catching mismatches at compile time.",
        "2. **Forward Declaration**: Allows calling functions defined later in the file or in other compilation units.",
        "3. **Return Type Resolution**: Prevents the obsolete C assumption that undeclared functions return `int`."
      ],
      "codeExample": "#include <stdio.h>\n\n// Function prototype (declaration)\ndouble calculateArea(double radius);\n\nint main() {\n    double area = calculateArea(3.5); // Compiler verifies argument & return type\n    printf(\"Area = %.2f\\n\", area);\n    return 0;\n}\n\n// Function definition\ndouble calculateArea(double radius) {\n    return 3.14159 * radius * radius;\n}",
      "interviewTip": "In modern C (C99 and later), implicit function declarations are illegal. Calling a function without a prior declaration or prototype triggers a compiler warning or error."
    }
  },
  {
    "id": 24,
    "pdfId": "Q24",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Functions",
    "subtopic": "Call by Value vs Reference",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Differentiate between Call by Value and Call by Reference with an example.",
    "answer": {
      "directAnswer": "In Call by Value, a copy of the actual variable's value is passed into the function (modifications do not affect original), while in Call by Reference (simulated in C via pointers), memory addresses are passed (modifications directly mutate original).",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Call by Value",
          "Call by Reference (via Pointers)"
        ],
        "rows": [
          [
            "What is passed",
            "A copy of the actual parameter's value",
            "Memory address (`&var`) of the parameter"
          ],
          [
            "Memory Effect",
            "Operates on temporary duplicate stack frame",
            "Directly accesses original memory location"
          ],
          [
            "Original Value",
            "Cannot be modified by the function",
            "Can be modified using dereference (`*ptr`)"
          ],
          [
            "Overhead",
            "Memory copied; slow for large structs",
            "Only address (4/8 bytes) copied; very fast"
          ],
          [
            "Example",
            "`swap(a, b);` (fails to swap)",
            "`swap(&a, &b);` (successfully swaps)"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nvoid swapByValue(int a, int b) {\n    int t = a; a = b; b = t; // Only changes local copies\n}\n\nvoid swapByReference(int *a, int *b) {\n    int t = *a; *a = *b; *b = t; // Directly alters caller's memory\n}\n\nint main() {\n    int x = 10, y = 20;\n    swapByValue(x, y);\n    printf(\"After Call by Value: x=%d, y=%d\\n\", x, y); // x=10, y=20 (Unchanged)\n\n    swapByReference(&x, &y);\n    printf(\"After Call by Reference: x=%d, y=%d\\n\", x, y); // x=20, y=10 (Swapped!)\n    return 0;\n}",
      "interviewTip": "Strictly speaking, C only supports Call by Value! In C, 'Call by Reference' is simulated by passing the *value of a pointer*."
    }
  },
  {
    "id": 25,
    "pdfId": "Q25",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Functions",
    "subtopic": "Return Types",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Can a function return more than one value in C? How can this be achieved?",
    "answer": {
      "directAnswer": "A C function can directly return only one value via the `return` statement. However, multiple values can be returned indirectly using Pointers (output arguments), Structures, Arrays, or Global variables.",
      "explanation": [
        "**Method 1: Pointers / Output Parameters (Most Common)**: Pass addresses of variables as arguments; the function stores results directly into them.",
        "**Method 2: Structure**: Bundle multiple values into a custom `struct` and return the struct by value.",
        "**Method 3: Array / Dynamic Memory**: Return a pointer to dynamically allocated memory (`malloc`) or a static array containing multiple elements."
      ],
      "codeExample": "#include <stdio.h>\n\n// Approach 1: Using pointers as output parameters\nvoid getMinMax(int arr[], int n, int *min, int *max) {\n    *min = arr[0];\n    *max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\n// Approach 2: Using struct\nstruct Result { int sum; float avg; };\nstruct Result calc(int a, int b) {\n    struct Result r = { a + b, (a + b) / 2.0f };\n    return r;\n}\n\nint main() {\n    int arr[] = {3, 1, 9, 7};\n    int mn, mx;\n    getMinMax(arr, 4, &mn, &mx);\n    printf(\"Min=%d, Max=%d\\n\", mn, mx);\n    return 0;\n}",
      "interviewTip": "When returning multiple values using a struct, it is safe because C copies the entire struct across the stack upon return."
    }
  },
  {
    "id": 26,
    "pdfId": "Q26",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Functions",
    "subtopic": "Inline Functions",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the significance of the inline keyword for functions in C?",
    "answer": {
      "directAnswer": "The `inline` keyword (introduced in C99) is a compiler hint requesting that the compiler replace function calls with the actual body of the function at compile time, eliminating the runtime overhead of function call branching and stack manipulation.",
      "explanation": [
        "**Eliminates Overhead**: Avoids pushing arguments onto the stack, saving registers, jumping to function address, and returning.",
        "**Safety vs Macros**: Unlike `#define` preprocessor macros, inline functions provide full compiler type-checking and avoid side-effect errors (e.g. `SQUARE(x++)`).",
        "**Trade-off (Code Bloat)**: Inlining large functions repeatedly increases the final binary size (cache thrashing). Therefore, only small, frequently called functions should be inlined.",
        "**Compiler Discretion**: The `inline` keyword is merely a suggestion; modern optimizing compilers can ignore it if inlining is counterproductive."
      ],
      "codeExample": "#include <stdio.h>\n\n// Compiler replaces max(a, b) with actual ternary comparison directly at call site\nstatic inline int max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    int m = max(10, 20); // Fast inline expansion\n    printf(\"Max = %d\\n\", m);\n    return 0;\n}",
      "interviewTip": "Macro vs Inline function is an interview favorite: Mention that macros do pure textual substitution without type-checking, whereas inline functions are parsed and type-checked by the compiler."
    }
  },
  {
    "id": 27,
    "pdfId": "Q27",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Recursion",
    "subtopic": "Recursion Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is recursion? What are the base case and recursive case?",
    "answer": {
      "directAnswer": "Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem. Every recursive function must have a Base Case (terminating condition) and a Recursive Case (self-call progressing toward the base case).",
      "explanation": [
        "**Base Case**: The stopping condition that returns a direct result without making further recursive calls. Without it, infinite recursion occurs, leading to Stack Overflow.",
        "**Recursive Case**: The branch of the function where the problem is subdivided and the function calls itself with modified parameters that progressively move toward the base case."
      ],
      "codeExample": "#include <stdio.h>\n\nint factorial(int n) {\n    // 1. Base Case: stops recursion\n    if (n <= 1) {\n        return 1;\n    }\n    // 2. Recursive Case: calls itself with smaller sub-problem\n    return n * factorial(n - 1);\n}\n\nint main() {\n    printf(\"5! = %d\\n\", factorial(5)); // Output: 120\n    return 0;\n}",
      "interviewTip": "Always write the Base Case as the very first line inside any recursive function."
    }
  },
  {
    "id": 28,
    "pdfId": "Q28",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Recursion",
    "subtopic": "Recursion vs Iteration",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Compare recursion and iteration in terms of memory usage and performance.",
    "answer": {
      "directAnswer": "Iteration executes instructions repeatedly using loops with $O(1)$ constant memory on a single stack frame, whereas recursion allocates a new stack activation frame for every call ($O(N)$ auxiliary memory), causing higher memory consumption and function call overhead.",
      "comparisonTable": {
        "headers": [
          "Criterion",
          "Recursion",
          "Iteration (Loops)"
        ],
        "rows": [
          [
            "Memory Usage",
            "High ($O(N)$ stack memory for activation records)",
            "Low ($O(1)$ constant memory)"
          ],
          [
            "Execution Speed",
            "Slower due to function call overhead",
            "Faster directly executing loop jumps"
          ],
          [
            "Stack Overflow",
            "Risk of Stack Overflow if depth is large",
            "No stack overflow risk (infinite loop merely hangs)"
          ],
          [
            "Code Complexity",
            "Clean, concise for trees, graphs, divide & conquer",
            "Can require manual stacks for non-linear structures"
          ],
          [
            "Termination",
            "Governed by Base Case",
            "Governed by loop termination condition"
          ]
        ]
      },
      "interviewTip": "Tail recursion is a special case where the recursive call is the final statement. Compilers can optimize tail recursion (Tail Call Optimization / TCO) into a flat iterative loop."
    }
  },
  {
    "id": 29,
    "pdfId": "Q29",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Recursion",
    "subtopic": "Stack Overflow",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What causes a stack overflow error in a recursive function?",
    "answer": {
      "directAnswer": "A stack overflow error occurs when recursive function calls exceed the finite call-stack memory allocated to the program, exhausting stack capacity and causing a crash (Segmentation Fault).",
      "explanation": [
        "**Primary Causes**:",
        "1. **Missing or Faulty Base Case**: The function has no termination condition and keeps calling itself indefinitely.",
        "2. **Non-Converging Arguments**: Recursive calls do not diminish toward the base case (e.g., calling `f(n)` instead of `f(n-1)`).",
        "3. **Excessive Recursion Depth**: Even with a valid base case, very deep recursion (e.g. $N = 1,000,000$) exhausts default stack size (typically 1MB-8MB).",
        "4. **Large Local Variables**: Allocating huge arrays inside recursive functions rapidly burns stack frames."
      ],
      "codeExample": "#include <stdio.h>\n\n// Dangerous function: No base case leads to STACK OVERFLOW\nvoid crash(int count) {\n    int bigArray[1000]; // Consumes 4000 bytes per frame!\n    crash(count + 1);   // Infinite recursion -> Segmentation fault\n}\n\nint main() {\n    // crash(1); // Do not run: causes Stack Overflow\n    return 0;\n}",
      "interviewTip": "Mention that the call stack stores local variables, parameter values, and return addresses for each call. When stack hits its limit, an OS hardware trap triggers a SIGSEGV."
    }
  },
  {
    "id": 30,
    "pdfId": "Q30",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Arrays",
    "subtopic": "Array Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Why are array indices in C always started from zero?",
    "answer": {
      "directAnswer": "Array indices in C start from 0 because the index represents an offset (distance) from the array's base memory address rather than an ordinal position.",
      "explanation": [
        "**Pointer Offset Formula**: In C, array subscript syntax `arr[i]` is internally evaluated as `*(arr + i)`.",
        "**Base Address Calculation**: If array base address is `0x1000`, the first element is located at `0x1000 + (0 * sizeof(element))` = `0x1000`. Thus, offset `0` points directly to the start.",
        "**Hardware Efficiency**: Starting from 0 saves an arithmetic subtraction instruction (like `address = base + (i - 1) * size`) on every array access, providing raw machine-level efficiency."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int arr[3] = {10, 20, 30};\n    \n    // arr[0] is *(arr + 0) -> Base address + 0 bytes\n    // arr[1] is *(arr + 1) -> Base address + 1 * sizeof(int)\n    printf(\"arr[0] = %d via pointer *(arr+0) = %d\\n\", arr[0], *(arr + 0));\n    printf(\"arr[1] = %d via pointer *(arr+1) = %d\\n\", arr[1], *(arr + 1));\n    return 0;\n}",
      "interviewTip": "Fun trivia: In C, `arr[i]` and `i[arr]` are mathematically identical because `*(arr + i)` is commutative!"
    }
  },
  {
    "id": 31,
    "pdfId": "Q31",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Arrays",
    "subtopic": "Array vs Pointer",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Differentiate between an array and a pointer in C.",
    "answer": {
      "directAnswer": "An array is a fixed contiguous block of allocated memory whose base address is a constant pointer, whereas a pointer is a distinct variable that stores the memory address of another entity and can be reassigned.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Array (`int arr[5]`)",
          "Pointer (`int *p`)"
        ],
        "rows": [
          [
            "Definition",
            "A contiguous collection of elements of same type",
            "A variable holding memory address of a type"
          ],
          [
            "Memory Allocation",
            "Allocated automatically at declaration ($5 \\times 4$ = 20 bytes)",
            "Allocated for pointer variable itself (4 or 8 bytes)"
          ],
          [
            "Reassignment",
            "Cannot be reassigned (`arr = ptr` is illegal error)",
            "Can be reassigned (`p = arr`, `p = NULL`)"
          ],
          [
            "`sizeof` operator",
            "Returns total memory occupied by all elements",
            "Returns size of the pointer variable (4 or 8 bytes)"
          ],
          [
            "Arithmetic (`++`)",
            "`arr++` is invalid (constant pointer)",
            "`p++` is valid (advances to next memory location)"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *p = arr;\n\n    printf(\"sizeof(arr): %zu bytes\\n\", sizeof(arr)); // 20 bytes (5 * 4)\n    printf(\"sizeof(p):   %zu bytes\\n\", sizeof(p));   // 8 bytes (on 64-bit machine)\n\n    p++; // Valid: pointer advances to &arr[1]\n    // arr++; // INVALID: compilation error (lvalue required)\n    return 0;\n}",
      "interviewTip": "Emphasize that an array name is not a pointer variable; it decays into a pointer value in most expressions."
    }
  },
  {
    "id": 32,
    "pdfId": "Q32",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Arrays",
    "subtopic": "2D Arrays",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "How is a 2D array stored in memory? Explain row-major order.",
    "answer": {
      "directAnswer": "In C, multidimensional arrays are stored in contiguous linear 1D physical RAM memory using **Row-Major Order**, meaning all elements of the first row are stored sequentially, followed by the second row, and so on.",
      "explanation": [
        "**Row-Major Storage**: For a 2D array `arr[R][C]`, row 0 (`arr[0][0], arr[0][1], ... arr[0][C-1]`) occupies the lowest addresses, followed immediately by row 1.",
        "**Memory Address Formula**: The physical address of `arr[i][j]` is calculated as: $\\text{Address}(arr[i][j]) = \\text{BaseAddress} + (i \\times C + j) \\times \\text{sizeof}(element)$",
        "**Cache Performance**: Iterating row-by-row (outer loop $i$, inner loop $j$) ensures sequential memory access, maximizing CPU cache line hits."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int arr[2][3] = { {10, 20, 30}, {40, 50, 60} };\n\n    printf(\"Addresses in linear contiguous memory:\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"arr[%d][%d] at %p = %d\\n\", i, j, (void*)&arr[i][j], arr[i][j]);\n        }\n    }\n    return 0;\n}",
      "interviewTip": "In function prototypes accepting 2D arrays, specifying the column dimension is mandatory (e.g. `void func(int arr[][3])`), because the compiler needs $C$ to compute offsets."
    }
  },
  {
    "id": 33,
    "pdfId": "Q33",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Arrays",
    "subtopic": "Array as Function Argument",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Why does an array decay into a pointer when passed to a function?",
    "answer": {
      "directAnswer": "An array decays into a pointer to its first element when passed to a function for performance and memory efficiency, avoiding the expensive overhead of copying entire array contents onto the call stack.",
      "explanation": [
        "**Array Decay**: When an array identifier appears in an expression (like an argument list), its type converts from `type[N]` to `type*`.",
        "**Loss of Size Information**: Inside the receiving function, `sizeof(param)` returns the size of the pointer (4 or 8 bytes), NOT the size of the array. Hence, array length must always be passed as a separate argument.",
        "**Syntax Equivalence**: In parameter lists, `int arr[]` and `int *arr` are treated identically by the compiler."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid printSize(int arr[], int n) {\n    // arr decayed into int*\n    printf(\"Inside function: sizeof(arr) = %zu bytes (pointer size!)\\n\", sizeof(arr));\n}\n\nint main() {\n    int myArr[10];\n    printf(\"Inside main: sizeof(myArr) = %zu bytes (full array!)\\n\", sizeof(myArr)); // 40 bytes\n    printSize(myArr, 10); // 8 bytes on 64-bit OS\n    return 0;\n}",
      "interviewTip": "Always pass the size of an array as a companion parameter when passing arrays into C functions."
    }
  },
  {
    "id": 34,
    "pdfId": "Q34",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Strings",
    "subtopic": "String Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "How are strings represented internally in C? What is the role of the null character?",
    "answer": {
      "directAnswer": "In C, strings are not a primitive data type but are represented as 1D arrays of characters terminated by a null character (`'\\0'`, ASCII value 0). The null character marks the end of the string.",
      "explanation": [
        "**Role of `'\\0'`**: Because C arrays do not record their length in memory, string processing functions (`strlen`, `strcpy`, `printf(\"%s\")`) sequentially scan characters until they encounter `\\0`.",
        "**Memory Size**: A string literal of $N$ visible characters always occupies $N + 1$ bytes of memory to accommodate `'\\0'`.",
        "**Missing Null Terminator Danger**: Without `'\\0'`, string functions keep reading adjacent memory until a zero byte happens to appear, resulting in garbage characters or a segmentation fault."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    // \"Hello\" contains 5 letters + 1 '\\0' = 6 bytes\n    char str[] = \"Hello\"; \n\n    printf(\"String: %s\\n\", str);\n    printf(\"sizeof(str): %zu bytes\\n\", sizeof(str)); // 6\n\n    // Showing ASCII codes:\n    for (int i = 0; i < 6; i++) {\n        printf(\"char[%d] = '%c' (ASCII %d)\\n\", i, str[i], str[i]);\n    }\n    return 0;\n}",
      "interviewTip": "Never confuse `'0'` (the character 0, ASCII 48) with `'\\0'` (null character, ASCII 0)."
    }
  },
  {
    "id": 35,
    "pdfId": "Q35",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Strings",
    "subtopic": "String Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Differentiate between strcpy() and strncpy() functions.",
    "answer": {
      "directAnswer": "`strcpy(dest, src)` copies the entire source string until it hits `\\0` without checking destination buffer size (vulnerable to buffer overflow), whereas `strncpy(dest, src, n)` safely copies at most $n$ characters.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "`strcpy(dest, src)`",
          "`strncpy(dest, src, n)`"
        ],
        "rows": [
          [
            "Length Limit",
            "No limit; copies until source `\\0`",
            "Bounded: copies at most $n$ characters"
          ],
          [
            "Buffer Overflow Risk",
            "High security risk if source > dest",
            "Safer against buffer overflow"
          ],
          [
            "Null Termination",
            "Guarantees null termination",
            "Does NOT guarantee null termination if length >= $n$"
          ],
          [
            "Padding",
            "No extra padding added",
            "Pads destination with null bytes if source < $n$"
          ],
          [
            "Header Required",
            "`<string.h>`",
            "`<string.h>`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char dest[6];\n    // strncpy copies at most sizeof(dest)-1 characters\n    strncpy(dest, \"HelloWorld\", sizeof(dest) - 1);\n    dest[sizeof(dest) - 1] = '\\0'; // Crucial: explicitly ensure null termination!\n\n    printf(\"Safe copy: %s\\n\", dest); // \"Hello\"\n    return 0;\n}",
      "interviewTip": "Always remember: If source length is $\\ge n$, `strncpy` does NOT append `'\\0'`. You must manually set `dest[n-1] = '\\0'`."
    }
  },
  {
    "id": 36,
    "pdfId": "Q36",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Strings",
    "subtopic": "gets vs fgets",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Why is gets() considered unsafe? How does fgets() overcome this issue?",
    "answer": {
      "directAnswer": "`gets()` is dangerous and deprecated in C99 (removed in C11) because it performs no buffer bounds checking, leading to buffer overflow and security vulnerabilities. `fgets()` solves this by accepting the maximum buffer size as an explicit parameter.",
      "explanation": [
        "**Vulnerability of `gets(buf)`**: If user types 100 characters into a 10-byte buffer, `gets()` writes past the buffer into adjacent stack memory, corrupting the return address (classic stack smashing exploit).",
        "**Safety in `fgets(buf, size, stdin)`**: Reads at most `size - 1` characters and always appends `'\\0'` at the end, ensuring memory boundaries are strictly respected.",
        "**Newline Difference**: `fgets()` retains the trailing newline character `'\\n'` if it fits in the buffer, whereas `gets()` discarded it."
      ],
      "codeExample": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char buffer[10];\n\n    printf(\"Enter text: \");\n    // Safe input reading:\n    if (fgets(buffer, sizeof(buffer), stdin) != NULL) {\n        // Strip trailing newline if present:\n        buffer[strcspn(buffer, \"\\n\")] = '\\0';\n        printf(\"Safely read: %s\\n\", buffer);\n    }\n    return 0;\n}",
      "interviewTip": "If asked in an interview 'Why was `gets()` removed from standard C?', state clearly: 'Because it is impossible to use `gets()` safely against malicious input that exceeds the buffer size.'"
    }
  },
  {
    "id": 37,
    "pdfId": "Q37",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Storage Classes",
    "subtopic": "Storage Class Types",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "List and briefly explain the four storage classes available in C.",
    "answer": {
      "directAnswer": "The four storage classes in C are `auto`, `register`, `static`, and `extern`. They define a variable's scope (visibility), lifetime (longevity), storage location, and default initial value.",
      "comparisonTable": {
        "headers": [
          "Storage Class",
          "Keyword",
          "Storage",
          "Default Value",
          "Scope",
          "Lifetime"
        ],
        "rows": [
          [
            "Automatic",
            "`auto`",
            "Stack RAM",
            "Garbage",
            "Local block",
            "Within function block"
          ],
          [
            "Register",
            "`register`",
            "CPU Register",
            "Garbage",
            "Local block",
            "Within function block"
          ],
          [
            "Static",
            "`static`",
            "Data segment",
            "Zero (`0`)",
            "Local or File",
            "Entire program execution"
          ],
          [
            "External",
            "`extern`",
            "Data segment",
            "Zero (`0`)",
            "Global / Multi-file",
            "Entire program execution"
          ]
        ]
      },
      "interviewTip": "Cannot take the address of a `register` variable using `&var` because CPU registers do not have memory RAM addresses!"
    }
  },
  {
    "id": 38,
    "pdfId": "Q38",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Storage Classes",
    "subtopic": "static keyword",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the significance of the static keyword for a local variable?",
    "answer": {
      "directAnswer": "When applied to a local variable inside a function, `static` causes the variable to be allocated once in the data segment (initialized to zero by default) and retain its value between successive function calls across the entire program lifetime.",
      "explanation": [
        "**Persistence**: Normal local (`auto`) variables are destroyed when the function returns. A `static` local variable persists its state across calls.",
        "**Scope**: Its visibility remains restricted to the local enclosing block (cannot be accessed outside that function).",
        "**Single Initialization**: Initialization expression is evaluated only once during program startup before `main()` begins."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid visitCounter() {\n    static int visits = 0; // Initialized only once!\n    visits++;\n    printf(\"Visit count: %d\\n\", visits);\n}\n\nint main() {\n    visitCounter(); // 1\n    visitCounter(); // 2\n    visitCounter(); // 3\n    return 0;\n}",
      "interviewTip": "What does `static` do to a global variable or function? It limits its linkage/scope strictly to the current source file, hiding it from other translation units (internal linkage)."
    }
  },
  {
    "id": 39,
    "pdfId": "Q39",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Storage Classes",
    "subtopic": "extern keyword",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the purpose of the extern storage class specifier?",
    "answer": {
      "directAnswer": "The `extern` keyword declares a global variable or function without allocating memory, informing the compiler that the definition exists in another file or later in the current file.",
      "explanation": [
        "**Multi-file Projects**: Essential in C when multiple `.c` files need to access the same shared global variable.",
        "**Prevents Duplicate Symbols**: If file A defines `int globalCount = 0;`, file B writes `extern int globalCount;` to use it without causing linker 'multiple definition' errors.",
        "**Function Declarations**: All function prototypes are implicitly `extern` by default in C."
      ],
      "codeExample": "// --- In File1.c ---\nint sharedCounter = 100; // Definition & storage allocation\n\n// --- In File2.c ---\n#include <stdio.h>\nextern int sharedCounter; // Declaration: informs compiler it exists in File1.c\n\nvoid display() {\n    printf(\"Shared value = %d\\n\", sharedCounter);\n}",
      "interviewTip": "If you initialize an extern variable at file scope (`extern int x = 50;`), it becomes a definition, and memory is allocated."
    }
  },
  {
    "id": 40,
    "pdfId": "Q40",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Pointers",
    "subtopic": "Pointer Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is a NULL pointer, and how is it different from an uninitialized pointer?",
    "answer": {
      "directAnswer": "A NULL pointer is a pointer explicitly assigned a value of `0` or `NULL`, indicating that it deliberately points to no valid memory location. An uninitialized pointer (wild pointer) contains an arbitrary garbage address.",
      "comparisonTable": {
        "headers": [
          "Aspect",
          "NULL Pointer",
          "Uninitialized (Wild) Pointer"
        ],
        "rows": [
          [
            "Value",
            "Explicitly `0` / `((void*)0)`",
            "Random garbage bit pattern from stack memory"
          ],
          [
            "Target",
            "Guaranteed to point nowhere valid",
            "Points to unpredictable memory address"
          ],
          [
            "Checkable",
            "Easily checked with `if (ptr != NULL)`",
            "Cannot be detected or verified safely"
          ],
          [
            "Dereferencing Result",
            "Causes predictable, clean OS crash (SIGSEGV)",
            "Corrupts memory or causes silent undefined behavior"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int *p1 = NULL; // Safe: explicitly indicates no target\n    int *p2;        // WILD POINTER: points to unknown memory!\n\n    if (p1 == NULL) {\n        printf(\"p1 is safely recognized as NULL\\n\");\n    }\n    // *p2 = 10; // DANGEROUS: Corrupts random memory!\n    return 0;\n}",
      "interviewTip": "Rule of thumb: Always initialize pointers to `NULL` if they do not yet have an immediate target."
    }
  },
  {
    "id": 41,
    "pdfId": "Q41",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Pointers",
    "subtopic": "Void Pointer",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Differentiate between a NULL pointer and a void pointer.",
    "answer": {
      "directAnswer": "A NULL pointer is a pointer *value* representing the absence of an address (`0`), while a `void*` (generic pointer) is a pointer *data type* that can store the memory address of any data type without type-specific constraints.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "NULL Pointer",
          "Void Pointer (`void*`)"
        ],
        "rows": [
          [
            "Nature",
            "A specific pointer value (`(void*)0`)",
            "A generic pointer data type"
          ],
          [
            "Purpose",
            "Signals an invalid or empty pointer target",
            "Enables generic programming (`malloc`, `qsort`)"
          ],
          [
            "Dereferencing",
            "Illegal (crashes program)",
            "Cannot be dereferenced directly without typecasting"
          ],
          [
            "Pointer Arithmetic",
            "Not applicable",
            "Cannot perform pointer arithmetic without cast (size unknown)"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int x = 42;\n    void *vptr = &x; // Generic pointer holds address of an int\n\n    // Direct dereference: *vptr is ILLEGAL\n    // Must cast first:\n    printf(\"Value = %d\\n\", *(int*)vptr);\n\n    int *nptr = NULL; // Pointer value representing nothing\n    return 0;\n}",
      "interviewTip": "`malloc()` returns a `void*`, allowing it to be assigned to any typed pointer (`int*`, `char*`) without explicit casting in C."
    }
  },
  {
    "id": 42,
    "pdfId": "Q42",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Pointers",
    "subtopic": "Pointer Arithmetic",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Explain pointer arithmetic with an example of incrementing a pointer to an int array.",
    "answer": {
      "directAnswer": "Pointer arithmetic computes memory addresses scaled by the `sizeof(data_type)` of the pointer. Incrementing a pointer (`ptr++`) increases its stored address by `sizeof(*ptr)` bytes rather than by 1 byte.",
      "explanation": [
        "**Scaling Rule**: Address after `ptr + n` = $\\text{Current Address} + (n \\times \\text{sizeof}(*\\text{ptr}))$.",
        "**Example with `int*`**: If an `int` takes 4 bytes and `ptr = 0x1000`, `ptr + 1` evaluates to `0x1004` (not `0x1001`).",
        "**Valid Operations**: Adding/subtracting an integer to/from a pointer, subtracting two pointers of the same type (`ptr2 - ptr1` yields number of elements between them), comparing two pointers (`<`, `==`).",
        "**Invalid Operations**: Adding two pointers, multiplying/dividing pointers."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int arr[] = {100, 200, 300};\n    int *p = arr;\n\n    printf(\"Initial address p:   %p, value: %d\\n\", (void*)p, *p); // 100\n    p++; // Advances address by 4 bytes (sizeof(int))\n    printf(\"After p++ address:   %p, value: %d\\n\", (void*)p, *p); // 200\n    return 0;\n}",
      "interviewTip": "Difference between `*(p++)`, `(*p)++`, and `*++p`: `*(p++)` uses current value then advances pointer; `(*p)++` increments the value pointed to; `*++p` advances pointer then accesses value."
    }
  },
  {
    "id": 43,
    "pdfId": "Q43",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Pointers",
    "subtopic": "Double Pointers",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is a pointer to a pointer? Give a practical use case.",
    "answer": {
      "directAnswer": "A pointer to a pointer (double pointer, declared with `**`) is a variable that stores the memory address of another pointer variable.",
      "explanation": [
        "**Syntax**: `int **pp;` where `pp` points to `p`, and `p` points to `int x`.",
        "**Practical Use Cases**:",
        "1. **Modifying a Pointer inside a Function**: To allocate or reassign a pointer inside a function so the caller's pointer changes (e.g. linked list insertions or dynamic memory allocation inside helper functions).",
        "2. **Dynamic 2D Arrays**: Storing arrays of pointers to dynamically allocated rows (`int **matrix`).",
        "3. **Command-Line Arguments**: Standard `int main(int argc, char **argv)` where `argv` is an array of strings."
      ],
      "codeExample": "#include <stdio.h>\n#include <stdlib.h>\n\n// Modifies caller's pointer by passing its address (&ptr)\nvoid allocate(int **p) {\n    *p = (int*)malloc(sizeof(int));\n    **p = 99;\n}\n\nint main() {\n    int *ptr = NULL;\n    allocate(&ptr); // Pass address of pointer\n    printf(\"Allocated value: %d\\n\", *ptr); // 99\n    free(ptr);\n    return 0;\n}",
      "interviewTip": "If a function needs to modify an `int`, you pass `int*`. If a function needs to modify an `int*`, you must pass `int**`!"
    }
  },
  {
    "id": 44,
    "pdfId": "Q44",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Pointers",
    "subtopic": "Function Pointers",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is a function pointer? Where is it commonly used?",
    "answer": {
      "directAnswer": "A function pointer is a pointer that stores the starting execution address of a function in the code/text segment of memory, allowing functions to be called dynamically and passed as arguments.",
      "explanation": [
        "**Syntax**: `return_type (*ptr_name)(param_types);`",
        "**Parentheses Importance**: `int (*fp)(int, int)` is a function pointer. Without parentheses, `int *fp(int, int)` declares a regular function returning an `int*`.",
        "**Common Use Cases**:",
        "1. **Callbacks**: Passing custom handlers into generic functions (e.g. comparison function in `qsort()`).",
        "2. **Event-driven systems**: Handling GUI events, hardware interrupts, and signal handlers.",
        "3. **State Machines & Jump Tables**: Arrays of function pointers (`void (*states[3])()`)."
      ],
      "codeExample": "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\n\n// Higher-order function taking a function pointer\nvoid compute(int a, int b, int (*op)(int, int)) {\n    printf(\"Result: %d\\n\", op(a, b));\n}\n\nint main() {\n    compute(5, 3, add);      // Pass add function -> Result: 8\n    compute(5, 3, multiply); // Pass multiply function -> Result: 15\n    return 0;\n}",
      "interviewTip": "Remember the standard library `qsort` comparator prototype: `int compare(const void *a, const void *b)` is the quintessential function pointer."
    }
  },
  {
    "id": 45,
    "pdfId": "Q45",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "malloc vs calloc",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "Differentiate between malloc() and calloc() functions.",
    "answer": {
      "directAnswer": "`malloc(size)` allocates a single uninitialized contiguous block of memory with garbage values, whereas `calloc(num, size)` allocates multiple contiguous blocks of memory and zeroes out all allocated bytes.",
      "comparisonTable": {
        "headers": [
          "Feature",
          "`malloc()`",
          "`calloc()`"
        ],
        "rows": [
          [
            "Full Name",
            "Memory Allocation",
            "Contiguous Allocation"
          ],
          [
            "Parameters",
            "1 argument: `size_t total_bytes`",
            "2 arguments: `size_t count, size_t size_each`"
          ],
          [
            "Initialization",
            "Leaves memory uninitialized (contains garbage values)",
            "Initializes all allocated bytes to zero (`0`)"
          ],
          [
            "Speed",
            "Faster (avoids zeroing memory)",
            "Slightly slower (must zero out all memory)"
          ],
          [
            "Syntax",
            "`ptr = (int*)malloc(n * sizeof(int));`",
            "`ptr = (int*)calloc(n, sizeof(int));`"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *m = (int*)malloc(3 * sizeof(int)); // m contains garbage\n    int *c = (int*)calloc(3, sizeof(int)); // c[0], c[1], c[2] are all 0\n\n    printf(\"calloc values: %d %d %d\\n\", c[0], c[1], c[2]); // 0 0 0\n\n    free(m);\n    free(c);\n    return 0;\n}",
      "interviewTip": "Both return `NULL` if heap memory is exhausted. Always check `if (ptr == NULL)` before accessing dynamically allocated memory."
    }
  },
  {
    "id": 46,
    "pdfId": "Q46",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "realloc and free",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Explain the purpose of realloc() and free() functions with an example scenario.",
    "answer": {
      "directAnswer": "`realloc()` dynamically resizes a previously allocated memory block without losing its existing data, while `free()` deallocates heap memory back to the operating system to prevent memory leaks.",
      "explanation": [
        "**`realloc(ptr, new_size)` Mechanism**:",
        "1. If contiguous space exists at the current location, it expands the block in place.",
        "2. If contiguous space is not available, it allocates a new block elsewhere, copies existing data over, frees the old block, and returns the new pointer.",
        "3. Returns `NULL` if memory reallocation fails.",
        "**`free(ptr)` Mechanism**:",
        "Releases the allocated block from the heap. After freeing, `ptr` becomes a **dangling pointer** unless reset to `NULL`."
      ],
      "codeExample": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(2 * sizeof(int));\n    arr[0] = 10; arr[1] = 20;\n\n    // Expand array from 2 elements to 4 elements\n    int *temp = (int*)realloc(arr, 4 * sizeof(int));\n    if (temp != NULL) {\n        arr = temp;\n        arr[2] = 30;\n        arr[3] = 40;\n        printf(\"Resized: %d %d %d %d\\n\", arr[0], arr[1], arr[2], arr[3]);\n    }\n\n    free(arr);    // Free heap memory\n    arr = NULL;   // Prevent dangling pointer\n    return 0;\n}",
      "interviewTip": "Never do `arr = realloc(arr, new_size)`. If realloc fails and returns `NULL`, the original memory pointer is lost, creating a memory leak! Always store in a temporary pointer first."
    }
  },
  {
    "id": 47,
    "pdfId": "Q47",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Memory Leak",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is a memory leak? How can it be avoided in a C program?",
    "answer": {
      "directAnswer": "A memory leak occurs when dynamically allocated heap memory (`malloc`/`calloc`/`realloc`) is no longer needed by the program but is never released via `free()`, making that memory unavailable to the system until the process terminates.",
      "explanation": [
        "**Consequences**: Long-running applications (like servers or daemons) gradually consume all available RAM, causing severe performance degradation and eventual crashes.",
        "**Common Causes**:",
        "1. Losing pointer reference before freeing (e.g. `p = malloc(10); p = malloc(20);`).",
        "2. Returning early from a function (via `return` or error condition) without calling `free()`.",
        "**How to Avoid**:",
        "1. Follow the RAII principle: Every `malloc` must have a matching `free()`.",
        "2. Set freed pointers to `NULL` immediately (`free(p); p = NULL;`).",
        "3. Use memory debugging tools like **Valgrind** or AddressSanitizer (`-fsanitize=address`)."
      ],
      "codeExample": "#include <stdlib.h>\n\nvoid safeFunction() {\n    int *data = (int*)malloc(100 * sizeof(int));\n    if (!data) return;\n\n    // Perform operations...\n    \n    free(data);  // Crucial: Deallocate before exiting!\n    data = NULL; // Safe practice\n}",
      "interviewTip": "Interview viva: 'Does memory leak crash the program immediately?' Answer: No, it causes gradual memory depletion over time, degrading system responsiveness until out-of-memory."
    }
  },
  {
    "id": 48,
    "pdfId": "Q48",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Structures",
    "subtopic": "Structure vs Union",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "Differentiate between a structure and a union in terms of memory allocation.",
    "answer": {
      "directAnswer": "In a `struct`, every member gets its own separate memory location (total size is the sum of member sizes plus padding), whereas in a `union`, all members share the same single memory location (total size equals the size of the largest member).",
      "comparisonTable": {
        "headers": [
          "Feature",
          "Structure (`struct`)",
          "Union (`union`)"
        ],
        "rows": [
          [
            "Keyword",
            "`struct`",
            "`union`"
          ],
          [
            "Memory Allocation",
            "Separate memory for each member",
            "Single shared memory for all members"
          ],
          [
            "Total Size",
            "Sum of members' sizes + alignment padding",
            "Size of its largest data member"
          ],
          [
            "Member Access",
            "All members can be accessed simultaneously",
            "Only one member can hold valid data at any given time"
          ],
          [
            "Overwriting",
            "Altering one member does not affect others",
            "Altering one member overwrites other members"
          ],
          [
            "Use Case",
            "Grouping related diverse attributes (e.g. Student)",
            "Memory conservation / variant types (e.g. Hardware registers)"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nstruct S { int i; char c; double d; };\nunion U  { int i; char c; double d; };\n\nint main() {\n    printf(\"sizeof(struct S): %zu bytes\\n\", sizeof(struct S)); // typically 16 bytes (padding)\n    printf(\"sizeof(union U):  %zu bytes\\n\", sizeof(union U));  // 8 bytes (size of double)\n    return 0;\n}",
      "interviewTip": "Unions are widely used in embedded systems to interpret the same raw memory bytes as different data representations (e.g. reading 4 bytes as an integer or as 4 individual bytes)."
    }
  },
  {
    "id": 49,
    "pdfId": "Q49",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Structures",
    "subtopic": "Nested Structures",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is a nested structure? Give an example of accessing its members.",
    "answer": {
      "directAnswer": "A nested structure is a structure that contains an instance of another structure as one of its members, enabling hierarchical data modeling.",
      "explanation": [
        "**Accessing Members**: Use chained dot operators (`outer.inner.member`) for structure variables, or arrow operator (`outerPtr->inner.member`) for pointers.",
        "**Design**: Encapsulates logical groupings (e.g. putting an `Address` or `Date` structure inside an `Employee` structure)."
      ],
      "codeExample": "#include <stdio.h>\n\nstruct Date {\n    int day, month, year;\n};\n\nstruct Student {\n    int id;\n    char name[30];\n    struct Date dob; // Nested structure member\n};\n\nint main() {\n    struct Student s1 = {101, \"Vijay\", {15, 8, 2004}};\n\n    // Access nested members with chained dot operators:\n    printf(\"Student: %s, DOB: %02d/%02d/%d\\n\", \n           s1.name, s1.dob.day, s1.dob.month, s1.dob.year);\n    return 0;\n}",
      "interviewTip": "A structure cannot contain an instance of itself (`struct Node n;` is illegal recursive sizing), but it CAN contain a pointer to itself (`struct Node *next;`), which forms the basis for self-referential structures like Linked Lists."
    }
  },
  {
    "id": 50,
    "pdfId": "Q50",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Unions",
    "subtopic": "Union Memory",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "How much memory does a union occupy? Explain with an example.",
    "answer": {
      "directAnswer": "A union occupies memory equal to the size of its largest member, rounded up to the nearest multiple of the strictest alignment requirement among its members.",
      "explanation": [
        "**Shared Memory Principle**: Because a union stores only one member at any given moment, the compiler allocates a single block big enough for the biggest type.",
        "**Alignment Padding**: If the largest member is an array like `char arr[9]` (9 bytes) but the union also contains an `int` (4-byte alignment), the union size is padded to 12 bytes to align with 4-byte boundaries."
      ],
      "codeExample": "#include <stdio.h>\n\nunion Data {\n    char ch;        // 1 byte\n    int count;      // 4 bytes\n    double salary;  // 8 bytes (largest member)\n};\n\nint main() {\n    union Data d;\n    printf(\"Size of union Data: %zu bytes\\n\", sizeof(d)); // Exactly 8 bytes\n\n    d.count = 100;\n    printf(\"d.count = %d\\n\", d.count);\n\n    d.salary = 75000.50; // Overwrites d.count in memory!\n    printf(\"d.salary = %.2f\\n\", d.salary);\n    printf(\"d.count is now corrupted: %d\\n\", d.count);\n    return 0;\n}",
      "interviewTip": "Always mention alignment: 'Size is at least the size of the largest member, plus any padding required for member alignment.'"
    }
  },
  {
    "id": 51,
    "pdfId": "Q51",
    "sectionId": 1,
    "sectionName": "Section 1: Technical Interview Questions",
    "topic": "Enumeration",
    "subtopic": "enum Basics",
    "difficulty": "Basic",
    "type": "Theory",
    "question": "What is an enum in C? What are the default values assigned to enum constants?",
    "answer": {
      "directAnswer": "An enumeration (`enum`) is a user-defined data type in C that consists of named integer constants, improving code readability and maintainability. By default, the first enum constant is assigned `0`, and each subsequent constant increments by `1`.",
      "explanation": [
        "**Default Sequence**: `enum Day { SUN, MON, TUE };` sets `SUN = 0`, `MON = 1`, `TUE = 2`.",
        "**Custom Values**: Any constant can be explicitly assigned a value; unassigned following constants increment from the preceding value.",
        "**Internal Type**: In C, enum constants are treated as integer constants of type `int`."
      ],
      "codeExample": "#include <stdio.h>\n\nenum Status {\n    SUCCESS = 0,\n    FAILED = 1,\n    PENDING = 5,\n    TIMEOUT      // Automatically assigned 5 + 1 = 6\n};\n\nint main() {\n    enum Status s = TIMEOUT;\n    printf(\"PENDING: %d, TIMEOUT: %d\\n\", PENDING, s); // 5, 6\n    return 0;\n}",
      "interviewTip": "Why use `enum` instead of `#define`? Enums are scoped, typed, visible in symbolic debuggers (like GDB), and generate sequential integers automatically."
    }
  },
  {
    "id": 52,
    "pdfId": "Q51",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Prime Number",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Prime Number.",
    "answer": {
      "directAnswer": "A prime number is an integer greater than 1 that has no positive divisors other than 1 and itself. We test divisibility from 2 up to $\\sqrt{N}$ in $O(\\sqrt{N})$ time.",
      "algorithmSteps": [
        "1. Input integer $N$.",
        "2. If $N \\le 1$, return false (not prime).",
        "3. Loop $i$ from 2 up to $\\sqrt{N}$ ($i \\times i \\le N$):",
        "   - If $N \\pmod i == 0$, return false (composite).",
        "4. If no divisor is found, return true (prime)."
      ],
      "codeExample": "#include <stdio.h>\n#include <stdbool.h>\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    int n = 29;\n    printf(\"%d is %s\\n\", n, isPrime(n) ? \"PRIME\" : \"NOT PRIME\");\n    return 0;\n}",
      "interviewTip": "Why loop only up to $\\sqrt{N}$? Because any factor larger than $\\sqrt{N}$ must have a corresponding paired factor smaller than $\\sqrt{N}$."
    }
  },
  {
    "id": 53,
    "pdfId": "Q52",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Palindrome Number",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Palindrome Number.",
    "answer": {
      "directAnswer": "A palindrome number remains unchanged when its digits are reversed (e.g., 121, 1331). We extract digits from right to left, reverse the number, and compare with original.",
      "algorithmSteps": [
        "1. Store original number $N$ into variable `temp`.",
        "2. Initialize `reversed = 0`.",
        "3. While $N > 0$:",
        "   - `rem = N % 10`",
        "   - `reversed = (reversed * 10) + rem`",
        "   - `N = N / 10`",
        "4. If `temp == reversed`, it is a Palindrome; else, it is not."
      ],
      "codeExample": "#include <stdio.h>\n\nint isPalindrome(int n) {\n    int temp = n, rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    return temp == rev;\n}\n\nint main() {\n    int num = 1221;\n    printf(\"%d is %s\\n\", num, isPalindrome(num) ? \"a Palindrome\" : \"Not a Palindrome\");\n    return 0;\n}",
      "interviewTip": "Negative numbers are generally not palindromes because the minus sign is at the front."
    }
  },
  {
    "id": 54,
    "pdfId": "Q53",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Armstrong Number",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Armstrong Number.",
    "answer": {
      "directAnswer": "An Armstrong (narcissistic) number is an $n$-digit number equal to the sum of its digits each raised to the power of $n$ (e.g. $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$).",
      "algorithmSteps": [
        "1. Count total digits $d$ in the number $N$.",
        "2. Initialize `sum = 0` and copy $N$ to `temp`.",
        "3. While `temp > 0`:",
        "   - Extract last digit: `rem = temp % 10`",
        "   - Compute $rem^d$ and add to `sum`",
        "   - `temp = temp / 10`",
        "4. If `sum == N`, then $N$ is an Armstrong number."
      ],
      "codeExample": "#include <stdio.h>\n#include <math.h>\n\nint isArmstrong(int n) {\n    int temp = n, digits = 0, sum = 0;\n    while (temp > 0) { digits++; temp /= 10; }\n\n    temp = n;\n    while (temp > 0) {\n        int rem = temp % 10;\n        sum += (int)pow(rem, digits);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    int n = 153;\n    printf(\"%d is %s\\n\", n, isArmstrong(n) ? \"Armstrong\" : \"Not Armstrong\");\n    return 0;\n}",
      "interviewTip": "Single-digit numbers (1-9) are all Armstrong numbers because $x^1 = x$."
    }
  },
  {
    "id": 55,
    "pdfId": "Q54",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Strong Number",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Strong Number.",
    "answer": {
      "directAnswer": "A Strong number (or Krishnamurthy number) is a number whose sum of the factorials of all digits equals the number itself (e.g., $145 = 1! + 4! + 5! = 1 + 24 + 120 = 145$).",
      "algorithmSteps": [
        "1. Set `temp = N` and `sum = 0`.",
        "2. While `temp > 0`:",
        "   - `rem = temp % 10`",
        "   - Compute factorial of `rem`",
        "   - `sum += fact(rem)`",
        "   - `temp = temp / 10`",
        "3. If `sum == N`, print 'Strong Number'; otherwise print 'Not Strong'."
      ],
      "codeExample": "#include <stdio.h>\n\nint factorial(int n) {\n    int f = 1;\n    for (int i = 2; i <= n; i++) f *= i;\n    return f;\n}\n\nint isStrong(int n) {\n    int temp = n, sum = 0;\n    while (temp > 0) {\n        sum += factorial(temp % 10);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    int n = 145;\n    printf(\"%d is %s\\n\", n, isStrong(n) ? \"Strong\" : \"Not Strong\");\n    return 0;\n}",
      "interviewTip": "Pre-computing factorials for digits 0-9 in a lookup table array `int fact[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};` optimizes this to $O(D)$ runtime."
    }
  },
  {
    "id": 56,
    "pdfId": "Q55",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Perfect Number",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Perfect Number.",
    "answer": {
      "directAnswer": "A Perfect Number is a positive integer that is equal to the sum of its proper positive divisors (excluding the number itself). For example, $6 = 1 + 2 + 3$, and $28 = 1 + 2 + 4 + 7 + 14$.",
      "algorithmSteps": [
        "1. Initialize `sum = 0`.",
        "2. Loop $i$ from 1 to $N / 2$:",
        "   - If $N \\pmod i == 0$, add $i$ to `sum`.",
        "3. If `sum == N`, $N$ is a Perfect Number."
      ],
      "codeExample": "#include <stdio.h>\n\nint isPerfect(int n) {\n    if (n <= 1) return 0;\n    int sum = 0;\n    for (int i = 1; i <= n / 2; i++) {\n        if (n % i == 0) sum += i;\n    }\n    return sum == n;\n}\n\nint main() {\n    int n = 28;\n    printf(\"%d is %s\\n\", n, isPerfect(n) ? \"Perfect\" : \"Not Perfect\");\n    return 0;\n}",
      "interviewTip": "The first four perfect numbers are 6, 28, 496, and 8128."
    }
  },
  {
    "id": 57,
    "pdfId": "Q56",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Neon Number",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Neon Number.",
    "answer": {
      "directAnswer": "A Neon number is a number where the sum of digits of its square is equal to the number itself. For example, $9$ is a Neon number because $9^2 = 81$, and $8 + 1 = 9$.",
      "algorithmSteps": [
        "1. Calculate square of $N$: `sq = N * N`.",
        "2. Initialize `sum = 0`.",
        "3. While `sq > 0`:",
        "   - `sum += sq % 10`",
        "   - `sq /= 10`",
        "4. If `sum == N`, return true; else return false."
      ],
      "codeExample": "#include <stdio.h>\n\nint isNeon(int n) {\n    int sq = n * n;\n    int sum = 0;\n    while (sq > 0) {\n        sum += sq % 10;\n        sq /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    int n = 9;\n    printf(\"%d is %s\\n\", n, isNeon(n) ? \"Neon Number\" : \"Not Neon\");\n    return 0;\n}",
      "interviewTip": "Apart from 0 and 1, 9 is the only other known single-digit base-10 neon number."
    }
  },
  {
    "id": 58,
    "pdfId": "Q57",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Reverse Number",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Reverse Number.",
    "answer": {
      "directAnswer": "Reversing a number involves extracting its digits one by one using modulo 10 and building the reversed number using base-10 multiplication.",
      "algorithmSteps": [
        "1. Initialize `rev = 0`.",
        "2. While $N \\neq 0$:",
        "   - Extract last digit: `d = N % 10`",
        "   - Append digit: `rev = rev * 10 + d`",
        "   - Remove last digit: `N = N / 10`",
        "3. Return `rev`."
      ],
      "codeExample": "#include <stdio.h>\n\nint reverseNumber(int n) {\n    int rev = 0;\n    while (n != 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    return rev;\n}\n\nint main() {\n    int n = 12345;\n    printf(\"Reversed: %d\\n\", reverseNumber(n)); // 54321\n    return 0;\n}",
      "interviewTip": "Watch out for integer overflow when reversing numbers that approach `INT_MAX`."
    }
  },
  {
    "id": 59,
    "pdfId": "Q58",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Reverse Digits",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Reverse Digits.",
    "answer": {
      "directAnswer": "To print the digits of a number in reverse order, extract the remainder modulo 10 and print each digit immediately without reconstructing the integer.",
      "algorithmSteps": [
        "1. Input number $N$.",
        "2. If $N == 0$, print 0 and exit.",
        "3. While $N > 0$:",
        "   - Print `N % 10`",
        "   - `N = N / 10`"
      ],
      "codeExample": "#include <stdio.h>\n\nvoid printReverseDigits(int n) {\n    if (n == 0) { printf(\"0\"); return; }\n    while (n > 0) {\n        printf(\"%d \", n % 10);\n        n /= 10;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    printReverseDigits(9876); // Output: 6 7 8 9\n    return 0;\n}",
      "interviewTip": "Printing digits directly avoids the risk of 32-bit integer overflow that can occur when reversing numbers near 2 billion."
    }
  },
  {
    "id": 60,
    "pdfId": "Q59",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Count Digits",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Count Digits.",
    "answer": {
      "directAnswer": "Count digits by repeatedly dividing the integer by 10 until it becomes 0, incrementing a counter variable at each step, running in $O(\\log_{10} N)$ time.",
      "algorithmSteps": [
        "1. If $N == 0$, return 1.",
        "2. Set `count = 0`.",
        "3. While $N \\neq 0$:",
        "   - `count = count + 1`",
        "   - `N = N / 10`",
        "4. Return `count`."
      ],
      "codeExample": "#include <stdio.h>\n\nint countDigits(int n) {\n    if (n == 0) return 1;\n    if (n < 0) n = -n;\n    int count = 0;\n    while (n > 0) {\n        count++;\n        n /= 10;\n    }\n    return count;\n}\n\nint main() {\n    printf(\"Digits in 74623: %d\\n\", countDigits(74623)); // 5\n    return 0;\n}",
      "interviewTip": "Math shortcut for counting digits: `(int)log10(abs(n)) + 1`."
    }
  },
  {
    "id": 61,
    "pdfId": "Q60",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Sum of Digits",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Sum of Digits.",
    "answer": {
      "directAnswer": "The sum of digits is found by continually adding the rightmost digit (`n % 10`) to an accumulator `sum` and dividing the number by 10 (`n / 10`) until $n$ reaches 0.",
      "algorithmSteps": [
        "1. Initialize `sum = 0`.",
        "2. While $N > 0$:",
        "   - `sum = sum + (N % 10)`",
        "   - `N = N / 10`",
        "3. Print / Return `sum`."
      ],
      "codeExample": "#include <stdio.h>\n\nint sumOfDigits(int n) {\n    int sum = 0;\n    while (n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    return sum;\n}\n\nint main() {\n    printf(\"Sum of digits in 4567: %d\\n\", sumOfDigits(4567)); // 4+5+6+7 = 22\n    return 0;\n}",
      "interviewTip": "Digital root (recursive sum of digits until a single digit remains) can be calculated in $O(1)$ time using modulo 9: `1 + (n - 1) % 9`."
    }
  },
  {
    "id": 62,
    "pdfId": "Q61",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Product of Digits",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Product of Digits.",
    "answer": {
      "directAnswer": "Multiply each extracted digit (`n % 10`) into an accumulator initialized to 1, dividing $n$ by 10 until no digits remain.",
      "algorithmSteps": [
        "1. If $N == 0$, return 0.",
        "2. Initialize `product = 1`.",
        "3. While $N > 0$:",
        "   - `product = product * (N % 10)`",
        "   - `N = N / 10`",
        "4. Return `product`."
      ],
      "codeExample": "#include <stdio.h>\n\nint productOfDigits(int n) {\n    if (n == 0) return 0;\n    int prod = 1;\n    while (n > 0) {\n        prod *= (n % 10);\n        n /= 10;\n    }\n    return prod;\n}\n\nint main() {\n    printf(\"Product of digits for 234: %d\\n\", productOfDigits(234)); // 2*3*4 = 24\n    return 0;\n}",
      "interviewTip": "Early exit optimization: If any extracted digit is 0, the overall product becomes 0 immediately."
    }
  },
  {
    "id": 63,
    "pdfId": "Q62",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Even/Odd Check",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Even/Odd Check.",
    "answer": {
      "directAnswer": "An integer is even if it is divisible by 2 with remainder 0 (`n % 2 == 0`) or if its least significant bit is 0 (`(n & 1) == 0`). Otherwise, it is odd.",
      "algorithmSteps": [
        "**Method 1 (Arithmetic)**: If $N \\pmod 2 == 0$, return Even; else return Odd.",
        "**Method 2 (Bitwise - Faster)**: If $(N \\& 1) == 0$, return Even; else return Odd."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid checkEvenOdd(int n) {\n    // Fast bitwise test on LSB (Least Significant Bit)\n    if ((n & 1) == 0) {\n        printf(\"%d is EVEN\\n\", n);\n    } else {\n        printf(\"%d is ODD\\n\", n);\n    }\n}\n\nint main() {\n    checkEvenOdd(14); // Even\n    checkEvenOdd(27); // Odd\n    return 0;\n}",
      "interviewTip": "Bitwise check `(n & 1) == 0` is preferred in low-level programming because bit masking requires only 1 CPU clock cycle and works properly for negative numbers."
    }
  },
  {
    "id": 64,
    "pdfId": "Q63",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Leap Year",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Leap Year.",
    "answer": {
      "directAnswer": "A year is a leap year if it is divisible by 4, except for end-of-century years (ending in 00), which must also be evenly divisible by 400: `(year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)`.",
      "algorithmSteps": [
        "1. Input year.",
        "2. If `year % 400 == 0` -> Leap Year.",
        "3. Else if `year % 100 == 0` -> Not a Leap Year.",
        "4. Else if `year % 4 == 0` -> Leap Year.",
        "5. Else -> Not a Leap Year."
      ],
      "codeExample": "#include <stdio.h>\n\nint isLeapYear(int year) {\n    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);\n}\n\nint main() {\n    printf(\"2000: %s\\n\", isLeapYear(2000) ? \"Leap\" : \"Not Leap\"); // Leap (divisible by 400)\n    printf(\"1900: %s\\n\", isLeapYear(1900) ? \"Leap\" : \"Not Leap\"); // Not Leap (div by 100 but not 400)\n    printf(\"2024: %s\\n\", isLeapYear(2024) ? \"Leap\" : \"Not Leap\"); // Leap (div by 4)\n    return 0;\n}",
      "interviewTip": "Why is 1900 not a leap year while 2000 is? Century years must be divisible by 400."
    }
  },
  {
    "id": 65,
    "pdfId": "Q64",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Factorial",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Factorial.",
    "answer": {
      "directAnswer": "The factorial of a non-negative integer $N$ ($N!$) is the product of all positive integers less than or equal to $N$, with $0! = 1$.",
      "algorithmSteps": [
        "1. Input non-negative integer $N$.",
        "2. Initialize `fact = 1`.",
        "3. Loop $i$ from 1 to $N$:",
        "   - `fact = fact * i`",
        "4. Return `fact`."
      ],
      "codeExample": "#include <stdio.h>\n\nlong long factorial(int n) {\n    long long fact = 1;\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    return fact;\n}\n\nint main() {\n    printf(\"6! = %lld\\n\", factorial(6)); // 720\n    return 0;\n}",
      "interviewTip": "Use `long long` for factorials because $13!$ already overflows a standard 32-bit signed integer."
    }
  },
  {
    "id": 66,
    "pdfId": "Q65",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Fibonacci Series",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Fibonacci Series.",
    "answer": {
      "directAnswer": "In the Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$.",
      "algorithmSteps": [
        "1. Set $a = 0, b = 1$.",
        "2. Print $a$ and $b$ (if $N \\ge 2$).",
        "3. Loop from 3 to $N$:",
        "   - $c = a + b$",
        "   - Print $c$",
        "   - $a = b$",
        "   - $b = c$"
      ],
      "codeExample": "#include <stdio.h>\n\nvoid printFibonacci(int n) {\n    int a = 0, b = 1, next;\n    for (int i = 1; i <= n; i++) {\n        printf(\"%d \", a);\n        next = a + b;\n        a = b;\n        b = next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    printFibonacci(8); // 0 1 1 2 3 5 8 13\n    return 0;\n}",
      "interviewTip": "Iterative Fibonacci has $O(N)$ time and $O(1)$ space, whereas naive recursive Fibonacci has exponential $O(2^N)$ time complexity."
    }
  },
  {
    "id": 67,
    "pdfId": "Q66",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Power Calculation",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Power Calculation.",
    "answer": {
      "directAnswer": "Power $B^E$ can be computed iteratively in $O(E)$ time, or via Binary Exponentiation (Fast Power) in $O(\\log E)$ time by repeatedly squaring the base.",
      "algorithmSteps": [
        "**Binary Exponentiation Algorithm ($O(\\log E)$)**:",
        "1. Initialize `result = 1`.",
        "2. While $E > 0$:",
        "   - If $E$ is odd ($E \\pmod 2 == 1$), `result = result * B`.",
        "   - `B = B * B`",
        "   - `E = E / 2`",
        "3. Return `result`."
      ],
      "codeExample": "#include <stdio.h>\n\nlong long fastPower(long long base, int exp) {\n    long long res = 1;\n    while (exp > 0) {\n        if (exp & 1) res *= base; // If odd, multiply\n        base *= base;             // Square base\n        exp >>= 1;                // Divide exp by 2\n    }\n    return res;\n}\n\nint main() {\n    printf(\"2^10 = %lld\\n\", fastPower(2, 10)); // 1024\n    return 0;\n}",
      "interviewTip": "Binary exponentiation reduces 1,000,000 multiplications to only ~20 multiplications."
    }
  },
  {
    "id": 68,
    "pdfId": "Q67",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "GCD",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print GCD.",
    "answer": {
      "directAnswer": "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both without remainder, computed efficiently using Euclid's Algorithm: $\\gcd(a, b) = \\gcd(b, a \\pmod b)$ until $b = 0$.",
      "algorithmSteps": [
        "1. While $b \\neq 0$:",
        "   - `temp = b`",
        "   - `b = a % b`",
        "   - `a = temp`",
        "2. Return $a$."
      ],
      "codeExample": "#include <stdio.h>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int rem = a % b;\n        a = b;\n        b = rem;\n    }\n    return a;\n}\n\nint main() {\n    printf(\"GCD(36, 24) = %d\\n\", gcd(36, 24)); // 12\n    return 0;\n}",
      "interviewTip": "Euclidean algorithm runs in logarithmic time $O(\\log(\\min(a, b)))$."
    }
  },
  {
    "id": 69,
    "pdfId": "Q68",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "LCM",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print LCM.",
    "answer": {
      "directAnswer": "The Least Common Multiple (LCM) of two numbers $a$ and $b$ is computed using the mathematical relationship $\\text{LCM}(a, b) = (a \\times b) / \\text{GCD}(a, b)$.",
      "algorithmSteps": [
        "1. Compute $\\text{GCD}(a, b)$ using Euclid's algorithm.",
        "2. Compute $\\text{LCM} = (a / \\text{GCD}(a, b)) \\times b$ (dividing first avoids premature integer overflow).",
        "3. Return $\\text{LCM}$."
      ],
      "codeExample": "#include <stdio.h>\n\nint gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);\n}\n\nint lcm(int a, int b) {\n    return (a / gcd(a, b)) * b;\n}\n\nint main() {\n    printf(\"LCM(12, 18) = %d\\n\", lcm(12, 18)); // 36\n    return 0;\n}",
      "interviewTip": "Always divide by GCD before multiplying (`(a / gcd) * b`) to prevent potential integer overflow during the multiplication step."
    }
  },
  {
    "id": 70,
    "pdfId": "Q69",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Prime Numbers Between Two Numbers",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Prime Numbers Between Two Numbers.",
    "answer": {
      "directAnswer": "To print all prime numbers in range $[low, high]$, iterate through every number in the range and verify primality by checking trial division up to its square root.",
      "algorithmSteps": [
        "1. Input range `low` and `high`.",
        "2. For each number $n$ from `low` to `high`:",
        "   - If $n \\le 1$, skip.",
        "   - Check if $n$ is divisible by any $i$ from 2 to $\\sqrt{n}$.",
        "   - If no divisor found, print $n$."
      ],
      "codeExample": "#include <stdio.h>\n#include <stdbool.h>\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nvoid printPrimes(int low, int high) {\n    for (int i = low; i <= high; i++) {\n        if (isPrime(i)) printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    printPrimes(10, 30); // 11 13 17 19 23 29\n    return 0;\n}",
      "interviewTip": "For very large ranges (e.g. up to 10 million), mention the **Sieve of Eratosthenes** algorithm which finds all primes up to $N$ in $O(N \\log \\log N)$ time."
    }
  },
  {
    "id": 71,
    "pdfId": "Q70",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Palindrome String",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Palindrome String.",
    "answer": {
      "directAnswer": "A palindrome string reads the same forwards and backwards (e.g., 'madam', 'racecar'). We use two pointers moving inward from both ends to compare matching characters.",
      "algorithmSteps": [
        "1. Initialize `left = 0` and `right = length - 1`.",
        "2. While `left < right`:",
        "   - If `str[left] != str[right]`, return false.",
        "   - `left++`, `right--`.",
        "3. Return true."
      ],
      "codeExample": "#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\n\nbool isPalindromeString(const char *s) {\n    int left = 0, right = strlen(s) - 1;\n    while (left < right) {\n        if (s[left] != s[right]) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    printf(\"'radar': %s\\n\", isPalindromeString(\"radar\") ? \"Palindrome\" : \"Not Palindrome\");\n    return 0;\n}",
      "interviewTip": "The two-pointer approach uses $O(N)$ time and $O(1)$ extra space, avoiding the need to allocate a second reversed string."
    }
  },
  {
    "id": 72,
    "pdfId": "Q71",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Reverse String",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Reverse String.",
    "answer": {
      "directAnswer": "Reverse an in-place mutable character array using two pointers (one at the start, one at the end) swapping characters until they meet in the middle, running in $O(N)$ time and $O(1)$ space.",
      "algorithmSteps": [
        "1. Let `i = 0` and `j = strlen(str) - 1`.",
        "2. While `i < j`:",
        "   - Swap `str[i]` with `str[j]` using a temporary character.",
        "   - `i++`, `j--`.",
        "3. The string is now reversed in place."
      ],
      "codeExample": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char *s) {\n    int i = 0, j = strlen(s) - 1;\n    while (i < j) {\n        char temp = s[i];\n        s[i] = s[j];\n        s[j] = temp;\n        i++;\n        j--;\n    }\n}\n\nint main() {\n    char str[] = \"EMBEDDED\";\n    reverseString(str);\n    printf(\"Reversed: %s\\n\", str); // DEDDEBME\n    return 0;\n}",
      "interviewTip": "Never attempt in-place reversal on a string literal (`char *s = \"hello\"; reverseString(s);`) because string literals are stored in read-only code segments (causes SegFault)."
    }
  },
  {
    "id": 73,
    "pdfId": "Q72",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Count Vowels",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Count Vowels.",
    "answer": {
      "directAnswer": "Count vowels by traversing the string character by character, converting each letter to lowercase, and checking if it belongs to the set `{'a', 'e', 'i', 'o', 'u'}`.",
      "algorithmSteps": [
        "1. Initialize `vowels = 0`.",
        "2. Loop through each character `c` in string until `'\\0'`:",
        "   - Convert to lowercase: `ch = tolower(c)`.",
        "   - If `ch` is `'a'`, `'e'`, `'i'`, `'o'`, or `'u'`, increment `vowels`.",
        "3. Return `vowels`."
      ],
      "codeExample": "#include <stdio.h>\n#include <ctype.h>\n\nint countVowels(const char *s) {\n    int count = 0;\n    while (*s) {\n        char ch = tolower(*s);\n        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n            count++;\n        }\n        s++;\n    }\n    return count;\n}\n\nint main() {\n    printf(\"Vowels in 'Campus Interview': %d\\n\", countVowels(\"Campus Interview\")); // 5\n    return 0;\n}",
      "interviewTip": "Always use `tolower()` from `<ctype.h>` so your logic handles both uppercase and lowercase characters cleanly."
    }
  },
  {
    "id": 74,
    "pdfId": "Q73",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Count Words",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Count Words.",
    "answer": {
      "directAnswer": "Count words using a state flag (`inWord`): toggle the flag to true and increment count when transitioning from whitespace to a non-whitespace character.",
      "algorithmSteps": [
        "1. Set `wordCount = 0`, `inWord = 0`.",
        "2. For each character `c` in string:",
        "   - If `c` is space/tab/newline, set `inWord = 0`.",
        "   - Else if `inWord == 0`, set `inWord = 1` and `wordCount++`.",
        "3. Return `wordCount`."
      ],
      "codeExample": "#include <stdio.h>\n#include <ctype.h>\n\nint countWords(const char *s) {\n    int count = 0, inWord = 0;\n    while (*s) {\n        if (isspace(*s)) {\n            inWord = 0;\n        } else if (!inWord) {\n            inWord = 1;\n            count++;\n        }\n        s++;\n    }\n    return count;\n}\n\nint main() {\n    printf(\"Words: %d\\n\", countWords(\"  C  is   fun to learn  \")); // 5\n    return 0;\n}",
      "interviewTip": "Using a state machine (`inWord` flag) cleanly handles multiple leading, trailing, and consecutive spaces."
    }
  },
  {
    "id": 75,
    "pdfId": "Q74",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Linear Search",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Linear Search.",
    "answer": {
      "directAnswer": "Linear search sequentially checks each element of the array from index 0 to $N-1$ until the target key is found or the array ends, running in $O(N)$ time on unsorted arrays.",
      "algorithmSteps": [
        "1. Loop $i$ from 0 to $N - 1$:",
        "   - If `arr[i] == key`, return index $i$.",
        "2. If loop terminates without match, return -1 (not found)."
      ],
      "codeExample": "#include <stdio.h>\n\nint linearSearch(int arr[], int n, int key) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == key) return i; // Found at index i\n    }\n    return -1; // Not found\n}\n\nint main() {\n    int arr[] = {12, 45, 23, 78, 56};\n    int idx = linearSearch(arr, 5, 23);\n    printf(\"Key 23 found at index: %d\\n\", idx); // 2\n    return 0;\n}",
      "interviewTip": "Linear search requires no pre-sorting and has $O(1)$ best-case and $O(N)$ worst-case time complexity."
    }
  },
  {
    "id": 76,
    "pdfId": "Q75",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Binary Search",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Binary Search.",
    "answer": {
      "directAnswer": "Binary search finds the target in a sorted array by repeatedly dividing the search interval in half. Compares key with middle element, narrowing search space to left or right half in $O(\\log N)$ time.",
      "algorithmSteps": [
        "1. Initialize `low = 0`, `high = n - 1`.",
        "2. While `low <= high`:",
        "   - `mid = low + (high - low) / 2`",
        "   - If `arr[mid] == key`, return `mid`.",
        "   - If `arr[mid] < key`, `low = mid + 1`.",
        "   - If `arr[mid] > key`, `high = mid - 1`.",
        "3. Return -1 if not found."
      ],
      "codeExample": "#include <stdio.h>\n\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2; // Prevents overflow\n        if (arr[mid] == key) return mid;\n        else if (arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int sorted[] = {10, 20, 30, 40, 50, 60};\n    printf(\"Index of 40: %d\\n\", binarySearch(sorted, 6, 40)); // 3\n    return 0;\n}",
      "interviewTip": "Why use `low + (high - low) / 2` instead of `(low + high) / 2`? Because `low + high` can overflow 32-bit signed integers for arrays larger than 1 billion elements!"
    }
  },
  {
    "id": 77,
    "pdfId": "Q76",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Bubble Sort",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Bubble Sort.",
    "answer": {
      "directAnswer": "Bubble Sort repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element 'bubbles up' to its correct position at the end in each pass.",
      "algorithmSteps": [
        "1. For $i = 0$ to $N - 2$:",
        "   - Set `swapped = false`.",
        "   - For $j = 0$ to $N - i - 2$:",
        "     * If `arr[j] > arr[j + 1]`, swap them and set `swapped = true`.",
        "   - If `swapped == false`, break early (array is already sorted)."
      ],
      "codeExample": "#include <stdio.h>\n#include <stdbool.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = true;\n            }\n        }\n        if (!swapped) break; // Optimized O(N) best case\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22};\n    bubbleSort(arr, 5);\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
      "interviewTip": "Always mention the `swapped` boolean flag optimization: it reduces best-case time complexity from $O(N^2)$ to $O(N)$ for nearly sorted inputs."
    }
  },
  {
    "id": 78,
    "pdfId": "Q77",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Selection Sort",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Selection Sort.",
    "answer": {
      "directAnswer": "Selection Sort divides the array into sorted and unsorted subarrays. It repeatedly finds the minimum element from the unsorted part and swaps it with the first unsorted element, making at most $O(N)$ swaps.",
      "algorithmSteps": [
        "1. Loop $i$ from 0 to $N - 2$:",
        "   - Assume `min_idx = i`.",
        "   - Loop $j$ from $i + 1$ to $N - 1$:",
        "     * If `arr[j] < arr[min_idx]`, update `min_idx = j`.",
        "   - Swap `arr[i]` with `arr[min_idx]`."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {29, 10, 14, 37, 13};\n    selectionSort(arr, 5);\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
      "interviewTip": "Selection Sort performs the minimum number of swaps among elementary sorting algorithms ($O(N)$ swaps), making it useful when memory write operations are expensive (e.g. Flash/EEPROM memory)."
    }
  },
  {
    "id": 79,
    "pdfId": "Q78",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Insertion Sort",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to perform Insertion Sort.",
    "answer": {
      "directAnswer": "Insertion Sort builds the final sorted array one element at a time by picking the next element (`key`) and shifting larger elements of the sorted prefix one position to the right to insert the key into its correct position (like sorting playing cards).",
      "algorithmSteps": [
        "1. Loop $i$ from 1 to $N - 1$:",
        "   - Set `key = arr[i]` and `j = i - 1`.",
        "   - While `j >= 0` and `arr[j] > key`:",
        "     * `arr[j + 1] = arr[j]` (shift right)",
        "     * `j = j - 1`",
        "   - `arr[j + 1] = key` (insert into slot)"
      ],
      "codeExample": "#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    insertionSort(arr, 5);\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
      "interviewTip": "Insertion sort is adaptive and stable, with $O(N)$ best-case time complexity, making it standard for small arrays ($N \\le 32$) in hybrid algorithms like TimSort."
    }
  },
  {
    "id": 80,
    "pdfId": "Q79",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Second Largest Element",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Second Largest Element.",
    "answer": {
      "directAnswer": "Find the second largest element in a single traversal ($O(N)$ time) by tracking `first` (maximum seen so far) and `second`: when a new maximum is found, update `second` to the old `first`.",
      "algorithmSteps": [
        "1. Initialize `first = INT_MIN`, `second = INT_MIN`.",
        "2. For each element $x$ in array:",
        "   - If $x > first$: `second = first`, `first = x`.",
        "   - Else if $x > second$ and $x \\neq first$: `second = x`.",
        "3. Return `second`."
      ],
      "codeExample": "#include <stdio.h>\n#include <limits.h>\n\nint findSecondLargest(int arr[], int n) {\n    int first = INT_MIN, second = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    return (second == INT_MIN) ? -1 : second;\n}\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 35};\n    printf(\"Second Largest: %d\\n\", findSecondLargest(arr, 6)); // 34\n    return 0;\n}",
      "interviewTip": "Watch out for duplicate maximums! `arr[i] != first` prevents setting `second` to a duplicate of the largest value."
    }
  },
  {
    "id": 81,
    "pdfId": "Q80",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Duplicate Elements",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Duplicate Elements.",
    "answer": {
      "directAnswer": "Find duplicate elements by comparing each element with subsequent elements in nested loops ($O(N^2)$ brute force) or using frequency hashing / sorting in $O(N \\log N)$ time.",
      "algorithmSteps": [
        "1. Loop $i$ from 0 to $N - 1$:",
        "   - Loop $j$ from $i + 1$ to $N - 1$:",
        "     * If `arr[i] == arr[j]`, print `arr[i]` as duplicate and break inner loop."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid printDuplicates(int arr[], int n) {\n    printf(\"Duplicates: \");\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            if (arr[i] == arr[j]) {\n                printf(\"%d \", arr[i]);\n                break;\n            }\n        }\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 5, 1};\n    printDuplicates(arr, 7); // 1 2\n    return 0;\n}",
      "interviewTip": "If array elements are between $1$ and $N$, duplicates can be found in $O(N)$ time and $O(1)$ space by negating the value at index `abs(arr[i])`."
    }
  },
  {
    "id": 82,
    "pdfId": "Q81",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Pattern Printing (Triangle)",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Pattern Printing (Triangle).",
    "answer": {
      "directAnswer": "Print an equilateral centered triangle pattern using nested loops: outer loop controls row number $i$, the first inner loop prints leading spaces $(N - i)$, and the second inner loop prints $(2i - 1)$ stars.",
      "algorithmSteps": [
        "1. Loop $i$ from 1 to $N$ (rows):",
        "   - Loop $s$ from 1 to $N - i$: print `' '` (spaces).",
        "   - Loop $k$ from 1 to $2i - 1$: print `'*'` (stars).",
        "   - Print newline `\\n`."
      ],
      "codeExample": "#include <stdio.h>\n\nvoid printPyramid(int n) {\n    for (int i = 1; i <= n; i++) {\n        for (int s = 1; s <= n - i; s++) printf(\" \");\n        for (int k = 1; k <= (2 * i - 1); k++) printf(\"*\");\n        printf(\"\\n\");\n    }\n}\n\nint main() {\n    printPyramid(4);\n    return 0;\n}",
      "interviewTip": "Formula breakdown: Row $i$ requires $(N - i)$ spaces followed by $(2i - 1)$ stars."
    }
  },
  {
    "id": 83,
    "pdfId": "Q82",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Star Patterns",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Star Patterns.",
    "answer": {
      "directAnswer": "Print a right-angled star triangle using an outer loop for row index $i$ (from 1 to $N$) and an inner loop printing $i$ stars per row.",
      "algorithmSteps": [
        "1. For $i = 1$ to $N$:",
        "   - For $j = 1$ to $i$: print `'* '`.",
        "   - Print newline `\\n`."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int n = 4;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"* \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "interviewTip": "Always clearly separate the row loop (outer) from the column content loop (inner)."
    }
  },
  {
    "id": 84,
    "pdfId": "Q83",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Number Patterns",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Number Patterns.",
    "answer": {
      "directAnswer": "Print sequential number patterns (like Floyd's Triangle) by maintaining a running counter incremented each time a number is printed across the inner loop.",
      "algorithmSteps": [
        "1. Initialize `count = 1`.",
        "2. For $i = 1$ to $N$:",
        "   - For $j = 1$ to $i$:",
        "     * Print `count`.",
        "     * `count++`.",
        "   - Print newline."
      ],
      "codeExample": "#include <stdio.h>\n\n// Floyd's Triangle\nint main() {\n    int n = 4, count = 1;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"%2d \", count++);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "interviewTip": "Floyd's triangle of $N$ rows prints a total of $N(N + 1) / 2$ numbers."
    }
  },
  {
    "id": 85,
    "pdfId": "Q84",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Alphabet Patterns",
    "difficulty": "Medium",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Alphabet Patterns.",
    "answer": {
      "directAnswer": "Alphabet patterns are printed by mapping loop counters to ASCII character offsets starting from `'A'` ($65$) up to `'A' + j`.",
      "algorithmSteps": [
        "1. For $i = 0$ to $N - 1$:",
        "   - For $j = 0$ to $i$:",
        "     * Print character `'A' + j`.",
        "   - Print newline."
      ],
      "codeExample": "#include <stdio.h>\n\nint main() {\n    int n = 4;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            printf(\"%c \", 'A' + j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "interviewTip": "In C, arithmetic with `char` types works directly with their underlying ASCII codes (`'A' + 1 == 'B'`)."
    }
  },
  {
    "id": 86,
    "pdfId": "Q85",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Sum of Array Elements",
    "difficulty": "Basic",
    "type": "Pseudocode",
    "question": "Write the algorithm/pseudocode to find/print Sum of Array Elements.",
    "answer": {
      "directAnswer": "Traverse the array sequentially from index 0 to $N-1$ using a loop, adding each element `arr[i]` to an accumulator variable `sum` initialized to 0 in $O(N)$ time.",
      "algorithmSteps": [
        "1. Set `sum = 0`.",
        "2. For $i = 0$ to $N - 1$:",
        "   - `sum = sum + arr[i]`",
        "3. Return `sum`."
      ],
      "codeExample": "#include <stdio.h>\n\nint sumArray(int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int nums[] = {5, 10, 15, 20};\n    printf(\"Array Sum = %d\\n\", sumArray(nums, 4)); // 50\n    return 0;\n}",
      "interviewTip": "Always initialize `sum = 0` before the loop; omitting initialization leaves garbage memory in `sum`."
    }
  },
  {
    "id": 87,
    "pdfId": "Q86",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "While vs For Loop",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the difference between a while loop and a for loop? Explain with a scenario when you would prefer one over the other.",
    "answer": {
      "directAnswer": "A `for` loop bundles initialization, condition, and increment into a single header (best when the number of iterations is known beforehand), while a `while` loop checks only a condition (best when iterations depend on external events or input).",
      "explanation": [
        "**Scenario for `for` loop**: Iterating over fixed bounds like arrays (`for (int i = 0; i < 100; i++)`).",
        "**Scenario for `while` loop**: Reading input until EOF or sentinel: `while (scanf(\"%d\", &val) != EOF)` or traversing a linked list `while (node != NULL)`."
      ],
      "comparisonTable": {
        "headers": [
          "Aspect",
          "`for` Loop",
          "`while` Loop"
        ],
        "rows": [
          [
            "Structure",
            "All 3 loop control steps consolidated in header",
            "Only condition in header; init & update separated"
          ],
          [
            "Best Used",
            "Deterministic iterations (ranges, arrays)",
            "Condition-driven / indeterminate iterations"
          ],
          [
            "Variable Scope",
            "Loop counter scoped to loop in C99+",
            "Counter typically declared outside the loop"
          ]
        ]
      },
      "interviewTip": "Any `for` loop can be converted into a `while` loop and vice-versa; the choice is about semantic clarity."
    }
  },
  {
    "id": 88,
    "pdfId": "Q87",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Array vs Pointer Usage",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the difference between an array and a pointer, and when should each be used while designing a program?",
    "answer": {
      "directAnswer": "Use arrays when you have a fixed collection of elements whose size is known at compile-time and memory should be automatically managed on the stack. Use pointers when you need dynamic memory allocation, efficient parameter passing without copying, or building dynamic data structures like Linked Lists and Trees.",
      "comparisonTable": {
        "headers": [
          "Design Factor",
          "Choose Array",
          "Choose Pointer"
        ],
        "rows": [
          [
            "Memory Allocation",
            "Fixed static/stack allocation",
            "Dynamic heap allocation (`malloc`)"
          ],
          [
            "Size Flexibility",
            "Fixed compile-time size",
            "Dynamically resizable (`realloc`)"
          ],
          [
            "Overhead",
            "Zero pointer overhead",
            "4 or 8 bytes per pointer variable"
          ],
          [
            "Data Structures",
            "Lookup tables, fixed matrix buffers",
            "Linked lists, binary trees, graphs"
          ]
        ]
      },
      "interviewTip": "In embedded software, statically sized arrays are often preferred over heap pointers to eliminate dynamic heap fragmentation and memory leaks."
    }
  },
  {
    "id": 89,
    "pdfId": "Q88",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "SDLC Awareness",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is SDLC (Software Development Life Cycle)? Briefly explain its phases and why understanding it is useful for a programmer.",
    "answer": {
      "directAnswer": "SDLC is a structured engineering framework defining the complete lifecycle of software development from initial conception to retirement, ensuring high quality, predictable delivery, and defect reduction.",
      "explanation": [
        "**Core Phases of SDLC**:",
        "1. **Requirement Analysis**: Gathering functional and non-functional specifications from stakeholders.",
        "2. **System Design (Architecture)**: Defining architecture, database schemas, modules, and API contracts.",
        "3. **Implementation (Coding)**: Writing clean, modular, standards-compliant source code.",
        "4. **Testing & Verification**: Unit testing, integration testing, and bug fixing.",
        "5. **Deployment**: Releasing to production environments.",
        "6. **Maintenance**: Monitoring, patching bugs, and adding enhancements.",
        "**Why Useful for Programmers**: Gives context on why code standards, test cases, and documentation are critical beyond just writing code."
      ],
      "interviewTip": "Common SDLC models include Waterfall, Agile/Scrum, and DevOps CI/CD."
    }
  },
  {
    "id": 90,
    "pdfId": "Q89",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Call by Value vs Call by Reference",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the difference between call by value and call by reference? Explain a situation where call by reference is necessary.",
    "answer": {
      "directAnswer": "In call by value, parameters receive local copies of argument values, leaving caller variables protected from change. In call by reference (via pointer arguments), memory addresses are passed, allowing functions to directly alter caller variables or return multiple results.",
      "explanation": [
        "**When Call by Reference is Necessary**:",
        "1. **Mutating Caller State**: Functions like `swap(&a, &b)` or `scanf(\"%d\", &x)` that must modify the caller's variables.",
        "2. **Returning Multiple Values**: A function can return only one value via `return`, but can return unlimited values through pointer arguments.",
        "3. **Passing Large Structures**: Passing `struct HeavyData *ptr` copies only 8 bytes rather than copying thousands of bytes onto the call stack."
      ],
      "codeExample": "#include <stdio.h>\n\n// Call by reference is necessary to modify caller variables\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 100, y = 200;\n    swap(&x, &y);\n    printf(\"Swapped: x=%d, y=%d\\n\", x, y); // 200, 100\n    return 0;\n}",
      "interviewTip": "Remember that `scanf` requires `&var` precisely because it relies on call-by-reference to write parsed inputs into your variable."
    }
  },
  {
    "id": 91,
    "pdfId": "Q90",
    "sectionId": 2,
    "sectionName": "Section 2: Programming Logic & Pseudocode",
    "topic": "Programming Logic",
    "subtopic": "Compile-Time vs Run-Time Errors",
    "difficulty": "Medium",
    "type": "Theory",
    "question": "What is the difference between a compile-time error and a run-time error? Give one example of each.",
    "answer": {
      "directAnswer": "A compile-time error is detected by the compiler before program execution begins (preventing executable generation), while a run-time error occurs during actual program execution when an illegal operation is performed.",
      "comparisonTable": {
        "headers": [
          "Aspect",
          "Compile-Time Error",
          "Run-Time Error"
        ],
        "rows": [
          [
            "Detection Stage",
            "During compilation (Syntax / Type check)",
            "During execution while running"
          ],
          [
            "Executable Created?",
            "No executable binary is produced",
            "Executable exists but terminates abnormally"
          ],
          [
            "Causes",
            "Syntax errors, missing semicolons, undeclared variables",
            "Division by zero, NULL pointer dereference, buffer overflow"
          ],
          [
            "Fixability",
            "Flagged with precise file and line numbers by compiler",
            "Requires debuggers (GDB), logging, and boundary checks"
          ]
        ]
      },
      "codeExample": "#include <stdio.h>\n\nint main() {\n    // Compile-time error example:\n    // int a = 5   <-- Missing semicolon: Compiler catches this immediately!\n\n    // Run-time error example:\n    int x = 10, y = 0;\n    // int z = x / y; // Division by zero: Compiles fine, crashes at runtime!\n    printf(\"Safety checks prevent runtime crashes.\\n\");\n    return 0;\n}",
      "interviewTip": "A third category is **Logical Error** (semantic bug): the program compiles and runs without crashing, but yields mathematically incorrect results."
    }
  },
  {
    "id": 92,
    "pdfId": "Q91",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "Nested Loop Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j, k = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++) {\n            k += i * j;\n        }\n    }\n    printf(\"%d\", k);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i, j, k = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++) {\n            k += i * j;\n        }\n    }\n    printf(\"%d\", k);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The program executes a triangular nested loop accumulating the product $i \\times j$ into variable $k$, producing an exact output of **25**.",
      "expectedOutput": "25",
      "dryRunTable": {
        "headers": [
          "Outer loop (i)",
          "Inner loop (j)",
          "Calculation (k += i * j)",
          "Resulting k"
        ],
        "rows": [
          [
            "i = 1",
            "j = 1",
            "k = 0 + (1 * 1)",
            "1"
          ],
          [
            "i = 2",
            "j = 1",
            "k = 1 + (2 * 1)",
            "3"
          ],
          [
            "i = 2",
            "j = 2",
            "k = 3 + (2 * 2)",
            "7"
          ],
          [
            "i = 3",
            "j = 1",
            "k = 7 + (3 * 1)",
            "10"
          ],
          [
            "i = 3",
            "j = 2",
            "k = 10 + (3 * 2)",
            "16"
          ],
          [
            "i = 3",
            "j = 3",
            "k = 16 + (3 * 3)",
            "25"
          ]
        ]
      },
      "explanation": [
        "When $i=1$, inner loop runs for $j=1$: $k = 0 + 1 = 1$.",
        "When $i=2$, inner loop runs for $j=1, 2$: $k = 1 + 2 + 4 = 7$.",
        "When $i=3$, inner loop runs for $j=1, 2, 3$: $k = 7 + 3 + 6 + 9 = 25$.",
        "Outer loop terminates at $i=4$, and `printf(\"%d\", k)` prints 25."
      ],
      "interviewTip": "In triangular loops where $j \\le i$, total inner loop iterations equals $N(N + 1) / 2 = 3 \\times 4 / 2 = 6$ steps."
    }
  },
  {
    "id": 93,
    "pdfId": "Q92",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "Loop with Multiple Conditions",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    while (i < 10) {\n        if (i % 2 == 0 && i % 3 == 0) {\n            sum += i;\n        }\n        i++;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    while (i < 10) {\n        if (i % 2 == 0 && i % 3 == 0) {\n            sum += i;\n        }\n        i++;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The program sums all numbers in the range $[0, 9]$ that are divisible by both 2 and 3 (i.e. multiples of 6). The matching numbers are 0 and 6, giving an output of **6**.",
      "expectedOutput": "6",
      "dryRunTable": {
        "headers": [
          "i",
          "i % 2 == 0",
          "i % 3 == 0",
          "Condition Met?",
          "sum update"
        ],
        "rows": [
          [
            "0",
            "True (0)",
            "True (0)",
            "YES",
            "sum = 0 + 0 = 0"
          ],
          [
            "1-5",
            "Various",
            "Various",
            "NO",
            "sum = 0"
          ],
          [
            "6",
            "True (0)",
            "True (0)",
            "YES",
            "sum = 0 + 6 = 6"
          ],
          [
            "7-9",
            "Various",
            "Various",
            "NO",
            "sum = 6"
          ]
        ]
      },
      "explanation": [
        "A number is divisible by both 2 and 3 if and only if it is divisible by $\\text{LCM}(2, 3) = 6$.",
        "Within $0 \\le i < 10$, only $i = 0$ and $i = 6$ satisfy this condition.",
        "Sum = $0 + 6 = 6$."
      ],
      "interviewTip": "Remember that $0 \\pmod k == 0$ for any non-zero integer $k$."
    }
  },
  {
    "id": 94,
    "pdfId": "Q93",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "For Loop with Comma Operator",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 0, j = 5; i < j; i++, j--) {\n        printf(\"%d-%d \", i, j);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 0, j = 5; i < j; i++, j--) {\n        printf(\"%d-%d \", i, j);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "The comma operator in the initialization and update expressions allows manipulating two counters simultaneously moving toward each other, printing **0-5 1-4 2-3 **.",
      "expectedOutput": "0-5 1-4 2-3 ",
      "dryRunTable": {
        "headers": [
          "Iteration",
          "i",
          "j",
          "Condition (i < j)",
          "Printed Output",
          "Next (i++, j--)"
        ],
        "rows": [
          [
            "1",
            "0",
            "5",
            "0 < 5 (True)",
            "0-5 ",
            "i=1, j=4"
          ],
          [
            "2",
            "1",
            "4",
            "1 < 4 (True)",
            "1-4 ",
            "i=2, j=3"
          ],
          [
            "3",
            "2",
            "3",
            "2 < 3 (True)",
            "2-3 ",
            "i=3, j=2"
          ],
          [
            "4",
            "3",
            "2",
            "3 < 2 (False)",
            "Loop Terminates",
            "-"
          ]
        ]
      },
      "explanation": [
        "In iteration 1: $i=0, j=5 \\implies$ prints `0-5 `.",
        "In iteration 2: $i=1, j=4 \\implies$ prints `1-4 `.",
        "In iteration 3: $i=2, j=3 \\implies$ prints `2-3 `.",
        "At the start of iteration 4: $i=3, j=2$, condition $i < j$ is false, terminating the loop."
      ],
      "interviewTip": "The comma operator has the lowest precedence in C and evaluates expressions from left to right, returning the value of the rightmost expression."
    }
  },
  {
    "id": 95,
    "pdfId": "Q94",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Nested Function Calls",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint square(int x) { return x * x; }\nint cube(int x) { return x * square(x); }\nint main() {\n    printf(\"%d\", cube(square(2)));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint square(int x) { return x * x; }\nint cube(int x) { return x * square(x); }\nint main() {\n    printf(\"%d\", cube(square(2)));\n    return 0;\n}",
    "answer": {
      "directAnswer": "The innermost function `square(2)` is evaluated first returning 4, which is passed into `cube(4)` yielding $4 \\times 4^2 = 64$. Output is **64**.",
      "expectedOutput": "64",
      "explanation": [
        "Step 1: Evaluate `square(2)`: $2 \\times 2 = 4$.",
        "Step 2: Call `cube(4)`: returns $4 \\times \\text{square}(4)$.",
        "Step 3: Inside `cube(4)`, `square(4)` returns $4 \\times 4 = 16$.",
        "Step 4: `cube(4)` returns $4 \\times 16 = 64$.",
        "Step 5: `printf` prints `64`."
      ],
      "interviewTip": "Function arguments in C are evaluated before the function call, and innermost nested function calls resolve first."
    }
  },
  {
    "id": 96,
    "pdfId": "Q95",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Function with Static Local Variable",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint counter() {\n    static int c = 10;\n    c -= 2;\n    return c;\n}\nint main() {\n    printf(\"%d %d %d\", counter(), counter(), counter());\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint counter() {\n    static int c = 10;\n    c -= 2;\n    return c;\n}\nint main() {\n    printf(\"%d %d %d\", counter(), counter(), counter());\n    return 0;\n}",
    "answer": {
      "directAnswer": "In standard C conventions with right-to-left argument evaluation (standard GCC/x86 calling convention), `counter()` evaluates from right to left as 8, then 6, then 4, printing **4 6 8**.",
      "expectedOutput": "4 6 8",
      "explanation": [
        "The static variable `c` retains its value between calls.",
        "Under C calling convention (`cdecl`), function arguments are pushed onto the stack from right to left:",
        "1. Rightmost `counter()`: $c = 10 - 2 = 8$.",
        "2. Middle `counter()`: $c = 8 - 2 = 6$.",
        "3. Leftmost `counter()`: $c = 6 - 2 = 4$.",
        "Printed left to right according to format string: `4 6 8`.",
        "*(Note: In the C standard, order of evaluation of function arguments is unspecified; however, 4 6 8 is the expected answer in GCC/placement exams).*"
      ],
      "interviewTip": "This is a classic interview question highlighting that function argument evaluation order is unspecified by the ISO C standard, but typically right-to-left in GCC/Clang on x86."
    }
  },
  {
    "id": 97,
    "pdfId": "Q96",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Function Returning Pointer",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint *getPtr(int *arr) {\n    return arr + 2;\n}\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = getPtr(arr);\n    printf(\"%d\", *p + *(p + 1));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint *getPtr(int *arr) {\n    return arr + 2;\n}\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = getPtr(arr);\n    printf(\"%d\", *p + *(p + 1));\n    return 0;\n}",
    "answer": {
      "directAnswer": "`getPtr(arr)` returns a pointer to `arr[2]` (value 30). Then `*p` is 30 and `*(p + 1)` is 40, so the expression evaluates to $30 + 40 =$ **70**.",
      "expectedOutput": "70",
      "explanation": [
        "`arr` base address points to `arr[0] = 10`.",
        "`getPtr(arr)` returns `arr + 2`, which points to index 2: `&arr[2]`.",
        "`p` points to element `30`.",
        "`*p` dereferences `arr[2]` (30).",
        "`*(p + 1)` dereferences `arr[3]` (40).",
        "Result: $30 + 40 = 70$."
      ],
      "interviewTip": "Returning a pointer to caller-allocated memory (`arr` in `main`) is completely safe; never return a pointer to a local `auto` variable allocated on the helper function's stack."
    }
  },
  {
    "id": 98,
    "pdfId": "Q97",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Mutual Style Recursion",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1) + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1) + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Evaluating the recurrence relation bottom-up from base cases yields $fun(0)=1, fun(1)=1, fun(2)=3, fun(3)=10, fun(4)=43$. Exact output is **43**.",
      "expectedOutput": "43",
      "dryRunTable": {
        "headers": [
          "n",
          "Recurrence Formula",
          "Calculation",
          "Return Value"
        ],
        "rows": [
          [
            "0",
            "Base Case",
            "1",
            "1"
          ],
          [
            "1",
            "Base Case",
            "1",
            "1"
          ],
          [
            "2",
            "2 * fun(1) + fun(0)",
            "2 * 1 + 1",
            "3"
          ],
          [
            "3",
            "3 * fun(2) + fun(1)",
            "3 * 3 + 1",
            "10"
          ],
          [
            "4",
            "4 * fun(3) + fun(2)",
            "4 * 10 + 3",
            "43"
          ]
        ]
      },
      "explanation": [
        "`fun(0) = 1` and `fun(1) = 1` from the base condition `if (n <= 1) return 1;`.",
        "`fun(2) = 2 * fun(1) + fun(0) = 2(1) + 1 = 3`.",
        "`fun(3) = 3 * fun(2) + fun(1) = 3(3) + 1 = 10`.",
        "`fun(4) = 4 * fun(3) + fun(2) = 4(10) + 3 = 43`."
      ],
      "interviewTip": "Always solve tree-recursive problems bottom-up to avoid getting lost in recursive call stacks."
    }
  },
  {
    "id": 99,
    "pdfId": "Q98",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursion with Static Variable",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid fun(int n) {\n    static int sum = 0;\n    if (n == 0) {\n        printf(\"%d\", sum);\n        return;\n    }\n    sum += n;\n    fun(n - 1);\n}\nint main() {\n    fun(4);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid fun(int n) {\n    static int sum = 0;\n    if (n == 0) {\n        printf(\"%d\", sum);\n        return;\n    }\n    sum += n;\n    fun(n - 1);\n}\nint main() {\n    fun(4);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The static variable `sum` accumulates values across all recursive frames: $4 + 3 + 2 + 1 = 10$. When $n=0$, `printf` outputs **10**.",
      "expectedOutput": "10",
      "dryRunTable": {
        "headers": [
          "Call",
          "n",
          "Operation (sum += n)",
          "Static sum value"
        ],
        "rows": [
          [
            "fun(4)",
            "4",
            "sum += 4",
            "4"
          ],
          [
            "fun(3)",
            "3",
            "sum += 3",
            "7"
          ],
          [
            "fun(2)",
            "2",
            "sum += 2",
            "9"
          ],
          [
            "fun(1)",
            "1",
            "sum += 1",
            "10"
          ],
          [
            "fun(0)",
            "0",
            "Prints sum and returns",
            "10"
          ]
        ]
      },
      "explanation": [
        "Because `sum` is `static`, its storage is allocated once in the data segment and shared across all recursive invocations.",
        "Values 4, 3, 2, and 1 are sequentially added.",
        "When base case $n=0$ is reached, `printf(\"%d\", sum)` prints 10."
      ],
      "interviewTip": "Static variables inside recursive functions behave like global accumulators, but have localized scope inside that function."
    }
  },
  {
    "id": 100,
    "pdfId": "Q99",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursion Returning Multiple Paths",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int a, int b) {\n    if (a == 0) return b;\n    return fun(a - 1, a + b);\n}\nint main() {\n    printf(\"%d\", fun(3, 2));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fun(int a, int b) {\n    if (a == 0) return b;\n    return fun(a - 1, a + b);\n}\nint main() {\n    printf(\"%d\", fun(3, 2));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Each recursive step decrements `a` by 1 and adds the current `a` to `b`. Calling `fun(3, 2)` terminates at `fun(0, 8)`, returning **8**.",
      "expectedOutput": "8",
      "dryRunTable": {
        "headers": [
          "Step",
          "Call",
          "Parameters (a, b)",
          "Next Call fun(a-1, a+b)"
        ],
        "rows": [
          [
            "1",
            "fun(3, 2)",
            "a = 3, b = 2",
            "fun(2, 5)"
          ],
          [
            "2",
            "fun(2, 5)",
            "a = 2, b = 5",
            "fun(1, 7)"
          ],
          [
            "3",
            "fun(1, 7)",
            "a = 1, b = 7",
            "fun(0, 8)"
          ],
          [
            "4",
            "fun(0, 8)",
            "a = 0, b = 8",
            "Base case returns b = 8"
          ]
        ]
      },
      "explanation": [
        "Call 1: `fun(3, 2)` -> evaluates `fun(3 - 1, 3 + 2)` = `fun(2, 5)`.",
        "Call 2: `fun(2, 5)` -> evaluates `fun(2 - 1, 2 + 5)` = `fun(1, 7)`.",
        "Call 3: `fun(1, 7)` -> evaluates `fun(1 - 1, 1 + 7)` = `fun(0, 8)`.",
        "Call 4: `fun(0, 8)` hits base case `if (a == 0) return b`, returning 8."
      ],
      "interviewTip": "This is tail recursion: the recursive call is the final expression, so no computation occurs on the unwinding phase."
    }
  },
  {
    "id": 101,
    "pdfId": "Q100",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Array with Pointer Arithmetic",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int *p = arr;\n    printf(\"%d\", *(p + 1) + *(arr + 3) - *(p + 4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int *p = arr;\n    printf(\"%d\", *(p + 1) + *(arr + 3) - *(p + 4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Translating pointer dereferences into array elements: `arr[1] + arr[3] - arr[4] = 4 + 8 - 10 =` **2**.",
      "expectedOutput": "2",
      "explanation": [
        "`p` points to `arr[0]`.",
        "`*(p + 1)` is `arr[1] = 4`.",
        "`*(arr + 3)` is `arr[3] = 8`.",
        "`*(p + 4)` is `arr[4] = 10`.",
        "Expression: $4 + 8 - 10 = 2$."
      ],
      "interviewTip": "`*(ptr + i)` and `ptr[i]` are 100% interchangeable in C."
    }
  },
  {
    "id": 102,
    "pdfId": "Q101",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "2D Array Traversal",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0, i, j;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++)\n            if (i == j || i + j == 2) sum += arr[i][j];\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0, i, j;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++)\n            if (i == j || i + j == 2) sum += arr[i][j];\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The condition `i == j || i + j == 2` selects both main and anti-diagonal elements of the 3x3 matrix (forming an 'X'), summing $1 + 3 + 5 + 7 + 9 =$ **25**.",
      "expectedOutput": "25",
      "dryRunTable": {
        "headers": [
          "(i, j)",
          "arr[i][j]",
          "i == j",
          "i + j == 2",
          "Included?",
          "Running sum"
        ],
        "rows": [
          [
            "(0, 0)",
            "1",
            "True",
            "False",
            "Yes",
            "1"
          ],
          [
            "(0, 1)",
            "2",
            "False",
            "False",
            "No",
            "1"
          ],
          [
            "(0, 2)",
            "3",
            "False",
            "True",
            "Yes",
            "4"
          ],
          [
            "(1, 0)",
            "4",
            "False",
            "False",
            "No",
            "4"
          ],
          [
            "(1, 1)",
            "5",
            "True",
            "True",
            "Yes (center)",
            "9"
          ],
          [
            "(1, 2)",
            "6",
            "False",
            "False",
            "No",
            "9"
          ],
          [
            "(2, 0)",
            "7",
            "False",
            "True",
            "Yes",
            "16"
          ],
          [
            "(2, 1)",
            "8",
            "False",
            "False",
            "No",
            "16"
          ],
          [
            "(2, 2)",
            "9",
            "True",
            "False",
            "Yes",
            "25"
          ]
        ]
      },
      "interviewTip": "Notice that for center element `arr[1][1] = 5`, both conditions are true, but because of the logical OR (`||`), it is added only once."
    }
  },
  {
    "id": 103,
    "pdfId": "Q102",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Array Modification via Function",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid modify(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++)\n        arr[i] = arr[i] * 2 + 1;\n}\nint main() {\n    int arr[4] = {1, 2, 3, 4}, i;\n    modify(arr, 4);\n    for (i = 0; i < 4; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid modify(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++)\n        arr[i] = arr[i] * 2 + 1;\n}\nint main() {\n    int arr[4] = {1, 2, 3, 4}, i;\n    modify(arr, 4);\n    for (i = 0; i < 4; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Because array names decay to pointers, `modify()` directly updates the caller's array elements by $2x + 1$, printing **3 5 7 9 **.",
      "expectedOutput": "3 5 7 9 ",
      "explanation": [
        "In C, arrays are passed by reference via pointers.",
        "`arr[0]`: $1 \\times 2 + 1 = 3$",
        "`arr[1]`: $2 \\times 2 + 1 = 5$",
        "`arr[2]`: $3 \\times 2 + 1 = 7$",
        "`arr[3]`: $4 \\times 2 + 1 = 9$",
        "Printed with trailing spaces: `3 5 7 9 `."
      ],
      "interviewTip": "Modifications made to array parameters inside functions are permanently visible to the caller."
    }
  },
  {
    "id": 104,
    "pdfId": "Q103",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "String with Pointer Manipulation",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"PLACEMENT\";\n    char *p = str;\n    while (*p) {\n        if ((p - str) % 2 == 0) printf(\"%c\", *p);\n        p++;\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    char str[] = \"PLACEMENT\";\n    char *p = str;\n    while (*p) {\n        if ((p - str) % 2 == 0) printf(\"%c\", *p);\n        p++;\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "`p - str` yields the 0-based character index. The condition `(p - str) % 2 == 0` prints characters at even indices (0, 2, 4, 6, 8), outputting **PAEET**.",
      "expectedOutput": "PAEET",
      "dryRunTable": {
        "headers": [
          "Index (p - str)",
          "Character *p",
          "Index % 2 == 0",
          "Printed?"
        ],
        "rows": [
          [
            "0",
            "'P'",
            "True",
            "'P'"
          ],
          [
            "1",
            "'L'",
            "False",
            "-"
          ],
          [
            "2",
            "'A'",
            "True",
            "'A'"
          ],
          [
            "3",
            "'C'",
            "False",
            "-"
          ],
          [
            "4",
            "'E'",
            "True",
            "'E'"
          ],
          [
            "5",
            "'M'",
            "False",
            "-"
          ],
          [
            "6",
            "'E'",
            "True",
            "'E'"
          ],
          [
            "7",
            "'N'",
            "False",
            "-"
          ],
          [
            "8",
            "'T'",
            "True",
            "'T'"
          ]
        ]
      },
      "interviewTip": "Pointer subtraction `p - str` gives the exact integer element count (index offset) between two pointers of the same type."
    }
  },
  {
    "id": 105,
    "pdfId": "Q104",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "String Length via Recursion Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint myLen(char *s) {\n    if (*s == '\\0') return 0;\n    return 1 + myLen(s + 1);\n}\nint main() {\n    printf(\"%d\", myLen(\"SONA\"));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint myLen(char *s) {\n    if (*s == '\\0') return 0;\n    return 1 + myLen(s + 1);\n}\nint main() {\n    printf(\"%d\", myLen(\"SONA\"));\n    return 0;\n}",
    "answer": {
      "directAnswer": "The recursive function `myLen` advances through the string until hitting `'\\0'`, counting 4 characters in \"SONA\" to output **4**.",
      "expectedOutput": "4",
      "explanation": [
        "`myLen(\"SONA\") = 1 + myLen(\"ONA\")`",
        "`myLen(\"ONA\")  = 1 + myLen(\"NA\")`",
        "`myLen(\"NA\")   = 1 + myLen(\"A\")`",
        "`myLen(\"A\")    = 1 + myLen(\"\")`",
        "`myLen(\"\")     = 0` (base case: `*s == '\\0'`)",
        "Unwinds: $1 + 1 + 1 + 1 + 0 = 4$."
      ],
      "interviewTip": "This is the classic recursive implementation of standard library `strlen()`."
    }
  },
  {
    "id": 106,
    "pdfId": "Q105",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "Nested String Comparison",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[] = \"abc\", b[] = \"abd\";\n    printf(\"%d\", strcmp(a, b));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[] = \"abc\", b[] = \"abd\";\n    printf(\"%d\", strcmp(a, b));\n    return 0;\n}",
    "answer": {
      "directAnswer": "`strcmp` compares strings lexicographically by subtracting ASCII values of the first differing character: `'c' - 'd' = 99 - 100 =` **-1**.",
      "expectedOutput": "-1",
      "explanation": [
        "`strcmp` compares characters from left to right:",
        "Index 0: `'a' == 'a'` -> continues.",
        "Index 1: `'b' == 'b'` -> continues.",
        "Index 2: `'c'` vs `'d'` -> difference is `'c' - 'd' = 99 - 100 = -1`.",
        "Returns negative integer (specifically -1 in standard libc), printed as `-1`."
      ],
      "interviewTip": "`strcmp(s1, s2)` returns: 0 if strings are equal, `< 0` if `s1 < s2`, and `> 0` if `s1 > s2`."
    }
  },
  {
    "id": 107,
    "pdfId": "Q106",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Pointer to Pointer Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    int *p = &a;\n    int **q = &p;\n    **q = **q + 10;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    int *p = &a;\n    int **q = &p;\n    **q = **q + 10;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Both `*p` and `**q` refer to the variable `a`. First `a` becomes $5 + 10 = 15$, then `a` becomes $15 + 5 = 20$. The output is **20**.",
      "expectedOutput": "20",
      "explanation": [
        "`a` starts at 5.",
        "`p` points to `a`, and `q` points to `p`.",
        "`**q = **q + 10` dereferences twice, modifying `a`: $a = 5 + 10 = 15$.",
        "`*p = *p + 5` dereferences once, modifying `a`: $a = 15 + 5 = 20$.",
        "`printf(\"%d\", a)` prints 20."
      ],
      "interviewTip": "Dereferencing a pointer-to-pointer `**q` directly accesses the target data location that `*q` points to."
    }
  },
  {
    "id": 108,
    "pdfId": "Q107",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Array of Pointers with Loop",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 1, b = 2, c = 3;\n    int *arr[3] = {&a, &b, &c};\n    int i, sum = 0;\n    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 1, b = 2, c = 3;\n    int *arr[3] = {&a, &b, &c};\n    int i, sum = 0;\n    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The array of pointers holds the addresses of `a`, `b`, and `c`. The loop calculates $(1 \\times 1) + (2 \\times 2) + (3 \\times 3) = 1 + 4 + 9 =$ **14**.",
      "expectedOutput": "14",
      "explanation": [
        "$i = 0$: `*arr[0] * 1 = *(&a) * 1 = 1 * 1 = 1`. `sum = 1`.",
        "$i = 1$: `*arr[1] * 2 = *(&b) * 2 = 2 * 2 = 4`. `sum = 1 + 4 = 5`.",
        "$i = 2$: `*arr[2] * 3 = *(&c) * 3 = 3 * 3 = 9`. `sum = 5 + 9 = 14`.",
        "Final output: 14."
      ],
      "interviewTip": "`int *arr[3]` is an array of 3 pointers to int. Don't confuse it with `int (*arr)[3]`, which is a pointer to an array of 3 ints!"
    }
  },
  {
    "id": 109,
    "pdfId": "Q108",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Pointer Arithmetic with 2D Array",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    int *p = &arr[0][0];\n    printf(\"%d\", *(p + 2) + *(p + 4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    int *p = &arr[0][0];\n    printf(\"%d\", *(p + 2) + *(p + 4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "In row-major contiguous memory, `*(p + 2)` is `arr[0][2]` (value 3) and `*(p + 4)` is `arr[1][1]` (value 5). The sum $3 + 5 =$ **8**.",
      "expectedOutput": "8",
      "explanation": [
        "In linear row-major memory order, the array elements are: `{1, 2, 3, 4, 5, 6}`.",
        "`p` points to index 0 (value 1).",
        "`*(p + 2)` points to index 2 (value 3).",
        "`*(p + 4)` points to index 4 (value 5).",
        "Expression: $3 + 5 = 8$."
      ],
      "interviewTip": "2D arrays in C are stored in flat contiguous memory, so `p[row * COLS + col]` is identical to `arr[row][col]`."
    }
  },
  {
    "id": 110,
    "pdfId": "Q109",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Structure Passed to Function",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point p) {\n    p.x += 10;\n    p.y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point p) {\n    p.x += 10;\n    p.y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`pt` is passed by value (a complete copy is made onto `move()`'s stack frame). Modifications inside `move()` do not alter the caller's structure, printing **1 2**.",
      "expectedOutput": "1 2",
      "explanation": [
        "`move(struct Point p)` receives a copy of `pt`.",
        "The modifications `p.x += 10` and `p.y += 10` only affect the local copy inside `move()`.",
        "In `main()`, `pt.x` remains 1 and `pt.y` remains 2.",
        "Output is `1 2`."
      ],
      "interviewTip": "Unlike arrays (which decay to pointers), structures in C are passed by value by default!"
    }
  },
  {
    "id": 111,
    "pdfId": "Q110",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Structure Passed by Pointer",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point *p) {\n    p->x += 10;\n    p->y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(&pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point *p) {\n    p->x += 10;\n    p->y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(&pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Here `&pt` is passed by address (pointer). The arrow operator `p->x` directly mutates `main`'s memory, yielding **11 12**.",
      "expectedOutput": "11 12",
      "explanation": [
        "`move(&pt)` passes the memory address of `pt`.",
        "`p->x += 10` changes `pt.x` from 1 to 11.",
        "`p->y += 10` changes `pt.y` from 2 to 12.",
        "Inside `main`, `printf(\"%d %d\", pt.x, pt.y)` outputs `11 12`."
      ],
      "interviewTip": "Passing structures by pointer (`struct Type *`) is preferred in production code because it avoids the overhead of copying the entire structure."
    }
  },
  {
    "id": 112,
    "pdfId": "Q111",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Array of Structures Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Item { int price; };\nint main() {\n    struct Item items[3] = {{100}, {200}, {300}};\n    int i, total = 0;\n    for (i = 0; i < 3; i++)\n        total += items[i].price * (i + 1);\n    printf(\"%d\", total);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Item { int price; };\nint main() {\n    struct Item items[3] = {{100}, {200}, {300}};\n    int i, total = 0;\n    for (i = 0; i < 3; i++)\n        total += items[i].price * (i + 1);\n    printf(\"%d\", total);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The program computes a weighted sum of prices: $(100 \\times 1) + (200 \\times 2) + (300 \\times 3) = 100 + 400 + 900 =$ **1400**.",
      "expectedOutput": "1400",
      "dryRunTable": {
        "headers": [
          "i",
          "items[i].price",
          "(i + 1)",
          "Term Added",
          "Running total"
        ],
        "rows": [
          [
            "0",
            "100",
            "1",
            "100 * 1 = 100",
            "100"
          ],
          [
            "1",
            "200",
            "2",
            "200 * 2 = 400",
            "500"
          ],
          [
            "2",
            "300",
            "3",
            "300 * 3 = 900",
            "1400"
          ]
        ]
      },
      "explanation": [
        "Iteration 0: `total = 0 + 100 * 1 = 100`.",
        "Iteration 1: `total = 100 + 200 * 2 = 500`.",
        "Iteration 2: `total = 500 + 300 * 3 = 1400`.",
        "Loop ends, outputs 1400."
      ],
      "interviewTip": "Array of structures `items[i].member` uses dot operator because `items[i]` is a concrete structure element, not a pointer."
    }
  },
  {
    "id": 113,
    "pdfId": "Q112",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "malloc with Loop Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    int i;\n    for (i = 0; i < 5; i++) p[i] = i * i;\n    printf(\"%d\", p[2] + p[4]);\n    free(p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    int i;\n    for (i = 0; i < 5; i++) p[i] = i * i;\n    printf(\"%d\", p[2] + p[4]);\n    free(p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The heap array stores squares of indices ${0, 1, 4, 9, 16}$. Then $p[2] + p[4] = 4 + 16 =$ **20**.",
      "expectedOutput": "20",
      "explanation": [
        "`p[0] = 0*0 = 0`",
        "`p[1] = 1*1 = 1`",
        "`p[2] = 2*2 = 4`",
        "`p[3] = 3*3 = 9`",
        "`p[4] = 4*4 = 16`",
        "Expression: $p[2] + p[4] = 4 + 16 = 20$."
      ],
      "interviewTip": "Always ensure `free(p)` is called to release heap memory."
    }
  },
  {
    "id": 114,
    "pdfId": "Q113",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "calloc Default Values",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)calloc(4, sizeof(int));\n    p[1] = 5;\n    printf(\"%d %d %d\", p[0], p[1], p[2]);\n    free(p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)calloc(4, sizeof(int));\n    p[1] = 5;\n    printf(\"%d %d %d\", p[0], p[1], p[2]);\n    free(p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`calloc` initializes all allocated bytes to zero. After setting `p[1] = 5`, indices `p[0]` and `p[2]` remain 0, outputting **0 5 0**.",
      "expectedOutput": "0 5 0",
      "explanation": [
        "`calloc(4, sizeof(int))` creates an array of 4 integers initialized to `{0, 0, 0, 0}`.",
        "`p[1] = 5` modifies index 1: array is now `{0, 5, 0, 0}`.",
        "`printf` prints `p[0]`, `p[1]`, `p[2]` as `0 5 0`."
      ],
      "interviewTip": "If this were `malloc`, `p[0]` and `p[2]` would contain unpredictable garbage values."
    }
  },
  {
    "id": 115,
    "pdfId": "Q114",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Combined Bitwise Expression",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 12, b = 10;\n    printf(\"%d\", (a & b) | (a ^ b));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 12, b = 10;\n    printf(\"%d\", (a & b) | (a ^ b));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Bitwise calculation: $a = 12$ (`1100_2`), $b = 10$ (`1010_2`). $(a \\& b) = 8$, $(a \\oplus b) = 6$, and $8 \\mid 6 = 14$. The output is **14**.",
      "expectedOutput": "14",
      "explanation": [
        "$a = 12 = 1100_2$, $b = 10 = 1010_2$.",
        "Bitwise AND: $1100_2 \\& 1010_2 = 1000_2 = 8$.",
        "Bitwise XOR: $1100_2 \\oplus 1010_2 = 0110_2 = 6$.",
        "Bitwise OR: $1000_2 \\mid 0110_2 = 1110_2 = 14$.",
        "*(Mathematical identity: $(A \\& B) \\mid (A \\oplus B) \\equiv (A \\mid B) = 12 \\mid 10 = 14$)*."
      ],
      "interviewTip": "Boolean algebra fact: $(A \\cap B) \\cup (A \\oplus B) = A \\cup B$."
    }
  },
  {
    "id": 116,
    "pdfId": "Q115",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Shift Operators Combined",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    a = (a << 2) | (a >> 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 5;\n    a = (a << 2) | (a >> 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "$a = 5$ (`0000 0101_2`). Left shift $5 \\ll 2 = 20$ (`0001 0100_2`), right shift $5 \\gg 1 = 2$ (`0000 0010_2`). Bitwise OR gives $20 \\mid 2 = 22$. Output is **22**.",
      "expectedOutput": "22",
      "explanation": [
        "`a << 2`: $5 \\times 2^2 = 20$ (`10100` in binary).",
        "`a >> 1`: $5 / 2 = 2$ (`00010` in binary).",
        "Bitwise OR: $10100_2 \\mid 00010_2 = 10110_2 = 16 + 4 + 2 = 22$."
      ],
      "interviewTip": "Bitwise shifting is equivalent to arithmetic multiplication and division by powers of 2."
    }
  },
  {
    "id": 117,
    "pdfId": "Q116",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Bit Toggle Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 9;\n    a = a ^ (1 << 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 9;\n    a = a ^ (1 << 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The expression `a ^ (1 << 1)` toggles the bit at position 1 (0-indexed). $9$ (`1001_2`) with bit 1 toggled to 1 becomes $11$ (`1011_2`). Output is **11**.",
      "expectedOutput": "11",
      "explanation": [
        "`1 << 1` shifts 1 left by 1 position: `0010` in binary (value 2).",
        "$a = 9 = 1001$ in binary.",
        "$a \\oplus 2 = 1001_2 \\oplus 0010_2 = 1011_2 = 11$ in decimal.",
        "Output: 11."
      ],
      "interviewTip": "Standard bit manipulation idioms: Set bit: `x |= (1 << k)`, Clear bit: `x &= ~(1 << k)`, Toggle bit: `x ^= (1 << k)`, Check bit: `(x >> k) & 1`."
    }
  },
  {
    "id": 118,
    "pdfId": "Q117",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "Do-While with Break/Continue",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    do {\n        i++;\n        if (i % 2 == 0) continue;\n        if (i > 7) break;\n        sum += i;\n    } while (i < 10);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    do {\n        i++;\n        if (i % 2 == 0) continue;\n        if (i > 7) break;\n        sum += i;\n    } while (i < 10);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop increments `i` from 1 to 9. Even numbers trigger `continue`, odd numbers 1, 3, 5, 7 add to `sum`, and when $i=9$, `i > 7` triggers `break`. Total sum $1+3+5+7=$ **16**.",
      "expectedOutput": "16",
      "dryRunTable": {
        "headers": [
          "i value",
          "i % 2 == 0?",
          "i > 7?",
          "sum action",
          "sum"
        ],
        "rows": [
          [
            "1",
            "No",
            "No",
            "sum += 1",
            "1"
          ],
          [
            "2",
            "Yes (continue)",
            "-",
            "Skipped",
            "1"
          ],
          [
            "3",
            "No",
            "No",
            "sum += 3",
            "4"
          ],
          [
            "4",
            "Yes (continue)",
            "-",
            "Skipped",
            "4"
          ],
          [
            "5",
            "No",
            "No",
            "sum += 5",
            "9"
          ],
          [
            "6",
            "Yes (continue)",
            "-",
            "Skipped",
            "9"
          ],
          [
            "7",
            "No",
            "No",
            "sum += 7",
            "16"
          ],
          [
            "8",
            "Yes (continue)",
            "-",
            "Skipped",
            "16"
          ],
          [
            "9",
            "No",
            "Yes (break!)",
            "Loop ends",
            "16"
          ]
        ]
      },
      "interviewTip": "Pay close attention: at $i=8$, `continue` skips the `i > 7` check; at $i=9$, `i % 2 != 0`, so `i > 7` triggers `break` before adding 9!"
    }
  },
  {
    "id": 119,
    "pdfId": "Q118",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Function with Default Global Access",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint x = 10;\nint fun(int x) {\n    x = x + 5;\n    return x;\n}\nint main() {\n    int result = fun(x);\n    printf(\"%d %d\", x, result);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint x = 10;\nint fun(int x) {\n    x = x + 5;\n    return x;\n}\nint main() {\n    int result = fun(x);\n    printf(\"%d %d\", x, result);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The parameter `x` inside `fun` shadows the global variable `x`. The local parameter receives $10 + 5 = 15$, while global `x` in `main` remains untouched at 10. Output is **10 15**.",
      "expectedOutput": "10 15",
      "explanation": [
        "Global `x` is defined as 10.",
        "In `fun(int x)`, parameter `x` shadows (hides) global `x` within `fun`'s scope.",
        "`fun` modifies only its local parameter `x`, returning 15.",
        "In `main()`, `result` is assigned 15.",
        "When `printf(\"%d %d\", x, result)` is called, `x` accesses global `x` (10), printing `10 15`."
      ],
      "interviewTip": "Variable shadowing is an interview staple: local parameters always take precedence over global variables of the same name."
    }
  },
  {
    "id": 120,
    "pdfId": "Q119",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursive Array Sum via Pointer",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint sumArr(int *arr, int n) {\n    if (n == 0) return 0;\n    return *arr + sumArr(arr + 1, n - 1);\n}\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint sumArr(int *arr, int n) {\n    if (n == 0) return 0;\n    return *arr + sumArr(arr + 1, n - 1);\n}\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "The recursive function traverses the array by incrementing the pointer `arr + 1` at each step, summing all elements: $1 + 2 + 3 + 4 = $ **10**.",
      "expectedOutput": "10",
      "explanation": [
        "`sumArr(arr, 4) = 1 + sumArr(arr+1, 3)`",
        "`sumArr(arr+1, 3) = 2 + sumArr(arr+2, 2)`",
        "`sumArr(arr+2, 2) = 3 + sumArr(arr+3, 1)`",
        "`sumArr(arr+3, 1) = 4 + sumArr(arr+4, 0)`",
        "`sumArr(arr+4, 0) = 0` (base case: $n=0$).",
        "Total sum = $1 + 2 + 3 + 4 + 0 = 10$."
      ],
      "interviewTip": "Pointer arithmetic in recursion: `arr + 1` shifts the window forward by one element on each recursive frame."
    }
  },
  {
    "id": 121,
    "pdfId": "Q120",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Array Swap via Nested Loop",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4 - i; j++)\n            if (arr[j] > arr[j + 1]) {\n                temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4 - i; j++)\n            if (arr[j] > arr[j + 1]) {\n                temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The nested loops implement standard Bubble Sort ascending order, sorting the array into ${1, 3, 5, 8, 9}$. Printing `arr[0]`, `arr[2]`, and `arr[4]` outputs **1 5 9**.",
      "expectedOutput": "1 5 9",
      "explanation": [
        "Initial array: `{5, 3, 8, 1, 9}`.",
        "The code is a classic Bubble Sort.",
        "Sorted array: `{1, 3, 5, 8, 9}`.",
        "`arr[0]` = 1 (minimum element).",
        "`arr[2]` = 5 (median element).",
        "`arr[4]` = 9 (maximum element).",
        "Output: `1 5 9`."
      ],
      "interviewTip": "Recognizing standard sorting patterns instantly saves valuable time during written placement tests."
    }
  },
  {
    "id": 122,
    "pdfId": "Q121",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "Character Case Conversion Loop",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"cGate2026\";\n    int i;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;\n    }\n    printf(\"%s\", str);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    char str[] = \"cGate2026\";\n    int i;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;\n    }\n    printf(\"%s\", str);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Subtracting 32 converts each lowercase letter into its uppercase ASCII equivalent ('a' -> 'A', 'c' -> 'C'). Digits and uppercase 'G' remain unaffected, printing **CGATE2026**.",
      "expectedOutput": "CGATE2026",
      "explanation": [
        "ASCII of 'a' is 97, ASCII of 'A' is 65. The difference is 32.",
        "Index 0: `'c'` (99) becomes `'C'` (67).",
        "Index 1: `'G'` is already uppercase, unchanged.",
        "Index 2: `'a'` becomes `'A'`.",
        "Index 3: `'t'` becomes `'T'`.",
        "Index 4: `'e'` becomes `'E'`.",
        "Digits '2', '0', '2', '6' are outside the range `'a'` to `'z'`, so they remain unchanged.",
        "Final string: `CGATE2026`."
      ],
      "interviewTip": "In standard C, `toupper()` from `<ctype.h>` performs this exact transformation safely."
    }
  },
  {
    "id": 123,
    "pdfId": "Q122",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Function Pointer Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\nint main() {\n    int (*fp)(int, int);\n    fp = add;\n    int r1 = fp(3, 4);\n    fp = mul;\n    int r2 = fp(3, 4);\n    printf(\"%d %d\", r1, r2);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\nint main() {\n    int (*fp)(int, int);\n    fp = add;\n    int r1 = fp(3, 4);\n    fp = mul;\n    int r2 = fp(3, 4);\n    printf(\"%d %d\", r1, r2);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The function pointer `fp` is first assigned to `add`, returning $3 + 4 = 7$, then reassigned to `mul`, returning $3 \\times 4 = 12$. Output is **7 12**.",
      "expectedOutput": "7 12",
      "explanation": [
        "`int (*fp)(int, int)` declares a function pointer taking two `int`s and returning `int`.",
        "`fp = add`: Invoking `fp(3, 4)` executes `add(3, 4)`, returning `r1 = 7`.",
        "`fp = mul`: Invoking `fp(3, 4)` executes `mul(3, 4)`, returning `r2 = 12`.",
        "`printf` outputs `7 12`."
      ],
      "interviewTip": "Function names decay into pointers to their code address without needing an explicit `&` operator."
    }
  },
  {
    "id": 124,
    "pdfId": "Q123",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Nested Structure Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Address { int pin; };\nstruct Student { char name[10]; struct Address addr; };\nint main() {\n    struct Student s = {\"Vijay\", {636005}};\n    s.addr.pin += 5;\n    printf(\"%d\", s.addr.pin);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Address { int pin; };\nstruct Student { char name[10]; struct Address addr; };\nint main() {\n    struct Student s = {\"Vijay\", {636005}};\n    s.addr.pin += 5;\n    printf(\"%d\", s.addr.pin);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Nested structure member `s.addr.pin` is incremented by 5 from 636005 to **636010**.",
      "expectedOutput": "636010",
      "explanation": [
        "`s` is initialized with name = \"Vijay\" and nested `addr.pin = 636005`.",
        "`s.addr.pin += 5` accesses the inner struct's pin code, updating it to $636005 + 5 = 636010$.",
        "`printf` prints `636010`."
      ],
      "interviewTip": "Access nested structure elements using chained dot operators `outer.inner.field`."
    }
  },
  {
    "id": 125,
    "pdfId": "Q124",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "realloc Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(2 * sizeof(int));\n    p[0] = 1; p[1] = 2;\n    p = (int *)realloc(p, 4 * sizeof(int));\n    p[2] = 3; p[3] = 4;\n    printf(\"%d\", p[0] + p[1] + p[2] + p[3]);\n    free(p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(2 * sizeof(int));\n    p[0] = 1; p[1] = 2;\n    p = (int *)realloc(p, 4 * sizeof(int));\n    p[2] = 3; p[3] = 4;\n    printf(\"%d\", p[0] + p[1] + p[2] + p[3]);\n    free(p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`realloc` preserves existing elements `{1, 2}` while extending the array to 4 slots. After populating `p[2]=3, p[3]=4`, the sum is $1 + 2 + 3 + 4 =$ **10**.",
      "expectedOutput": "10",
      "explanation": [
        "Initial allocation stores `{1, 2}`.",
        "`realloc` expands the capacity to 4 integers, preserving previous contents.",
        "Indices 2 and 3 are set to 3 and 4.",
        "Sum = $1 + 2 + 3 + 4 = 10$."
      ],
      "interviewTip": "`realloc()` guarantees that original data up to the minimum of old and new sizes remains intact."
    }
  },
  {
    "id": 126,
    "pdfId": "Q125",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "Multiple Nested Loop with Break",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j, count = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= 3; j++) {\n            if (j == 2) break;\n            count++;\n        }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i, j, count = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= 3; j++) {\n            if (j == 2) break;\n            count++;\n        }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The `break` statement inside the inner loop triggers when $j = 2$, terminating the inner loop after only 1 iteration ($j = 1$) per outer cycle. Across 3 outer iterations, `count` becomes **3**.",
      "expectedOutput": "3",
      "dryRunTable": {
        "headers": [
          "Outer (i)",
          "Inner (j)",
          "j == 2?",
          "Action",
          "count"
        ],
        "rows": [
          [
            "1",
            "1",
            "No",
            "count++",
            "1"
          ],
          [
            "1",
            "2",
            "Yes",
            "break inner loop",
            "1"
          ],
          [
            "2",
            "1",
            "No",
            "count++",
            "2"
          ],
          [
            "2",
            "2",
            "Yes",
            "break inner loop",
            "2"
          ],
          [
            "3",
            "1",
            "No",
            "count++",
            "3"
          ],
          [
            "3",
            "2",
            "Yes",
            "break inner loop",
            "3"
          ]
        ]
      },
      "interviewTip": "`break` exits ONLY the innermost enclosing loop; it does not break out of outer loops."
    }
  },
  {
    "id": 127,
    "pdfId": "Q126",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Recursive Function with Loop Inside",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int n) {\n    int i, s = 0;\n    if (n == 0) return 0;\n    for (i = 1; i <= n; i++) s += i;\n    return s + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(2));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fun(int n) {\n    int i, s = 0;\n    if (n == 0) return 0;\n    for (i = 1; i <= n; i++) s += i;\n    return s + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(2));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Each recursive frame computes the sum of numbers from 1 to $n$ ($s = n(n+1)/2$) and adds the result of `fun(n-1)`. Calling `fun(2)` returns $3 + 1 + 0 =$ **4**.",
      "expectedOutput": "4",
      "explanation": [
        "Frame 1 (`n = 2`): loop computes $s = 1 + 2 = 3$. Calls `fun(1)`.",
        "Frame 2 (`n = 1`): loop computes $s = 1$. Calls `fun(0)`.",
        "Frame 3 (`n = 0`): base case returns 0.",
        "Unwinding: `fun(1)` returns $1 + 0 = 1$. `fun(2)` returns $3 + 1 = 4$."
      ],
      "interviewTip": "Tracing frame-by-frame: identify what each frame computes locally before looking at the recursive contribution."
    }
  },
  {
    "id": 128,
    "pdfId": "Q127",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Bit Counting Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int n = 13, count = 0;\n    while (n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int n = 13, count = 0;\n    while (n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop counts the number of set bits (1s) in the binary representation of $13$ (`1101_2`), resulting in **3**.",
      "expectedOutput": "3",
      "dryRunTable": {
        "headers": [
          "Iteration",
          "n (binary)",
          "n & 1 (LSB)",
          "count",
          "n after n >>= 1"
        ],
        "rows": [
          [
            "1",
            "13 (1101)",
            "1",
            "1",
            "6 (0110)"
          ],
          [
            "2",
            "6 (0110)",
            "0",
            "1",
            "3 (0011)"
          ],
          [
            "3",
            "3 (0011)",
            "1",
            "2",
            "1 (0001)"
          ],
          [
            "4",
            "1 (0001)",
            "1",
            "3",
            "0 (0000)"
          ]
        ]
      },
      "interviewTip": "This is Brian Kernighan's algorithm territory: set bits can also be cleared in $O(\\text{set bits})$ using `n &= (n - 1)`."
    }
  },
  {
    "id": 129,
    "pdfId": "Q128",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Array Search with Sentinel",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;\n    for (i = 0; i < 5; i++) {\n        if (arr[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    printf(\"%d\", pos);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;\n    for (i = 0; i < 5; i++) {\n        if (arr[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    printf(\"%d\", pos);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Linear search checks indices 0, 1, 2 until finding `arr[3] == 9`. The `break` statement halts the loop and prints index **3**.",
      "expectedOutput": "3",
      "explanation": [
        "$i = 0: arr[0] = 4 \\neq 9$",
        "$i = 1: arr[1] = 7 \\neq 9$",
        "$i = 2: arr[2] = 2 \\neq 9$",
        "$i = 3: arr[3] = 9 == 9 \\implies pos = 3$, `break` exits loop.",
        "`printf(\"%d\", pos)` outputs 3."
      ],
      "interviewTip": "Using `break` on match optimizes average search time to $N/2$ iterations instead of always running $N$ times."
    }
  },
  {
    "id": 130,
    "pdfId": "Q129",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "Recursive Palindrome Check Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <string.h>\nint isPal(char *s, int l, int r) {\n    if (l >= r) return 1;\n    if (s[l] != s[r]) return 0;\n    return isPal(s, l + 1, r - 1);\n}\nint main() {\n    char str[] = \"MADAM\";\n    printf(\"%d\", isPal(str, 0, strlen(str) - 1));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <string.h>\nint isPal(char *s, int l, int r) {\n    if (l >= r) return 1;\n    if (s[l] != s[r]) return 0;\n    return isPal(s, l + 1, r - 1);\n}\nint main() {\n    char str[] = \"MADAM\";\n    printf(\"%d\", isPal(str, 0, strlen(str) - 1));\n    return 0;\n}",
    "answer": {
      "directAnswer": "\"MADAM\" is a palindrome. The recursive check compares outermost letters moving inward: $s[0]==s[4]$ ('M'=='M'), $s[1]==s[3]$ ('A'=='A'), and reaches base case $l \\ge r$ at index 2 ('D'), returning **1**.",
      "expectedOutput": "1",
      "dryRunTable": {
        "headers": [
          "Call",
          "l",
          "r",
          "s[l] vs s[r]",
          "Result / Next Step"
        ],
        "rows": [
          [
            "isPal(str, 0, 4)",
            "0",
            "4",
            "'M' == 'M'",
            "Calls isPal(str, 1, 3)"
          ],
          [
            "isPal(str, 1, 3)",
            "1",
            "3",
            "'A' == 'A'",
            "Calls isPal(str, 2, 2)"
          ],
          [
            "isPal(str, 2, 2)",
            "2",
            "2",
            "l >= r (True)",
            "Base case returns 1"
          ]
        ]
      },
      "interviewTip": "Base case `l >= r` correctly handles both odd-length (meeting at $l = r$) and even-length (crossing at $l > r$) palindromes."
    }
  },
  {
    "id": 131,
    "pdfId": "Q130",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Pointer to Structure Array",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Emp { int id, sal; };\nint main() {\n    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};\n    struct Emp *p = e;\n    printf(\"%d\", (p + 1)->sal + p->id);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Emp { int id, sal; };\nint main() {\n    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};\n    struct Emp *p = e;\n    printf(\"%d\", (p + 1)->sal + p->id);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`p + 1` points to `e[1]`, so `(p + 1)->sal` is 2000. `p->id` accesses `e[0].id` which is 1. The total sum is $2000 + 1 =$ **2001**.",
      "expectedOutput": "2001",
      "explanation": [
        "`p` points to `e[0]`.",
        "`p + 1` advances by `sizeof(struct Emp)` bytes to `e[1]`.",
        "`(p + 1)->sal` accesses member `sal` of `e[1]` = 2000.",
        "`p->id` accesses member `id` of `e[0]` = 1.",
        "Sum: $2000 + 1 = 2001$."
      ],
      "interviewTip": "Pointer arithmetic on structure pointers automatically scales by `sizeof(struct)`."
    }
  },
  {
    "id": 132,
    "pdfId": "Q131",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "Loop Modifying Counter Inside Body",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 10; i++) {\n        if (i == 3) i += 2;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 10; i++) {\n        if (i == 3) i += 2;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "When $i = 3$, it is increased by 2 to become 5 inside the loop body (printing 5). The loop step `i++` then increments it to 6, skipping 3 and 4 entirely. Output: **0 1 2 5 6 7 8 9 **.",
      "expectedOutput": "0 1 2 5 6 7 8 9 ",
      "dryRunTable": {
        "headers": [
          "Loop Start i",
          "i == 3 Check",
          "i after body",
          "Printed",
          "Next i (after i++)"
        ],
        "rows": [
          [
            "0",
            "False",
            "0",
            "0 ",
            "1"
          ],
          [
            "1",
            "False",
            "1",
            "1 ",
            "2"
          ],
          [
            "2",
            "False",
            "2",
            "2 ",
            "3"
          ],
          [
            "3",
            "True -> i += 2",
            "5",
            "5 ",
            "6 (via i++)"
          ],
          [
            "6",
            "False",
            "6",
            "6 ",
            "7"
          ],
          [
            "7",
            "False",
            "7",
            "7 ",
            "8"
          ],
          [
            "8",
            "False",
            "8",
            "8 ",
            "9"
          ],
          [
            "9",
            "False",
            "9",
            "9 ",
            "10 (loop ends)"
          ]
        ]
      },
      "interviewTip": "Modifying the loop index variable inside the loop body is dangerous in production, but a classic placement test trap!"
    }
  },
  {
    "id": 133,
    "pdfId": "Q132",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Function Modifying Array via Pointer Return",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid fill(int *arr, int n) {\n    int i;\n    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);\n}\nint main() {\n    int arr[4];\n    fill(arr, 4);\n    printf(\"%d\", arr[1] + arr[3]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid fill(int *arr, int n) {\n    int i;\n    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);\n}\nint main() {\n    int arr[4];\n    fill(arr, 4);\n    printf(\"%d\", arr[1] + arr[3]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`fill` populates the array with squares of $(i + 1)$: ${1, 4, 9, 16}$. Then `arr[1] + arr[3] = 4 + 16 =` **20**.",
      "expectedOutput": "20",
      "explanation": [
        "`arr[0] = (0 + 1)^2 = 1`",
        "`arr[1] = (1 + 1)^2 = 4`",
        "`arr[2] = (2 + 1)^2 = 9`",
        "`arr[3] = (3 + 1)^2 = 16`",
        "Result: $arr[1] + arr[3] = 4 + 16 = 20$."
      ],
      "interviewTip": "Array passed as pointer parameter `int *arr` allows the callee to directly write data into caller's array."
    }
  },
  {
    "id": 134,
    "pdfId": "Q133",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursive Power with Two Branches",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint power(int b, int e) {\n    if (e == 0) return 1;\n    if (e % 2 == 0) return power(b * b, e / 2);\n    return b * power(b, e - 1);\n}\nint main() {\n    printf(\"%d\", power(2, 5));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint power(int b, int e) {\n    if (e == 0) return 1;\n    if (e % 2 == 0) return power(b * b, e / 2);\n    return b * power(b, e - 1);\n}\nint main() {\n    printf(\"%d\", power(2, 5));\n    return 0;\n}",
    "answer": {
      "directAnswer": "This implements fast binary exponentiation to compute $2^5 = $ **32** in logarithmic $O(\\log E)$ recursive calls.",
      "expectedOutput": "32",
      "dryRunTable": {
        "headers": [
          "Call",
          "b",
          "e",
          "Branch Taken",
          "Evaluation"
        ],
        "rows": [
          [
            "power(2, 5)",
            "2",
            "5",
            "Odd: 2 * power(2, 4)",
            "2 * 16 = 32"
          ],
          [
            "power(2, 4)",
            "2",
            "4",
            "Even: power(4, 2)",
            "returns 16"
          ],
          [
            "power(4, 2)",
            "4",
            "2",
            "Even: power(16, 1)",
            "returns 16"
          ],
          [
            "power(16, 1)",
            "16",
            "1",
            "Odd: 16 * power(16, 0)",
            "16 * 1 = 16"
          ],
          [
            "power(16, 0)",
            "16",
            "0",
            "Base Case (e == 0)",
            "returns 1"
          ]
        ]
      },
      "interviewTip": "Binary exponentiation reduces recursive call depth from $O(E)$ down to $O(\\log E)$."
    }
  },
  {
    "id": 135,
    "pdfId": "Q134",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Two Array Interaction",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a[3] = {1, 2, 3}, b[3], i;\n    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];\n    printf(\"%d %d %d\", b[0], b[1], b[2]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a[3] = {1, 2, 3}, b[3], i;\n    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];\n    printf(\"%d %d %d\", b[0], b[1], b[2]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Each element of `b` is formed by multiplying symmetrical pairs from `a`: $b[0] = 1 \\times 3 = 3$, $b[1] = 2 \\times 2 = 4$, and $b[2] = 3 \\times 1 = 3$. Output is **3 4 3**.",
      "expectedOutput": "3 4 3",
      "explanation": [
        "$i = 0$: `b[0] = a[0] * a[2] = 1 * 3 = 3`",
        "$i = 1$: `b[1] = a[1] * a[1] = 2 * 2 = 4`",
        "$i = 2$: `b[2] = a[2] * a[0] = 3 * 1 = 3`",
        "Printed as: `3 4 3`."
      ],
      "interviewTip": "Index expression `(N - 1 - i)` accesses elements from the opposite end of an array."
    }
  },
  {
    "id": 136,
    "pdfId": "Q135",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Union inside Structure Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nunion Val { int i; char c; };\nstruct Box { union Val v; int tag; };\nint main() {\n    struct Box b;\n    b.v.i = 321;\n    b.tag = b.v.c;\n    printf(\"%d\", b.tag);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nunion Val { int i; char c; };\nstruct Box { union Val v; int tag; };\nint main() {\n    struct Box b;\n    b.v.i = 321;\n    b.tag = b.v.c;\n    printf(\"%d\", b.tag);\n    return 0;\n}",
    "answer": {
      "directAnswer": "In little-endian architecture (x86/ARM), integer $321$ is stored in hexadecimal as `0x00000141`. Accessing `b.v.c` reads the lowest byte `0x41`, which equals $65$ in decimal ('A'). Output is **65**.",
      "expectedOutput": "65",
      "explanation": [
        "In `union Val`, members `int i` and `char c` overlap at the exact same base memory address.",
        "$321_{10} = 256 + 65 = 0x00000141$.",
        "On little-endian systems, least significant byte is stored at lowest address: byte 0 is `0x41` ($65$).",
        "`b.v.c` reads byte 0 = 65.",
        "`b.tag` is assigned 65, and `printf(\"%d\", b.tag)` outputs 65."
      ],
      "interviewTip": "This tests both union memory sharing and endianness (byte ordering in RAM)."
    }
  },
  {
    "id": 137,
    "pdfId": "Q136",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "2D Dynamic Array Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int **arr, i, j;\n    arr = (int **)malloc(2 * sizeof(int *));\n    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2; j++)\n            arr[i][j] = i + j;\n    printf(\"%d\", arr[0][1] + arr[1][0] + arr[1][1]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int **arr, i, j;\n    arr = (int **)malloc(2 * sizeof(int *));\n    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2; j++)\n            arr[i][j] = i + j;\n    printf(\"%d\", arr[0][1] + arr[1][0] + arr[1][1]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The 2x2 dynamic matrix has elements `arr[i][j] = i + j`: `arr[0][1] = 1`, `arr[1][0] = 1`, and `arr[1][1] = 2`. The sum $1 + 1 + 2 =$ **4**.",
      "expectedOutput": "4",
      "explanation": [
        "`arr[0][0] = 0 + 0 = 0`",
        "`arr[0][1] = 0 + 1 = 1`",
        "`arr[1][0] = 1 + 0 = 1`",
        "`arr[1][1] = 1 + 1 = 2`",
        "Sum: $arr[0][1] + arr[1][0] + arr[1][1] = 1 + 1 + 2 = 4$."
      ],
      "interviewTip": "Dynamic 2D arrays require allocating an array of pointers (`int**`), then allocating each row array individually."
    }
  },
  {
    "id": 138,
    "pdfId": "Q137",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Swap Using XOR Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 6, b = 11;\n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 6, b = 11;\n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    "answer": {
      "directAnswer": "This is the classic three-step bitwise XOR swap algorithm that swaps two variables without temporary storage, printing **11 6**.",
      "expectedOutput": "11 6",
      "dryRunTable": {
        "headers": [
          "Step",
          "Operation",
          "New Value of a",
          "New Value of b"
        ],
        "rows": [
          [
            "Initial",
            "-",
            "6",
            "11"
          ],
          [
            "1",
            "a = a ^ b",
            "6 ^ 11 = 13",
            "11"
          ],
          [
            "2",
            "b = a ^ b",
            "13",
            "13 ^ 11 = 6 (original a)"
          ],
          [
            "3",
            "a = a ^ b",
            "13 ^ 6 = 11 (original b)",
            "6"
          ]
        ]
      },
      "interviewTip": "Beware: If `a` and `b` point to the exact same memory location (`&a == &b`), `a ^= a` zeroes out the memory!"
    }
  },
  {
    "id": 139,
    "pdfId": "Q138",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "While Loop with Compound Update",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 1, sum = 0;\n    while (i <= 20) {\n        sum += i;\n        i *= 2;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i = 1, sum = 0;\n    while (i <= 20) {\n        sum += i;\n        i *= 2;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop sums powers of 2 for values $\\le 20$: $1 + 2 + 4 + 8 + 16 = $ **31**.",
      "expectedOutput": "31",
      "dryRunTable": {
        "headers": [
          "Iteration",
          "i value",
          "Condition (i <= 20)",
          "sum += i",
          "Next i (i *= 2)"
        ],
        "rows": [
          [
            "1",
            "1",
            "True",
            "0 + 1 = 1",
            "2"
          ],
          [
            "2",
            "2",
            "True",
            "1 + 2 = 3",
            "4"
          ],
          [
            "3",
            "4",
            "True",
            "3 + 4 = 7",
            "8"
          ],
          [
            "4",
            "8",
            "True",
            "7 + 8 = 15",
            "16"
          ],
          [
            "5",
            "16",
            "True",
            "15 + 16 = 31",
            "32"
          ],
          [
            "6",
            "32",
            "False (32 <= 20)",
            "Loop terminates",
            "-"
          ]
        ]
      },
      "interviewTip": "Notice that the sum of powers of 2 up to $2^k$ is always $2^{k+1} - 1 = 32 - 1 = 31$."
    }
  },
  {
    "id": 140,
    "pdfId": "Q139",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Function Returning Struct Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Pair { int a, b; };\nstruct Pair make(int x, int y) {\n    struct Pair p;\n    p.a = x + y;\n    p.b = x - y;\n    return p;\n}\nint main() {\n    struct Pair r = make(10, 4);\n    printf(\"%d %d\", r.a, r.b);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Pair { int a, b; };\nstruct Pair make(int x, int y) {\n    struct Pair p;\n    p.a = x + y;\n    p.b = x - y;\n    return p;\n}\nint main() {\n    struct Pair r = make(10, 4);\n    printf(\"%d %d\", r.a, r.b);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The function returns a `struct Pair` with `p.a = 10 + 4 = 14` and `p.b = 10 - 4 = 6`, outputting **14 6**.",
      "expectedOutput": "14 6",
      "explanation": [
        "In `make(10, 4)`: `p.a = 10 + 4 = 14`, `p.b = 10 - 4 = 6`.",
        "The struct is returned by value (entire contents copied to `r`).",
        "`printf` prints `r.a` and `r.b` as `14 6`."
      ],
      "interviewTip": "Returning a struct by value is the standard, safe C idiom for returning multiple values from a function."
    }
  },
  {
    "id": 141,
    "pdfId": "Q140",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursive Digit Reversal Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint rev(int n, int r) {\n    if (n == 0) return r;\n    return rev(n / 10, r * 10 + n % 10);\n}\nint main() {\n    printf(\"%d\", rev(4321, 0));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint rev(int n, int r) {\n    if (n == 0) return r;\n    return rev(n / 10, r * 10 + n % 10);\n}\nint main() {\n    printf(\"%d\", rev(4321, 0));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Tail-recursive digit reversal reverses 4321 to **1234** by passing the accumulated reversed prefix in parameter `r`.",
      "expectedOutput": "1234",
      "dryRunTable": {
        "headers": [
          "Call",
          "n",
          "r",
          "Next Call (n/10, r*10 + n%10)"
        ],
        "rows": [
          [
            "1",
            "4321",
            "0",
            "rev(432, 0*10 + 1) = rev(432, 1)"
          ],
          [
            "2",
            "432",
            "1",
            "rev(43, 1*10 + 2) = rev(43, 12)"
          ],
          [
            "3",
            "43",
            "12",
            "rev(4, 12*10 + 3) = rev(4, 123)"
          ],
          [
            "4",
            "4",
            "123",
            "rev(0, 123*10 + 4) = rev(0, 1234)"
          ],
          [
            "5",
            "0",
            "1234",
            "Base case (n == 0) returns r = 1234"
          ]
        ]
      },
      "interviewTip": "This is accumulator-based tail recursion, which uses constant stack space under compiler optimization."
    }
  },
  {
    "id": 142,
    "pdfId": "Q141",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Array Rotation Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5}, temp, i;\n    temp = arr[0];\n    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];\n    arr[4] = temp;\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5}, temp, i;\n    temp = arr[0];\n    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];\n    arr[4] = temp;\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Left-rotates the array by 1 position: `{1, 2, 3, 4, 5}` becomes `{2, 3, 4, 5, 1}`. Printing `arr[0]`, `arr[2]`, and `arr[4]` yields **2 4 1**.",
      "expectedOutput": "2 4 1",
      "explanation": [
        "`temp = arr[0] = 1`.",
        "Loop shifts elements left: `arr[0]=2, arr[1]=3, arr[2]=4, arr[3]=5`.",
        "`arr[4] = temp = 1`.",
        "Resulting array: `{2, 3, 4, 5, 1}`.",
        "`arr[0]` is 2, `arr[2]` is 4, `arr[4]` is 1."
      ],
      "interviewTip": "This is a single left circular rotation in $O(N)$ time and $O(1)$ auxiliary space."
    }
  },
  {
    "id": 143,
    "pdfId": "Q142",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Strings",
    "subtopic": "String Token Count Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"C is fun to learn\";\n    int i, words = 1;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] == ' ') words++;\n    }\n    printf(\"%d\", words);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    char str[] = \"C is fun to learn\";\n    int i, words = 1;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] == ' ') words++;\n    }\n    printf(\"%d\", words);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The string contains 4 space characters separating 5 words. Starting with `words = 1`, it increments 4 times, outputting **5**.",
      "expectedOutput": "5",
      "explanation": [
        "Spaces occur after 'C', 'is', 'fun', and 'to' (total 4 spaces).",
        "Each space increments `words` by 1.",
        "`words = 1 + 4 = 5`.",
        "Output is 5."
      ],
      "interviewTip": "Assuming $N$ words = $(N - 1)$ spaces works only if there are no consecutive, leading, or trailing spaces."
    }
  },
  {
    "id": 144,
    "pdfId": "Q143",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Pointers",
    "subtopic": "Pointer Arithmetic with Increment Chain",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d \", *p++);\n    printf(\"%d \", *p);\n    printf(\"%d\", *++p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d \", *p++);\n    printf(\"%d \", *p);\n    printf(\"%d\", *++p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "1. `*p++` evaluates to `*p` (10) then advances `p` to `&arr[1]`. 2. `*p` prints 20. 3. `*++p` advances `p` to `&arr[2]` first then dereferences it, printing 30. Exact output: **10 20 30**.",
      "expectedOutput": "10 20 30",
      "dryRunTable": {
        "headers": [
          "Statement",
          "Pointer Location",
          "Action",
          "Printed"
        ],
        "rows": [
          [
            "printf(\"%d \", *p++);",
            "&arr[0] -> &arr[1]",
            "Dereference 10, then advance p",
            "10 "
          ],
          [
            "printf(\"%d \", *p);",
            "&arr[1]",
            "Dereference current p",
            "20 "
          ],
          [
            "printf(\"%d\", *++p);",
            "&arr[1] -> &arr[2]",
            "Advance p to index 2 first, then dereference",
            "30"
          ]
        ]
      },
      "interviewTip": "`*p++` means `*(p++)` (dereference original, increment pointer). `*++p` means `*(++p)` (increment pointer first, then dereference). `(*p)++` increments the value pointed to."
    }
  },
  {
    "id": 145,
    "pdfId": "Q144",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Structures",
    "subtopic": "Structure Array with Function Update",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Stu { int marks; };\nvoid grade(struct Stu s[], int n) {\n    int i;\n    for (i = 0; i < n; i++) s[i].marks += 5;\n}\nint main() {\n    struct Stu s[3] = {{50},{60},{70}};\n    grade(s, 3);\n    printf(\"%d %d %d\", s[0].marks, s[1].marks, s[2].marks);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Stu { int marks; };\nvoid grade(struct Stu s[], int n) {\n    int i;\n    for (i = 0; i < n; i++) s[i].marks += 5;\n}\nint main() {\n    struct Stu s[3] = {{50},{60},{70}};\n    grade(s, 3);\n    printf(\"%d %d %d\", s[0].marks, s[1].marks, s[2].marks);\n    return 0;\n}",
    "answer": {
      "directAnswer": "An array of structures decays to a pointer when passed to a function. The updates inside `grade` modify the caller's array elements directly, adding 5 to each: **55 65 75**.",
      "expectedOutput": "55 65 75",
      "explanation": [
        "Even though individual structures pass by value, an *array of structures* decays to a pointer to the first structure (`struct Stu *`).",
        "`s[0].marks`: $50 + 5 = 55$",
        "`s[1].marks`: $60 + 5 = 65$",
        "`s[2].marks`: $70 + 5 = 75$",
        "Outputs `55 65 75`."
      ],
      "interviewTip": "Crucial difference: Single struct `void f(struct S s)` passes by VALUE; array of structs `void f(struct S s[])` passes by REFERENCE (decays to pointer)."
    }
  },
  {
    "id": 146,
    "pdfId": "Q145",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Freed Pointer Reuse Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(sizeof(int));\n    *p = 25;\n    int val = *p;\n    free(p);\n    printf(\"%d\", val);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(sizeof(int));\n    *p = 25;\n    int val = *p;\n    free(p);\n    printf(\"%d\", val);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The value 25 was copied to stack variable `val` before `free(p)` was called. Printing `val` outputs **25** safely.",
      "expectedOutput": "25",
      "explanation": [
        "`malloc` allocates 4 bytes on heap.",
        "`*p = 25` writes 25 into heap.",
        "`int val = *p` copies 25 to local stack variable `val`.",
        "`free(p)` frees heap memory.",
        "`printf(\"%d\", val)` reads `val` from stack, printing 25."
      ],
      "interviewTip": "If the program had tried to print `*p` after `free(p)`, that would be a 'Use-After-Free' bug causing undefined behavior."
    }
  },
  {
    "id": 147,
    "pdfId": "Q146",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Bitwise Operators",
    "subtopic": "Checking Power of Two",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int n = 16;\n    printf(\"%d\", (n & (n - 1)) == 0);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int n = 16;\n    printf(\"%d\", (n & (n - 1)) == 0);\n    return 0;\n}",
    "answer": {
      "directAnswer": "For any power of 2, `n & (n - 1)` is always 0. Since $16$ is a power of 2 ($10000_2 \\& 01111_2 = 0$), the condition `(0 == 0)` evaluates to true (**1**).",
      "expectedOutput": "1",
      "explanation": [
        "$n = 16 = 10000_2$.",
        "$n - 1 = 15 = 01111_2$.",
        "$10000_2 \\& 01111_2 = 00000_2 = 0$.",
        "`(0 == 0)` evaluates to `1` (true).",
        "Output: 1."
      ],
      "interviewTip": "`n > 0 && (n & (n - 1)) == 0` is the standard $O(1)$ trick to check if an integer is a power of 2."
    }
  },
  {
    "id": 148,
    "pdfId": "Q147",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Loops",
    "subtopic": "For Loop with Decreasing Step",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, product = 1;\n    for (i = 5; i >= 1; i -= 2) {\n        product *= i;\n    }\n    printf(\"%d\", product);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i, product = 1;\n    for (i = 5; i >= 1; i -= 2) {\n        product *= i;\n    }\n    printf(\"%d\", product);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop decrements `i` by 2, taking odd values 5, 3, and 1. The product $5 \\times 3 \\times 1 =$ **15**.",
      "expectedOutput": "15",
      "dryRunTable": {
        "headers": [
          "i",
          "Condition (i >= 1)",
          "product *= i",
          "Next i (i -= 2)"
        ],
        "rows": [
          [
            "5",
            "True",
            "1 * 5 = 5",
            "3"
          ],
          [
            "3",
            "True",
            "5 * 3 = 15",
            "1"
          ],
          [
            "1",
            "True",
            "15 * 1 = 15",
            "-1"
          ],
          [
            "-1",
            "False (-1 >= 1)",
            "Loop terminates",
            "-"
          ]
        ]
      },
      "interviewTip": "This is known as the double factorial of 5, written $5!! = 5 \\times 3 \\times 1 = 15$."
    }
  },
  {
    "id": 149,
    "pdfId": "Q148",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Functions",
    "subtopic": "Recursive Function Called in Loop",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fact(int n) {\n    return (n <= 1) ? 1 : n * fact(n - 1);\n}\nint main() {\n    int i, sum = 0;\n    for (i = 1; i <= 3; i++) sum += fact(i);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fact(int n) {\n    return (n <= 1) ? 1 : n * fact(n - 1);\n}\nint main() {\n    int i, sum = 0;\n    for (i = 1; i <= 3; i++) sum += fact(i);\n    printf(\"%d\", sum);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop sums factorials $1! + 2! + 3! = 1 + 2 + 6 =$ **9**.",
      "expectedOutput": "9",
      "explanation": [
        "$i = 1: \\text{fact}(1) = 1$. `sum = 0 + 1 = 1`.",
        "$i = 2: \\text{fact}(2) = 2 \\times 1 = 2$. `sum = 1 + 2 = 3`.",
        "$i = 3: \\text{fact}(3) = 3 \\times 2 = 6$. `sum = 3 + 6 = 9`.",
        "Output is 9."
      ],
      "interviewTip": "Ternary operator `(n <= 1) ? 1 : n * fact(n - 1)` concisely expresses both the base and recursive cases."
    }
  },
  {
    "id": 150,
    "pdfId": "Q149",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Arrays",
    "subtopic": "Frequency Count Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;\n    for (i = 0; i < 6; i++) {\n        count = 0;\n        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;\n        if (arr[i] == 3) { printf(\"%d\", count); break; }\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;\n    for (i = 0; i < 6; i++) {\n        count = 0;\n        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;\n        if (arr[i] == 3) { printf(\"%d\", count); break; }\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "When the outer loop encounters the first occurrence of 3 (at index $i = 3$), the inner loop counts three 3s in the array. The condition `arr[i] == 3` prints **3** and breaks immediately.",
      "expectedOutput": "3",
      "explanation": [
        "$i = 0$: `arr[0] = 1`, count = 1. `arr[i] != 3`.",
        "$i = 1$: `arr[1] = 2`, count = 2. `arr[i] != 3`.",
        "$i = 2$: `arr[2] = 2`, count = 2. `arr[i] != 3`.",
        "$i = 3$: `arr[3] = 3`. Inner loop counts all matching 3s at indices 3, 4, 5 (`count = 3`).",
        "`arr[3] == 3` is true: `printf(\"%d\", count)` prints 3 and `break` terminates the outer loop."
      ],
      "interviewTip": "The break occurs on the first encounter of 3, avoiding duplicate work."
    }
  },
  {
    "id": 151,
    "pdfId": "Q150",
    "sectionId": 3,
    "sectionName": "Section 3: Placement Coding & Hard Dry Run",
    "topic": "Recursion",
    "subtopic": "Recursive GCD Dry Run",
    "difficulty": "Hard",
    "type": "Dry Run",
    "question": "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint main() {\n    printf(\"%d\", gcd(36, 24));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint main() {\n    printf(\"%d\", gcd(36, 24));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Euclid's algorithm computes $\\gcd(36, 24)$: $36 \\pmod{24} = 12$, then $24 \\pmod{12} = 0$, terminating to return **12**.",
      "expectedOutput": "12",
      "dryRunTable": {
        "headers": [
          "Call",
          "a",
          "b",
          "a % b",
          "Next Action"
        ],
        "rows": [
          [
            "gcd(36, 24)",
            "36",
            "24",
            "36 % 24 = 12",
            "Calls gcd(24, 12)"
          ],
          [
            "gcd(24, 12)",
            "24",
            "12",
            "24 % 12 = 0",
            "Calls gcd(12, 0)"
          ],
          [
            "gcd(12, 0)",
            "12",
            "0",
            "-",
            "Base case (b == 0) returns a = 12"
          ]
        ]
      },
      "interviewTip": "Euclidean algorithm is guaranteed to converge in at most $5 \\log_{10}(\\min(a, b))$ steps (Lamé's Theorem)."
    }
  },
  {
    "id": 152,
    "pdfId": "Q151",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Increment & Decrement",
    "subtopic": "Pre vs Post",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i = 5;\n    printf(\"%d %d %d\", i++, ++i, i);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i = 5;\n    printf(\"%d %d %d\", i++, ++i, i);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Under GCC x86 right-to-left argument evaluation, the rightmost argument is evaluated first ($i=5$), then `++i` increments to 6, then `i++` yields 6 and increments to 7, resulting in **6 7 7** (or **7 7 5** depending on compiler).",
      "expectedOutput": "6 7 7",
      "explanation": [
        "In the C standard (ISO C99/C11), modifying a variable multiple times within a single sequence point (such as inside a `printf` argument list) invokes **Undefined Behavior**.",
        "However, most interview placement compilers (like GCC on x86) evaluate arguments right-to-left:",
        "1. Rightmost argument `i` is read as 5.",
        "2. Middle argument `++i` increments `i` to 6 and evaluates to 6.",
        "3. Leftmost argument `i++` evaluates to 6, then increments `i` to 7.",
        "Printed output on GCC is typically `6 7 7`."
      ],
      "interviewTip": "Always mention to the interviewer: 'This expression contains undefined behavior according to the C standard, though GCC typically evaluates right-to-left producing 6 7 7.'"
    }
  },
  {
    "id": 153,
    "pdfId": "Q152",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Operators",
    "subtopic": "Operator Precedence",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 2, c;\n    c = a / b * b + a % b;\n    printf(\"%d\", c);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 5, b = 2, c;\n    c = a / b * b + a % b;\n    printf(\"%d\", c);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Multiplicative operators (`/`, `*`, `%`) have equal precedence and associate left-to-right: `(5 / 2) * 2 + (5 % 2) = 2 * 2 + 1 = 4 + 1 =` **5**.",
      "expectedOutput": "5",
      "explanation": [
        "1. `a / b` evaluates first: $5 / 2 = 2$ (integer division truncates decimal).",
        "2. Multiplied by `b`: $2 \\times 2 = 4$.",
        "3. Modulus `a % b`: $5 \\pmod 2 = 1$.",
        "4. Addition: $4 + 1 = 5$.",
        "*(Note: By the division algorithm definition, $(a / b) \\times b + (a \\% b) \\equiv a$)*."
      ],
      "interviewTip": "This proves the fundamental division identity in C: `(a / b) * b + a % b == a`."
    }
  },
  {
    "id": 154,
    "pdfId": "Q153",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Loops",
    "subtopic": "For Loop",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "The loop prints values 0, 1, and 2. When $i = 3$, `break` terminates the loop before printing, producing **0 1 2 **.",
      "expectedOutput": "0 1 2 ",
      "explanation": [
        "$i = 0$: prints `0 `",
        "$i = 1$: prints `1 `",
        "$i = 2$: prints `2 `",
        "$i = 3$: `i == 3` is true, `break` immediately exits loop.",
        "Output: `0 1 2 `."
      ],
      "interviewTip": "`break` halts the loop immediately without executing subsequent statements in the loop body."
    }
  },
  {
    "id": 155,
    "pdfId": "Q154",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Loops",
    "subtopic": "Continue Statement",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 1; i <= 5; i++) {\n        if (i % 2 == 0) continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 1; i <= 5; i++) {\n        if (i % 2 == 0) continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "`continue` skips the `printf` for even numbers (2 and 4), printing only odd numbers: **1 3 5 **.",
      "expectedOutput": "1 3 5 ",
      "explanation": [
        "$i = 1$: odd -> prints `1 `",
        "$i = 2$: even -> `continue` skips to next iteration",
        "$i = 3$: odd -> prints `3 `",
        "$i = 4$: even -> `continue` skips",
        "$i = 5$: odd -> prints `5 `",
        "Output: `1 3 5 `."
      ],
      "interviewTip": "In a `for` loop, `continue` jumps to the increment step (`i++`), whereas in a `while` loop, you must be careful not to skip the increment!"
    }
  },
  {
    "id": 156,
    "pdfId": "Q155",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Nested Loops",
    "subtopic": "Nested For Loop",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++)\n            printf(\"%d\", j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++)\n            printf(\"%d\", j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "Prints a right-angled numeric triangle with each row $i$ printing numbers from 1 up to $i$:\n1\n12\n123",
      "expectedOutput": "1\n12\n123",
      "explanation": [
        "Row $i = 1$: inner loop runs for $j = 1$, prints `1\\n`.",
        "Row $i = 2$: inner loop runs for $j = 1, 2$, prints `12\\n`.",
        "Row $i = 3$: inner loop runs for $j = 1, 2, 3$, prints `123\\n`."
      ],
      "interviewTip": "Row count is governed by outer loop; elements per row are governed by inner loop boundary $j \\le i$."
    }
  },
  {
    "id": 157,
    "pdfId": "Q156",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Functions",
    "subtopic": "Default Argument Behaviour",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint modify(int x) {\n    x = x + 10;\n    return x;\n}\nint main() {\n    int a = 5;\n    modify(a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint modify(int x) {\n    x = x + 10;\n    return x;\n}\nint main() {\n    int a = 5;\n    modify(a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Because parameters in C are passed by value, `modify` alters only its local copy `x`. The variable `a` in `main` remains unchanged at **5**.",
      "expectedOutput": "5",
      "explanation": [
        "`modify(a)` passes a copy of `a`'s value (5) to `x`.",
        "`x = x + 10` changes `x` to 15 inside `modify`'s stack frame.",
        "The returned value 15 is discarded because `main` does not assign it (`a = modify(a);` was not written).",
        "Thus, `a` remains 5."
      ],
      "interviewTip": "To update `a`, either assign the return value `a = modify(a);` or pass a pointer `modify(&a);`."
    }
  },
  {
    "id": 158,
    "pdfId": "Q157",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Functions",
    "subtopic": "Return by Reference",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nvoid modify(int *x) {\n    *x = *x + 10;\n}\nint main() {\n    int a = 5;\n    modify(&a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid modify(int *x) {\n    *x = *x + 10;\n}\nint main() {\n    int a = 5;\n    modify(&a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Passing `&a` provides the memory address of `a`. Dereferencing `*x += 10` directly modifies `a` in `main`, changing it to **15**.",
      "expectedOutput": "15",
      "explanation": [
        "`&a` passes the pointer address of `a`.",
        "Inside `modify`, `*x` refers to the memory location of `a`.",
        "`*x = *x + 10` modifies `a` from 5 to 15.",
        "`printf(\"%d\", a)` prints 15."
      ],
      "interviewTip": "This is the classic implementation of simulated pass-by-reference using pointers in C."
    }
  },
  {
    "id": 159,
    "pdfId": "Q158",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Recursion",
    "subtopic": "Recursive Sum",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint fun(int n) {\n    if (n == 0) return 0;\n    return n + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fun(int n) {\n    if (n == 0) return 0;\n    return n + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Recursively sums the first 4 natural numbers: $4 + 3 + 2 + 1 + 0 = $ **10**.",
      "expectedOutput": "10",
      "explanation": [
        "`fun(4) = 4 + fun(3)`",
        "`fun(3) = 3 + fun(2)`",
        "`fun(2) = 2 + fun(1)`",
        "`fun(1) = 1 + fun(0)`",
        "`fun(0) = 0` (base case)",
        "Result: $4 + 3 + 2 + 1 + 0 = 10$."
      ],
      "interviewTip": "Mathematical formula for sum of first $n$ natural numbers: $n(n + 1) / 2 = 4 \\times 5 / 2 = 10$."
    }
  },
  {
    "id": 160,
    "pdfId": "Q159",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Recursion",
    "subtopic": "Recursion Order",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nvoid printNum(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    printNum(n - 1);\n}\nint main() {\n    printNum(3);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid printNum(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    printNum(n - 1);\n}\nint main() {\n    printNum(3);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Because `printf` is executed before the recursive call (pre-order execution), numbers are printed in descending order: **3 2 1 **.",
      "expectedOutput": "3 2 1 ",
      "explanation": [
        "Call 1 (`n = 3`): prints `3 `, then calls `printNum(2)`.",
        "Call 2 (`n = 2`): prints `2 `, then calls `printNum(1)`.",
        "Call 3 (`n = 1`): prints `1 `, then calls `printNum(0)`.",
        "Call 4 (`n = 0`): hits base case `return`.",
        "Final output: `3 2 1 `."
      ],
      "interviewTip": "If `printf` were placed *after* `printNum(n - 1)`, the output would reverse to `1 2 3 ` (post-order printing during stack unwinding)!"
    }
  },
  {
    "id": 161,
    "pdfId": "Q160",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Pointers",
    "subtopic": "Pointer Dereference",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Pointer `p` points to `a`. Updating `*p` changes `a`'s value from 10 to $10 + 5 =$ **15**.",
      "expectedOutput": "15",
      "explanation": [
        "`p` stores the address of `a` (`&a`).",
        "`*p` dereferences `p`, accessing the memory content of `a`.",
        "`*p = *p + 5` sets `a = 10 + 5 = 15`.",
        "`printf(\"%d\", a)` prints 15."
      ],
      "interviewTip": "Dereference operator `*` acts as an alias to the original variable."
    }
  },
  {
    "id": 162,
    "pdfId": "Q161",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Pointers",
    "subtopic": "Pointer Arithmetic",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d\", *(p + 2));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d\", *(p + 2));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Advancing `p + 2` moves 2 integer elements ahead in memory, pointing to `arr[2]` with value **30**.",
      "expectedOutput": "30",
      "explanation": [
        "`p` points to `arr[0]` (10).",
        "`p + 2` points to `&arr[2]`.",
        "`*(p + 2)` accesses `arr[2] = 30`.",
        "Output: 30."
      ],
      "interviewTip": "Pointer arithmetic automatically scales by the size of the underlying data type (`sizeof(int)`)."
    }
  },
  {
    "id": 163,
    "pdfId": "Q162",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Pointers",
    "subtopic": "Double Pointer",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 20;\n    int *p = &a;\n    int **q = &p;\n    printf(\"%d\", **q);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 20;\n    int *p = &a;\n    int **q = &p;\n    printf(\"%d\", **q);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`**q` dereferences twice: first dereference `*q` yields pointer `p`, second dereference `*p` yields the integer value of `a` (**20**).",
      "expectedOutput": "20",
      "explanation": [
        "`p = &a` stores address of `a`.",
        "`q = &p` stores address of pointer `p`.",
        "`*q` yields `p`.",
        "`**q` yields `*p` which is `a = 20`."
      ],
      "interviewTip": "Double pointers are essential when dynamically allocating arrays of strings or mutating pointers across function boundaries."
    }
  },
  {
    "id": 164,
    "pdfId": "Q163",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Arrays",
    "subtopic": "Array Indexing",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[2] + arr[4]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[2] + arr[4]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Using 0-based indexing, `arr[2]` is 3 and `arr[4]` is 5. Sum is $3 + 5 =$ **8**.",
      "expectedOutput": "8",
      "explanation": [
        "`arr[0] = 1, arr[1] = 2, arr[2] = 3, arr[3] = 4, arr[4] = 5`.",
        "`arr[2] + arr[4] = 3 + 5 = 8`."
      ],
      "interviewTip": "Always remember: in an array of size $N$, valid indices range from 0 to $N - 1$."
    }
  },
  {
    "id": 165,
    "pdfId": "Q164",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Arrays",
    "subtopic": "2D Array Access",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[2][2] = {{1, 2}, {3, 4}};\n    printf(\"%d\", arr[0][1] + arr[1][0]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[2][2] = {{1, 2}, {3, 4}};\n    printf(\"%d\", arr[0][1] + arr[1][0]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`arr[0][1]` is row 0 column 1 (value 2), and `arr[1][0]` is row 1 column 0 (value 3). The sum $2 + 3 =$ **5**.",
      "expectedOutput": "5",
      "explanation": [
        "Row 0: `arr[0][0] = 1, arr[0][1] = 2`",
        "Row 1: `arr[1][0] = 3, arr[1][1] = 4`",
        "Sum: $2 + 3 = 5$."
      ],
      "interviewTip": "Row-column subscript order in C is always `arr[row][col]`."
    }
  },
  {
    "id": 166,
    "pdfId": "Q165",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Strings",
    "subtopic": "String Length",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[] = \"Placement\";\n    printf(\"%d\", (int)strlen(str));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[] = \"Placement\";\n    printf(\"%d\", (int)strlen(str));\n    return 0;\n}",
    "answer": {
      "directAnswer": "`strlen()` counts characters up to (but not including) the null terminator `'\\0'`. \"Placement\" has **9** characters.",
      "expectedOutput": "9",
      "explanation": [
        "Characters in \"Placement\": P-l-a-c-e-m-e-n-t = 9 characters.",
        "`strlen(str)` returns 9.",
        "*(Note: `sizeof(str)` would be 10 because it includes the terminating `\\0`)*."
      ],
      "interviewTip": "`strlen()` returns visible character length; `sizeof()` returns memory footprint including null byte."
    }
  },
  {
    "id": 167,
    "pdfId": "Q166",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Strings",
    "subtopic": "String Concatenation",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[20] = \"Sona\";\n    char b[] = \"College\";\n    strcat(a, b);\n    printf(\"%s\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[20] = \"Sona\";\n    char b[] = \"College\";\n    strcat(a, b);\n    printf(\"%s\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`strcat` appends \"College\" to the end of \"Sona\" in buffer `a`, producing **SonaCollege**.",
      "expectedOutput": "SonaCollege",
      "explanation": [
        "`a` has 20 bytes of allocated memory, which is large enough to hold 4 + 7 + 1 = 12 characters.",
        "`strcat(a, b)` finds the null character in `a` and copies `b` starting from that position.",
        "Final string in `a` is `\"SonaCollege\"`."
      ],
      "interviewTip": "Always ensure the destination buffer is large enough before calling `strcat` to avoid buffer overflow."
    }
  },
  {
    "id": 168,
    "pdfId": "Q167",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Storage Classes",
    "subtopic": "Static Variable",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count);\n}\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count);\n}\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}",
    "answer": {
      "directAnswer": "The `static` local variable `count` is initialized once and retains its value between calls, printing **1 2 3 **.",
      "expectedOutput": "1 2 3 ",
      "explanation": [
        "1st call: `count` starts at 0, increments to 1, prints `1 `.",
        "2nd call: `count` is 1, increments to 2, prints `2 `.",
        "3rd call: `count` is 2, increments to 3, prints `3 `."
      ],
      "interviewTip": "If `count` were a regular `auto` variable without `static`, it would print `1 1 1 `."
    }
  },
  {
    "id": 169,
    "pdfId": "Q168",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Storage Classes",
    "subtopic": "Auto Variable Scope",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int x = 10;\n    {\n        int x = 20;\n        printf(\"%d \", x);\n    }\n    printf(\"%d\", x);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int x = 10;\n    {\n        int x = 20;\n        printf(\"%d \", x);\n    }\n    printf(\"%d\", x);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The inner block declares a new local variable `x = 20` that shadows the outer `x = 10`. Once the inner block exits, outer `x = 10` is visible again, printing **20 10**.",
      "expectedOutput": "20 10",
      "explanation": [
        "Outer `x` is 10.",
        "Inside inner block `{}`, a new `x` is declared and assigned 20.",
        "Inner `printf` prints `20 `.",
        "Inner block ends, destroying inner `x`.",
        "Outer `printf` prints outer `x` (10)."
      ],
      "interviewTip": "Variables in inner scopes shadow variables with the same name in outer scopes."
    }
  },
  {
    "id": 170,
    "pdfId": "Q169",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Bitwise Operators",
    "subtopic": "Left Shift",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 3;\n    printf(\"%d\", a << 2);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 3;\n    printf(\"%d\", a << 2);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Shifting left by 2 multiplies the value by $2^2 = 4$: $3 \\times 4 =$ **12**.",
      "expectedOutput": "12",
      "explanation": [
        "$a = 3 = 0000 0011_2$.",
        "$a \\ll 2 = 0000 1100_2$.",
        "$0000 1100_2 = 8 + 4 = 12$ in decimal."
      ],
      "interviewTip": "`x << n` is mathematically identical to $x \\times 2^n$ (assuming no integer overflow)."
    }
  },
  {
    "id": 171,
    "pdfId": "Q170",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Bitwise Operators",
    "subtopic": "XOR Operator",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf(\"%d\", a ^ b);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf(\"%d\", a ^ b);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Bitwise XOR sets bits to 1 where operands differ: $5$ (`101_2`) $\\oplus$ $3$ (`011_2`) $=$ `110_2` $=$ **6**.",
      "expectedOutput": "6",
      "explanation": [
        "$5 = 101_2$",
        "$3 = 011_2$",
        "Bit 0: $1 \\oplus 1 = 0$",
        "Bit 1: $0 \\oplus 1 = 1$",
        "Bit 2: $1 \\oplus 0 = 1$",
        "Result: $110_2 = 6$."
      ],
      "interviewTip": "XOR returns 1 for differing bits and 0 for identical bits."
    }
  },
  {
    "id": 172,
    "pdfId": "Q171",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Switch",
    "subtopic": "Fall-through Behaviour",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int x = 2;\n    switch (x) {\n        case 1: printf(\"One\");\n        case 2: printf(\"Two\");\n        case 3: printf(\"Three\"); break;\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int x = 2;\n    switch (x) {\n        case 1: printf(\"One\");\n        case 2: printf(\"Two\");\n        case 3: printf(\"Three\"); break;\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "Because `case 2` lacks a `break;` statement, execution falls through into `case 3` until it hits `break;`, printing **TwoThree**.",
      "expectedOutput": "TwoThree",
      "explanation": [
        "$x = 2$ matches `case 2`, printing `\"Two\"`.",
        "There is no `break` at the end of `case 2`, causing fall-through into `case 3`.",
        "`case 3` prints `\"Three\"` and executes `break`, terminating the switch statement.",
        "Final output: `TwoThree`."
      ],
      "interviewTip": "Switch fall-through is intentional in C, but forgetting `break` is one of the most common logic errors."
    }
  },
  {
    "id": 173,
    "pdfId": "Q172",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Variable Scope",
    "subtopic": "Global vs Local",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint x = 100;\nvoid display() {\n    int x = 10;\n    printf(\"%d \", x);\n}\nint main() {\n    display();\n    printf(\"%d\", x);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint x = 100;\nvoid display() {\n    int x = 10;\n    printf(\"%d \", x);\n}\nint main() {\n    display();\n    printf(\"%d\", x);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Inside `display()`, the local variable `x = 10` takes precedence over global `x`. In `main()`, global `x = 100` is accessed, printing **10 100**.",
      "expectedOutput": "10 100",
      "explanation": [
        "Inside `display()`, local `x = 10` is printed (`10 `).",
        "Inside `main()`, there is no local `x`, so the global variable `x = 100` is printed (`100`)."
      ],
      "interviewTip": "Local variables always shadow global variables within their enclosing scope."
    }
  },
  {
    "id": 174,
    "pdfId": "Q173",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Operators",
    "subtopic": "Logical Operators",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    printf(\"%d\", a && b);\n    printf(\" %d\", a || b);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    printf(\"%d\", a && b);\n    printf(\" %d\", a || b);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Logical AND `0 && 5` evaluates to false (**0**). Logical OR `0 || 5` evaluates to true (**1**). Output is **0 1**.",
      "expectedOutput": "0 1",
      "explanation": [
        "In C, 0 is false and any non-zero value is true.",
        "`a && b` = `0 && 5` = false = `0`.",
        "`a || b` = `0 || 5` = true = `1`.",
        "Output: `0 1`."
      ],
      "interviewTip": "Logical operators in C strictly return `1` (true) or `0` (false)."
    }
  },
  {
    "id": 175,
    "pdfId": "Q174",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Operators",
    "subtopic": "Comma Operator",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a;\n    a = (3, 4, 5);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a;\n    a = (3, 4, 5);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "The comma operator evaluates expressions from left to right and yields the value of the rightmost operand, assigning **5** to `a`.",
      "expectedOutput": "5",
      "explanation": [
        "In `(3, 4, 5)`, the comma operator evaluates 3, then 4, and finally returns 5.",
        "`a = 5`.",
        "*(Note: Without parentheses, `a = 3, 4, 5;` assigns 3 to `a` because `=` has higher precedence than `,`)*."
      ],
      "interviewTip": "The comma operator has the lowest precedence of all operators in C."
    }
  },
  {
    "id": 176,
    "pdfId": "Q175",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Loops",
    "subtopic": "While Loop with Break",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i = 0;\n    while (1) {\n        printf(\"%d \", i);\n        i++;\n        if (i == 3) break;\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i = 0;\n    while (1) {\n        printf(\"%d \", i);\n        i++;\n        if (i == 3) break;\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "Prints `i`, increments it, and breaks when `i` reaches 3, outputting **0 1 2 **.",
      "expectedOutput": "0 1 2 ",
      "explanation": [
        "`i = 0`: prints `0 `, increments to 1.",
        "`i = 1`: prints `1 `, increments to 2.",
        "`i = 2`: prints `2 `, increments to 3. `i == 3` triggers `break`.",
        "Loop terminates, printing `0 1 2 `."
      ],
      "interviewTip": "Order matters: `printf` comes *before* `i++` and `break`, so 0, 1, and 2 are printed."
    }
  },
  {
    "id": 177,
    "pdfId": "Q176",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Functions",
    "subtopic": "Recursion with Multiple Returns",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint fun(int a, int b) {\n    if (b == 0) return 0;\n    return a + fun(a, b - 1);\n}\nint main() {\n    printf(\"%d\", fun(3, 4));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint fun(int a, int b) {\n    if (b == 0) return 0;\n    return a + fun(a, b - 1);\n}\nint main() {\n    printf(\"%d\", fun(3, 4));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Recursively adds `a` exactly `b` times, performing multiplication $3 \\times 4 =$ **12**.",
      "expectedOutput": "12",
      "explanation": [
        "`fun(3, 4) = 3 + fun(3, 3)`",
        "`fun(3, 3) = 3 + fun(3, 2)`",
        "`fun(3, 2) = 3 + fun(3, 1)`",
        "`fun(3, 1) = 3 + fun(3, 0)`",
        "`fun(3, 0) = 0`",
        "Total: $3 + 3 + 3 + 3 + 0 = 12$."
      ],
      "interviewTip": "Multiplication by repeated addition: $a \\times b = \\sum_{i=1}^{b} a$."
    }
  },
  {
    "id": 178,
    "pdfId": "Q177",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Pointers",
    "subtopic": "Array of Pointers",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    int *p[2];\n    p[0] = &a;\n    p[1] = &b;\n    printf(\"%d\", *p[0] + *p[1]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    int *p[2];\n    p[0] = &a;\n    p[1] = &b;\n    printf(\"%d\", *p[0] + *p[1]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "`*p[0]` dereferences `a` (10) and `*p[1]` dereferences `b` (20). The sum $10 + 20 =$ **30**.",
      "expectedOutput": "30",
      "explanation": [
        "`p[0]` holds the memory address of `a`.",
        "`p[1]` holds the memory address of `b`.",
        "`*p[0] = 10` and `*p[1] = 20`.",
        "Sum: $10 + 20 = 30$."
      ],
      "interviewTip": "Array of pointers is commonly used for ragged arrays and command-line arguments (`char *argv[]`)."
    }
  },
  {
    "id": 179,
    "pdfId": "Q178",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Structures",
    "subtopic": "Structure Member Access",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nstruct Student {\n    int marks;\n};\nint main() {\n    struct Student s = {85};\n    s.marks += 10;\n    printf(\"%d\", s.marks);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Student {\n    int marks;\n};\nint main() {\n    struct Student s = {85};\n    s.marks += 10;\n    printf(\"%d\", s.marks);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Member access via the dot operator modifies `marks` from 85 to $85 + 10 =$ **95**.",
      "expectedOutput": "95",
      "explanation": [
        "`s.marks` is initialized to 85.",
        "`s.marks += 10` updates it to 95.",
        "`printf(\"%d\", s.marks)` prints 95."
      ],
      "interviewTip": "Use the dot operator `.` for direct structure variables and arrow `->` for structure pointers."
    }
  },
  {
    "id": 180,
    "pdfId": "Q179",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Unions",
    "subtopic": "Union Memory Sharing",
    "difficulty": "Medium",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nunion Data {\n    int i;\n    char c;\n};\nint main() {\n    union Data d;\n    d.i = 65;\n    printf(\"%c\", d.c);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nunion Data {\n    int i;\n    char c;\n};\nint main() {\n    union Data d;\n    d.i = 65;\n    printf(\"%c\", d.c);\n    return 0;\n}",
    "answer": {
      "directAnswer": "In a union, `d.i` and `d.c` share the same memory location. On little-endian systems, the lowest byte of $65$ corresponds to ASCII value 65 ('A'), printing **A**.",
      "expectedOutput": "A",
      "explanation": [
        "In `union Data`, both `int i` and `char c` start at the same byte.",
        "$65 = 0x00000041$.",
        "The first byte in memory is `0x41`.",
        "`printf(\"%c\", d.c)` prints character corresponding to ASCII 65, which is `'A'`."
      ],
      "interviewTip": "Unions allow type-punning (interpreting the memory representation of one type as another)."
    }
  },
  {
    "id": 181,
    "pdfId": "Q180",
    "sectionId": 4,
    "sectionName": "Section 4: Output Prediction Questions",
    "topic": "Enumeration",
    "subtopic": "enum Default Values",
    "difficulty": "Basic",
    "type": "Output Prediction",
    "question": "Predict the output of the following program:\n\n#include <stdio.h>\nenum Day { MON, TUE, WED };\nint main() {\n    enum Day d = WED;\n    printf(\"%d\", d);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nenum Day { MON, TUE, WED };\nint main() {\n    enum Day d = WED;\n    printf(\"%d\", d);\n    return 0;\n}",
    "answer": {
      "directAnswer": "By default, enum constants start at 0: `MON = 0`, `TUE = 1`, `WED = 2`. Printing `WED` outputs **2**.",
      "expectedOutput": "2",
      "explanation": [
        "Default enum numbering assigns consecutive integers starting from 0.",
        "`MON = 0`",
        "`TUE = 1`",
        "`WED = 2`",
        "`d = WED` -> prints 2."
      ],
      "interviewTip": "In C, enums are treated internally as `int`s and can be printed with `%d`."
    }
  },
  {
    "id": 182,
    "pdfId": "Q181",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Semicolon Errors",
    "subtopic": "Misplaced Semicolon",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++);\n    {\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++);\n    {\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "The semicolon `;` immediately after the `for` loop header creates an empty body loop. The loop iterates 5 times doing nothing, and the subsequent block `{ printf(\"%d \", i); }` executes only once after the loop finishes, printing **5** instead of 0 to 4.",
      "identifiedBug": "Unintentional semicolon `;` at the end of the `for` loop header.",
      "whyItHappens": "In C, a semicolon acts as a null statement. Placing `;` after `for (...)` terminates the loop's body immediately, disconnecting the loop from the intended curly brace block `{ ... }`.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int i;\n    // Corrected: Removed stray semicolon\n    for (i = 0; i < 5; i++) {\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
      "expectedOutput": "0 1 2 3 4 ",
      "interviewTip": "Never place a semicolon after `if (...)`, `for (...)`, or `while (...)` unless you intentionally want an empty body."
    }
  },
  {
    "id": 183,
    "pdfId": "Q182",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Semicolon Errors",
    "subtopic": "Missing Semicolon",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 5\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 5\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compilation error: missing statement terminator semicolon `;` after `int a = 5`.",
      "identifiedBug": "Syntax error: Missing semicolon at the end of variable declaration `int a = 5`.",
      "whyItHappens": "In C, all statements must be terminated by a semicolon `;`. Without it, the compiler parser attempts to parse `int a = 5 printf(...)` as a single statement, triggering a syntax error: 'expected \";\" before \"printf\"'.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int a = 5; // Corrected: Added semicolon\n    printf(\"%d\", a);\n    return 0;\n}",
      "expectedOutput": "5",
      "interviewTip": "Every statement in C must end with a semicolon `;`, except preprocessor directives and compound block definitions."
    }
  },
  {
    "id": 184,
    "pdfId": "Q183",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Braces",
    "subtopic": "Missing Braces in If-Else",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    if (a > 5)\n        printf(\"Greater\");\n        printf(\"Than 5\");\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 10;\n    if (a > 5)\n        printf(\"Greater\");\n        printf(\"Than 5\");\n    return 0;\n}",
    "answer": {
      "directAnswer": "Logical bug: Without curly braces `{}`, only the single statement `printf(\"Greater\");` belongs to the `if` body. `printf(\"Than 5\");` is outside the `if` and will ALWAYS execute regardless of the condition.",
      "identifiedBug": "Missing curly braces `{}` around multi-statement conditional block.",
      "whyItHappens": "C does not use Python-style significant whitespace or indentation. Without braces, an `if` statement binds exclusively to the single statement immediately following it.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int a = 10;\n    // Corrected: Enclosed both statements in braces\n    if (a > 5) {\n        printf(\"Greater\");\n        printf(\"Than 5\");\n    }\n    return 0;\n}",
      "expectedOutput": "GreaterThan 5",
      "interviewTip": "Always use curly braces `{}` even for single-line `if` statements to eliminate subtle bugs like Apple's famous 'goto fail' SSL vulnerability."
    }
  },
  {
    "id": 185,
    "pdfId": "Q184",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Braces",
    "subtopic": "Unbalanced Braces",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 3; i++) {\n        printf(\"%d \", i);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 3; i++) {\n        printf(\"%d \", i);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Syntax compilation error: Unbalanced braces. The `for` loop opens an opening brace `{` that is never closed with `}`, causing the compiler to hit premature end-of-file.",
      "identifiedBug": "Missing closing curly brace `}` for the `for` loop.",
      "whyItHappens": "Every opening brace `{` in C must have a matching closing brace `}`. Here, `main()` has an opening brace and `for` has an opening brace, but only one closing brace appears.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 3; i++) {\n        printf(\"%d \", i);\n    } // Corrected: Added closing brace for loop\n    return 0;\n}",
      "expectedOutput": "0 1 2 ",
      "interviewTip": "Modern IDEs highlight bracket pairs, but in paper coding interviews, always count your opening and closing braces."
    }
  },
  {
    "id": 186,
    "pdfId": "Q185",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Pointers",
    "subtopic": "Uninitialized Pointer",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int *p;\n    *p = 10;\n    printf(\"%d\", *p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int *p;\n    *p = 10;\n    printf(\"%d\", *p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Critical runtime error (Segmentation Fault): Dereferencing an uninitialized wild pointer. `p` holds random garbage memory; writing `*p = 10` corrupts arbitrary memory.",
      "identifiedBug": "Dereference of uninitialized pointer (`wild pointer`).",
      "whyItHappens": "Local pointer variable `int *p` is allocated on the stack with whatever garbage bits were left in that stack frame. Attempting to write through `*p` writes to an illegal memory location, triggering an OS memory protection fault (`SIGSEGV`).",
      "codeExample": "#include <stdio.h>\nint main() {\n    int val;\n    int *p = &val; // Corrected: Point to a valid memory location\n    *p = 10;\n    printf(\"%d\", *p);\n    return 0;\n}",
      "expectedOutput": "10",
      "interviewTip": "Never dereference a pointer before initializing it to a valid variable address (`&var`) or dynamic memory (`malloc`)."
    }
  },
  {
    "id": 187,
    "pdfId": "Q186",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Pointers",
    "subtopic": "Wrong Dereference",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p;\n    p = a;\n    printf(\"%d\", *p);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p;\n    p = a;\n    printf(\"%d\", *p);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compilation error: `p = a` assigns an integer value (10) directly to a pointer without the address-of operator `&`. At runtime, `*p` attempts to dereference memory address `0x0000000A`, causing a crash.",
      "identifiedBug": "Assigning variable value instead of address: `p = a` instead of `p = &a`.",
      "whyItHappens": "Pointers require memory addresses. Writing `p = a` treats the integer value 10 as an absolute memory address in RAM, which belongs to protected kernel space.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p;\n    p = &a; // Corrected: Use address-of operator &\n    printf(\"%d\", *p);\n    return 0;\n}",
      "expectedOutput": "10",
      "interviewTip": "Pointers store addresses (`p = &a`), while dereferenced pointers access values (`*p = a`)."
    }
  },
  {
    "id": 188,
    "pdfId": "Q187",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Arrays",
    "subtopic": "Array Index Out of Bounds",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int i;\n    for (i = 0; i <= 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int i;\n    for (i = 0; i <= 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
    "answer": {
      "directAnswer": "Off-by-one bug: `i <= 5` accesses `arr[5]`, which is outside the bounds of array `arr[5]` (valid indices are 0 to 4), reading unallocated garbage memory.",
      "identifiedBug": "Array index out of bounds (`arr[5]`).",
      "whyItHappens": "In C, arrays are 0-indexed. An array of size 5 has valid elements `arr[0]` through `arr[4]`. C does not perform runtime bounds checking, so `arr[5]` accesses adjacent memory on the stack (undefined behavior).",
      "codeExample": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int i;\n    // Corrected: Use i < 5 instead of i <= 5\n    for (i = 0; i < 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
      "expectedOutput": "1 2 3 4 5 ",
      "interviewTip": "Classic off-by-one fencepost error: always use `i < SIZE` when iterating over 0-indexed arrays."
    }
  },
  {
    "id": 189,
    "pdfId": "Q188",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Arrays",
    "subtopic": "Wrong Array Initialization",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int arr[5];\n    arr = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[0]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int arr[5];\n    arr = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[0]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compilation error: An array cannot be assigned using brace initialization `{ ... }` after its declaration. In C, array names are constant pointers (non-modifiable lvalues).",
      "identifiedBug": "Illegal assignment to array type: `arr = {1, 2, 3, 4, 5};`.",
      "whyItHappens": "Initializer lists `{ ... }` are valid only at the point of declaration. Once declared, an array's identifier is a non-assignable constant pointer representing its base address.",
      "codeExample": "#include <stdio.h>\nint main() {\n    // Corrected: Initialize at declaration\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[0]);\n    return 0;\n}",
      "expectedOutput": "1",
      "interviewTip": "You cannot assign one array directly to another (`arr1 = arr2` is illegal). You must copy elements using a loop or `memcpy()`."
    }
  },
  {
    "id": 190,
    "pdfId": "Q189",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Strings",
    "subtopic": "Buffer Overflow",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[5];\n    strcpy(str, \"Placement\");\n    printf(\"%s\", str);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[5];\n    strcpy(str, \"Placement\");\n    printf(\"%s\", str);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Buffer overflow: \"Placement\" requires 10 bytes (9 characters + 1 null terminator `'\\0'`), but buffer `str` is allocated only 5 bytes, corrupting adjacent stack memory.",
      "identifiedBug": "Buffer overflow caused by `strcpy` into an undersized buffer.",
      "whyItHappens": "`strcpy()` blindly copies bytes until it encounters `'\\0'`. Writing 10 bytes into a 5-byte stack buffer overwrites adjacent variables or stack frame return addresses.",
      "codeExample": "#include <stdio.h>\n#include <string.h>\nint main() {\n    // Corrected: Allocate at least 10 bytes for \"Placement\" + '\\0'\n    char str[15];\n    strcpy(str, \"Placement\");\n    printf(\"%s\", str);\n    return 0;\n}",
      "expectedOutput": "Placement",
      "interviewTip": "Always allocate at least `strlen(source) + 1` bytes for the destination string buffer."
    }
  },
  {
    "id": 191,
    "pdfId": "Q190",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Strings",
    "subtopic": "Missing String Header",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    char str1[20] = \"Hello\";\n    char str2[] = \"World\";\n    strcat(str1, str2);\n    printf(\"%s\", str1);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    char str1[20] = \"Hello\";\n    char str2[] = \"World\";\n    strcat(str1, str2);\n    printf(\"%s\", str1);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compiler warning/error: Function `strcat` is used without including `<string.h>`, leading to an implicit function declaration error.",
      "identifiedBug": "Missing `#include <string.h>` header file.",
      "whyItHappens": "`strcat()` is declared in the standard library header `<string.h>`. In C99 and modern C standards, using standard library functions without including their prototype header is disallowed.",
      "codeExample": "#include <stdio.h>\n#include <string.h> // Corrected: Included header for strcat\n\nint main() {\n    char str1[20] = \"Hello\";\n    char str2[] = \"World\";\n    strcat(str1, str2);\n    printf(\"%s\", str1);\n    return 0;\n}",
      "expectedOutput": "HelloWorld",
      "interviewTip": "Always include `<string.h>` for string manipulation functions (`strlen`, `strcpy`, `strcat`, `strcmp`)."
    }
  },
  {
    "id": 192,
    "pdfId": "Q191",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Functions",
    "subtopic": "Missing Return Statement",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint square(int n) {\n    int result = n * n;\n}\nint main() {\n    printf(\"%d\", square(5));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint square(int n) {\n    int result = n * n;\n}\nint main() {\n    printf(\"%d\", square(5));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Missing return statement: `square` is declared with return type `int`, but does not return any value, returning garbage register data to `main`.",
      "identifiedBug": "Non-void function lacks a `return` statement.",
      "whyItHappens": "When a non-void function reaches the end of its block without a `return` statement, the caller reads whatever value happens to be in the CPU return register (`EAX` / `RAX`), which is undefined garbage.",
      "codeExample": "#include <stdio.h>\nint square(int n) {\n    int result = n * n;\n    return result; // Corrected: Return the calculated value\n}\nint main() {\n    printf(\"%d\", square(5));\n    return 0;\n}",
      "expectedOutput": "25",
      "interviewTip": "Enabling compiler flag `-Wall` immediately warns: 'control reaches end of non-void function'."
    }
  },
  {
    "id": 193,
    "pdfId": "Q192",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Functions",
    "subtopic": "Function Prototype Mismatch",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint add(int a, int b);\nint main() {\n    printf(\"%d\", add(5, 10, 15));\n    return 0;\n}\nint add(int a, int b) {\n    return a + b;\n}",
    "givenCode": "#include <stdio.h>\nint add(int a, int b);\nint main() {\n    printf(\"%d\", add(5, 10, 15));\n    return 0;\n}\nint add(int a, int b) {\n    return a + b;\n}",
    "answer": {
      "directAnswer": "Compilation error: Function prototype `int add(int a, int b)` accepts exactly 2 arguments, but `add(5, 10, 15)` passes 3 arguments.",
      "identifiedBug": "Argument count mismatch: Passed 3 arguments to a 2-parameter function.",
      "whyItHappens": "The compiler uses the prototype declaration to enforce type and argument quantity checking. The third argument 15 violates the function signature.",
      "codeExample": "#include <stdio.h>\nint add(int a, int b);\nint main() {\n    // Corrected: Pass exactly 2 arguments matching prototype\n    printf(\"%d\", add(5, 10));\n    return 0;\n}\nint add(int a, int b) {\n    return a + b;\n}",
      "expectedOutput": "15",
      "interviewTip": "This highlights why prototypes are critical: they allow the compiler to detect mismatched argument counts before linking."
    }
  },
  {
    "id": 194,
    "pdfId": "Q193",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Recursion",
    "subtopic": "Missing Base Case",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint factorial(int n) {\n    return n * factorial(n - 1);\n}\nint main() {\n    printf(\"%d\", factorial(5));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint factorial(int n) {\n    return n * factorial(n - 1);\n}\nint main() {\n    printf(\"%d\", factorial(5));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Runtime crash (Stack Overflow): The recursive function `factorial` lacks a base case, continuing to call itself with negative numbers indefinitely ($5, 4, 3, 2, 1, 0, -1, -2...$).",
      "identifiedBug": "Missing Base Case in recursive function.",
      "whyItHappens": "Every recursive call allocates a stack frame. Without a terminating condition like `if (n <= 1) return 1;`, calls continue until stack memory is exhausted, causing a segmentation fault.",
      "codeExample": "#include <stdio.h>\nint factorial(int n) {\n    // Corrected: Added base case\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    printf(\"%d\", factorial(5));\n    return 0;\n}",
      "expectedOutput": "120",
      "interviewTip": "Always write and verify the Base Case first before writing recursive logic."
    }
  },
  {
    "id": 195,
    "pdfId": "Q194",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Recursion",
    "subtopic": "Incorrect Recursive Call",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint sum(int n) {\n    if (n == 0)\n        return 0;\n    return n + sum(n);\n}\nint main() {\n    printf(\"%d\", sum(5));\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint sum(int n) {\n    if (n == 0)\n        return 0;\n    return n + sum(n);\n}\nint main() {\n    printf(\"%d\", sum(5));\n    return 0;\n}",
    "answer": {
      "directAnswer": "Runtime crash (Stack Overflow): The recursive call passes `n` instead of `n - 1`, calling `sum(5)` with parameter 5 forever without converging to the base case `n == 0`.",
      "identifiedBug": "Recursive call does not progress toward base case: `sum(n)` instead of `sum(n - 1)`.",
      "whyItHappens": "For recursion to terminate, each recursive invocation must move closer to the base case. Calling `sum(n)` creates an infinite recursion loop.",
      "codeExample": "#include <stdio.h>\nint sum(int n) {\n    if (n == 0)\n        return 0;\n    // Corrected: Decrement n toward base case\n    return n + sum(n - 1);\n}\nint main() {\n    printf(\"%d\", sum(5));\n    return 0;\n}",
      "expectedOutput": "15",
      "interviewTip": "Recursive step must strictly reduce the problem size: $n \\to n - 1$."
    }
  },
  {
    "id": 196,
    "pdfId": "Q195",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "malloc()",
    "subtopic": "Missing Header for malloc",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int *p = malloc(5 * sizeof(int));\n    p[0] = 10;\n    printf(\"%d\", p[0]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int *p = malloc(5 * sizeof(int));\n    p[0] = 10;\n    printf(\"%d\", p[0]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compilation warning/error: `malloc` is used without including `<stdlib.h>`. In addition, dynamically allocated memory is never released with `free(p)`.",
      "identifiedBug": "Missing `#include <stdlib.h>` header for `malloc()`.",
      "whyItHappens": "`malloc` is declared in `<stdlib.h>`. Without it, older C compilers assume `int malloc()` (which truncates 64-bit pointers to 32-bit integers, causing crashes on 64-bit systems), while modern compilers produce an error.",
      "codeExample": "#include <stdio.h>\n#include <stdlib.h> // Corrected: Included stdlib.h\n\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    if (p == NULL) return 1; // Good practice: check NULL\n    p[0] = 10;\n    printf(\"%d\", p[0]);\n    free(p); // Good practice: free heap memory\n    return 0;\n}",
      "expectedOutput": "10",
      "interviewTip": "Always include `<stdlib.h>` when using `malloc`, `calloc`, `realloc`, or `free`."
    }
  },
  {
    "id": 197,
    "pdfId": "Q196",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "malloc()",
    "subtopic": "Not Freeing Memory / NULL Check",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    p[10] = 100;\n    printf(\"%d\", p[10]);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    p[10] = 100;\n    printf(\"%d\", p[10]);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Three bugs: 1. Heap buffer overflow (`p[10]` writes outside the 5-element allocation). 2. Missing `NULL` check after `malloc`. 3. Missing `free(p)` causing memory leak.",
      "identifiedBug": "Buffer overflow on heap (`p[10]` on a 5-element array), missing NULL check, and missing `free()`.",
      "whyItHappens": "`malloc(5 * sizeof(int))` allocates space for indices 0 to 4. Writing to `p[10]` corrupts heap metadata (heap corruption crash).",
      "codeExample": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Corrected: Allocate 11 elements to safely access index 10\n    int *p = (int *)malloc(11 * sizeof(int));\n    if (p == NULL) {\n        printf(\"Memory allocation failed\\n\");\n        return 1;\n    }\n    p[10] = 100;\n    printf(\"%d\", p[10]);\n    free(p); // Freed memory\n    return 0;\n}",
      "expectedOutput": "100",
      "interviewTip": "Corrupting heap boundaries leads to crashes when subsequent calls to `malloc` or `free` run."
    }
  },
  {
    "id": 198,
    "pdfId": "Q197",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "scanf()",
    "subtopic": "Missing Address Operator",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", a);\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Runtime crash (Segmentation Fault): `scanf(\"%d\", a)` passes uninitialized value of `a` instead of its address `&a`.",
      "identifiedBug": "Missing address-of operator `&` in `scanf`.",
      "whyItHappens": "`scanf` requires a memory address to write the parsed input. Passing `a` (which contains uninitialized garbage) causes `scanf` to write to an invalid memory location.",
      "codeExample": "#include <stdio.h>\nint main() {\n    int a;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &a); // Corrected: Passed &a\n    printf(\"%d\", a);\n    return 0;\n}",
      "interviewTip": "Only array/string identifiers do not require `&` in `scanf` (e.g. `scanf(\"%s\", str)`) because array names decay to addresses automatically."
    }
  },
  {
    "id": 199,
    "pdfId": "Q198",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "printf()",
    "subtopic": "Format Specifier Mismatch",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    float a = 10.5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    float a = 10.5;\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Undefined behavior / garbage output: `%d` expects an integer, but `a` is a `float` (promoted to 64-bit IEEE 754 `double`). Printing with `%d` misinterprets floating-point bit layout.",
      "identifiedBug": "Format specifier mismatch: `%d` used for floating-point variable.",
      "whyItHappens": "`printf` relies entirely on the format string to interpret argument bytes pushed onto the stack or registers. Floating point values are passed in XMM/floating-point registers, whereas `%d` reads from general-purpose registers (`ESI`/`EDX`), producing 0 or garbage.",
      "codeExample": "#include <stdio.h>\nint main() {\n    float a = 10.5;\n    // Corrected: Use %f for float (or cast explicitly)\n    printf(\"%.1f\", a);\n    return 0;\n}",
      "expectedOutput": "10.5",
      "interviewTip": "Always match types: `%d` for `int`, `%f` for `float`/`double`, `%c` for `char`, `%s` for string, `%p` for pointer."
    }
  },
  {
    "id": 200,
    "pdfId": "Q199",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Bitwise Operators",
    "subtopic": "Confusing && with &",
    "difficulty": "Medium",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 6, b = 3;\n    if (a & b)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nint main() {\n    int a = 6, b = 3;\n    if (a & b)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
    "answer": {
      "directAnswer": "Logical bug: The programmer likely intended logical AND (`&&`) to check if both $a$ and $b$ are non-zero (which would be True), but used bitwise AND (`&`). Since $6$ (`110_2$) and $3$ (`011_2`) share bit 1 (`010_2 = 2` $\\neq 0$), it coincidentally evaluates to True, but will fail for cases like $4 \\& 3 = 0$.",
      "identifiedBug": "Confusing bitwise AND `&` with logical AND `&&`.",
      "whyItHappens": "`&&` checks boolean truth of two operands. `&` performs bit-by-bit masking. If $a = 4$ (`100_2`) and $b = 3$ (`011_2`), both are positive (true), but `4 & 3 == 0` (false)!",
      "codeExample": "#include <stdio.h>\nint main() {\n    int a = 6, b = 3;\n    // Corrected: Use logical AND && for boolean condition\n    if (a && b)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
      "expectedOutput": "True",
      "interviewTip": "Always use `&&` for condition checking and reserve `&` strictly for bit manipulation and masking."
    }
  },
  {
    "id": 201,
    "pdfId": "Q200",
    "sectionId": 5,
    "sectionName": "Section 5: Debugging Questions",
    "topic": "Structures",
    "subtopic": "Wrong Member Access Operator",
    "difficulty": "Basic",
    "type": "Debugging",
    "question": "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nstruct Student {\n    int roll;\n    char name[20];\n};\nint main() {\n    struct Student s;\n    s->roll = 1;\n    printf(\"%d\", s.roll);\n    return 0;\n}",
    "givenCode": "#include <stdio.h>\nstruct Student {\n    int roll;\n    char name[20];\n};\nint main() {\n    struct Student s;\n    s->roll = 1;\n    printf(\"%d\", s.roll);\n    return 0;\n}",
    "answer": {
      "directAnswer": "Compilation error: `s` is a concrete structure variable, not a pointer. The arrow operator `->` is used exclusively with pointers to structures. For regular structure variables, use the dot operator `.`: `s.roll = 1;`.",
      "identifiedBug": "Using arrow operator `->` instead of dot operator `.` on a non-pointer structure.",
      "whyItHappens": "The operator `->` is syntactic sugar for `(*ptr).member`. Applying `->` to a non-pointer variable `s` triggers a compiler error: 'invalid type argument of \"->\" (have \"struct Student\")'.",
      "codeExample": "#include <stdio.h>\nstruct Student {\n    int roll;\n    char name[20];\n};\nint main() {\n    struct Student s;\n    s.roll = 1; // Corrected: Use dot operator .\n    printf(\"%d\", s.roll);\n    return 0;\n}",
      "expectedOutput": "1",
      "interviewTip": "Rule: If it's a variable or object, use `.` (dot). If it's an address or pointer, use `->` (arrow)."
    }
  }
];
