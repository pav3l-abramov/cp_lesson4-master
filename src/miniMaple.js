class MiniMaple {
    constructor(func, argument) {
            this.func = func.toLowerCase();
            this.argument = argument.toLowerCase();
    }
    #checkFunc(func) {
        for (let i = 0; i < func.length; i++)
            if (!(
                (/\d/.test(func[i])) ||
                (func[i] === this.argument) ||
                (func[i] === '+') || (func[i] === '-') || (func[i] === '*')|| (func[i] === '^')
            )
            ) {
                throw new SyntaxError("Формула некорректна, неизвестный символ " + func[i]);
            }
    }


    derivativeFunction(){
        let derivatived = "";
        try {
            this.#checkFunc(this.func)
            //разбиваем функцию на слагаемые
            let splittedFunc = this.func.split(/[+,-]/);
            let operationsFunc = []
            for (let i = 0; i < this.func.length; i++) {
                if (this.func[i]==='+' || this.func[i]==='-'){
                    operationsFunc.push(this.func[i]);
                }
            }

            //берем производную от слагаемых
            for (let i = 0; i < splittedFunc.length; i++) {
                const positionArgument = splittedFunc[i].search(this.argument);
                if (positionArgument === -1) { //Если слагаемое функции без аргумента, т.е просто число
                    splittedFunc[i] = "";
                    continue;
                }
                let power; //нахождение степени
                if (splittedFunc[i][positionArgument+1]==='^')
                    power = Number(splittedFunc[i].slice(positionArgument+2,splittedFunc[i].length));
                else
                    power = 1;
                let coef;  //нахождение коэффициента
                if (splittedFunc[i][positionArgument-1]==='*')
                    coef = Number(splittedFunc[i].slice(0,positionArgument-1));
                else
                    coef = 1;
                coef = coef * power;
                power -= 1;
                switch (power){
                    case 0:
                        splittedFunc[i] = coef;
                        break;
                    case 1:
                        splittedFunc[i] = coef+'*'+this.argument;
                        break;
                    default:
                        splittedFunc[i] = coef+'*'+this.argument+'^'+power;
                }
            }
            //собираем функцию из слагаемых
            let operationsCounter = 0;
            derivatived += splittedFunc[0]
            for (let i = 1; i < splittedFunc.length; i++) {
                if (splittedFunc[i] != ""){
                    derivatived += operationsFunc[operationsCounter] + splittedFunc[i]
                }
                operationsCounter++;
            }
        } catch (e) {
                console.log(e.name + e.message);
        }
        return derivatived;
    }


}
export {MiniMaple}