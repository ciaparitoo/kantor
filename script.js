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



function openTipplyPayment() {
    var tipplyLink = "https://tipply.pl/@strimek.fun"; // Tutaj wstaw link płatności Tipply
    window.open(tipplyLink, '_blank');
}



function convertPLNtoCrypto() {
    var amountPLN = document.getElementById("amountPLN").value;
    var cryptoCurrency = document.getElementById("cryptoCurrency").value;

    // Wywołanie API CoinGecko, aby pobrać kurs wymiany
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoCurrency}&vs_currencies=pln`)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data[cryptoCurrency].pln;
            var result = amountPLN / exchangeRate;
            document.getElementById("result").textContent = `Otrzymasz około ${result.toFixed(8)} ${cryptoCurrency.toUpperCase()}`;
        })
        .catch(error => {
            console.error('Wystąpił błąd:', error);
            document.getElementById("result").textContent = "Wystąpił błąd. Spróbuj ponownie później.";
        });
}

