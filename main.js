function func1(str) {
    const array1 = str.split(','); // Split the string into an array of characters
    console.log(array1);
    for(let i = 1; i < array1.length; i++) {
        if(array1[i - 1] > array1[i]) {
            return false;
        }
    }
    return true;
    
}

function bai1() {
    const btn = document.querySelector('.bai-1 button');
    const input = document.querySelector('.bai-1 input');
    const result = document.querySelector('.bai-1 .result');
    
    btn.addEventListener('click', function() {
        const value = func1(input.value);
        result.innerText = value;
    });
}

bai1();


function func2(str) {
    const array1 = str.split(' '); // Split the string into an array of characters
    const count = {}; // Use an object to count occurrences of each character
    
    // Count occurrences of each character
    for (let i = 0; i < array1.length; i++) {
        const char = array1[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    let maxCount = 0;
    let maxChar = '';
    
    // Find the character with the maximum count
    for (const char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
    return maxChar;
}


function bai2() {
    const btn = document.querySelector('.bai-2 button');
    const input = document.querySelector('.bai-2 input');
    const result = document.querySelector('.bai-2 .result');
    
    btn.addEventListener('click', function() {
        const value = func2(input.value);
        result.innerText = value;
    });
}

bai2();


// ++++++++++++++++++++++++++++++++++++++++++
function func3(str) {
    const array1 = str.split(' '); // Split the string into an array of words
    const count = {}; // Use an object to count occurrences of each word
    const result = []; // Array to store unique words
    
    // Count occurrences of each word and store unique words in result array
    for (let i = 0; i < array1.length; i++) {
        const word = array1[i];
        if (!count[word]) {
            count[word] = 1;
            result.push(word);
        }
    }
    
    return result;
}

function bai3() {
    const btn = document.querySelector('.bai-3 button');
    const input = document.querySelector('.bai-3 input');
    const result = document.querySelector('.bai-3 .result');
    
    btn.addEventListener('click', function() {
        const value = func3(input.value);
        result.innerText = value;
    });
}

bai3();



// ++++++++++++++++++++++++++++++++++++++++++


function func4(str) {
    const array1 = str.split(' ');
    console.log(array1);
    let maxLength = 0;
    let position;
    for (let i = 0; i < array1.length; i++) {
        const wordLength = array1[i].length;
        if (wordLength >= maxLength) {
            maxLength = wordLength;
            position = i;
        }
    }
    return array1[position];
}


function bai4() {
    const btn = document.querySelector('.bai-4 button');
    const input = document.querySelector('.bai-4 input');
    const result = document.querySelector('.bai-4 .result');
    
    btn.addEventListener('click', function() {
        const value = func4(input.value);
        result.innerText = value;
    });
}

bai4();


function func5(str) {
    const array1 = str.split(' '); // Split the string into an array of words
    let maxLength = 0;
    let secondMaxLength = 0;
    let maxPosition = -1;
    let secondMaxPosition = -1;

    for (let i = 0; i < array1.length; i++) {
        const wordLength = array1[i].length;
        if (wordLength > maxLength) {
            secondMaxLength = maxLength;
            secondMaxPosition = maxPosition;
            maxLength = wordLength;
            maxPosition = i;
        } else if (wordLength > secondMaxLength && wordLength < maxLength) {
            secondMaxLength = wordLength;
            secondMaxPosition = i;
        }
    }

    if (secondMaxPosition === -1) {
        return ""; // Return an empty string if there is no second longest word
    }

    return array1[secondMaxPosition];
}

function bai5() {
    const btn = document.querySelector('.bai-5 button');
    const input = document.querySelector('.bai-5 input');
    const result = document.querySelector('.bai-5 .result');
    
    btn.addEventListener('click', function() {
        const value = func5(input.value);
        result.innerText = value;
    });
}

bai5();


function func6(str) {
    const array1 = str.split(' ');
    const int_array = array1.map(Number);
    const sum = int_array.reduce((accumutlator, currentValue) =>  {
        return accumutlator + (currentValue%2 === 0 ? currentValue : 0);
    }, 0);
    return sum;
}

function bai6() {
    const btn = document.querySelector('.bai-6 button');
    const input = document.querySelector('.bai-6 input');
    const result = document.querySelector('.bai-6 .result');
    
    btn.addEventListener('click', function() {
        const value = func6(input.value);
        result.innerText = value;
    });
}

bai6();


function func7(str) {
    const array1 = str.split('');
    for(let i = 0; i < array1.length; i++){
        let asciiValue = array1
        console.log(getAsciiValues(array1[i])); // Example input
    }
    return array1;
}

function getAsciiValues(str) {
    const array1 = str.split(''); // Split the string into an array of characters
    const asciiValues = []; // Array to store ASCII values
    
    for (let i = 0; i < array1.length; i++) {
        const asciiValue = array1[i].charCodeAt(0); // Get ASCII value of each character
        asciiValues.push(asciiValue);
    }
    
    return asciiValues;
}

console.log(getAsciiValues('hello')); // Example input


function bai7() {
    const btn = document.querySelector('.bai-7 button');
    const input = document.querySelector('.bai-7 input');
    const result = document.querySelector('.bai-7 .result');
    
    btn.addEventListener('click', function() {
        const value = func7(input.value);
        result.innerText = value;
    });
}

bai7();

function func8(str) {
    var string = str;
    return array1;
}

function bai8() {
    const btn = document.querySelector('.bai-8 button');
    const input = document.querySelector('.bai-8 input');
    const result = document.querySelector('.bai-8 .result');
    
    btn.addEventListener('click', function() {
        const value = func8(input.value);
        result.innerText = value;
    });
}

bai8();


function func11(str) {
    const array1 = str.split(' ');
    const int_array = array1.map(Number);
    const sum = int_array.reduce((accumutlator, currentValue) =>  {
        return accumutlator + (currentValue%2 === 0 ? currentValue : 0);
    }, 0);
    return sum;
}

function bai11() {
    const btn = document.querySelector('.bai-11 button');
    const input = document.querySelector('.bai-11 input');
    const result = document.querySelector('.bai-11 .result');
    
    btn.addEventListener('click', function() {
        const value = func11(input.value);
        result.innerText = value;
    });
}

bai11();
