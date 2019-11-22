import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    element.innerHTML = _.join(['这里是汉字', 'webpack11213'], ' ');

    btn.innerHTML = '点击这里，然后查看console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());