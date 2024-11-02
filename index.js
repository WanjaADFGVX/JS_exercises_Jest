/**
 * Задача 1: Дана строка, нужно написать функцию, которая позволяет вернуть значение true,
 * если строка является палиндромом, и false — если нет.
 * При этом нужно учитывать пробелы и знаки препинания.
 */

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

/** Задача 2: Нужно написать функцию isAnagram(a, b), которая проверяет, являются ли две строки анаграммами,
 * причем регистр букв не имеет значения. Учитываются лишь символы, пробелы или знаки препинания
 * в расчет не берутся.
 */

function isAnagram(a, b) {
    return (a.toLowerCase().split('').sort().join() === a.toLowerCase().split('').sort().join());
}

/**
 * Задача 3: Напишите функцию reverseWords(str), которая принимает на вход предложение и возвращает его же,
 * но уже с развернутыми словами, разделенными пробелами.
 */

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

/**
 *  Задача 4: Напишите функцию getVowelsCount(str), принимающую строку в качестве аргумента
 *  и возвращающую количество гласных, которые содержатся в этой строке.
 *  Гласными являются А, Е, Ё, О, У, Ы, Э, И, Ю, Я.
 *  Функция должна подсчитывать гласные любого регистра, то-есть работать независимо от регистра.
 */

function getVowelsCount(str) {
    const vowels = ['а', 'е', 'ё', 'о', 'у', 'ы', 'э', 'и', 'ю', 'я'];
    return str.toLowerCase().split('').filter(element => vowels.includes(element)).length;
}

module.exports = { isPalindrome, isAnagram, reverseWords, getVowelsCount };
