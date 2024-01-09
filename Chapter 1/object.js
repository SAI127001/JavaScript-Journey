const Student = {            // student is an object
    name : "Terukula Sai",
    age : 20,
    cgpa : 9.80,
    isPass : true
};

console.log(Student);
console.log(Student.cgpa);

Student["name"] = "Terukula Kiran";
console.log(Student["name"]);
