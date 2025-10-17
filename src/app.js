async function fetchData() {
    const response = await fetch('data.csv');
    const data = await response.text();
    const rows = data.split('\n');
    let totalSales = 0;
    rows.forEach((row, index) => {
        if (index > 0) { // Skip header
            const columns = row.split(',');
            const sales = parseFloat(columns[1]); // Assuming sales is in the second column
            if (!isNaN(sales)) {
                totalSales += sales;
            }
        }
    });
    document.querySelector('#total-sales').textContent = totalSales.toFixed(2);
}

fetchData();