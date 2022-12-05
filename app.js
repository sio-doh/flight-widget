const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "07:30", 
        destination: "London Heathrow", 
        flight: "LH 200", 
        gate: "A 01", 
        remarks: "ON TIME"
    }, 
    {
        time: "11:00", 
        destination: "Paris Charles de Gaulle", 
        flight: "PCG 110", 
        gate: "A 02", 
        remarks: "CANCELLED"
    },
    {
        time: "15:40", 
        destination: "Amsterdam Airport Schiphol", 
        flight: "AS 190", 
        gate: "A 03", 
        remarks: "DELAYED"
    },
    {
        time: "20:05", 
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