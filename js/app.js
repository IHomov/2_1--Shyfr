let Btn = document.querySelector('button');
let inputTxt = document.getElementById('input');
let outputTxt = document.getElementById('outputTxt');

Btn.addEventListener('click', () => {
    Decoded(IKAO);
});

const IKAO = {
    codedTxt: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z',],
    
    decryption: [' Zero', ' One', ' Two', ' Three', ' Four', ' Five',
                ' Six', ' Seven', ' Eight', ' Nine',
                'Able', 'Baker', 'Charlie', 'Dog', 'Easy', 'Fox',
                'George', 'How', 'Item', 'Jig', 'King', 'Love',
                'Mike', 'Nan', 'Oboe', 'Peter', 'Queen', 'Roger',
                'Sugar', 'Tare', 'Uncle', 'Victor', 'William', 'X-ray',
                'Yoke', 'Zebra']
}

function Decoded(Obj) {
    inputTxt = inputTxt.value.toLowercase();
    let decodedTxt = [];    
    for (let i = 0; i < inputTxt.length; i++){
        for (let j = 0; j < Obj.decryption.length; j++){
            if (inputTxt[i] === Obj.codedTxt[j]) {
                decodedTxt.push(Obj.decryption[j])
            }
        }
    }
    outputTxt.innerHTML = decodedTxt;
    
}