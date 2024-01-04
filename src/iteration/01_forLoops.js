let arr = [1, 2, 3, 4, 5, 6]

//1. for of  -> return value
for (const num of arr) {
    // console.log(num);
}


let course = {
    "cpp": "c++",
    "js": "javascript",
    "py": "python"
}

//2. for-in  -> return index/key
for (const key in course) {
    // console.log(key, " is shortcut for course ", course[key]);
}

//for-each loops will not work on object as object are not iterable
// course.forEach((item) => {
//     console.log(item);
// })


//3. for-each 
arr.forEach(function (item) {
    // console.log(item);
})

arr.forEach((item) => {
    // console.log(item)
})

function print(item) {
    // console.log(item);
}

arr.forEach(print)  //pass reference of function in the foreach loop

let coding = [
    {
        "subName": "javaScript",
        "shortcut": "js"
    },
    {
        "subName": "javat",
        "shortcut": "java"
    },
    {
        "subName": "python",
        "shortcut": "py"
    }
]

coding.forEach((item) => {
    // console.log(item);  //it will print whole object
    // console.log(item.subName);  //it will print only one property
})

let newCoding = [
    {
        sub: [
            {
                "subName": "javaScript",
                "shortcut": "js"
            },
            {
                "subName": "javat",
                "shortcut": "java"
            },
            {
                "subName": "python",
                "shortcut": "py"
            }
        ]
    }
];


newCoding.forEach((item) => {
    // console.log(item);  //print whole sub object 
    const innerData = item.sub
    innerData.forEach((innerItem) => {
        console.log(innerItem.shortcut, " is shortcut for ", innerItem.subName);
    })
})