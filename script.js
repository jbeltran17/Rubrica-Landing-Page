const display = document.getElementById('display');

const appendToDisplay = value => {
    display.value += value;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    try {
        const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
        display.value = `${result}`;
    } catch (error) {
        display.value = '#Error';
    }
};
