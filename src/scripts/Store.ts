

let name = "default"


export default {


    get():string{
        return name;
    },

    set(n:string){
        name = n
    }




}