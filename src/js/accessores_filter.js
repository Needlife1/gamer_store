try {
  const filterBtn = document.querySelector('.accessories-items');
  const itemsAccessories = document.querySelectorAll('.accessories-item');

  console.log(filterBtn);

  filterBtn.addEventListener('click', filterAccessories);

  function filterAccessories(e) {
    const filterValue = e.target.name;

    itemsAccessories.forEach(element => {
      const elementId = element.getAttribute('id');

      if (filterValue === elementId || filterValue === 'all') {
        element.style.display = 'block';
        return;
      }

      element.style.display = 'none';
    });
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
