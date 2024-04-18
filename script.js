function showStep(step) {
    $('.step').removeClass('active');
    $('.step-' + step).addClass('active');
}

function finalizeChoice() {
    let occasion = $('#occasion').val();
    let color = $('#color').val();
    let recommendation = 'Mixed Flower Bouquet';
    
    // Simple logic to determine flower type
    if (occasion === 'birthday' || occasion === 'just-because') {
        recommendation = color.charAt(0).toUpperCase() + color.slice(1) + ' Roses';
    } else if (occasion === 'anniversary') {
        recommendation = color.charAt(0).toUpperCase() + color.slice(1) + ' Lilies';
    } else if (occasion === 'sympathy') {
        recommendation = 'White Chrysanthemums';
    }
    
    $('#flowerType').text(recommendation);
    showStep(3);
}
