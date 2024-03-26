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



// Funkcja pobierająca aktualne kursy kryptowalut z CoinGecko API
async function fetchExchangeRates() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,solana,ripple,dogecoin,polygon,shiba-inu,monero&vs_currencies=pln');
    const data = await response.json();
    return data;
}

// Funkcja przeliczająca kwotę z PLN na wybraną kryptowalutę
async function calculateCryptoAmount(plnAmount, cryptoCurrency) {
    const exchangeRates = await fetchExchangeRates();
    const cryptoRate = exchangeRates[cryptoCurrency.toLowerCase()].pln;
    return plnAmount / cryptoRate;
}

// Obsługa formularza
document.getElementById('exchangeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Pobranie danych z formularza
    const plnAmount = parseFloat(document.getElementById('amount').value);
    const cryptoCurrency = document.getElementById('cryptoCurrency').value;
    const walletAddress = document.getElementById('walletAddress').value;
    const contactEmail = document.getElementById('contactEmail').value;

    // Przeliczenie kwoty na wybraną kryptowalutę
    const cryptoAmount = await calculateCryptoAmount(plnAmount, cryptoCurrency);

    // Wyświetlenie podsumowania transakcji
    document.getElementById('amountSummary').innerText = 'Kwota (PLN): ' + plnAmount.toFixed(2);
    document.getElementById('cryptoCurrencySummary').innerText = 'Kwota (kryptowaluta): ' + cryptoAmount.toFixed(8) + ' ' + cryptoCurrency;
    document.getElementById('walletAddressSummary').innerText = 'Adres portfela kryptowalutowego: ' + walletAddress;
    document.getElementById('contactEmailSummary').innerText = 'Twój adres email: ' + contactEmail;

    // Pokaż podsumowanie transakcji
    document.getElementById('transactionSummary').style.display = 'block';
});

// Funkcja do otwierania płatności przez Tipply (do zaimplementowania)
function openTipplyPayment() {
    // Tutaj dodaj logikę otwierania płatności przez Tipply
    alert('Płatność przez Tipply - do zaimplementowania');
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

