debugger;

let a = 10
function outer(){
    let b = 20
    debugger;
    function returnNum(){
        return 50
    }
    function inner(){
        let c = 30
        debugger;
        return a+ b + c + returnNum();
    }
    debugger;
    return inner();
}
debugger;

outer();
debugger;

