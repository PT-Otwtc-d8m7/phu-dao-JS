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
    const array1 = str.split(',');
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
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
        } else {
            result += str[i];
        }
    }
    return result;
}

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


function func11(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function bai11() {
    const submitBtn = document.getElementById('submitBtn');
    const arr1Input = document.getElementById('arr1');
    const arr2Input = document.getElementById('arr2');
    const resultDiv = document.querySelector('.bai-11 .result');
    
    submitBtn.addEventListener('click', function() {
        const arr1 = arr1Input.value.split(',');
        const arr2 = arr2Input.value.split(',');
        
        const value = func11(arr1, arr2);
        resultDiv.innerText = value; 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    bai11();
});


function findUniqueElements(arr1, arr2) {
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item));
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item));
    return [...uniqueArr1, ...uniqueArr2];
}

function bai12() {
    const submitBtn = document.getElementById('submitBtn');
    const arr1Input = document.getElementById('arr1');
    const arr2Input = document.getElementById('arr2');
    const resultDiv = document.querySelector('.bai-12 .result');
    
    submitBtn.addEventListener('click', function() {
        const arr1 = arr1Input.value.split(',').map(item => item.trim()); 
        const arr2 = arr2Input.value.split(',').map(item => item.trim());
        
        const uniqueArr = findUniqueElements(arr1, arr2);
        
        resultDiv.innerText = 'Mảng mới: ' + uniqueArr.join(', ');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    bai12();
});


function findUniqueElements(arr1, arr2) {
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item));
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item));
    return [...uniqueArr1, ...uniqueArr2];
}

function bai13() {
    const submitBtn = document.getElementById('submitBtn');
    const arr1Input = document.getElementById('arr1');
    const arr2Input = document.getElementById('arr2');
    const resultDiv = document.querySelector('.bai-13 .result');
    
    submitBtn.addEventListener('click', function() {
        const arr1 = arr1Input.value.split(',').map(item => item.trim());
        const arr2 = arr2Input.value.split(',').map(item => item.trim());
        
        const uniqueArr = findUniqueElements(arr1, arr2);
        
        resultDiv.innerText = 'Kết quả: ' + uniqueArr.join(', ');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    bai13();
});


function filterAndSquareOddNumbers(str) {
    const numbers = str.split(',').map(Number);
    const result = numbers.filter(num => num % 2 !== 0).map(num => num * num);
    return result;
}

function bai16() {
    const submitBtn = document.getElementById('submitBtn');
    const numbersInput = document.getElementById('numbersInput');
    const resultDiv = document.querySelector('.bai-16 .result');

    submitBtn.addEventListener('click', function() {
        const value = filterAndSquareOddNumbers(numbersInput.value);
        resultDiv.innerHTML = '<b>Kết quả:</b> ' + value.join(', ');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    bai16();
});


function calculate() {
    const inputNumbers = document.getElementById("numbersInput").value;
    const numbersArray = inputNumbers.split(",").map(Number);
    const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
    const squaredNumbers = oddNumbers.map(num => num ** 2);

    const resultDiv = document.getElementById("resultDiv");
    resultDiv.textContent = "Squared odd numbers: " + squaredNumbers.join(", ");
}

function calculateAverage() {
    const inputNumbers = document.getElementById("numbersInput").value;
    const numbersArray = inputNumbers.split(",").map(Number);
    const sum = numbersArray.reduce((partialSum, num) => partialSum + num, 0);
    const average = sum / numbersArray.length;

    const resultDiv = document.getElementById("resultDiv");
    resultDiv.textContent = `Average: ${average.toFixed(2)}`;
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    return average;
}







