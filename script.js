document.getElementById('exchangeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form values
    var amount = document.getElementById('amount').value;
    var cryptoCurrency = document.getElementById('cryptoCurrency').value;
    var walletAddress = document.getElementById('walletAddress').value;
    var contactEmail = document.getElementById('contactEmail').value;
    
    // Display transaction summary
    document.getElementById('amountSummary').textContent = 'Kwota: ' + amount + ' PLN';
    document.getElementById('cryptoCurrencySummary').textContent = 'Kryptowaluta: ' + cryptoCurrency;
    document.getElementById('walletAddressSummary').textContent = 'Adres portfela: ' + walletAddress;
    document.getElementById('contactEmailSummary').textContent = 'Twój adres email: ' + contactEmail;
    
    document.getElementById('exchangeForm').style.display = 'none';
    document.getElementById('transactionSummary').style.display = 'block';
});

function confirmTransaction() {
    // Implement transaction confirmation logic here
    alert('Transakcja potwierdzona!');
}
