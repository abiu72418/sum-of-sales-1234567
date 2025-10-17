async function fetchData() {
    const response = await fetch('data.csv');
    const data = await response.text();
    const rows = data.split('\n');
    let totalSales = 0;
    const salesTableBody = document.querySelector('#product-sales tbody');
    salesTableBody.innerHTML = '';
    rows.forEach((row, index) => {
        if (index > 0) { // Skip header
            const columns = row.split(',');
            const product = columns[0]; // Assuming product name is in the first column
            const sales = parseFloat(columns[1]); // Assuming sales is in the second column
            if (!isNaN(sales)) {
                totalSales += sales;
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${product}</td><td>${sales.toFixed(2)}</td>`;
                salesTableBody.appendChild(newRow);
            }
        }
    });
    document.querySelector('#total-sales').textContent = totalSales.toFixed(2);
}

fetchData();