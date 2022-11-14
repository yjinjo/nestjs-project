type SuperPrint = <T, V>(a: T[], b: V) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4], "x")
const b = superPrint([true, false, true, true], 3)
const c = superPrint(["a", "b", "c"], false)
const d = superPrint([1, 2, true, false, "hello"], [3, 2])
