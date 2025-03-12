# 📝 JavaScript OOP Cheat Sheet

## 📌 1. การสร้างตัวแปรและฟังก์ชันพื้นฐาน
```javascript
console.log("hello"); // แสดงข้อความบน console
console.log(5+3);    // แสดงผลลัพธ์ของ 5+3

var firstname = "Erik"; // ใช้ var ประกาศตัวแปร (ไม่แนะนำให้ใช้)
let lastname = "per";  // ใช้ let ประกาศตัวแปรที่เปลี่ยนค่าได้
const age = 25;        // ใช้ const ประกาศค่าคงที่ (เปลี่ยนค่าไม่ได้)

function myFunction(){
    console.log('inside a function');
}
myFunction(); // เรียกใช้ฟังก์ชัน
```

## 📌 2. การใช้ `forEach()` กับอาร์เรย์
```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach((value) => {
    console.log(value);
});
```

## 📌 3. การสร้าง Object แบบปกติ
```javascript
let user = {
    name: "Erik",
    age: 26,
    hobbies: ["skiing"],
};

console.log(user.name); // เข้าถึงค่าใน object
```

## 📌 4. การสร้างอาร์เรย์ของ Object
```javascript
let members = [
    { name: "wow", age: 1 },
    { name: "gay", age: 2 },
];
console.log(members[0]); // เข้าถึง object ตัวแรก
```

## 📌 5. การใช้ `Date` Object
```javascript
let date = new Date(0); // ต้องใช้ `new` เพื่อสร้าง object
console.log(date.toString());
```

## 📌 6. การสร้างคลาส (Class) และ Object
```javascript
class User {
    constructor(n, p) {
        this.name = n;
        this.password = p;
    }
    showDetail() {
        return `name: ${this.name}, password: ${this.password}`;
    }
}

const user1 = new User("wow", 1234);
console.log(user1.name);
console.log(user1.showDetail());
```

## 📌 7. `static` และ `private properties` ในคลาส
```javascript
class Member {
    #name;
    #password;
    #age;
    static type = "something";
    
    constructor(name, pass, age) {
        this.#name = name;
        this.#password = pass;
        this.#age = age;
    }
    
    set Name(newName) { this.#name = newName; }
    get Name() { return this.#name; }
    
    static showType() { console.log("wow"); }
}
console.log(Member.type); // เข้าถึง static property
```

## 📌 8. `extends` และ `super` (Inheritance)
```javascript
class Teacher {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() { return this.#name; }
}

class Student extends Teacher {
    #grade;
    constructor(name, age, grade) {
        super(name, age); // เรียก constructor ของ parent class
        this.#grade = grade;
    }
}
```

## 📌 หมายเหตุ
- **`#`** ใช้สร้าง **private properties** ป้องกันการเข้าถึงจากภายนอก
- **getter & setter** ใช้เพื่อกำหนดและดึงค่าตัวแปร private
- **`static`** ใช้สร้าง properties/methods ที่เรียกใช้ได้โดยไม่ต้องสร้าง object
- **`super`** ใช้ใน subclass เพื่อเรียก constructor ของ parent class

✅ **พร้อมใช้งานใน VS Code!** 🚀
