 "use strict"

// // ## 01 - Map Double

// // - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
// // - Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
// // - Affichez les valeurs de `double` dans la console

// // const array = [1, 2, 3, 4, 5]

// // const double = array.map((array, index) => {
// //     return array * 2

// // })

// // console.log(double)



// // ## 02 - Map Names
// // - Créez une variable `longNames` contenant la valeur suivante :
// // - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
// // Affichez les valeurs de shortNames dans la console


// // const longNames = [
// //   { firstName: "Jane", lastName: "Doe" },
// //   { firstName: "John", lastName: "Smith" },
// // ];

// // const shortNames = longNames.map((longName) => {
// //   return {name:`${longName.firstName} ${longNames.lastName}`}
// // });
// // console.log(shortNames)
// //

// // - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// // - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// // // - Affichez le tableau `numbers` qui doit contenir que des nombres

// // const array = [ 1,"toto",34 ,"javascript" ,8]
// // const numbers = array.filter((number) => {
// //     return typeof number === "number"

// // })

// // console.log(numbers)





// // ## 04 - Filter Even

// // - Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
// // - Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
// // // - Affichez les valeurs de `even` dans la console

// // const  numbers = ["1","2","3","4","5","6","7","8"]
// // const  even = numbers.filter((number) => {
// //     return number % 2 === 0
// // })

// // console.log(even)

// // ## 05 - Cakes

// // - Créez une variable `cakes` contenant la valeur suivante :
// // - À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
// // - Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console

// // const cakes = [
// //   {
// //     name: "cake",
// //     flavor: "vanilla",
// //     status: "available",
// //   },
// //   {
// //     name: "brownie",
// //     flavor: "chocolate",
// //     status: "available",
// //   },
// //   {
// //     name: "pie",
// //     flavor: "strawberry",
// //     status: "available",
// //   },
// //   {
// //     name: "muffin",
// //     flavor: "pistachio",
// //     status: "available",
// //   },
// //   {
// //     name: "donut",
// //     flavor: "chocolate",
// //     status: "available",
// //   },
// // ];

// // const soldOut = cakes.filter((cake) => {

// //  return cake.flavor === "chocolate"
    

// // })
// //     .map((cake) => {
// //     cake.status = "soldOut"
// //     return cake
// // })



// // console.log(soldOut)




// ## 06 - Cake v2

// Trouvez l’élément du tableau cake dont le nom est “pie”, et affichez le dans la console



// const cakes = [
//   {
//     name: "cake",
//     flavor: "vanilla",
//     status: "available",
//   },
//   {
//     name: "brownie",
//     flavor: "chocolate",
//     status: "available",
//   },
//   {
//     name: "pie",
//     flavor: "strawberry",
//     status: "available",
//   },
//   {
//     name: "muffin",
//     flavor: "pistachio",
//     status: "available",
//   },
//   {
//     name: "donut",
//     flavor: "chocolate",
//     status: "available",
//   },
// ];


// const pie = cakes.find( (cake) => {
    
//     return cake.name === "pie"

// })

// console.log(pie)



// ## 07 - Factorielle forEach

// A l’aide d’une boucle forEach, calculer la factorielle de `9`


// const numbers = [1,2,3,4,5,6,7,8,9]

// let result = 1

// numbers.forEach(number => {
    
//    result = result * number
// })

// console.log(result)





// ## 08 - Chess board

// À l’aide de deux boucles forEach, dessiner dans la console un plateau de jeu d’échecs


 



