/**
 * Преобразует строку чисел с разделителями-запятыми в массив чисел,
 * сортирует по возрастанию и возвращает обратно в виде строки.
 *
 * @param {string} str - строка вида "1,2,33,0,17"
 * @returns {string} отсортированные числа через запятую
 */
export function arraySorting(str) {
    return str
        .split(',')
        .map((item) => Number(item.trim()))
        .sort((a, b) => a - b)
        .join(',');
}

/**
 * Удаляет из массива все элементы, значение которых больше 100.
 *
 * @param {number[]} arr - массив целых чисел
 * @returns {number[]} массив без элементов > 100
 */
export function arrayFiltering(arr) {
    return arr.filter((item) => item <= 100);
}

/**
 * Чередует значения из двух массивов размером 5 элементов каждый,
 * возвращая новый массив размером 10 элементов.
 *
 * @param {number[]} first - первый массив (5 элементов)
 * @param {number[]} second - второй массив (5 элементов)
 * @returns {number[]} массив из 10 элементов с чередованием
 */
export function arrayPushing(first, second) {
    const result = [];
    for (let i = 0; i < first.length; i++) {
        result.push(first[i]);
        result.push(second[i]);
    }
    return result;
}
