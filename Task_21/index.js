// function ageContainer(a){
//    age=20 ;
//     return agecheck(age,a)
// }

// function agecheck(age,a){
// return agesticefy(age,a);
// }

// function agesticefy(age,a){
//     if(age<a){

//         age = age+1;
//         if(age <= a){
//             console.log("It is eligible");
//         }
//             // if((age+1)<a){
//             //     console.log("It is eligible");
//             // }
//             // if((age-1)<a){
//             //     console.log("It is eligible after one year");
//             //  }
//     }
//     else{
//         console.log("It is  not eligible");
//     }
// }


// ageContainer(18);


// four funtion logic


function main(a){
    man=20;
    return mainin(man,a);
}
function mainin(man,a){
    return mainchild(man,a);
}

function mainchild(man,a){

    if(man<=a){
        man=man+1;
        return mainIncrement(man,a);
    }
}
function mainIncrement(man,a){
   
    if(man<a){
        console.log("It is an adult");
    }
    else{
        console.log("It is not a adult");

    }
}
main(20);