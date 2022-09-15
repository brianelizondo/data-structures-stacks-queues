const Stack = require("./stack");

class browserSystem {
    constructor() {
        this.current = null;
        this.back = new Stack();
        this.forward = new Stack();
    }

    goTo(url){
        this.current = url;
        this.back.push(url);
        this.forward.empty();
        return this.current;
    }

    goBack(){
        if(this.forward.size === 0){
            throw new Error("Can't go back");
        }else{
            let backURL = this.back.pop();
            this.forward.push(backURL);
            this.current = this.back.first.val;
            return this.current;
        }
    }

    goForward(){
        if(this.forward.size === 0){
            throw new Error("Can't go forward");
        }else{
            let forwardURL = this.forward.pop();
            this.back.push(forwardURL);
            this.current = forwardURL;
            return this.current;
        }
    }
}