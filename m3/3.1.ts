{

    class Animals {
   
        constructor( public name:string, public sound:string){}

        makeSound(){
            console.log(`i am ${this.name} my sound ${this.sound}`); 
        }
    }


    const cat =  new Animals("miaaa cat", "meu meu ")


cat.makeSound()


}