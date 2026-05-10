class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const dhanush=new User("dhanush","dhanush@gmail.com",123)
console.log(dhanush.encryptPassword())
console.log(dhanush.changeUsername())