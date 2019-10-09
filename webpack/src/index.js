import {load_heading, myFunction, add_number} from './testscript';
import './styles/main.scss';

document.getElementById("heading").innerHTML = load_heading("Webpack COnfiguration Page");
document.getElementById("demo").innerHTML = add_number(4, 3);
console.log(myFunction('Method calling using webpack'))
