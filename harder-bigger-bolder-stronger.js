export function generateLetters() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 1; i <= 120; i++) {
    const letters = alphabet[Math.floor(Math.random()*alphabet.length)]
    let newDiv = document.createElement("div");   
    newDiv.append(letters)
    // document.body.append(Div120);
    //document.documentElement.textContent;
    // for (const prop in elementStyle) {
    //     if (Object.hasOwn(elementStyle, prop)) {
    //         Div120.style.fontSize = '130px';            
    //     }     
    // }
    newDiv.style.fontSize = i + 10 + 'px'
    
    if (i <= 40) {
        newDiv.style.fontWeight = 300
    } else if (i > 40 && i <= 80) {
        newDiv.style.fontWeight = 400
    } else {
        newDiv.style.fontWeight = 600
    }
    document.body.append(newDiv)
    }
}

// export const generateLetters = () =>  {
//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const letters = alphabet[Math.floor(Math.random()*alphabet.length)]
//     let newDiv = document.createElement("div");
//     let Div120 = newDiv * 120;
//     Div120.append(letters)
//     //document.documentElement.textContent;
//     Div120.style.fontSize = '130px'
    
//     let Div40 = Div120/3;
//     for ( i = 0; i< Div40; i++) { 
//         Div120.style.fontWeight = 300
//     }

//     let Div80 = Div120 - Div120/3;
//     for ( i = Div40; i< Div80; i++) {
//         Div120.style.fontWeight = 400
//     }
    
//     for ( i = Div80; i< Div120; i++) {
//         Div120.style.fontWeight = 600
//     } 
//     document.body.append(Div120);

// }

// export const generateLetters = () =>  {
//     let newDiv = document.createElement("div");
//     let Div120 = newDiv * 120;
//     document.body.append(Div120);
//     document.documentElement.textContent;
//     for (const prop in elementStyle) {
//         if (Object.hasOwn(elementStyle, prop)) {
//             element.style.fontSize = '130px';            
//         }     
//     }
//     let Div40 = Div120/3;
//     for ( i = 0; i< Div40; i++) { 
//         element.style.fontWeight = "300"
//     }

//     let Div80 = Div120 - Div120/3;
//     for ( i = Div40; i< Div80; i++) {
//         element.style.fontWeight = "400"
//     }
    
//     for ( i = Div80; i< Div120; i++) {
//         element.style.fontWeight = "600"
//     } 
// }