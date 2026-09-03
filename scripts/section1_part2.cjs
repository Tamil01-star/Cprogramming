// Section 1 Part 2: Technical Interview Questions (Q21 to Q51)

module.exports = [
  {
    id: 21,
    pdfId: "Q21",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Loops",
    subtopic: "break and continue",
    difficulty: "Basic",
    type: "Theory",
    question: "Explain the difference between the break and continue statements.",
    answer: {
      directAnswer: "`break` terminates the entire enclosing loop or switch statement immediately, while `continue` skips the remainder of the current iteration and jumps directly to the loop's next iteration test.",
      comparisonTable: {
        headers: ["Feature", "`break` Statement", "`continue` Statement"],
        rows: [
          ["Action", "Exits the entire loop immediately", "Skips current iteration, starts next"],
          ["Applicability", "Can be used in loops (`for`, `while`, `do-while`) and `switch`", "Can ONLY be used in loops (`for`, `while`, `do-while`)"],
          ["Flow Control", "Jumps to statement following the loop", "Jumps to increment/condition check of loop"],
          ["Use Case", "Early termination upon finding an element", "Bypassing specific unwanted iterations"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue; // Skips printing 3
        if (i == 5) break;    // Stops loop before printing 5
        printf("%d ", i);     // Output: 1 2 4 
    }
    return 0;
}`,
      interviewTip: "`continue` cannot be used inside a standalone `switch` block unless the switch is inside an outer loop (in which case continue affects the outer loop)."
    }
  },
  {
    id: 22,
    pdfId: "Q22",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Loops",
    subtopic: "Infinite Loops",
    difficulty: "Basic",
    type: "Theory",
    question: "How is an infinite loop created intentionally in C? Give an example.",
    answer: {
      directAnswer: "An intentional infinite loop in C is created when the loop condition is made unconditionally non-zero (true) or omitted, commonly using `while(1)`, `for(;;)`, or `do { } while(1);`.",
      explanation: [
        "**Real-world Use Cases**: Operating system event loops, embedded system firmware (`super-loops` in microcontrollers), and server listening daemons.",
        "**Idioms in C**:",
        "1. `while(1)`: Clear and widely used.",
        "2. `for(;;)`: Standard canonical C idiom (the compiler knows condition is permanently true without evaluating any condition register).",
        "3. Controlled termination inside the loop using `if (should_stop) break;`."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int count = 0;
    // Intentional infinite loop
    for (;;) {
        printf("Loop running: %d\\n", ++count);
        if (count >= 3) {
            break; // Controlled exit
        }
    }
    return 0;
}`,
      interviewTip: "In microcontroller programming (ARM, AVR, 8051), `while(1) { /* process sensors */ }` is the fundamental architecture preventing main from terminating."
    }
  },
  {
    id: 23,
    pdfId: "Q23",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Functions",
    subtopic: "Function Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "What is a function prototype and why is it necessary?",
    answer: {
      directAnswer: "A function prototype is a declaration statement that specifies the function's name, return type, and parameter types before its actual definition, enabling the compiler to perform type checking on calls.",
      explanation: [
        "**Format**: `return_type function_name(param1_type, param2_type);`",
        "**Necessity**:",
        "1. **Type Checking**: Enables the compiler to verify whether arguments match parameter types and numbers, catching mismatches at compile time.",
        "2. **Forward Declaration**: Allows calling functions defined later in the file or in other compilation units.",
        "3. **Return Type Resolution**: Prevents the obsolete C assumption that undeclared functions return `int`."
      ],
      codeExample: `#include <stdio.h>

// Function prototype (declaration)
double calculateArea(double radius);

int main() {
    double area = calculateArea(3.5); // Compiler verifies argument & return type
    printf("Area = %.2f\\n", area);
    return 0;
}

// Function definition
double calculateArea(double radius) {
    return 3.14159 * radius * radius;
}`,
      interviewTip: "In modern C (C99 and later), implicit function declarations are illegal. Calling a function without a prior declaration or prototype triggers a compiler warning or error."
    }
  },
  {
    id: 24,
    pdfId: "Q24",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Functions",
    subtopic: "Call by Value vs Reference",
    difficulty: "Medium",
    type: "Theory",
    question: "Differentiate between Call by Value and Call by Reference with an example.",
    answer: {
      directAnswer: "In Call by Value, a copy of the actual variable's value is passed into the function (modifications do not affect original), while in Call by Reference (simulated in C via pointers), memory addresses are passed (modifications directly mutate original).",
      comparisonTable: {
        headers: ["Feature", "Call by Value", "Call by Reference (via Pointers)"],
        rows: [
          ["What is passed", "A copy of the actual parameter's value", "Memory address (`&var`) of the parameter"],
          ["Memory Effect", "Operates on temporary duplicate stack frame", "Directly accesses original memory location"],
          ["Original Value", "Cannot be modified by the function", "Can be modified using dereference (`*ptr`)"],
          ["Overhead", "Memory copied; slow for large structs", "Only address (4/8 bytes) copied; very fast"],
          ["Example", "`swap(a, b);` (fails to swap)", "`swap(&a, &b);` (successfully swaps)"]
        ]
      },
      codeExample: `#include <stdio.h>

void swapByValue(int a, int b) {
    int t = a; a = b; b = t; // Only changes local copies
}

void swapByReference(int *a, int *b) {
    int t = *a; *a = *b; *b = t; // Directly alters caller's memory
}

int main() {
    int x = 10, y = 20;
    swapByValue(x, y);
    printf("After Call by Value: x=%d, y=%d\\n", x, y); // x=10, y=20 (Unchanged)

    swapByReference(&x, &y);
    printf("After Call by Reference: x=%d, y=%d\\n", x, y); // x=20, y=10 (Swapped!)
    return 0;
}`,
      interviewTip: "Strictly speaking, C only supports Call by Value! In C, 'Call by Reference' is simulated by passing the *value of a pointer*."
    }
  },
  {
    id: 25,
    pdfId: "Q25",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Functions",
    subtopic: "Return Types",
    difficulty: "Basic",
    type: "Theory",
    question: "Can a function return more than one value in C? How can this be achieved?",
    answer: {
      directAnswer: "A C function can directly return only one value via the `return` statement. However, multiple values can be returned indirectly using Pointers (output arguments), Structures, Arrays, or Global variables.",
      explanation: [
        "**Method 1: Pointers / Output Parameters (Most Common)**: Pass addresses of variables as arguments; the function stores results directly into them.",
        "**Method 2: Structure**: Bundle multiple values into a custom `struct` and return the struct by value.",
        "**Method 3: Array / Dynamic Memory**: Return a pointer to dynamically allocated memory (`malloc`) or a static array containing multiple elements."
      ],
      codeExample: `#include <stdio.h>

// Approach 1: Using pointers as output parameters
void getMinMax(int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

// Approach 2: Using struct
struct Result { int sum; float avg; };
struct Result calc(int a, int b) {
    struct Result r = { a + b, (a + b) / 2.0f };
    return r;
}

int main() {
    int arr[] = {3, 1, 9, 7};
    int mn, mx;
    getMinMax(arr, 4, &mn, &mx);
    printf("Min=%d, Max=%d\\n", mn, mx);
    return 0;
}`,
      interviewTip: "When returning multiple values using a struct, it is safe because C copies the entire struct across the stack upon return."
    }
  },
  {
    id: 26,
    pdfId: "Q26",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Functions",
    subtopic: "Inline Functions",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the significance of the inline keyword for functions in C?",
    answer: {
      directAnswer: "The `inline` keyword (introduced in C99) is a compiler hint requesting that the compiler replace function calls with the actual body of the function at compile time, eliminating the runtime overhead of function call branching and stack manipulation.",
      explanation: [
        "**Eliminates Overhead**: Avoids pushing arguments onto the stack, saving registers, jumping to function address, and returning.",
        "**Safety vs Macros**: Unlike `#define` preprocessor macros, inline functions provide full compiler type-checking and avoid side-effect errors (e.g. `SQUARE(x++)`).",
        "**Trade-off (Code Bloat)**: Inlining large functions repeatedly increases the final binary size (cache thrashing). Therefore, only small, frequently called functions should be inlined.",
        "**Compiler Discretion**: The `inline` keyword is merely a suggestion; modern optimizing compilers can ignore it if inlining is counterproductive."
      ],
      codeExample: `#include <stdio.h>

// Compiler replaces max(a, b) with actual ternary comparison directly at call site
static inline int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int m = max(10, 20); // Fast inline expansion
    printf("Max = %d\\n", m);
    return 0;
}`,
      interviewTip: "Macro vs Inline function is an interview favorite: Mention that macros do pure textual substitution without type-checking, whereas inline functions are parsed and type-checked by the compiler."
    }
  },
  {
    id: 27,
    pdfId: "Q27",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Recursion",
    subtopic: "Recursion Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "What is recursion? What are the base case and recursive case?",
    answer: {
      directAnswer: "Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem. Every recursive function must have a Base Case (terminating condition) and a Recursive Case (self-call progressing toward the base case).",
      explanation: [
        "**Base Case**: The stopping condition that returns a direct result without making further recursive calls. Without it, infinite recursion occurs, leading to Stack Overflow.",
        "**Recursive Case**: The branch of the function where the problem is subdivided and the function calls itself with modified parameters that progressively move toward the base case."
      ],
      codeExample: `#include <stdio.h>

int factorial(int n) {
    // 1. Base Case: stops recursion
    if (n <= 1) {
        return 1;
    }
    // 2. Recursive Case: calls itself with smaller sub-problem
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %d\\n", factorial(5)); // Output: 120
    return 0;
}`,
      interviewTip: "Always write the Base Case as the very first line inside any recursive function."
    }
  },
  {
    id: 28,
    pdfId: "Q28",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Recursion",
    subtopic: "Recursion vs Iteration",
    difficulty: "Medium",
    type: "Theory",
    question: "Compare recursion and iteration in terms of memory usage and performance.",
    answer: {
      directAnswer: "Iteration executes instructions repeatedly using loops with $O(1)$ constant memory on a single stack frame, whereas recursion allocates a new stack activation frame for every call ($O(N)$ auxiliary memory), causing higher memory consumption and function call overhead.",
      comparisonTable: {
        headers: ["Criterion", "Recursion", "Iteration (Loops)"],
        rows: [
          ["Memory Usage", "High ($O(N)$ stack memory for activation records)", "Low ($O(1)$ constant memory)"],
          ["Execution Speed", "Slower due to function call overhead", "Faster directly executing loop jumps"],
          ["Stack Overflow", "Risk of Stack Overflow if depth is large", "No stack overflow risk (infinite loop merely hangs)"],
          ["Code Complexity", "Clean, concise for trees, graphs, divide & conquer", "Can require manual stacks for non-linear structures"],
          ["Termination", "Governed by Base Case", "Governed by loop termination condition"]
        ]
      },
      interviewTip: "Tail recursion is a special case where the recursive call is the final statement. Compilers can optimize tail recursion (Tail Call Optimization / TCO) into a flat iterative loop."
    }
  },
  {
    id: 29,
    pdfId: "Q29",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Recursion",
    subtopic: "Stack Overflow",
    difficulty: "Medium",
    type: "Theory",
    question: "What causes a stack overflow error in a recursive function?",
    answer: {
      directAnswer: "A stack overflow error occurs when recursive function calls exceed the finite call-stack memory allocated to the program, exhausting stack capacity and causing a crash (Segmentation Fault).",
      explanation: [
        "**Primary Causes**:",
        "1. **Missing or Faulty Base Case**: The function has no termination condition and keeps calling itself indefinitely.",
        "2. **Non-Converging Arguments**: Recursive calls do not diminish toward the base case (e.g., calling `f(n)` instead of `f(n-1)`).",
        "3. **Excessive Recursion Depth**: Even with a valid base case, very deep recursion (e.g. $N = 1,000,000$) exhausts default stack size (typically 1MB-8MB).",
        "4. **Large Local Variables**: Allocating huge arrays inside recursive functions rapidly burns stack frames."
      ],
      codeExample: `#include <stdio.h>

// Dangerous function: No base case leads to STACK OVERFLOW
void crash(int count) {
    int bigArray[1000]; // Consumes 4000 bytes per frame!
    crash(count + 1);   // Infinite recursion -> Segmentation fault
}

int main() {
    // crash(1); // Do not run: causes Stack Overflow
    return 0;
}`,
      interviewTip: "Mention that the call stack stores local variables, parameter values, and return addresses for each call. When stack hits its limit, an OS hardware trap triggers a SIGSEGV."
    }
  },
  {
    id: 30,
    pdfId: "Q30",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Arrays",
    subtopic: "Array Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "Why are array indices in C always started from zero?",
    answer: {
      directAnswer: "Array indices in C start from 0 because the index represents an offset (distance) from the array's base memory address rather than an ordinal position.",
      explanation: [
        "**Pointer Offset Formula**: In C, array subscript syntax `arr[i]` is internally evaluated as `*(arr + i)`.",
        "**Base Address Calculation**: If array base address is `0x1000`, the first element is located at `0x1000 + (0 * sizeof(element))` = `0x1000`. Thus, offset `0` points directly to the start.",
        "**Hardware Efficiency**: Starting from 0 saves an arithmetic subtraction instruction (like `address = base + (i - 1) * size`) on every array access, providing raw machine-level efficiency."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    
    // arr[0] is *(arr + 0) -> Base address + 0 bytes
    // arr[1] is *(arr + 1) -> Base address + 1 * sizeof(int)
    printf("arr[0] = %d via pointer *(arr+0) = %d\\n", arr[0], *(arr + 0));
    printf("arr[1] = %d via pointer *(arr+1) = %d\\n", arr[1], *(arr + 1));
    return 0;
}`,
      interviewTip: "Fun trivia: In C, `arr[i]` and `i[arr]` are mathematically identical because `*(arr + i)` is commutative!"
    }
  },
  {
    id: 31,
    pdfId: "Q31",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Arrays",
    subtopic: "Array vs Pointer",
    difficulty: "Medium",
    type: "Theory",
    question: "Differentiate between an array and a pointer in C.",
    answer: {
      directAnswer: "An array is a fixed contiguous block of allocated memory whose base address is a constant pointer, whereas a pointer is a distinct variable that stores the memory address of another entity and can be reassigned.",
      comparisonTable: {
        headers: ["Feature", "Array (`int arr[5]`)", "Pointer (`int *p`)"],
        rows: [
          ["Definition", "A contiguous collection of elements of same type", "A variable holding memory address of a type"],
          ["Memory Allocation", "Allocated automatically at declaration ($5 \\times 4$ = 20 bytes)", "Allocated for pointer variable itself (4 or 8 bytes)"],
          ["Reassignment", "Cannot be reassigned (`arr = ptr` is illegal error)", "Can be reassigned (`p = arr`, `p = NULL`)"],
          ["`sizeof` operator", "Returns total memory occupied by all elements", "Returns size of the pointer variable (4 or 8 bytes)"],
          ["Arithmetic (`++`)", "`arr++` is invalid (constant pointer)", "`p++` is valid (advances to next memory location)"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr;

    printf("sizeof(arr): %zu bytes\\n", sizeof(arr)); // 20 bytes (5 * 4)
    printf("sizeof(p):   %zu bytes\\n", sizeof(p));   // 8 bytes (on 64-bit machine)

    p++; // Valid: pointer advances to &arr[1]
    // arr++; // INVALID: compilation error (lvalue required)
    return 0;
}`,
      interviewTip: "Emphasize that an array name is not a pointer variable; it decays into a pointer value in most expressions."
    }
  },
  {
    id: 32,
    pdfId: "Q32",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Arrays",
    subtopic: "2D Arrays",
    difficulty: "Medium",
    type: "Theory",
    question: "How is a 2D array stored in memory? Explain row-major order.",
    answer: {
      directAnswer: "In C, multidimensional arrays are stored in contiguous linear 1D physical RAM memory using **Row-Major Order**, meaning all elements of the first row are stored sequentially, followed by the second row, and so on.",
      explanation: [
        "**Row-Major Storage**: For a 2D array `arr[R][C]`, row 0 (`arr[0][0], arr[0][1], ... arr[0][C-1]`) occupies the lowest addresses, followed immediately by row 1.",
        "**Memory Address Formula**: The physical address of `arr[i][j]` is calculated as: $\\text{Address}(arr[i][j]) = \\text{BaseAddress} + (i \\times C + j) \\times \\text{sizeof}(element)$",
        "**Cache Performance**: Iterating row-by-row (outer loop $i$, inner loop $j$) ensures sequential memory access, maximizing CPU cache line hits."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int arr[2][3] = { {10, 20, 30}, {40, 50, 60} };

    printf("Addresses in linear contiguous memory:\\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("arr[%d][%d] at %p = %d\\n", i, j, (void*)&arr[i][j], arr[i][j]);
        }
    }
    return 0;
}`,
      interviewTip: "In function prototypes accepting 2D arrays, specifying the column dimension is mandatory (e.g. `void func(int arr[][3])`), because the compiler needs $C$ to compute offsets."
    }
  },
  {
    id: 33,
    pdfId: "Q33",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Arrays",
    subtopic: "Array as Function Argument",
    difficulty: "Medium",
    type: "Theory",
    question: "Why does an array decay into a pointer when passed to a function?",
    answer: {
      directAnswer: "An array decays into a pointer to its first element when passed to a function for performance and memory efficiency, avoiding the expensive overhead of copying entire array contents onto the call stack.",
      explanation: [
        "**Array Decay**: When an array identifier appears in an expression (like an argument list), its type converts from `type[N]` to `type*`.",
        "**Loss of Size Information**: Inside the receiving function, `sizeof(param)` returns the size of the pointer (4 or 8 bytes), NOT the size of the array. Hence, array length must always be passed as a separate argument.",
        "**Syntax Equivalence**: In parameter lists, `int arr[]` and `int *arr` are treated identically by the compiler."
      ],
      codeExample: `#include <stdio.h>

void printSize(int arr[], int n) {
    // arr decayed into int*
    printf("Inside function: sizeof(arr) = %zu bytes (pointer size!)\\n", sizeof(arr));
}

int main() {
    int myArr[10];
    printf("Inside main: sizeof(myArr) = %zu bytes (full array!)\\n", sizeof(myArr)); // 40 bytes
    printSize(myArr, 10); // 8 bytes on 64-bit OS
    return 0;
}`,
      interviewTip: "Always pass the size of an array as a companion parameter when passing arrays into C functions."
    }
  },
  {
    id: 34,
    pdfId: "Q34",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Strings",
    subtopic: "String Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "How are strings represented internally in C? What is the role of the null character?",
    answer: {
      directAnswer: "In C, strings are not a primitive data type but are represented as 1D arrays of characters terminated by a null character (`'\\0'`, ASCII value 0). The null character marks the end of the string.",
      explanation: [
        "**Role of `'\\0'`**: Because C arrays do not record their length in memory, string processing functions (`strlen`, `strcpy`, `printf(\"%s\")`) sequentially scan characters until they encounter `\\0`.",
        "**Memory Size**: A string literal of $N$ visible characters always occupies $N + 1$ bytes of memory to accommodate `'\\0'`.",
        "**Missing Null Terminator Danger**: Without `'\\0'`, string functions keep reading adjacent memory until a zero byte happens to appear, resulting in garbage characters or a segmentation fault."
      ],
      codeExample: `#include <stdio.h>

int main() {
    // "Hello" contains 5 letters + 1 '\\0' = 6 bytes
    char str[] = "Hello"; 

    printf("String: %s\\n", str);
    printf("sizeof(str): %zu bytes\\n", sizeof(str)); // 6

    // Showing ASCII codes:
    for (int i = 0; i < 6; i++) {
        printf("char[%d] = '%c' (ASCII %d)\\n", i, str[i], str[i]);
    }
    return 0;
}`,
      interviewTip: "Never confuse `'0'` (the character 0, ASCII 48) with `'\\0'` (null character, ASCII 0)."
    }
  },
  {
    id: 35,
    pdfId: "Q35",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Strings",
    subtopic: "String Functions",
    difficulty: "Basic",
    type: "Theory",
    question: "Differentiate between strcpy() and strncpy() functions.",
    answer: {
      directAnswer: "`strcpy(dest, src)` copies the entire source string until it hits `\\0` without checking destination buffer size (vulnerable to buffer overflow), whereas `strncpy(dest, src, n)` safely copies at most $n$ characters.",
      comparisonTable: {
        headers: ["Feature", "`strcpy(dest, src)`", "`strncpy(dest, src, n)`"],
        rows: [
          ["Length Limit", "No limit; copies until source `\\0`", "Bounded: copies at most $n$ characters"],
          ["Buffer Overflow Risk", "High security risk if source > dest", "Safer against buffer overflow"],
          ["Null Termination", "Guarantees null termination", "Does NOT guarantee null termination if length >= $n$"],
          ["Padding", "No extra padding added", "Pads destination with null bytes if source < $n$"],
          ["Header Required", "`<string.h>`", "`<string.h>`"]
        ]
      },
      codeExample: `#include <stdio.h>
#include <string.h>

int main() {
    char dest[6];
    // strncpy copies at most sizeof(dest)-1 characters
    strncpy(dest, "HelloWorld", sizeof(dest) - 1);
    dest[sizeof(dest) - 1] = '\\0'; // Crucial: explicitly ensure null termination!

    printf("Safe copy: %s\\n", dest); // "Hello"
    return 0;
}`,
      interviewTip: "Always remember: If source length is $\\ge n$, `strncpy` does NOT append `'\\0'`. You must manually set `dest[n-1] = '\\0'`."
    }
  },
  {
    id: 36,
    pdfId: "Q36",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Strings",
    subtopic: "gets vs fgets",
    difficulty: "Medium",
    type: "Theory",
    question: "Why is gets() considered unsafe? How does fgets() overcome this issue?",
    answer: {
      directAnswer: "`gets()` is dangerous and deprecated in C99 (removed in C11) because it performs no buffer bounds checking, leading to buffer overflow and security vulnerabilities. `fgets()` solves this by accepting the maximum buffer size as an explicit parameter.",
      explanation: [
        "**Vulnerability of `gets(buf)`**: If user types 100 characters into a 10-byte buffer, `gets()` writes past the buffer into adjacent stack memory, corrupting the return address (classic stack smashing exploit).",
        "**Safety in `fgets(buf, size, stdin)`**: Reads at most `size - 1` characters and always appends `'\\0'` at the end, ensuring memory boundaries are strictly respected.",
        "**Newline Difference**: `fgets()` retains the trailing newline character `'\\n'` if it fits in the buffer, whereas `gets()` discarded it."
      ],
      codeExample: `#include <stdio.h>
#include <string.h>

int main() {
    char buffer[10];

    printf("Enter text: ");
    // Safe input reading:
    if (fgets(buffer, sizeof(buffer), stdin) != NULL) {
        // Strip trailing newline if present:
        buffer[strcspn(buffer, "\\n")] = '\\0';
        printf("Safely read: %s\\n", buffer);
    }
    return 0;
}`,
      interviewTip: "If asked in an interview 'Why was `gets()` removed from standard C?', state clearly: 'Because it is impossible to use `gets()` safely against malicious input that exceeds the buffer size.'"
    }
  },
  {
    id: 37,
    pdfId: "Q37",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Storage Classes",
    subtopic: "Storage Class Types",
    difficulty: "Basic",
    type: "Theory",
    question: "List and briefly explain the four storage classes available in C.",
    answer: {
      directAnswer: "The four storage classes in C are `auto`, `register`, `static`, and `extern`. They define a variable's scope (visibility), lifetime (longevity), storage location, and default initial value.",
      comparisonTable: {
        headers: ["Storage Class", "Keyword", "Storage", "Default Value", "Scope", "Lifetime"],
        rows: [
          ["Automatic", "`auto`", "Stack RAM", "Garbage", "Local block", "Within function block"],
          ["Register", "`register`", "CPU Register", "Garbage", "Local block", "Within function block"],
          ["Static", "`static`", "Data segment", "Zero (`0`)", "Local or File", "Entire program execution"],
          ["External", "`extern`", "Data segment", "Zero (`0`)", "Global / Multi-file", "Entire program execution"]
        ]
      },
      interviewTip: "Cannot take the address of a `register` variable using `&var` because CPU registers do not have memory RAM addresses!"
    }
  },
  {
    id: 38,
    pdfId: "Q38",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Storage Classes",
    subtopic: "static keyword",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the significance of the static keyword for a local variable?",
    answer: {
      directAnswer: "When applied to a local variable inside a function, `static` causes the variable to be allocated once in the data segment (initialized to zero by default) and retain its value between successive function calls across the entire program lifetime.",
      explanation: [
        "**Persistence**: Normal local (`auto`) variables are destroyed when the function returns. A `static` local variable persists its state across calls.",
        "**Scope**: Its visibility remains restricted to the local enclosing block (cannot be accessed outside that function).",
        "**Single Initialization**: Initialization expression is evaluated only once during program startup before `main()` begins."
      ],
      codeExample: `#include <stdio.h>

void visitCounter() {
    static int visits = 0; // Initialized only once!
    visits++;
    printf("Visit count: %d\\n", visits);
}

int main() {
    visitCounter(); // 1
    visitCounter(); // 2
    visitCounter(); // 3
    return 0;
}`,
      interviewTip: "What does `static` do to a global variable or function? It limits its linkage/scope strictly to the current source file, hiding it from other translation units (internal linkage)."
    }
  },
  {
    id: 39,
    pdfId: "Q39",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Storage Classes",
    subtopic: "extern keyword",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the purpose of the extern storage class specifier?",
    answer: {
      directAnswer: "The `extern` keyword declares a global variable or function without allocating memory, informing the compiler that the definition exists in another file or later in the current file.",
      explanation: [
        "**Multi-file Projects**: Essential in C when multiple `.c` files need to access the same shared global variable.",
        "**Prevents Duplicate Symbols**: If file A defines `int globalCount = 0;`, file B writes `extern int globalCount;` to use it without causing linker 'multiple definition' errors.",
        "**Function Declarations**: All function prototypes are implicitly `extern` by default in C."
      ],
      codeExample: `// --- In File1.c ---
int sharedCounter = 100; // Definition & storage allocation

// --- In File2.c ---
#include <stdio.h>
extern int sharedCounter; // Declaration: informs compiler it exists in File1.c

void display() {
    printf("Shared value = %d\\n", sharedCounter);
}`,
      interviewTip: "If you initialize an extern variable at file scope (`extern int x = 50;`), it becomes a definition, and memory is allocated."
    }
  },
  {
    id: 40,
    pdfId: "Q40",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Pointers",
    subtopic: "Pointer Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "What is a NULL pointer, and how is it different from an uninitialized pointer?",
    answer: {
      directAnswer: "A NULL pointer is a pointer explicitly assigned a value of `0` or `NULL`, indicating that it deliberately points to no valid memory location. An uninitialized pointer (wild pointer) contains an arbitrary garbage address.",
      comparisonTable: {
        headers: ["Aspect", "NULL Pointer", "Uninitialized (Wild) Pointer"],
        rows: [
          ["Value", "Explicitly `0` / `((void*)0)`", "Random garbage bit pattern from stack memory"],
          ["Target", "Guaranteed to point nowhere valid", "Points to unpredictable memory address"],
          ["Checkable", "Easily checked with `if (ptr != NULL)`", "Cannot be detected or verified safely"],
          ["Dereferencing Result", "Causes predictable, clean OS crash (SIGSEGV)", "Corrupts memory or causes silent undefined behavior"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int *p1 = NULL; // Safe: explicitly indicates no target
    int *p2;        // WILD POINTER: points to unknown memory!

    if (p1 == NULL) {
        printf("p1 is safely recognized as NULL\\n");
    }
    // *p2 = 10; // DANGEROUS: Corrupts random memory!
    return 0;
}`,
      interviewTip: "Rule of thumb: Always initialize pointers to `NULL` if they do not yet have an immediate target."
    }
  },
  {
    id: 41,
    pdfId: "Q41",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Pointers",
    subtopic: "Void Pointer",
    difficulty: "Medium",
    type: "Theory",
    question: "Differentiate between a NULL pointer and a void pointer.",
    answer: {
      directAnswer: "A NULL pointer is a pointer *value* representing the absence of an address (`0`), while a `void*` (generic pointer) is a pointer *data type* that can store the memory address of any data type without type-specific constraints.",
      comparisonTable: {
        headers: ["Feature", "NULL Pointer", "Void Pointer (`void*`)"],
        rows: [
          ["Nature", "A specific pointer value (`(void*)0`)", "A generic pointer data type"],
          ["Purpose", "Signals an invalid or empty pointer target", "Enables generic programming (`malloc`, `qsort`)"],
          ["Dereferencing", "Illegal (crashes program)", "Cannot be dereferenced directly without typecasting"],
          ["Pointer Arithmetic", "Not applicable", "Cannot perform pointer arithmetic without cast (size unknown)"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    int x = 42;
    void *vptr = &x; // Generic pointer holds address of an int

    // Direct dereference: *vptr is ILLEGAL
    // Must cast first:
    printf("Value = %d\\n", *(int*)vptr);

    int *nptr = NULL; // Pointer value representing nothing
    return 0;
}`,
      interviewTip: "`malloc()` returns a `void*`, allowing it to be assigned to any typed pointer (`int*`, `char*`) without explicit casting in C."
    }
  },
  {
    id: 42,
    pdfId: "Q42",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Pointers",
    subtopic: "Pointer Arithmetic",
    difficulty: "Medium",
    type: "Theory",
    question: "Explain pointer arithmetic with an example of incrementing a pointer to an int array.",
    answer: {
      directAnswer: "Pointer arithmetic computes memory addresses scaled by the `sizeof(data_type)` of the pointer. Incrementing a pointer (`ptr++`) increases its stored address by `sizeof(*ptr)` bytes rather than by 1 byte.",
      explanation: [
        "**Scaling Rule**: Address after `ptr + n` = $\\text{Current Address} + (n \\times \\text{sizeof}(*\\text{ptr}))$.",
        "**Example with `int*`**: If an `int` takes 4 bytes and `ptr = 0x1000`, `ptr + 1` evaluates to `0x1004` (not `0x1001`).",
        "**Valid Operations**: Adding/subtracting an integer to/from a pointer, subtracting two pointers of the same type (`ptr2 - ptr1` yields number of elements between them), comparing two pointers (`<`, `==`).",
        "**Invalid Operations**: Adding two pointers, multiplying/dividing pointers."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int arr[] = {100, 200, 300};
    int *p = arr;

    printf("Initial address p:   %p, value: %d\\n", (void*)p, *p); // 100
    p++; // Advances address by 4 bytes (sizeof(int))
    printf("After p++ address:   %p, value: %d\\n", (void*)p, *p); // 200
    return 0;
}`,
      interviewTip: "Difference between `*(p++)`, `(*p)++`, and `*++p`: `*(p++)` uses current value then advances pointer; `(*p)++` increments the value pointed to; `*++p` advances pointer then accesses value."
    }
  },
  {
    id: 43,
    pdfId: "Q43",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Pointers",
    subtopic: "Double Pointers",
    difficulty: "Medium",
    type: "Theory",
    question: "What is a pointer to a pointer? Give a practical use case.",
    answer: {
      directAnswer: "A pointer to a pointer (double pointer, declared with `**`) is a variable that stores the memory address of another pointer variable.",
      explanation: [
        "**Syntax**: `int **pp;` where `pp` points to `p`, and `p` points to `int x`.",
        "**Practical Use Cases**:",
        "1. **Modifying a Pointer inside a Function**: To allocate or reassign a pointer inside a function so the caller's pointer changes (e.g. linked list insertions or dynamic memory allocation inside helper functions).",
        "2. **Dynamic 2D Arrays**: Storing arrays of pointers to dynamically allocated rows (`int **matrix`).",
        "3. **Command-Line Arguments**: Standard `int main(int argc, char **argv)` where `argv` is an array of strings."
      ],
      codeExample: `#include <stdio.h>
#include <stdlib.h>

// Modifies caller's pointer by passing its address (&ptr)
void allocate(int **p) {
    *p = (int*)malloc(sizeof(int));
    **p = 99;
}

int main() {
    int *ptr = NULL;
    allocate(&ptr); // Pass address of pointer
    printf("Allocated value: %d\\n", *ptr); // 99
    free(ptr);
    return 0;
}`,
      interviewTip: "If a function needs to modify an `int`, you pass `int*`. If a function needs to modify an `int*`, you must pass `int**`!"
    }
  },
  {
    id: 44,
    pdfId: "Q44",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Pointers",
    subtopic: "Function Pointers",
    difficulty: "Medium",
    type: "Theory",
    question: "What is a function pointer? Where is it commonly used?",
    answer: {
      directAnswer: "A function pointer is a pointer that stores the starting execution address of a function in the code/text segment of memory, allowing functions to be called dynamically and passed as arguments.",
      explanation: [
        "**Syntax**: `return_type (*ptr_name)(param_types);`",
        "**Parentheses Importance**: `int (*fp)(int, int)` is a function pointer. Without parentheses, `int *fp(int, int)` declares a regular function returning an `int*`.",
        "**Common Use Cases**:",
        "1. **Callbacks**: Passing custom handlers into generic functions (e.g. comparison function in `qsort()`).",
        "2. **Event-driven systems**: Handling GUI events, hardware interrupts, and signal handlers.",
        "3. **State Machines & Jump Tables**: Arrays of function pointers (`void (*states[3])()`)."
      ],
      codeExample: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// Higher-order function taking a function pointer
void compute(int a, int b, int (*op)(int, int)) {
    printf("Result: %d\\n", op(a, b));
}

int main() {
    compute(5, 3, add);      // Pass add function -> Result: 8
    compute(5, 3, multiply); // Pass multiply function -> Result: 15
    return 0;
}`,
      interviewTip: "Remember the standard library `qsort` comparator prototype: `int compare(const void *a, const void *b)` is the quintessential function pointer."
    }
  },
  {
    id: 45,
    pdfId: "Q45",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Dynamic Memory Allocation",
    subtopic: "malloc vs calloc",
    difficulty: "Basic",
    type: "Theory",
    question: "Differentiate between malloc() and calloc() functions.",
    answer: {
      directAnswer: "`malloc(size)` allocates a single uninitialized contiguous block of memory with garbage values, whereas `calloc(num, size)` allocates multiple contiguous blocks of memory and zeroes out all allocated bytes.",
      comparisonTable: {
        headers: ["Feature", "`malloc()`", "`calloc()`"],
        rows: [
          ["Full Name", "Memory Allocation", "Contiguous Allocation"],
          ["Parameters", "1 argument: `size_t total_bytes`", "2 arguments: `size_t count, size_t size_each`"],
          ["Initialization", "Leaves memory uninitialized (contains garbage values)", "Initializes all allocated bytes to zero (`0`)"],
          ["Speed", "Faster (avoids zeroing memory)", "Slightly slower (must zero out all memory)"],
          ["Syntax", "`ptr = (int*)malloc(n * sizeof(int));`", "`ptr = (int*)calloc(n, sizeof(int));`"]
        ]
      },
      codeExample: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *m = (int*)malloc(3 * sizeof(int)); // m contains garbage
    int *c = (int*)calloc(3, sizeof(int)); // c[0], c[1], c[2] are all 0

    printf("calloc values: %d %d %d\\n", c[0], c[1], c[2]); // 0 0 0

    free(m);
    free(c);
    return 0;
}`,
      interviewTip: "Both return `NULL` if heap memory is exhausted. Always check `if (ptr == NULL)` before accessing dynamically allocated memory."
    }
  },
  {
    id: 46,
    pdfId: "Q46",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Dynamic Memory Allocation",
    subtopic: "realloc and free",
    difficulty: "Medium",
    type: "Theory",
    question: "Explain the purpose of realloc() and free() functions with an example scenario.",
    answer: {
      directAnswer: "`realloc()` dynamically resizes a previously allocated memory block without losing its existing data, while `free()` deallocates heap memory back to the operating system to prevent memory leaks.",
      explanation: [
        "**`realloc(ptr, new_size)` Mechanism**:",
        "1. If contiguous space exists at the current location, it expands the block in place.",
        "2. If contiguous space is not available, it allocates a new block elsewhere, copies existing data over, frees the old block, and returns the new pointer.",
        "3. Returns `NULL` if memory reallocation fails.",
        "**`free(ptr)` Mechanism**:",
        "Releases the allocated block from the heap. After freeing, `ptr` becomes a **dangling pointer** unless reset to `NULL`."
      ],
      codeExample: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(2 * sizeof(int));
    arr[0] = 10; arr[1] = 20;

    // Expand array from 2 elements to 4 elements
    int *temp = (int*)realloc(arr, 4 * sizeof(int));
    if (temp != NULL) {
        arr = temp;
        arr[2] = 30;
        arr[3] = 40;
        printf("Resized: %d %d %d %d\\n", arr[0], arr[1], arr[2], arr[3]);
    }

    free(arr);    // Free heap memory
    arr = NULL;   // Prevent dangling pointer
    return 0;
}`,
      interviewTip: "Never do `arr = realloc(arr, new_size)`. If realloc fails and returns `NULL`, the original memory pointer is lost, creating a memory leak! Always store in a temporary pointer first."
    }
  },
  {
    id: 47,
    pdfId: "Q47",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Dynamic Memory Allocation",
    subtopic: "Memory Leak",
    difficulty: "Medium",
    type: "Theory",
    question: "What is a memory leak? How can it be avoided in a C program?",
    answer: {
      directAnswer: "A memory leak occurs when dynamically allocated heap memory (`malloc`/`calloc`/`realloc`) is no longer needed by the program but is never released via `free()`, making that memory unavailable to the system until the process terminates.",
      explanation: [
        "**Consequences**: Long-running applications (like servers or daemons) gradually consume all available RAM, causing severe performance degradation and eventual crashes.",
        "**Common Causes**:",
        "1. Losing pointer reference before freeing (e.g. `p = malloc(10); p = malloc(20);`).",
        "2. Returning early from a function (via `return` or error condition) without calling `free()`.",
        "**How to Avoid**:",
        "1. Follow the RAII principle: Every `malloc` must have a matching `free()`.",
        "2. Set freed pointers to `NULL` immediately (`free(p); p = NULL;`).",
        "3. Use memory debugging tools like **Valgrind** or AddressSanitizer (`-fsanitize=address`)."
      ],
      codeExample: `#include <stdlib.h>

void safeFunction() {
    int *data = (int*)malloc(100 * sizeof(int));
    if (!data) return;

    // Perform operations...
    
    free(data);  // Crucial: Deallocate before exiting!
    data = NULL; // Safe practice
}`,
      interviewTip: "Interview viva: 'Does memory leak crash the program immediately?' Answer: No, it causes gradual memory depletion over time, degrading system responsiveness until out-of-memory."
    }
  },
  {
    id: 48,
    pdfId: "Q48",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Structures",
    subtopic: "Structure vs Union",
    difficulty: "Medium",
    type: "Theory",
    question: "Differentiate between a structure and a union in terms of memory allocation.",
    answer: {
      directAnswer: "In a `struct`, every member gets its own separate memory location (total size is the sum of member sizes plus padding), whereas in a `union`, all members share the same single memory location (total size equals the size of the largest member).",
      comparisonTable: {
        headers: ["Feature", "Structure (`struct`)", "Union (`union`)"],
        rows: [
          ["Keyword", "`struct`", "`union`"],
          ["Memory Allocation", "Separate memory for each member", "Single shared memory for all members"],
          ["Total Size", "Sum of members' sizes + alignment padding", "Size of its largest data member"],
          ["Member Access", "All members can be accessed simultaneously", "Only one member can hold valid data at any given time"],
          ["Overwriting", "Altering one member does not affect others", "Altering one member overwrites other members"],
          ["Use Case", "Grouping related diverse attributes (e.g. Student)", "Memory conservation / variant types (e.g. Hardware registers)"]
        ]
      },
      codeExample: `#include <stdio.h>

struct S { int i; char c; double d; };
union U  { int i; char c; double d; };

int main() {
    printf("sizeof(struct S): %zu bytes\\n", sizeof(struct S)); // typically 16 bytes (padding)
    printf("sizeof(union U):  %zu bytes\\n", sizeof(union U));  // 8 bytes (size of double)
    return 0;
}`,
      interviewTip: "Unions are widely used in embedded systems to interpret the same raw memory bytes as different data representations (e.g. reading 4 bytes as an integer or as 4 individual bytes)."
    }
  },
  {
    id: 49,
    pdfId: "Q49",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Structures",
    subtopic: "Nested Structures",
    difficulty: "Medium",
    type: "Theory",
    question: "What is a nested structure? Give an example of accessing its members.",
    answer: {
      directAnswer: "A nested structure is a structure that contains an instance of another structure as one of its members, enabling hierarchical data modeling.",
      explanation: [
        "**Accessing Members**: Use chained dot operators (`outer.inner.member`) for structure variables, or arrow operator (`outerPtr->inner.member`) for pointers.",
        "**Design**: Encapsulates logical groupings (e.g. putting an `Address` or `Date` structure inside an `Employee` structure)."
      ],
      codeExample: `#include <stdio.h>

struct Date {
    int day, month, year;
};

struct Student {
    int id;
    char name[30];
    struct Date dob; // Nested structure member
};

int main() {
    struct Student s1 = {101, "Vijay", {15, 8, 2004}};

    // Access nested members with chained dot operators:
    printf("Student: %s, DOB: %02d/%02d/%d\\n", 
           s1.name, s1.dob.day, s1.dob.month, s1.dob.year);
    return 0;
}`,
      interviewTip: "A structure cannot contain an instance of itself (`struct Node n;` is illegal recursive sizing), but it CAN contain a pointer to itself (`struct Node *next;`), which forms the basis for self-referential structures like Linked Lists."
    }
  },
  {
    id: 50,
    pdfId: "Q50",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Unions",
    subtopic: "Union Memory",
    difficulty: "Medium",
    type: "Theory",
    question: "How much memory does a union occupy? Explain with an example.",
    answer: {
      directAnswer: "A union occupies memory equal to the size of its largest member, rounded up to the nearest multiple of the strictest alignment requirement among its members.",
      explanation: [
        "**Shared Memory Principle**: Because a union stores only one member at any given moment, the compiler allocates a single block big enough for the biggest type.",
        "**Alignment Padding**: If the largest member is an array like `char arr[9]` (9 bytes) but the union also contains an `int` (4-byte alignment), the union size is padded to 12 bytes to align with 4-byte boundaries."
      ],
      codeExample: `#include <stdio.h>

union Data {
    char ch;        // 1 byte
    int count;      // 4 bytes
    double salary;  // 8 bytes (largest member)
};

int main() {
    union Data d;
    printf("Size of union Data: %zu bytes\\n", sizeof(d)); // Exactly 8 bytes

    d.count = 100;
    printf("d.count = %d\\n", d.count);

    d.salary = 75000.50; // Overwrites d.count in memory!
    printf("d.salary = %.2f\\n", d.salary);
    printf("d.count is now corrupted: %d\\n", d.count);
    return 0;
}`,
      interviewTip: "Always mention alignment: 'Size is at least the size of the largest member, plus any padding required for member alignment.'"
    }
  },
  {
    id: 51,
    pdfId: "Q51",
    sectionId: 1,
    sectionName: "Section 1: Technical Interview Questions",
    topic: "Enumeration",
    subtopic: "enum Basics",
    difficulty: "Basic",
    type: "Theory",
    question: "What is an enum in C? What are the default values assigned to enum constants?",
    answer: {
      directAnswer: "An enumeration (`enum`) is a user-defined data type in C that consists of named integer constants, improving code readability and maintainability. By default, the first enum constant is assigned `0`, and each subsequent constant increments by `1`.",
      explanation: [
        "**Default Sequence**: `enum Day { SUN, MON, TUE };` sets `SUN = 0`, `MON = 1`, `TUE = 2`.",
        "**Custom Values**: Any constant can be explicitly assigned a value; unassigned following constants increment from the preceding value.",
        "**Internal Type**: In C, enum constants are treated as integer constants of type `int`."
      ],
      codeExample: `#include <stdio.h>

enum Status {
    SUCCESS = 0,
    FAILED = 1,
    PENDING = 5,
    TIMEOUT      // Automatically assigned 5 + 1 = 6
};

int main() {
    enum Status s = TIMEOUT;
    printf("PENDING: %d, TIMEOUT: %d\\n", PENDING, s); // 5, 6
    return 0;
}`,
      interviewTip: "Why use `enum` instead of `#define`? Enums are scoped, typed, visible in symbolic debuggers (like GDB), and generate sequential integers automatically."
    }
  }
];
