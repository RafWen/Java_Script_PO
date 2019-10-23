console.log('Hello World')
var student_1 = {
    name: 'Andrzej',
    adress: 'Gdynia',
    student_id: 123,
    profile: 'None',
    displayName: function(){
        console.log(`Imie: ${this.name} Adres: ${this.adress}`)},
    changeId: function(newId){
            this.student_id = newId;
        }
    
    
};

var student_2 = {
    name: 'Filip',
    adress: 'Tczew',
    student_id: 456,
    profile: 'Active',
    displayName: function(){
        console.log(this.name)},
    changeId: function(){
        console.log(this.student_id = 111)}
};



/*var student = {
    name: '',
    setName: function(name){this.name = name},
    adress: '',
    setAdres: function(adress){this.adress = adress},
    student_id: '',
    setStudent_id: function(student_id){this.student_id = student_id},
    profile: '',
    setProfile: function(profile){this.profile = profile},
    displayName: function(){console.log(this.name, this.adress, this.student_id, this.profile)},
};*/

var studentList = [];

var student = {
    name:'',
    adress:'',
    student_id:'',
    profile:'',
    setData: function(name, adress, student_id, profile){
        this.name = name,
        this.adress = adress,
        this.student_id = student_id,
        this.profile = profile},    
    displayName: function(){console.log(setData)},
}

var person = Object.create(student);
person.setData('Janusz', 'Kartuzy', 155, 'live');
studentList.push(person);

var person1 = Object.create(student);
person1.setData('Janek', 'Kartuzy', 255, 'live');
studentList.push(person1);

var person2 = Object.create(student);
person2.setData('Leon', 'Reda', 15, 'obecny');
studentList.push(person2);

var person3 = Object.create(student);
person3.setData('Grażyna', 'Pruszcz', 156, 'live');
studentList.push(person3);

var person4 = Object.create(student);
person4.setData('Janusz', 'Sierakowice', 125, 'live');
studentList.push(person4);   


var kont_div = document.querySelector('#display');
var zmienna = '';
studentList.map((element)=> {
    zmienna += `<div> ${element.name}</div>`;
    zmienna += `<div> ${element.adress}</div>`;
    zmienna += `<div> ${element.student_id}</div>`;
    zmienna += `<div> ${element.profile}</div>`;
});

kont_div.innerHTML = zmienna;

function osobaStudent (name, adress, student_id, profile){
    this.name = name;
    this.adress = adress;
    this.student_id = student_id;
    this.profile = profile;
    this.changeId = function(newId){
        this.student_id = newId;
    }
};


var tablicaStudentow = [
    new osobaStudent('Jolanta', 'Kluczbork', 1001, 'live'),
    new osobaStudent('Jola', 'Żukowo', 1002, 'live'),
    new osobaStudent('Wika', 'Człuchów', 1003, 'live'),
    new osobaStudent('Jagoda', 'Wisła', 1005, 'live'),
    new osobaStudent('Andrzej', 'Szpęgawsk', 1011, 'live'),
    new osobaStudent('Pawełek', 'Łężyce', 1019, 'live'),
    new osobaStudent('Gosia', 'Gdynia', 1101, 'live'),
    new osobaStudent('Bożydar', 'Zblewo', 1201, 'live'),
    new osobaStudent('Jolanta', 'Moszna', 122, 'live'), 
]

var kont_div2 = document.querySelector('#display2');
var zmienna2 = '';
tablicaStudentow.map((element)=> {
    zmienna2 += `<div> ${element.name}</div>`;
    zmienna2 += `<div> ${element.adress}</div>`;
    zmienna2 += `<div> ${element.student_id}</div>`;
    zmienna2 += `<div> ${element.profile}</div>`;
});

kont_div2.innerHTML = zmienna2;




// var Person = [
//     new Person('Mike', 1001),
//     new Person('Jola', 1002),
//     new Person('Wika', 1003),
    
// ]


// function Student(adres, status){
//     this.adres = adres;
//     this.status = status;
//     }



// function Teacher(liczba_h, staz){
//     this.liczba_h = liczba_h;
//     this.staz = staz
// }

function Person(name, id){
    this.name = name;
    this.id = id;
};




// Person.prototype.displayInfo = function(){
//     console.log('Student ' + this.name)
// }

function Student(name, id, stp){
    Person.call(this, name, id);
    this.role = 'student';
    this.stp = stp;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher(liczba_h, staz){
    Person.call(this, name, id);
    this.role = 'teacher';
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var Student = [
    new Student('Reda', 1001, 'zaoczne'),
    new Student('Sopot', 1002, 'zaoczne'),
    new Student('none', 1003, 'dzienne'),
        
    ];

var Teacher = [
        new Teacher('Jolanta', 1001),
        new Teacher('Jola', 1002),
        new Teacher('Wika', 1003),
        
    ]
    








    

