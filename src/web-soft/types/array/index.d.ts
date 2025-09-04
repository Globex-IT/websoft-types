/**
 * Тип массив в системе WebTutor HCM.
 */
interface Array<T> {
  [index: number]: T;
  /**
   * Возвращает количество элементов массива.
   */
  readonly length: number;

  /**
   * Возвращает индекс передаваемого элемента в массиве.
   * @param {any} element
   */
  indexOf<T>(element: T): number;

  /**
   * Преобразование всех элементов массива в объект String и соединяет их.
   * @param {string} [delimeter] - Разделитель между элементами.
   * @returns {string}
   * @example arrayobj.join(delimeter)
   */
  join(delimeter: string): string;

  /**
   * Добавляет элементы в конец массива.
   * Добавляет элементы, начиная с текущей длинны length и возвращает новую, увеличенную длунну массива.
   * @param {unknown[]} args - Аргументы, которые следует добавить в массив.
   * @returns {number}
   */
  push(...args: T[]): number;

  /**
   * Удаляет часть массива.
   * @param index - Индекс в массив, с которого нужно начинать удаление.
   * @param number - Количество элементов, которое нужно удалить, начиная с индеса arg1.
   */
  splice(index: number, number: number): void;

  /**
   * Создает новый массив с результатами вызова указанной функции для каждого элемента массива.
   * @param {function(T, number, T[]): U} callback Функция, вызываемая для каждого элемента массива.
   *     Принимает три аргумента: текущий элемент, индекс элемента и сам массив.
   * @returns {U[]} Новый массив с результатами вызова callback для каждого элемента.
   * @example
   * // Возвращает [2, 4, 6]
   * [1, 2, 3].map(x => x * 2);
   */
  map<U>(callback: (item: T, index: number, array: T[]) => U): U[];

  /**
   * Возвращает новый массив со всеми элементами, прошедшими проверку в переданной функции.
   * @param {function(T, number, T[]): value is S} predicate Функция, проверяющая каждый элемент.
   *     Проверяет каждый элемент массива и сужает его тип.
   * @param {any} [thisArg] Значение, используемое в качестве this при выполнении predicate.
   * @returns {S[]} Новый массив с элементами, прошедшими проверку.
   * @example
   * // Возвращает number[] только с четными числами
   * const numbers = [1, 2, 3, 4, 5];
   * const evens = numbers.filter((x): x is number => x % 2 === 0);
   */
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

  /**
   * Возвращает новый массив со всеми элементами, прошедшими проверку в переданной функции.
   * @param {function(T, number, T[]): unknown} predicate Функция, проверяющая каждый элемент.
   *     Возвращает truthy значение, если элемент проходит проверку.
   * @param {any} [thisArg] Значение, используемое в качестве this при выполнении predicate.
   * @returns {T[]} Новый массив с элементами, прошедшими проверку.
   * @example
   * // Возвращает [2, 4]
   * [1, 2, 3, 4, 5].filter(x => x % 2 === 0);
   */
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];

  /**
   * Проверяет, удовлетворяет ли хотя бы один элемент массива условию заданной функции.
   * @param {function(T, number, T[]): unknown} predicate Функция для проверки элементов.
   * @param {any} [thisArg] Значение, используемое в качестве this при выполнении predicate.
   * @returns {boolean} true, если хотя бы один элемент удовлетворяет условию, иначе false.
   * @example
   * // Возвращает true
   * [1, 2, 3].some(x => x > 2);
   */
  some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  /**
   * Проверяет, удовлетворяет ли хотя бы один элемент массива условию заданной функции.
   * @template T Тип элементов массива.
   * @param {T[]} array Массив для проверки.
   * @param {function(T, number, T[]): boolean} predicate Функция для проверки элементов.
   * @returns {boolean} true, если хотя бы один элемент удовлетворяет условию, иначе false.
   * @example
   * // Возвращает true
   * any([1, 2, 3], x => x > 2);
   */
  any<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean;

  /**
   * Выполняет функцию reducer для каждого элемента массива (слева направо),
   * возвращая одно результирующее значение.
   * @param {function(T, T, number, T[]): T} callback Функция reducer, принимающая четыре аргумента:
   *     аккумулятор, текущий элемент, индекс текущего элемента и сам массив.
   * @returns {T} Финальное значение аккумулятора.
   * @example
   * // Возвращает 10
   * [1, 2, 3, 4].reduce((acc, curr) => acc + curr);
   */
  reduce(callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

  /**
   * Выполняет функцию reducer для каждого элемента массива (слева направо),
   * возвращая одно результирующее значение.
   * @param {function(T, T, number, T[]): T} callback Функция reducer.
   * @param {T} initialValue Начальное значение аккумулятора.
   * @returns {T} Финальное значение аккумулятора.
   * @example
   * // Возвращает 20
   * [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 10);
   */
  reduce(callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

  /**
   * Выполняет функцию reducer для каждого элемента массива (слева направо),
   * возвращая одно результирующее значение. Аккумулятор может быть другого типа.
   * @template U Тип аккумулятора и результата.
   * @param {function(U, T, number, T[]): U} callback Функция reducer.
   * @param {U} initialValue Начальное значение аккумулятора.
   * @returns {U} Финальное значение аккумулятора.
   * @example
   * // Возвращает "1234"
   * [1, 2, 3, 4].reduce((acc, curr) => acc + curr, "");
   */
  reduce<U>(callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  /**
   * Определяет, содержит ли массив определенное значение среди своих элементов.
   * @param {T} value Значение для поиска в массиве.
   * @param {number} [fromIndex=0] Индекс, с которого начинать поиск.
   *     Если отрицательный, поиск начинается с array.length + fromIndex.
   * @returns {boolean} true, если массив содержит значение, иначе false.
   * @example
   * // Возвращает true
   * [1, 2, 3].includes(2);
   */
  includes(value: T, fromIndex?: number): boolean;

  /**
   * Возвращает значение первого элемента в массиве, который удовлетворяет условию переданной функции.
   * @param {function(T, number, T[]): boolean} predicate Функция-предикат для проверки элементов.
   * @param {any} [thisArg] Значение, используемое в качестве this при выполнении predicate.
   * @returns {T | undefined} Первый найденный элемент или undefined, если элемент не найден.
   * @example
   * // Возвращает 3
   * [1, 2, 3, 4].find(x => x > 2);
   */
  find(predicate: (value: T, index: number, obj: T[], thisArg?: any) => boolean, thisArg?: any): T | undefined;

  /**
   * Удаляет последний элемент из массива и возвращает его.
   * @returns {T | undefined} Удаленный элемент или undefined, если массив пуст.
   * @example
   * // Возвращает 3, массив становится [1, 2]
   * const arr = [1, 2, 3];
   * const last = arr.pop();
   */
  pop(): T | undefined;
}

interface ArrayConstructor {
  new(...arg: unknown[]): unknown[];
  (...arg: unknown[]): unknown[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const Array: ArrayConstructor;
