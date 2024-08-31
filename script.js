const users = [
    {
        name: "Davlat",
        age: 17,
        isMarried: true,
        wifes: ['malika', 'kamila', 'samir', 'miron']
    },
    {
        name: "Samir",
        age: 13,
        isMarried: false,
        wifes: []
    },
    {
        name: "Jasur",
        age: 17,
        isMarried: false,
        wifes: []
    },
    {
        name: "Islom",
        age: 16,
        isMarried: true,
        wifes: ["Davlat"]
    }
]

// найти самого взрослого пользователья
// найти самого младшего пользователья
// найти средний возраст пользователей
let oldest = []
let youngest = []
let average = 0


users.forEach(user => {
    if (user.age > oldest.age) {
        oldest = user

    }
    if (user.age < youngest.age) {
        youngest = user
    }

    if (user) {
        average+=user.age
       
    }


}
)
let averageAge = average/users.length

console.log(oldest, youngest,averageAge)
