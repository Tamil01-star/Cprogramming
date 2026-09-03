// Section 2 Part 1: Programming Logic & Pseudocode (Questions 52 to 71)

module.exports = [
  {
    id: 52,
    pdfId: "Q51",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Prime Number",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Prime Number.",
    answer: {
      directAnswer: "A prime number is an integer greater than 1 that has no positive divisors other than 1 and itself. We test divisibility from 2 up to $\\sqrt{N}$ in $O(\\sqrt{N})$ time.",
      algorithmSteps: [
        "1. Input integer $N$.",
        "2. If $N \\le 1$, return false (not prime).",
        "3. Loop $i$ from 2 up to $\\sqrt{N}$ ($i \\times i \\le N$):",
        "   - If $N \\pmod i == 0$, return false (composite).",
        "4. If no divisor is found, return true (prime)."
      ],
      codeExample: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n = 29;
    printf("%d is %s\\n", n, isPrime(n) ? "PRIME" : "NOT PRIME");
    return 0;
}`,
      interviewTip: "Why loop only up to $\\sqrt{N}$? Because any factor larger than $\\sqrt{N}$ must have a corresponding paired factor smaller than $\\sqrt{N}$."
    }
  },
  {
    id: 53,
    pdfId: "Q52",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Palindrome Number",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Palindrome Number.",
    answer: {
      directAnswer: "A palindrome number remains unchanged when its digits are reversed (e.g., 121, 1331). We extract digits from right to left, reverse the number, and compare with original.",
      algorithmSteps: [
        "1. Store original number $N$ into variable `temp`.",
        "2. Initialize `reversed = 0`.",
        "3. While $N > 0$:",
        "   - `rem = N % 10`",
        "   - `reversed = (reversed * 10) + rem`",
        "   - `N = N / 10`",
        "4. If `temp == reversed`, it is a Palindrome; else, it is not."
      ],
      codeExample: `#include <stdio.h>

int isPalindrome(int n) {
    int temp = n, rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return temp == rev;
}

int main() {
    int num = 1221;
    printf("%d is %s\\n", num, isPalindrome(num) ? "a Palindrome" : "Not a Palindrome");
    return 0;
}`,
      interviewTip: "Negative numbers are generally not palindromes because the minus sign is at the front."
    }
  },
  {
    id: 54,
    pdfId: "Q53",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Armstrong Number",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Armstrong Number.",
    answer: {
      directAnswer: "An Armstrong (narcissistic) number is an $n$-digit number equal to the sum of its digits each raised to the power of $n$ (e.g. $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$).",
      algorithmSteps: [
        "1. Count total digits $d$ in the number $N$.",
        "2. Initialize `sum = 0` and copy $N$ to `temp`.",
        "3. While `temp > 0`:",
        "   - Extract last digit: `rem = temp % 10`",
        "   - Compute $rem^d$ and add to `sum`",
        "   - `temp = temp / 10`",
        "4. If `sum == N`, then $N$ is an Armstrong number."
      ],
      codeExample: `#include <stdio.h>
#include <math.h>

int isArmstrong(int n) {
    int temp = n, digits = 0, sum = 0;
    while (temp > 0) { digits++; temp /= 10; }

    temp = n;
    while (temp > 0) {
        int rem = temp % 10;
        sum += (int)pow(rem, digits);
        temp /= 10;
    }
    return sum == n;
}

int main() {
    int n = 153;
    printf("%d is %s\\n", n, isArmstrong(n) ? "Armstrong" : "Not Armstrong");
    return 0;
}`,
      interviewTip: "Single-digit numbers (1-9) are all Armstrong numbers because $x^1 = x$."
    }
  },
  {
    id: 55,
    pdfId: "Q54",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Strong Number",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Strong Number.",
    answer: {
      directAnswer: "A Strong number (or Krishnamurthy number) is a number whose sum of the factorials of all digits equals the number itself (e.g., $145 = 1! + 4! + 5! = 1 + 24 + 120 = 145$).",
      algorithmSteps: [
        "1. Set `temp = N` and `sum = 0`.",
        "2. While `temp > 0`:",
        "   - `rem = temp % 10`",
        "   - Compute factorial of `rem`",
        "   - `sum += fact(rem)`",
        "   - `temp = temp / 10`",
        "3. If `sum == N`, print 'Strong Number'; otherwise print 'Not Strong'."
      ],
      codeExample: `#include <stdio.h>

int factorial(int n) {
    int f = 1;
    for (int i = 2; i <= n; i++) f *= i;
    return f;
}

int isStrong(int n) {
    int temp = n, sum = 0;
    while (temp > 0) {
        sum += factorial(temp % 10);
        temp /= 10;
    }
    return sum == n;
}

int main() {
    int n = 145;
    printf("%d is %s\\n", n, isStrong(n) ? "Strong" : "Not Strong");
    return 0;
}`,
      interviewTip: "Pre-computing factorials for digits 0-9 in a lookup table array `int fact[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};` optimizes this to $O(D)$ runtime."
    }
  },
  {
    id: 56,
    pdfId: "Q55",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Perfect Number",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Perfect Number.",
    answer: {
      directAnswer: "A Perfect Number is a positive integer that is equal to the sum of its proper positive divisors (excluding the number itself). For example, $6 = 1 + 2 + 3$, and $28 = 1 + 2 + 4 + 7 + 14$.",
      algorithmSteps: [
        "1. Initialize `sum = 0`.",
        "2. Loop $i$ from 1 to $N / 2$:",
        "   - If $N \\pmod i == 0$, add $i$ to `sum`.",
        "3. If `sum == N`, $N$ is a Perfect Number."
      ],
      codeExample: `#include <stdio.h>

int isPerfect(int n) {
    if (n <= 1) return 0;
    int sum = 0;
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) sum += i;
    }
    return sum == n;
}

int main() {
    int n = 28;
    printf("%d is %s\\n", n, isPerfect(n) ? "Perfect" : "Not Perfect");
    return 0;
}`,
      interviewTip: "The first four perfect numbers are 6, 28, 496, and 8128."
    }
  },
  {
    id: 57,
    pdfId: "Q56",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Neon Number",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Neon Number.",
    answer: {
      directAnswer: "A Neon number is a number where the sum of digits of its square is equal to the number itself. For example, $9$ is a Neon number because $9^2 = 81$, and $8 + 1 = 9$.",
      algorithmSteps: [
        "1. Calculate square of $N$: `sq = N * N`.",
        "2. Initialize `sum = 0`.",
        "3. While `sq > 0`:",
        "   - `sum += sq % 10`",
        "   - `sq /= 10`",
        "4. If `sum == N`, return true; else return false."
      ],
      codeExample: `#include <stdio.h>

int isNeon(int n) {
    int sq = n * n;
    int sum = 0;
    while (sq > 0) {
        sum += sq % 10;
        sq /= 10;
    }
    return sum == n;
}

int main() {
    int n = 9;
    printf("%d is %s\\n", n, isNeon(n) ? "Neon Number" : "Not Neon");
    return 0;
}`,
      interviewTip: "Apart from 0 and 1, 9 is the only other known single-digit base-10 neon number."
    }
  },
  {
    id: 58,
    pdfId: "Q57",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Reverse Number",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Reverse Number.",
    answer: {
      directAnswer: "Reversing a number involves extracting its digits one by one using modulo 10 and building the reversed number using base-10 multiplication.",
      algorithmSteps: [
        "1. Initialize `rev = 0`.",
        "2. While $N \\neq 0$:",
        "   - Extract last digit: `d = N % 10`",
        "   - Append digit: `rev = rev * 10 + d`",
        "   - Remove last digit: `N = N / 10`",
        "3. Return `rev`."
      ],
      codeExample: `#include <stdio.h>

int reverseNumber(int n) {
    int rev = 0;
    while (n != 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}

int main() {
    int n = 12345;
    printf("Reversed: %d\\n", reverseNumber(n)); // 54321
    return 0;
}`,
      interviewTip: "Watch out for integer overflow when reversing numbers that approach `INT_MAX`."
    }
  },
  {
    id: 59,
    pdfId: "Q58",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Reverse Digits",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Reverse Digits.",
    answer: {
      directAnswer: "To print the digits of a number in reverse order, extract the remainder modulo 10 and print each digit immediately without reconstructing the integer.",
      algorithmSteps: [
        "1. Input number $N$.",
        "2. If $N == 0$, print 0 and exit.",
        "3. While $N > 0$:",
        "   - Print `N % 10`",
        "   - `N = N / 10`"
      ],
      codeExample: `#include <stdio.h>

void printReverseDigits(int n) {
    if (n == 0) { printf("0"); return; }
    while (n > 0) {
        printf("%d ", n % 10);
        n /= 10;
    }
    printf("\\n");
}

int main() {
    printReverseDigits(9876); // Output: 6 7 8 9
    return 0;
}`,
      interviewTip: "Printing digits directly avoids the risk of 32-bit integer overflow that can occur when reversing numbers near 2 billion."
    }
  },
  {
    id: 60,
    pdfId: "Q59",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Count Digits",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Count Digits.",
    answer: {
      directAnswer: "Count digits by repeatedly dividing the integer by 10 until it becomes 0, incrementing a counter variable at each step, running in $O(\\log_{10} N)$ time.",
      algorithmSteps: [
        "1. If $N == 0$, return 1.",
        "2. Set `count = 0`.",
        "3. While $N \\neq 0$:",
        "   - `count = count + 1`",
        "   - `N = N / 10`",
        "4. Return `count`."
      ],
      codeExample: `#include <stdio.h>

int countDigits(int n) {
    if (n == 0) return 1;
    if (n < 0) n = -n;
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

int main() {
    printf("Digits in 74623: %d\\n", countDigits(74623)); // 5
    return 0;
}`,
      interviewTip: "Math shortcut for counting digits: `(int)log10(abs(n)) + 1`."
    }
  },
  {
    id: 61,
    pdfId: "Q60",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Sum of Digits",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Sum of Digits.",
    answer: {
      directAnswer: "The sum of digits is found by continually adding the rightmost digit (`n % 10`) to an accumulator `sum` and dividing the number by 10 (`n / 10`) until $n$ reaches 0.",
      algorithmSteps: [
        "1. Initialize `sum = 0`.",
        "2. While $N > 0$:",
        "   - `sum = sum + (N % 10)`",
        "   - `N = N / 10`",
        "3. Print / Return `sum`."
      ],
      codeExample: `#include <stdio.h>

int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main() {
    printf("Sum of digits in 4567: %d\\n", sumOfDigits(4567)); // 4+5+6+7 = 22
    return 0;
}`,
      interviewTip: "Digital root (recursive sum of digits until a single digit remains) can be calculated in $O(1)$ time using modulo 9: `1 + (n - 1) % 9`."
    }
  },
  {
    id: 62,
    pdfId: "Q61",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Product of Digits",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Product of Digits.",
    answer: {
      directAnswer: "Multiply each extracted digit (`n % 10`) into an accumulator initialized to 1, dividing $n$ by 10 until no digits remain.",
      algorithmSteps: [
        "1. If $N == 0$, return 0.",
        "2. Initialize `product = 1`.",
        "3. While $N > 0$:",
        "   - `product = product * (N % 10)`",
        "   - `N = N / 10`",
        "4. Return `product`."
      ],
      codeExample: `#include <stdio.h>

int productOfDigits(int n) {
    if (n == 0) return 0;
    int prod = 1;
    while (n > 0) {
        prod *= (n % 10);
        n /= 10;
    }
    return prod;
}

int main() {
    printf("Product of digits for 234: %d\\n", productOfDigits(234)); // 2*3*4 = 24
    return 0;
}`,
      interviewTip: "Early exit optimization: If any extracted digit is 0, the overall product becomes 0 immediately."
    }
  },
  {
    id: 63,
    pdfId: "Q62",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Even/Odd Check",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Even/Odd Check.",
    answer: {
      directAnswer: "An integer is even if it is divisible by 2 with remainder 0 (`n % 2 == 0`) or if its least significant bit is 0 (`(n & 1) == 0`). Otherwise, it is odd.",
      algorithmSteps: [
        "**Method 1 (Arithmetic)**: If $N \\pmod 2 == 0$, return Even; else return Odd.",
        "**Method 2 (Bitwise - Faster)**: If $(N \\& 1) == 0$, return Even; else return Odd."
      ],
      codeExample: `#include <stdio.h>

void checkEvenOdd(int n) {
    // Fast bitwise test on LSB (Least Significant Bit)
    if ((n & 1) == 0) {
        printf("%d is EVEN\\n", n);
    } else {
        printf("%d is ODD\\n", n);
    }
}

int main() {
    checkEvenOdd(14); // Even
    checkEvenOdd(27); // Odd
    return 0;
}`,
      interviewTip: "Bitwise check `(n & 1) == 0` is preferred in low-level programming because bit masking requires only 1 CPU clock cycle and works properly for negative numbers."
    }
  },
  {
    id: 64,
    pdfId: "Q63",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Leap Year",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Leap Year.",
    answer: {
      directAnswer: "A year is a leap year if it is divisible by 4, except for end-of-century years (ending in 00), which must also be evenly divisible by 400: `(year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)`.",
      algorithmSteps: [
        "1. Input year.",
        "2. If `year % 400 == 0` -> Leap Year.",
        "3. Else if `year % 100 == 0` -> Not a Leap Year.",
        "4. Else if `year % 4 == 0` -> Leap Year.",
        "5. Else -> Not a Leap Year."
      ],
      codeExample: `#include <stdio.h>

int isLeapYear(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

int main() {
    printf("2000: %s\\n", isLeapYear(2000) ? "Leap" : "Not Leap"); // Leap (divisible by 400)
    printf("1900: %s\\n", isLeapYear(1900) ? "Leap" : "Not Leap"); // Not Leap (div by 100 but not 400)
    printf("2024: %s\\n", isLeapYear(2024) ? "Leap" : "Not Leap"); // Leap (div by 4)
    return 0;
}`,
      interviewTip: "Why is 1900 not a leap year while 2000 is? Century years must be divisible by 400."
    }
  },
  {
    id: 65,
    pdfId: "Q64",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Factorial",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Factorial.",
    answer: {
      directAnswer: "The factorial of a non-negative integer $N$ ($N!$) is the product of all positive integers less than or equal to $N$, with $0! = 1$.",
      algorithmSteps: [
        "1. Input non-negative integer $N$.",
        "2. Initialize `fact = 1`.",
        "3. Loop $i$ from 1 to $N$:",
        "   - `fact = fact * i`",
        "4. Return `fact`."
      ],
      codeExample: `#include <stdio.h>

long long factorial(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    printf("6! = %lld\\n", factorial(6)); // 720
    return 0;
}`,
      interviewTip: "Use `long long` for factorials because $13!$ already overflows a standard 32-bit signed integer."
    }
  },
  {
    id: 66,
    pdfId: "Q65",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Fibonacci Series",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Fibonacci Series.",
    answer: {
      directAnswer: "In the Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$.",
      algorithmSteps: [
        "1. Set $a = 0, b = 1$.",
        "2. Print $a$ and $b$ (if $N \\ge 2$).",
        "3. Loop from 3 to $N$:",
        "   - $c = a + b$",
        "   - Print $c$",
        "   - $a = b$",
        "   - $b = c$"
      ],
      codeExample: `#include <stdio.h>

void printFibonacci(int n) {
    int a = 0, b = 1, next;
    for (int i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    printFibonacci(8); // 0 1 1 2 3 5 8 13
    return 0;
}`,
      interviewTip: "Iterative Fibonacci has $O(N)$ time and $O(1)$ space, whereas naive recursive Fibonacci has exponential $O(2^N)$ time complexity."
    }
  },
  {
    id: 67,
    pdfId: "Q66",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Power Calculation",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Power Calculation.",
    answer: {
      directAnswer: "Power $B^E$ can be computed iteratively in $O(E)$ time, or via Binary Exponentiation (Fast Power) in $O(\\log E)$ time by repeatedly squaring the base.",
      algorithmSteps: [
        "**Binary Exponentiation Algorithm ($O(\\log E)$)**:",
        "1. Initialize `result = 1`.",
        "2. While $E > 0$:",
        "   - If $E$ is odd ($E \\pmod 2 == 1$), `result = result * B`.",
        "   - `B = B * B`",
        "   - `E = E / 2`",
        "3. Return `result`."
      ],
      codeExample: `#include <stdio.h>

long long fastPower(long long base, int exp) {
    long long res = 1;
    while (exp > 0) {
        if (exp & 1) res *= base; // If odd, multiply
        base *= base;             // Square base
        exp >>= 1;                // Divide exp by 2
    }
    return res;
}

int main() {
    printf("2^10 = %lld\\n", fastPower(2, 10)); // 1024
    return 0;
}`,
      interviewTip: "Binary exponentiation reduces 1,000,000 multiplications to only ~20 multiplications."
    }
  },
  {
    id: 68,
    pdfId: "Q67",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "GCD",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print GCD.",
    answer: {
      directAnswer: "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both without remainder, computed efficiently using Euclid's Algorithm: $\\gcd(a, b) = \\gcd(b, a \\pmod b)$ until $b = 0$.",
      algorithmSteps: [
        "1. While $b \\neq 0$:",
        "   - `temp = b`",
        "   - `b = a % b`",
        "   - `a = temp`",
        "2. Return $a$."
      ],
      codeExample: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

int main() {
    printf("GCD(36, 24) = %d\\n", gcd(36, 24)); // 12
    return 0;
}`,
      interviewTip: "Euclidean algorithm runs in logarithmic time $O(\\log(\\min(a, b)))$."
    }
  },
  {
    id: 69,
    pdfId: "Q68",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "LCM",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print LCM.",
    answer: {
      directAnswer: "The Least Common Multiple (LCM) of two numbers $a$ and $b$ is computed using the mathematical relationship $\\text{LCM}(a, b) = (a \\times b) / \\text{GCD}(a, b)$.",
      algorithmSteps: [
        "1. Compute $\\text{GCD}(a, b)$ using Euclid's algorithm.",
        "2. Compute $\\text{LCM} = (a / \\text{GCD}(a, b)) \\times b$ (dividing first avoids premature integer overflow).",
        "3. Return $\\text{LCM}$."
      ],
      codeExample: `#include <stdio.h>

int gcd(int a, int b) {
    return (b == 0) ? a : gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    printf("LCM(12, 18) = %d\\n", lcm(12, 18)); // 36
    return 0;
}`,
      interviewTip: "Always divide by GCD before multiplying (`(a / gcd) * b`) to prevent potential integer overflow during the multiplication step."
    }
  },
  {
    id: 70,
    pdfId: "Q69",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Prime Numbers Between Two Numbers",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Prime Numbers Between Two Numbers.",
    answer: {
      directAnswer: "To print all prime numbers in range $[low, high]$, iterate through every number in the range and verify primality by checking trial division up to its square root.",
      algorithmSteps: [
        "1. Input range `low` and `high`.",
        "2. For each number $n$ from `low` to `high`:",
        "   - If $n \\le 1$, skip.",
        "   - Check if $n$ is divisible by any $i$ from 2 to $\\sqrt{n}$.",
        "   - If no divisor found, print $n$."
      ],
      codeExample: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

void printPrimes(int low, int high) {
    for (int i = low; i <= high; i++) {
        if (isPrime(i)) printf("%d ", i);
    }
    printf("\\n");
}

int main() {
    printPrimes(10, 30); // 11 13 17 19 23 29
    return 0;
}`,
      interviewTip: "For very large ranges (e.g. up to 10 million), mention the **Sieve of Eratosthenes** algorithm which finds all primes up to $N$ in $O(N \\log \\log N)$ time."
    }
  },
  {
    id: 71,
    pdfId: "Q70",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Palindrome String",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Palindrome String.",
    answer: {
      directAnswer: "A palindrome string reads the same forwards and backwards (e.g., 'madam', 'racecar'). We use two pointers moving inward from both ends to compare matching characters.",
      algorithmSteps: [
        "1. Initialize `left = 0` and `right = length - 1`.",
        "2. While `left < right`:",
        "   - If `str[left] != str[right]`, return false.",
        "   - `left++`, `right--`.",
        "3. Return true."
      ],
      codeExample: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindromeString(const char *s) {
    int left = 0, right = strlen(s) - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    printf("'radar': %s\\n", isPalindromeString("radar") ? "Palindrome" : "Not Palindrome");
    return 0;
}`,
      interviewTip: "The two-pointer approach uses $O(N)$ time and $O(1)$ extra space, avoiding the need to allocate a second reversed string."
    }
  }
];
