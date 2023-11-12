
{

    class Person {
        name : string;
        age : number;
        adress : string;
    
        constructor (name : string , age :number , adress: string) {
            this.name = name,
            this.age = age,
            this.adress =adress
        }

        getSleep(howManyHours : number){
            console.log(`students name ${this.name}  he is sleep ${howManyHours} hours`);
            
        }
    }



    class Students  extends Person{

    
        constructor (name : string , age :number , adress: string) {
         super(name , age, adress)
        }

        getSleep(howManyHours : number){
            console.log(`students name ${this.name}  he is sleep ${howManyHours} hours`);
            
        }
    }


    const students1 = new Students ("Rana", 20, "dhaka")

    students1.getSleep(20)




    class Teacher extends Person {
        
    
        constructor (name : string , age :number , adress: string, designation: string) {
            super(name, age, adress)
            this.designation= designation
        }

        getSleep(howManyHours : number){
            console.log(`students name ${this.name}  he is sleep ${howManyHours} hours`);
        }

        takeClass(howManyClass) {
            console.log(`Teacher name ${this.name}  ${this.designation} is take class ${howManyClass}  `);
        }
    }

    const teacher = new Teacher("Mahbub", 40, 'barguna', 'professer')

    teacher.takeClass(2)

}

