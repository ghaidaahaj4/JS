function toggleColumn(index) {
    const rows = document.querySelectorAll('#dataTable tr');
    rows.forEach(row => {
      const cell = row.cells[index];
      if (cell) {
        cell.style.display = (cell.style.display === 'none') ? '' : 'none';
      }
    });
  }

  // Function to reset the table to its original state
  function resetTable() {
    const rows = document.querySelectorAll('#dataTable tr');
    rows.forEach(row => {
      Array.from(row.cells).forEach(cell => {
        cell.style.display = '';  // Set all cells to visible
      });
    });
  }