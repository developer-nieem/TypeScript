// type anything = any

// const anything =  "Web Developer";

// const anything =  100000;

// (anything as number)

const kgToGm =  (value : string | number | undefined) => {

    if (typeof value ===  "string") {
    
        const convert = parseFloat(value) * 1000;

        return convert

    } else if (typeof value === "number") {
        return value * 1000
    }
    else{
        return "please input correct value"
    }


}

const reult = kgToGm(1000)

console.log(reult);

