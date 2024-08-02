let weight = 30; 
    switch(true) {
        case (weight >= 0 && weight <= 10):
            console.log( "$5.00");
             break;
        case (weight >= 11 && weight <= 20):
            console.log( "$10.00");
             break;
        case (weight >= 21 && weight <= 30):
            console.log( "$15.00");
             break;
        case (weight >= 31 && weight <= 40):
            console.log( "$20.00");
             break;
        case (weight > 40):
            console.log( "Contact for shipping cost");
             break;
        default:
            console.log( "Invalid weight.")
    }