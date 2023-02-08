class localstorage{
    constructor(){
        this.map  = new Map();
    }

    get length(){
        return this.map.size;
    }

    setItem(key,value){
        if(typeof value === "string"){
            this.map.set(key,value);
        }
        else{
            console.error("Not a String");
        }
    }

    getItem(key){
        return this.map.get(key);
    }

    removeItem(key){
        this.map.delete(key);
    }

    clear(){
        this.map.clear();
    }

    get length(){
        return this.map.size;
    }

}

localstorage = new localstorage();
localstorage.setItem("Name","Bhavesh");
localstorage.setItem("Number","7727046458");
localstorage.setItem("array",JSON.stringify({array:[8,3,5,6,7,9]}));
console.log(JSON.parse(localstorage.getItem("array")));