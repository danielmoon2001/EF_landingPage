$(document).ready(function() {
  // Hide all steps except the first on initial load
  $('.step').not('.step-1').hide();

  // Function to update the progress bar
  function updateProgressBar() {
    var progressPercentage = ((currentStep - 1) / 2) * 100;
    $('.progress-bar').css('width', progressPercentage + '%').attr('aria-valuenow', progressPercentage);
  }

  // Display a specific step
  function displayStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 3) {
      // Using CSS animations to fade out the current step and fade in the new step
      $('.step-' + currentStep).addClass('animate__animated animate__fadeOut');
      setTimeout(function() {
        $('.step-' + currentStep).hide().removeClass('animate__animated animate__fadeOut');
        $('.step-' + stepNumber).show().addClass('animate__animated animate__fadeIn');
        currentStep = stepNumber;
        updateProgressBar();
      }, 500); // Match this timeout to the duration of your fade animations
    }
  }

  // Click event handler for the 'next-step' button
  $('.next-step').click(function() {
    if (currentStep < 3) {
      displayStep(currentStep + 1);
    }
  });

  // Click event handler for the 'prev-step' button
  $('.prev-step').click(function() {
    if (currentStep > 1) {
      displayStep(currentStep - 1);
    }
  });

  // Update the progress bar initially
  updateProgressBar();

  // Bind circles to step numbers
  $('.step-circle').click(function() {
    var stepIndex = $(this).index() + 1; // Since index is 0-based and your steps are 1-based
    displayStep(stepIndex);
  });
});
