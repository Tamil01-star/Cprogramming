// Section 1: Technical Interview Questions (Q1 to Q51)
// Extracted and curated from C_Programming_Mock_Interview_Question_Bank.pdf

module.exports = [
  {
    id: 1,
    pdfId: "Q1",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Basics of C",
    subtopic: "Language Fundamentals",
    difficulty: "Basic",
    type: "Theory",
    question: "What are the key features of the C programming language?",
    answer: {
      directAnswer: "C is a procedural, general-purpose, middle-level programming language developed by Dennis Ritchie at Bell Labs in 1972, known for its high execution speed, hardware-level memory access, and high portability.",
      explanation: [
        "**Middle-Level Language**: Combines the high-level language user-friendliness with low-level assembly language speed and direct hardware control (via pointers and bitwise operators).",
        "**Structured & Modular**: Supports functions and code blocks that allow breaking complex programs into manageable, reusable modules.",
        "**Speed & Efficiency**: Compiles directly into native machine code with minimal runtime overhead, making it ideal for operating systems, compilers, and embedded systems.",
        "**Rich Library Support**: Standard C Library (`libc`) provides extensive built-in functions for I/O, mathematical computations, memory allocation, and string operations.",
        "**Extensibility**: Functions and libraries can be easily written and incorporated into existing programs."
      ],
      interviewTip: "When interviewers ask why C is called a 'middle-level' language, emphasize that it provides abstraction (like loops and functions) while still allowing direct hardware manipulation via memory addresses and pointers."
    }
  },
  {
    id: 2,
    pdfId: "Q2",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Basics of C",
    subtopic: "Compilation Process",
    difficulty: "Basic",
    type: "Theory",
    question: "Explain the steps involved in compiling and executing a C program.",
    answer: {
      directAnswer: "The compilation process of a C program converts human-readable source code (.c) into machine-executable binary (.exe / a.out) through four sequential stages: Preprocessing, Compilation, Assembly, and Linking.",
      explanation: [
        "**1. Preprocessing (`gcc -E file.c -o file.i`)**: Expands header files (`#include`), substitutes macros (`#define`), and strips source comments. Generates `.i` file.",
        "**2. Compilation (`gcc -S file.i -o file.s`)**: Analyzes C syntax, semantics, and optimizes code to translate C code into architecture-specific Assembly code. Generates `.s` file.",
        "**3. Assembly (`gcc -c file.s -o file.o`)**: The Assembler translates assembly code into relocatable machine-readable machine code (Object file). Generates `.o` or `.obj` file.",
        "**4. Linking (`gcc file.o -o file.exe`)**: The Linker merges object code with system library code (e.g. `printf` from `libc`) and resolves external references to produce the final executable binary."
      ],
      comparisonTable: {
        headers: ["Stage", "Input", "Tool", "Output File"],
        rows: [
          ["Preprocessing", ".c (Source Code)", "Preprocessor (`cpp`)", ".i (Expanded Source)"],
          ["Compilation", ".i (Expanded)", "Compiler (`cc1`)", ".s (Assembly Code)"],
          ["Assembly", ".s (Assembly)", "Assembler (`as`)", ".o / .obj (Object Code)"],
          ["Linking", ".o + Libraries", "Linker (`ld`)", ".exe / a.out (Executable)"]
        ]
      },
      interviewTip: "Remember the acronym **P-C-A-L**: Preprocessing → Compilation → Assembly → Linking."
    }
  },
  {
    id: 3,
    pdfId: "Q3",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Basics of C",
    subtopic: "Header Files",
    difficulty: "Basic",
    type: "Theory",
    question: "What is the purpose of the #include directive and header files in C?",
    answer: {
      directAnswer: "The `#include` preprocessor directive tells the preprocessor to insert the contents of the specified header file into the current source file before actual compilation begins.",
      explanation: [
        "**Purpose of Header Files (`.h`)**: Header files contain function declarations (prototypes), macro definitions, type definitions (`typedef`), and struct definitions shared across multiple source files.",
        "**Angle Brackets `<filename.h>`**: Tells the preprocessor to search in the standard system library directories (e.g., `#include <stdio.h>`).",
        "**Double Quotes `\"filename.h\"`**: Instructs the preprocessor to first search in the current working project directory; if not found, it falls back to system include directories."
      ],
      codeExample: `#include <stdio.h>   // System header for standard I/O (printf, scanf)
#include "myconfig.h" // User-defined custom header in local folder

int main() {
    printf("Standard header used.\\n");
    return 0;
}`,
      interviewTip: "Never include `.c` files using `#include`. Include only `.h` header files containing declarations to prevent duplicate symbol linker errors."
    }
  },
  {
    id: 4,
    pdfId: "Q4",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Basics of C",
    subtopic: "Keywords vs Identifiers",
    difficulty: "Basic",
    type: "Theory",
    question: "Differentiate between a keyword and an identifier in C.",
    answer: {
      directAnswer: "Keywords are predefined, reserved words having fixed meanings recognized by the compiler, while identifiers are programmer-defined names given to program entities like variables, functions, and arrays.",
      comparisonTable: {
        headers: ["Feature", "Keyword", "Identifier"],
        rows: [
          ["Definition", "Predefined reserved words in the language", "User-defined names for variables, functions, tags"],
          ["Total Count", "32 in standard C89 (44 in C99/C11)", "Unlimited user-created names"],
          ["Case", "Must always be lowercase in C", "Can have uppercase, lowercase, digits, and `_`"],
          ["Meaning", "Fixed meaning; compiler knows their action", "Meaning determined by programmer"],
          ["Special Characters", "No special symbols allowed", "Cannot use special characters except underscore `_`"],
          ["Examples", "`int`, `return`, `for`, `volatile`, `sizeof`", "`studentAge`, `calcSum`, `MAX_BUFFER`"]
        ]
      },
      interviewTip: "Can a keyword be used as a variable identifier? No, doing so triggers a compilation syntax error."
    }
  },
  {
    id: 5,
    pdfId: "Q5",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Data Types",
    subtopic: "Data Type Sizes",
    difficulty: "Basic",
    type: "Theory",
    question: "What is the difference between int, float, and double data types?",
    answer: {
      directAnswer: "`int` stores whole integer numbers without fractional parts, `float` stores single-precision 32-bit floating-point decimal numbers, and `double` stores double-precision 64-bit floating-point numbers with higher precision.",
      comparisonTable: {
        headers: ["Data Type", "Typical Size", "Format Specifier", "Precision", "Range"],
        rows: [
          ["`int`", "4 bytes (32-bit arch)", "`%d` or `%i`", "Whole numbers only", "-2,147,483,648 to 2,147,483,647"],
          ["`float`", "4 bytes (32 bits)", "`%f`", "6 to 7 decimal digits", "~1.2E-38 to ~3.4E+38"],
          ["`double`", "8 bytes (64 bits)", "`%lf`", "15 to 17 decimal digits", "~2.3E-308 to ~1.7E+308"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int count = 42;
    float pi_f = 3.141592f;
    double pi_d = 3.141592653589793;

    printf("int: %d (size: %zu)\\n", count, sizeof(count));
    printf("float: %f (size: %zu)\\n", pi_f, sizeof(pi_f));
    printf("double: %lf (size: %zu)\\n", pi_d, sizeof(pi_d));
    return 0;
}`,
      interviewTip: "In `scanf()`, you must use `%f` for `float` and `%lf` for `double`. In `printf()`, `%f` works for both due to default argument promotions, but using `%lf` for double is modern best practice."
    }
  },
  {
    id: 6,
    pdfId: "Q6",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Data Types",
    subtopic: "Type Modifiers",
    difficulty: "Basic",
    type: "Theory",
    question: "Explain the use of signed, unsigned, short, and long type modifiers.",
    answer: {
      directAnswer: "Type modifiers in C alter the data storage size or range of basic types (primarily `int` and `char`) to optimize memory and handle specific value ranges.",
      explanation: [
        "**`signed`**: Stores both positive and negative values. The most significant bit (MSB) acts as the sign bit (0 for positive, 1 for negative). Default for integer types.",
        "**`unsigned`**: Stores strictly non-negative values (0 and positive). The MSB is part of the magnitude, doubling the positive range (e.g. `unsigned int` is 0 to 4,294,967,295).",
        "**`short`**: Restricts the integer to at least 16 bits (typically 2 bytes), reducing memory consumption when smaller values suffice.",
        "**`long`**: Expands the integer size to at least 32 bits (and typically 64 bits on 64-bit systems), or `long double` for 80/128-bit floating-point numbers."
      ],
      codeExample: `#include <stdio.h>

int main() {
    short int s = 32767;              // 2 bytes: -32768 to 32767
    unsigned short int us = 65535;    // 2 bytes: 0 to 65535
    long int l = 2147483647L;         // 4 or 8 bytes
    unsigned int u = 4000000000U;     // 4 bytes: 0 to 4.29 billion

    printf("short: %d, unsigned short: %u\\n", s, us);
    return 0;
}`,
      interviewTip: "Remember that assigning a negative value to an `unsigned int` does not cause a compilation error; it wraps around modulo $2^{32}$ into a very large positive number."
    }
  },
  {
    id: 7,
    pdfId: "Q7",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Data Types",
    subtopic: "Type Casting",
    difficulty: "Medium",
    type: "Theory",
    question: "Differentiate between implicit and explicit type conversion with examples.",
    answer: {
      directAnswer: "Implicit type conversion (coercion) is performed automatically by the compiler to prevent data loss when mixing types, whereas explicit type conversion (type casting) is manually enforced by the programmer using the cast operator `(type)`.",
      comparisonTable: {
        headers: ["Feature", "Implicit Conversion (Widening)", "Explicit Conversion (Type Casting)"],
        rows: [
          ["Initiator", "Performed automatically by compiler", "Manually specified by programmer"],
          ["Direction", "Lower data type promoted to higher data type", "Can be higher to lower or vice-versa"],
          ["Data Loss", "No loss of precision or information", "May cause truncation or loss of precision"],
          ["Syntax", "Automatic: `int a = 5; float b = a;`", "Cast operator: `(type)expression`"],
          ["Example", "`double d = 10; // 10 -> 10.0`", "`int a = (int)3.99; // a becomes 3`"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int a = 5, b = 2;

    // Implicit: Integer division truncates to 2, then assigned to float 2.0
    float res1 = a / b;

    // Explicit: 'a' cast to float, forces floating-point division yielding 2.5
    float res2 = (float)a / b;

    printf("Implicit: %f\\n", res1); // 2.000000
    printf("Explicit: %f\\n", res2); // 2.500000
    return 0;
}`,
      interviewTip: "A classic interview viva trap is `float x = 5 / 2;`. Students expect 2.5, but in C `5 / 2` is integer division yielding `2`, which is then implicitly cast to `2.0`."
    }
  },
  {
    id: 8,
    pdfId: "Q8",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Variables",
    subtopic: "Declaration vs Definition",
    difficulty: "Basic",
    type: "Theory",
    question: "What is the difference between declaration and definition of a variable?",
    answer: {
      directAnswer: "A variable declaration informs the compiler about the variable's name and type without allocating memory, while a variable definition specifies the type, name, and physically allocates storage in memory.",
      comparisonTable: {
        headers: ["Aspect", "Declaration", "Definition"],
        rows: [
          ["Memory Allocation", "No memory is allocated", "Memory is allocated immediately"],
          ["Frequency", "Can be declared multiple times", "Can be defined only once in a scope"],
          ["Compiler Role", "Tells compiler: 'This entity exists elsewhere'", "Allocates address space in RAM"],
          ["Keyword used", "Often preceded by `extern`", "Type followed by name (e.g. `int x;`)"],
          ["Example", "`extern int counter;`", "`int counter = 10;` or `int counter;`"]
        ]
      },
      codeExample: `#include <stdio.h>

// Declaration: Tells compiler 'val' exists in some translation unit
extern int val; 

// Definition: Memory is allocated for 'total'
int total = 100; 

int main() {
    printf("total defined with memory = %d\\n", total);
    return 0;
}`,
      interviewTip: "In C, `int a;` outside or inside a function is both a declaration AND a tentative definition because storage is reserved."
    }
  },
  {
    id: 9,
    pdfId: "Q9",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Variables",
    subtopic: "Scope and Lifetime",
    difficulty: "Medium",
    type: "Theory",
    question: "Explain scope and lifetime of a variable in C with an example.",
    answer: {
      directAnswer: "Scope defines the region of code where a variable can be accessed, while lifetime (storage duration) defines the time period during program execution in which the variable retains allocated memory.",
      explanation: [
        "**Local Scope (Block Scope)**: Accessible only within the `{}` block where defined.",
        "**Global Scope (File Scope)**: Accessible throughout the entire file from its declaration to the end.",
        "**Automatic Lifetime**: Created on the stack when the block is entered, destroyed upon exit.",
        "**Static Lifetime**: Retains memory for the entire program execution lifecycle."
      ],
      codeExample: `#include <stdio.h>

int globalVar = 100; // Scope: Entire file | Lifetime: Program duration

void testFunction() {
    int localVar = 10;        // Scope: testFunction | Lifetime: Function call
    static int staticVar = 1; // Scope: testFunction | Lifetime: Program duration

    localVar++;
    staticVar++;
    printf("localVar=%d, staticVar=%d\\n", localVar, staticVar);
}

int main() {
    testFunction(); // localVar=11, staticVar=2
    testFunction(); // localVar=11, staticVar=3 (retained value!)
    return 0;
}`,
      interviewTip: "Note that a `static` local variable has local block scope (accessible only inside that function) but global static lifetime (persists across calls)."
    }
  },
  {
    id: 10,
    pdfId: "Q10",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Arithmetic Operators",
    difficulty: "Basic",
    type: "Theory",
    question: "What is the difference between the modulus operator and the division operator?",
    answer: {
      directAnswer: "The division operator (`/`) returns the quotient of dividing two numbers, whereas the modulus operator (`%`) returns the remainder after integer division.",
      explanation: [
        "**Division (`/`)**: Can be used on integers (truncates fractional part) and floating-point types (`float`, `double`).",
        "**Modulus (`%`)**: Operates strictly on integer types (`int`, `char`, `long`). Applying `%` to floating-point operands causes a compilation error (for floating modulus, `fmod()` in `math.h` is used).",
        "**Sign of Modulus**: In C99 and later, the sign of `a % b` matches the sign of the dividend `a` (`-7 % 3` is `-1`)."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int a = 14, b = 4;
    printf("Division (Quotient): 14 / 4 = %d\\n", a / b); // Output: 3
    printf("Modulus (Remainder): 14 %% 4 = %d\\n", a % b); // Output: 2

    float f = 14.0f / 4.0f;
    printf("Floating division: 14.0 / 4.0 = %.2f\\n", f); // Output: 3.50
    return 0;
}`,
      interviewTip: "Always remember: Division by zero (`x / 0` or `x % 0`) invokes undefined behavior and typically results in a runtime crash (`SIGFPE` / Floating point exception)."
    }
  },
  {
    id: 11,
    pdfId: "Q11",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Relational Operators",
    difficulty: "Basic",
    type: "Theory",
    question: "Explain how relational operators are evaluated in C and what value they return.",
    answer: {
      directAnswer: "Relational operators in C compare two operands and evaluate to an integer boolean value: returning integer `1` if the condition is true, and integer `0` if the condition is false.",
      explanation: [
        "**The Six Relational Operators**: `<` (less than), `<=` (less than or equal to), `>` (greater than), `>=` (greater than or equal to), `==` (equal to), `!=` (not equal to).",
        "**Return Type**: Unlike languages with a native primitive boolean type, standard C evaluates relational expressions to type `int` (`1` or `0`).",
        "**Associativity**: Relational operators associate from left to right. This causes subtle pitfalls: `a < b < c` is evaluated as `(a < b) < c` (comparing the result `0` or `1` with `c`)."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int a = 5, b = 10, c = 2;
    
    printf("5 < 10 returns: %d\\n", (a < b));  // 1 (true)
    printf("5 == 10 returns: %d\\n", (a == b)); // 0 (false)

    // Common Trap:
    // (a < b < c) => (5 < 10) < 2 => 1 < 2 => 1 (true!)
    printf("(5 < 10 < 2) returns: %d\\n", (a < b < c)); 
    return 0;
}`,
      interviewTip: "To check if `x` is between `a` and `b`, never write `a < x < b`. Always write `(a < x) && (x < b)`."
    }
  },
  {
    id: 12,
    pdfId: "Q12",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Logical Operators",
    difficulty: "Basic",
    type: "Theory",
    question: "Differentiate between logical AND (&&) and bitwise AND (&) operators.",
    answer: {
      directAnswer: "Logical AND (`&&`) evaluates the truth value of two boolean expressions with short-circuiting, returning `1` or `0`, while bitwise AND (`&`) performs an individual bit-by-bit logical AND operation on the binary representations of integer operands.",
      comparisonTable: {
        headers: ["Feature", "Logical AND (`&&`)", "Bitwise AND (`&`)"],
        rows: [
          ["Operation", "Combines boolean condition expressions", "Operates on individual bits of numbers"],
          ["Operands", "Truth values (zero = false, non-zero = true)", "Integers (binary bit patterns)"],
          ["Return Value", "Strictly `1` (true) or `0` (false)", "Integer with corresponding bit results"],
          ["Short-Circuit", "Yes: if left operand is false, right is not evaluated", "No: both operands are always evaluated"],
          ["Example", "`5 && 2` evaluates to `1` (true && true)", "`5 & 2` -> `(101 & 010) = 000` -> `0`"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int a = 5; // 0101 in binary
    int b = 3; // 0011 in binary

    printf("Logical AND: 5 && 3 = %d\\n", a && b); // 1
    printf("Bitwise AND: 5 & 3  = %d\\n", a & b);  // 1 (0001 in binary)

    // Short-circuit demonstration:
    int x = 0;
    if (x && ++a) { } 
    printf("a is still %d (not incremented)\\n", a); // a = 5
    return 0;
}`,
      interviewTip: "Interviewers frequently test short-circuit evaluation: if the left operand of `&&` is 0, the right-hand operand is completely skipped (saving execution time and preventing null-pointer dereferences)."
    }
  },
  {
    id: 13,
    pdfId: "Q13",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Assignment Operators",
    difficulty: "Basic",
    type: "Theory",
    question: "What are compound assignment operators? Give three examples.",
    answer: {
      directAnswer: "Compound assignment operators (shorthand assignment operators) combine a binary arithmetic or bitwise operation with the assignment operator into a single compact expression of the form `variable op= expression`.",
      explanation: [
        "**Syntax**: `x op= y` is equivalent to `x = x op (y)`, but the left-hand operand `x` is evaluated only once.",
        "**Common Compound Operators**: `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`.",
        "**Performance & Safety**: Helps prevent duplicate side-effects when accessing complex lvalues like array indices: `arr[i++] += 5` increments `i` only once."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int x = 10;

    // Example 1: Additive assignment
    x += 5; // equivalent to x = x + 5 (x becomes 15)

    // Example 2: Multiplicative assignment
    x *= 2; // equivalent to x = x * 2 (x becomes 30)

    // Example 3: Modulus assignment
    x %= 7; // equivalent to x = x % 7 (x becomes 2)

    printf("Final x = %d\\n", x); // Output: 2
    return 0;
}`,
      interviewTip: "Notice operator precedence in compound assignments: `a *= b + 3` evaluates as `a = a * (b + 3)`, NOT `a = a * b + 3`."
    }
  },
  {
    id: 14,
    pdfId: "Q14",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Increment/Decrement",
    difficulty: "Medium",
    type: "Theory",
    question: "Explain the difference between pre-increment and post-increment operators (++i vs i++).",
    answer: {
      directAnswer: "Pre-increment (`++i`) increments the variable's value by 1 first and then returns the newly updated value, whereas post-increment (`i++`) returns the current original value in the expression first and increments the variable afterward.",
      comparisonTable: {
        headers: ["Operator", "Syntax", "Order of Execution", "Returned Expression Value"],
        rows: [
          ["Pre-increment", "`++i`", "Increment first, then use", "Returns value after increment ($i + 1$)"],
          ["Post-increment", "`i++`", "Use first, then increment", "Returns original value before increment ($i$)"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int a = 5, b = 5;

    int pre = ++a; // a becomes 6, pre receives 6
    int post = b++; // post receives 5, b becomes 6

    printf("Pre-increment: a=%d, result=%d\\n", a, pre);   // a=6, result=6
    printf("Post-increment: b=%d, result=%d\\n", b, post); // b=6, result=5
    return 0;
}`,
      interviewTip: "Never modify the same variable more than once in a single expression (e.g. `printf(\"%d %d\", i++, ++i)` or `a = i++ + ++i`). Doing so invokes undefined behavior in C standard specifications."
    }
  },
  {
    id: 15,
    pdfId: "Q15",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Bitwise Operators",
    difficulty: "Medium",
    type: "Theory",
    question: "Explain the working of bitwise AND, OR, XOR, and NOT operators with examples.",
    answer: {
      directAnswer: "Bitwise operators manipulate data at the individual binary bit level: AND (`&`) yields 1 only if both bits are 1; OR (`|`) yields 1 if at least one bit is 1; XOR (`^`) yields 1 if bits differ; and NOT (`~`) inverts all bits (one's complement).",
      comparisonTable: {
        headers: ["Bit A", "Bit B", "AND (`A & B`)", "OR (`A | B`)", "XOR (`A ^ B`)", "NOT (`~A`)"],
        rows: [
          ["0", "0", "0", "0", "0", "1"],
          ["0", "1", "0", "1", "1", "1"],
          ["1", "0", "0", "1", "1", "0"],
          ["1", "1", "1", "1", "0", "0"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    unsigned char a = 5; // 0000 0101
    unsigned char b = 3; // 0000 0011

    printf("a & b = %d\\n", a & b); // 0000 0001 -> 1
    printf("a | b = %d\\n", a | b); // 0000 0111 -> 7
    printf("a ^ b = %d\\n", a ^ b); // 0000 0110 -> 6
    printf("~a    = %d\\n", (unsigned char)~a); // 1111 1010 -> 250
    return 0;
}`,
      interviewTip: "XOR has two famous interview properties: $x \\oplus x = 0$ and $x \\oplus 0 = x$. This is used to find the single non-repeating number in an array or swap two variables without extra memory."
    }
  },
  {
    id: 16,
    pdfId: "Q16",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Bitwise Operators",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the use of the left shift (<<) and right shift (>>) operators?",
    answer: {
      directAnswer: "Left shift (`<<`) shifts all bits to the left by $n$ positions, filling empty right bits with zeros (equivalent to multiplying by $2^n$). Right shift (`>>`) shifts bits to the right by $n$ positions (equivalent to integer division by $2^n$).",
      explanation: [
        "**Left Shift (`x << n`)**: Multiplies `x` by $2^n$. E.g., `5 << 1` is $5 \\times 2^1 = 10$; `5 << 2` is $5 \\times 4 = 20$.",
        "**Right Shift (`x >> n`)**: Divides `x` by $2^n$. E.g., `16 >> 2` is $16 / 4 = 4$.",
        "**Logical vs Arithmetic Right Shift**: For `unsigned` types, empty left bits are always filled with 0. For `signed` negative types, sign bits (1s) are typically shifted in."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int a = 6;  // 0000 0110
    printf("6 << 2 = %d\\n", a << 2); // 6 * 4 = 24 (0001 1000)
    
    int b = 40; // 0010 1000
    printf("40 >> 3 = %d\\n", b >> 3); // 40 / 8 = 5 (0000 0101)
    return 0;
}`,
      interviewTip: "Shift operations are executed directly by ALU barrel shifters in a single CPU cycle, making them significantly faster than arithmetic multiplication or division in embedded C."
    }
  },
  {
    id: 17,
    pdfId: "Q17",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Operators",
    subtopic: "Operator Precedence",
    difficulty: "Medium",
    type: "Theory",
    question: "What is operator precedence and associativity? Why are they important?",
    answer: {
      directAnswer: "Operator precedence determines which operator is evaluated first when an expression contains multiple different operators. Associativity determines the evaluation direction (left-to-right or right-to-left) when two operators have the same precedence.",
      explanation: [
        "**Precedence**: High-precedence operators (like `*`, `/`) bind tighter than low-precedence ones (`+`, `-`). In `2 + 3 * 4`, multiplication occurs first ($2 + 12 = 14$).",
        "**Associativity**: Most operators (arithmetic, relational, logical) are Left-to-Right (`10 - 5 - 2` -> `(10 - 5) - 2 = 3`). Unary operators (`++`, `--`, `*`, `&`), ternary (`?:`), and assignment operators (`=`, `+=`) are Right-to-Left (`a = b = c = 5`).",
        "**Importance**: Essential for avoiding compiler evaluation bugs and ensuring unambiguous expressions."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 5;
    
    // '*' has higher precedence than '+'
    int r1 = a + b * c;     // 10 + (20 * 5) = 110
    
    // Parentheses override precedence
    int r2 = (a + b) * c;   // (10 + 20) * 5 = 150
    
    // Right-to-left associativity of assignment
    int x, y, z;
    x = y = z = 50; // z=50 first, then y=50, then x=50

    printf("r1=%d, r2=%d, x=%d\\n", r1, r2, x);
    return 0;
}`,
      interviewTip: "Best practice tip: When in doubt, always use parentheses `()` to make evaluation order completely explicit and readable."
    }
  },
  {
    id: 18,
    pdfId: "Q18",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Decision Making",
    subtopic: "if-else vs switch",
    difficulty: "Basic",
    type: "Theory",
    question: "When should a switch statement be preferred over multiple if-else statements?",
    answer: {
      directAnswer: "A `switch` statement should be preferred when testing a single integral or character variable against multiple fixed discrete constant values (such as menu options, state machines, or error codes).",
      comparisonTable: {
        headers: ["Aspect", "`switch` Statement", "`if-else` Chain"],
        rows: [
          ["Condition Types", "Only integer or character constants", "Any relational, logical, or range expression"],
          ["Execution Mechanism", "Jump table / branch table (O(1) lookup)", "Sequential checking of conditions (O(N))"],
          ["Floating Points", "Not allowed (`float` / `double` error)", "Fully supported (`if (val > 3.14)`)"],
          ["Readability", "Clean, structured for multi-way branches", "Can become messy with nested ladders"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    char grade = 'B';
    // Clean, efficient jump-table execution:
    switch(grade) {
        case 'A': printf("Excellent!\\n"); break;
        case 'B': printf("Good job!\\n"); break;
        case 'C': printf("Fair.\\n"); break;
        default:  printf("Invalid grade.\\n"); break;
    }
    return 0;
}`,
      interviewTip: "Remember to always include `break;` at the end of every case; otherwise, execution falls through into the subsequent case regardless of its match."
    }
  },
  {
    id: 19,
    pdfId: "Q19",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Decision Making",
    subtopic: "Nested Conditions",
    difficulty: "Basic",
    type: "Theory",
    question: "What is a dangling else problem in nested if-else statements?",
    answer: {
      directAnswer: "The dangling else problem is an ambiguity that arises in nested `if-else` statements without braces, where it is unclear to which `if` an `else` belongs. In C, the rule is that an `else` always pairs with the closest unmatched preceding `if`.",
      explanation: [
        "**Ambiguity**: When writing nested `if` statements without curly braces `{}`, indentation might visually mislead the programmer, but the C compiler strictly matches `else` to the innermost open `if`.",
        "**Solution**: Always enclose body statements inside curly braces `{}` to explicitly define scope."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int a = 5, b = 20;

    // Misleading visual indentation:
    if (a > 10)
        if (b > 10)
            printf("Both greater than 10\\n");
    else
        printf("Is this else for 'a' or 'b'?\\n"); 
    // In C, the 'else' matches 'if (b > 10)', so NOTHING is printed!

    // Clear and correct approach:
    if (a > 10) {
        if (b > 10) {
            printf("Both greater than 10\\n");
        }
    } else {
        printf("a is not greater than 10\\n");
    }
    return 0;
}`,
      interviewTip: "Golden coding rule for interviews: Never omit curly braces for conditional blocks, even for single-line statements."
    }
  },
  {
    id: 20,
    pdfId: "Q20",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Loops",
    subtopic: "Loop Types",
    difficulty: "Basic",
    type: "Theory",
    question: "Differentiate between while, do-while, and for loops in C.",
    answer: {
      directAnswer: "`for` and `while` loops are entry-controlled loops where condition is checked before executing loop body (0 or more executions), while `do-while` is an exit-controlled loop where condition is checked after the body executes (guaranteeing at least 1 execution).",
      comparisonTable: {
        headers: ["Feature", "`for` Loop", "`while` Loop", "`do-while` Loop"],
        rows: [
          ["Control Type", "Entry-controlled", "Entry-controlled", "Exit-controlled"],
          ["Syntax", "`for (init; cond; upd)`", "`while (cond)`", "`do { ... } while (cond);`"],
          ["Minimum Executions", "0 times", "0 times", "1 time (always)"],
          ["Best Used When", "Number of iterations is known", "Loop depends on condition, iterations unknown", "Must execute at least once (e.g. Menu)"],
          ["Trailing Semicolon", "No semicolon after header", "No semicolon after header", "Mandatory semicolon: `while (cond);`"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int i = 10;

    // while loop: does not execute because 10 < 5 is false
    while (i < 5) {
        printf("while: %d\\n", i);
    }

    // do-while loop: executes body once before checking condition
    do {
        printf("do-while executed at least once! i=%d\\n", i);
    } while (i < 5);

    return 0;
}`,
      interviewTip: "Notice the semicolon `;` at the end of `do { ... } while (condition);`. Omitting it is a common syntax error."
    }
  }
];
