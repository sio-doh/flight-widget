const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "07:35", 
        destination: "London Heathrow", 
        flight: "LH 200", 
        gate: "A 01", 
        remarks: "ON TIME"
    }, 
    {
        time: "11:48", 
        destination: "Paris Charles de Gaulle", 
        flight: "PCG 110", 
        gate: "A 02", 
        remarks: "CANCELLED"
    },
    {
        time: "15:29", 
        destination: "Amsterdam Airport Schiphol", 
        flight: "AS 190", 
        gate: "A 03", 
        remarks: "DELAYED"
    },
    {
        time: "23:06", 
        destination: "Frankfurt", 
        flight: "FK 230", 
        gate: "A 04", 
        remarks: "CANCELLED"
    },
    {
        time: "14:00", 
        destination: "Istanbul", 
        flight: "IST 340", 
        gate: "A 05", 
        remarks: "ON TIME"
    }
]

const destinations = ["London Heathrow", "Paris Charles de Gaulle", "Amsterdam Airport Schiphol", "Frankfurt", "Istanbul"]; 
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]; 
let hour = 20

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr"); 
                
        for (const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div'); 
                
                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index)                
            }
            tableRow.append(tableCell);
        }
        tableBody.append(tableRow);
    }
}
populateTable()

// generate random letter to help create flight and gate randomly
function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"; 
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber+1); 
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour; 

    if (hour <= 23) {
        hour++;
    } 
    if (hour >= 24) {
        hour = 1;
        displayHour = hour;
    }
    if (hour < 10) {
        displayHour = "0" + hour;
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(), 
        destination: destinations[Math.floor(Math.random() * destinations.length)], 
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(), 
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = "";
    populateTable()
}

setInterval(shuffleUp, 6000) // shuffle up to run every 6 seconds