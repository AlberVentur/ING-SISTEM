document.addEventListener('DOMContentLoaded', function() {
    const materiasForm = document.getElementById('materiasForm');
  
    // Cargar materias aprobadas almacenadas previamente
    const materiasGuardadas = JSON.parse(localStorage.getItem('materias')) || {};
    for (let materia in materiasGuardadas) {
      if (materiasGuardadas.hasOwnProperty(materia)) {
        const checkbox = document.getElementById(materia);
        if (checkbox) {
          checkbox.checked = materiasGuardadas[materia];
        }
      }
    }
  
    // Manejar el evento de envío del formulario
    materiasForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const materiasSeleccionadas = {};
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        materiasSeleccionadas[checkbox.id] = checkbox.checked;
      });
  
      // Guardar las materias seleccionadas en localStorage
      localStorage.setItem('materias', JSON.stringify(materiasSeleccionadas));
  
      alert('Materias guardadas exitosamente.');
    });
  });
  

  