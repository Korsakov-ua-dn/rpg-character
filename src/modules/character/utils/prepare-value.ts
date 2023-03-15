// удаляет все не числа в строке и приводит результат к числу
function clearStringToNumber(string: string) {
  const numberPattern = /\d+/g;
  const res = string.match(numberPattern)?.join('');

  if (!res) {
    return 0;
  }

  return +res;
}

// возвращает значение только цифры в допустимых пределах "min", "max"
export function prepareValue(
  value: string | number,
  min: number,
  max: number
): string | number {
  let result: number;
  if (typeof value === 'string') {
    result = clearStringToNumber(value);
  } else {
    result = value;
  }

  result = result < min ? min : result;
  result = result > max ? max : result;
  return result;
}
