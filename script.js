//complete this code
class Person {
	constructor(name , age){
		this.name = name;
		this.age = age;	
	}
	get getName(){
		return this.name;
	}
	set setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	super(name,age);
	study(){
		console.log(this.name+ "is studying");
	}
}

class Teacher extends Person {
	super(name,age);
	teach(){
		console.log(this.name+ "teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
