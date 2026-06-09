//Cree un programa al estilo cajero automatico con las siguientes opciones
//1-consultar el saldo
//2-ingresar dinero
//3-extraer dinero

let saldo = 10000;

do {
    const opcion = prompt("Ingresa una opcion: 1- consultar el saldo 2- ingresar dinero 3- extraer dinero");
    switch (opcion) {
        case "saldo":
        case "1":
        case 1: 
        alert(`Tu saldo actual es $ ${saldo}`)    
            
            break;
        case "2":
        case "deposito":
        case 2:   
        const deposito = parseFloat(prompt("Ingresa el monto que deseas depositar"))  
        saldo = saldo + deposito;
        alert(`Ingresaste $ ${deposito}, tu saldo actual es $${saldo}`)      
    break
    case "3":
    case 3:
    case "extraer":
        const extraccion = parseFloat(prompt("Ingresa el monto a extraer"));
        if (extraccion <= saldo) {
            saldo = saldo - extraccion;
            alert(`Retiraste $${extraccion}, tu saldo actual $${saldo}`)
        } else {
            alert("Fondos insuficientes")
        }
        break        
        default:
            alert("Ingresaste una opcion erronea")
            break;
    }
} while (confirm("Queres realizar otra operacion"));