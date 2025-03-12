/*
📝 โจทย์ OOP (Object-Oriented Programming)
โจทย์: ระบบจัดการร้านหนังสือ 📚

ให้คุณสร้างระบบร้านหนังสือโดยใช้ OOP ซึ่งจะต้องมี คลาสหลัก และ คลาสย่อย ตามที่กำหนด

1️⃣ คลาส Book (หนังสือ)
ให้สร้าง คลาส Book ที่มีคุณสมบัติดังนี้

คุณสมบัติ (Properties)

title (ชื่อหนังสือ)
author (ชื่อผู้แต่ง)
price (ราคาหนังสือ)
stock (จำนวนคงเหลือ)
เมธอด (Methods)

getDetail() → แสดงรายละเอียดหนังสือ
sell(quantity) → ขายหนังสือและลดสต็อก (หากสต็อกไม่พอให้แจ้งเตือน)
addStock(quantity) → เพิ่มจำนวนหนังสือ

2️⃣ คลาส Member (สมาชิกของร้าน)
ให้สร้าง คลาส Member ที่มีคุณสมบัติดังนี้

คุณสมบัติ (Properties)
name (ชื่อสมาชิก)
email (อีเมลสมาชิก)
points (แต้มสะสม)
เมธอด (Methods)
getInfo() → แสดงรายละเอียดสมาชิก
earnPoints(amount) → ได้แต้มสะสมเพิ่มจากการซื้อหนังสือ
redeemPoints(points) → ใช้แต้มสะสมเป็นส่วนลด (หากแต้มไม่พอให้แจ้งเตือน)

3️⃣ คลาส Bookstore (ร้านหนังสือ)
ให้สร้าง คลาส Bookstore ที่มีคุณสมบัติดังนี้

คุณสมบัติ (Properties)

name (ชื่อร้าน)
books (รายการหนังสือที่มีในร้าน)
members (รายการสมาชิกของร้าน)
เมธอด (Methods)

addBook(book) → เพิ่มหนังสือเข้าไปในร้าน
sellBook(book, quantity, member) → ขายหนังสือและให้แต้มสมาชิก
registerMember(member) → ลงทะเบียนสมาชิกใหม่
showInventory() → แสดงรายการหนังสือทั้งหมดในร้าน\

4️⃣ คลาส VIPMember (สมาชิกพิเศษ)
ให้สร้าง คลาส VIPMember ที่ สืบทอดจาก Member

คุณสมบัติ (Properties)

discountRate (ส่วนลดพิเศษของสมาชิก VIP)
เมธอด (Methods)

getDiscount(price) → คำนวณราคาหลังหักส่วนลด
earnPoints(amount) → สมาชิก VIP ได้แต้มสะสมเพิ่มเป็น 2 เท่าของปกติ

หมายเหตุโจทย์ ถูกสร้างขึ้น โดย ChatGPT ทำเพื่อ ฝึกเขียน Node.JS 
*/

class Book {
    #title;
    #author;
    #price;
    #stock;
    constructor(title, author, price, stock) {
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#stock = stock;
    }
    get title() { return this.#title; }
    get author() { return this.#author; }
    get price() { return this.#price; }
    get stock() { return this.#stock; }
    getDetail() {
        return `Book Name: ${this.#title}\nAuthor: ${this.#author}\nPrice: ${this.#price}\nStock: ${this.#stock}`;
    }
    sell(quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            return "Error: Quantity must be a positive integer";
        }
    
        if (this.#stock < quantity) {
            return "Error: Not enough stock";
        }
    
        this.#stock -= quantity;
        return `Success: Sold ${quantity} copies of ${this.#title}`;
    }
    addStock(quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            return "Error: Quantity must be a positive integer";
        }
        this.#stock += quantity;
        return `Success: Added ${quantity} copies of ${this.#title} to stock`;
    }
}

class Member {
    #name;
    #email;
    #points;
    constructor(name, email) {
        this.#name = name;
        this.#email = email;
        this.#points = 0;
    }
    get name() { return this.#name; }
    get email() { return this.#email; }
    get points() { return this.#points; }
    getInfo() {
        return `Name: ${this.#name}\nEmail: ${this.#email}\nPoints: ${this.#points}`;
    }
    earnPoints(points) {
        if (!Number.isInteger(points) || points < 0) {
            return "Error: Points must be a positive integer";
        }
        this.#points += points;
        return `Success: Earned ${points} points`;
    }
    redeemPoints(points) {
        if (!Number.isInteger(points) || points < 0) {
            return "Error: Points must be a positive integer";
        }
        if (points > this.#points) {
            return "Error: Not enough points";
        }
        this.#points -= points;
        return `Success: Redeemed ${points} points`;
    }
}

class VIPMember extends Member {
    #discountRate;
    constructor(name, email, discountRate) {
        super(name, email);
        this.#discountRate = discountRate;
    }

    get discountRate() { return this.#discountRate; }

    getDiscount(price) {
        return price * (1 - this.#discountRate / 100);
    }

    earnPoints(points) {
        if (!Number.isInteger(points) || points < 0) {
            return "Error: Points must be a positive integer";
        }

        return super.earnPoints(points * 2);
    }
}

class Bookstore {
    #name;
    #books;
    #members;

    constructor(name) {
        this.#name = name;
        this.#books = [];
        this.#members = [];
    }

    get name() { return this.#name; }
    get books() { return this.#books; }
    get members() { return this.#members; }

    registerMember(member) {
        if (member instanceof Member) {
            this.#members.push(member);
            return `Success: ${member.name} registered as a member`;
        } else {
            return "Error: Invalid member";
        }
    }

    addBook(book) {
        if (book instanceof Book) {
            this.#books.push(book);
            return `Success: ${book.title} added to bookstore`;
        } else {
            return "Error: Invalid book";
        }
    }

    findBookbyName(title) {
        return this.#books.find(book => book.title === title) || "Book not Found";
    }

    findBookbyAuthor(author) {
        return this.#books.filter(book => book.author === author) || "Book not Found";
    }

    findMemberbyName(name) {
        return this.#members.find(member => member.name === name) || "Member not Found";
    }

    sellBook(book, quantity, member) {
        if (!(book instanceof Book) || !(member instanceof Member)) {
            return "Error: Invalid book or member";
        }

        let saleResult = book.sell(quantity);
        if (saleResult.startsWith("Success")) {
            let pointsEarned = quantity * Math.floor(book.price / 10);
            member.earnPoints(pointsEarned);
            return `${saleResult}. ${member.name} earned ${pointsEarned} points.`;
        }
        return saleResult;
    }

    showInventory() {
        if (this.#books.length === 0) {
            return "No books in inventory";
        }

        return this.#books.map(book => book.getDetail()).join("\n\n");
    }
}

/* TEST */

// สร้างหนังสือ
const book1 = new Book("Harry Potter", "J.K. Rowling", 500, 10);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 800, 5);

// สร้างร้านหนังสือ
const store = new Bookstore("My Bookstore");

// เพิ่มหนังสือเข้าร้าน
console.log(store.addBook(book1));
console.log(store.addBook(book2));

// สร้างสมาชิก
const member1 = new Member("Alice", "alice@example.com");
const vipMember = new VIPMember("Bob", "bob@example.com", 10);

// ลงทะเบียนสมาชิก
console.log(store.registerMember(member1));
console.log(store.registerMember(vipMember));

// ขายหนังสือให้สมาชิกปกติ
console.log(store.sellBook(book1, 2, member1));

// ขายหนังสือให้ VIPMember (จะได้แต้ม x2)
console.log(store.sellBook(book2, 1, vipMember));

// แสดงรายการหนังสือที่เหลือ
console.log(store.showInventory());

// ใช้แต้มสะสม
console.log(member1.redeemPoints(20));
console.log(vipMember.redeemPoints(50));
