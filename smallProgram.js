/**
 * Mini Test 1: Print numbers 1-100 in reverse order with rules:
 * - Skip prime numbers
 * - Multiples of 3      -> "Foo"
 * - Multiples of 5      -> "Bar"
 * - Multiples of 3 and 5 -> "FooBar"
 * - Print horizontally (single line, space-separated)
 */

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function buildSequence() {
  const result = [];
  for (let n = 100; n >= 1; n--) {
    if (isPrime(n)) continue;

    if (n % 15 === 0) {
      result.push("FooBar");
    } else if (n % 3 === 0) {
      result.push("Foo");
    } else if (n % 5 === 0) {
      result.push("Bar");
    } else {
      result.push(String(n));
    }
  }
  return result;
}

const sequence = buildSequence();
console.log(sequence.join(" "));
