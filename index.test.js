const { isPalindrome, isAnagram, reverseWords, getVowelsCount } = require('./index');

// Тесты для функции isPalindrome, Задача 1
describe('isPalindrome', () => {
    test('распознает палиндромы с пробелами и знаками препинания', () => {
        expect(isPalindrome('довод')).toBe(true);
        expect(isPalindrome('Топот')).toBe(true);
        expect(isPalindrome('12321')).toBe(true);
    });

    test('распознает не палиндромы', () => {
        expect(isPalindrome('привет')).toBe(false);
        expect(isPalindrome('Проверка функции')).toBe(false);
        expect(isPalindrome('тест кейс')).toBe(false);
    });

    test('работает с пустой строкой и одним символом', () => {
        expect(isPalindrome('')).toBe(true);
        expect(isPalindrome('a')).toBe(true);
    });
});

// Тесты для функции isAnagram, Задача 2
describe("isAnagram", () => {
    test("распознает анаграмму", () =>{
        expect(isAnagram('Апельсин', 'Спаниель')).toBe(true);
        expect(isAnagram('старик', 'стирка')).toBe(true);
        expect(isAnagram('кольншик', 'школьник')).toBe(true);
    })
})

// Тесты для функции reverseWords, Задача 3
describe("reverseWords", () => {
    test("разворачивает слова в предложении", () => {
        expect(reverseWords('Гречка может быть вкусной!')).toBe('акчерГ тежом ьтыб !йонсукв');
        expect(reverseWords('Апельсины - профилактика от онкологии')).toBe('ынисьлепА - акиткалифорп то ииголокно');
    })
})

// Тесты для функции getVowelsCount, Задача 3
describe("getVowelsCount", () => {
    test("считает гласные в строке", () => {
        expect(getVowelsCount('Привет, медвед')).toBe(4)
        expect(getVowelsCount('Арифметика')).toBe(5)
        expect(getVowelsCount('Горная порода дикобраза')).toBe(10)
    })
})