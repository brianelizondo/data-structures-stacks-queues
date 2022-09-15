function balancedBrackets(string){
    let bracket_1 = {
        bracket_open: "{",
        bracket_close: "}"
    };
    let bracket_2 = {
        bracket_open: "[",
        bracket_close: "]"
    };
    let bracket_3 = {
        bracket_open: "(",
        bracket_close: ")"
    };
    let brackets_count = 0;
    
    for(var i = 0; i < string.length; i++){
        if(string[i] === bracket_1.bracket_open ||  string[i] === bracket_2.bracket_open || string[i] === bracket_3.bracket_open){
            brackets_count++;
        }
        if(string[i] === bracket_1.bracket_close ||  string[i] === bracket_2.bracket_close || string[i] === bracket_3.bracket_close){
            brackets_count--;
        }
    }

    return brackets_count == 0 ? "string balanced" : "string imbalanced";
}