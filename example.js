function DoSomething(){
    console.log("Does Something");
}

const DoSomething1 = () => {
    return 18;
}

console.log(DoSomething);
DoSomething()

let arg = DoSomething1() > 16 ? "Legal to fuck" : "Not Legal to fuck";
console.log(arg)