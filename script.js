// const day = 5 // ประกาศตัวแปรสำหรับใช้ในเงื่อนไ
// switch (day) { // ระบุใน switch ว่าจะเช็คเงื่อนไขตามตัวนี้
//   case 1: // ถ้า day == 1
//     // บรรทัดนี้ "ไม่ทำงาน"
//     console.log('Monday')
//     break
//   case 2: // ถ้า day == 2 (ซึ่งเป็นจริง)
//     // บรรทัดนี้ "ทำงาน"
//     console.log('Tuesday')
//     break
//   case 3: // ถ้า day == 3
//     // บรรทัดนี้ "ไม่ทำงาน"
//     console.log('Wednesday')
//     break
//   default:
//     console.log('Invalid day')
// }

// let i = 0
// while (i< 10){
//   console.log('round: ', i)
//   i++
// }

// for(let i = 0; i < 10; i++){
//   console.log('round: ', i)
// }
function clickMe() {
let numbers = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    address: { city: "Bangkok", country: "Thailand" },
    tel: ["0812345678", "0912345678"],
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 30,
    address: { city: "Chiangmai", country: "Thailand" },
    tel: ["0811111111", "0911111111"],
  },
  {
    firstname: "Jim",
    lastname: "Beam",
    age: 35,
    address: { city: "Phuket", country: "Thailand" },
    tel: ["0822222222", "0922222222"],
  },
  {
    firstname: "Jack",
    lastname: "Daniels",
    age: 40,
    address: {
      city: { name: "Hat Yai", region: "South", state: "Phuket" },
      country: "Thailand",
    },
    tel: ["0833333333", "0933333333"],
  },
];
for (let i = 0; i < numbers.length; i++) {
document.getElementById("demo").innerHTML += numbers[i].firstname + " " + numbers[i].lastname + "<br>";
}
}


function submitForm() {
  alert("Form submitted!");
  let informations = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    interests: [
      document.getElementById("sports").checked ? "Sports" : null,
      document.getElementById("music").checked ? "Music" : null,
      document.getElementById("travel").checked ? "Travel" : null,
    ].filter(Boolean),
    description: document.getElementById("description").value,
  };
  console.log(informations);
  }
 

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i].age == 40) {
//     console.log(numbers[i].address.city.name);
//     console.log(numbers[i].address.city.region);
//     console.log(numbers[i].address.city.state);
//   }
// }

// numbers.forEach((result) => {
//   if (result.age == 40) {
//     console.log(result.address.city.name);
//     console.log(result.address.city.region);
//     console.log(result.address.city.state);
//   }});


