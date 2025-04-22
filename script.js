document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectDetailModals = document.querySelectorAll('.project-detail-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal-button');
  
    // Add event listener to each project card to open the corresponding modal
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-id');
        const modal = document.querySelector(`.${modalId}`);
  
        if (modal) {
          modal.classList.add('open');
          console.log(`Opened modal: .${modalId}`);
        } else {
          console.error(`Modal with ID .${modalId} not found.`);
        }
      });
    });
  
    // Add event listener to each close button to close its parent modal
    closeModalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.project-detail-modal');
        if (modal) {
          modal.classList.remove('open');
          console.log('Closed modal.');
        }
      });
    });
  
    // Optional: Close any open modal if the user clicks outside of it
    projectDetailModals.forEach(modal => {
      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.classList.remove('open');
          console.log('Clicked outside modal. Modal closed.');
        }
      });
    });
  });



  