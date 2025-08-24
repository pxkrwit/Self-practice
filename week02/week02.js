function shallowEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

const a = { name: "John", age: 25 };
const b = { name: "John", age: 25 };
const c = { name: "John", age: 26 };

console.log(shallowEqual(a, b)); // true ✅
console.log(shallowEqual(a, c)); // false ❌