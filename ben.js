function f14() {
    let out = '';
    let i141 = +document.querySelector('.i-141').value;
    let i142 = +document.querySelector('.i-142').value;
    let s143 = document.querySelector('.s-143').value;
    switch (s143) {
        case ('*'):
            out += (i141 * i142);
            break;
        case ('/'):
            out += (i141 / i142);
            break;
        case ('+'):
            out += (i141 + i142);
            break;
        case ('-'):
            out += (i141 - i142);
            break;
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;