async function convert() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();

      if (data.rates.hasOwnProperty(toCurrency)) {
        var exchangeRate = data.rates[toCurrency];
        var result = amount * exchangeRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      } else {
        document.getElementById('result').innerText = `Exchange rate not available for ${toCurrency}`;
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function showContent(section) {
    var converterContent = document.getElementById('converterContent');
    var newsContent = document.getElementById('newsContent');
    var contactContent = document.getElementById('contactContent');
    var helpContent = document.getElementById('helpContent');
    var icons = document.getElementById('icons');

    switch (section) {
        case 'home':
            converterContent.style.display = 'block';
            newsContent.style.display = 'none';
            contactContent.style.display = 'none';
            helpContent.style.display = 'none';
            icons.style.display = 'flex';
            break;
        case 'about':
        case 'help':
            converterContent.style.display = 'none';
            newsContent.style.display = 'none';
            contactContent.style.display = 'none';
            helpContent.style.display = 'block';
            icons.style.display = 'flex';
            break;
        case 'news':
            converterContent.style.display = 'none';
            newsContent.style.display = 'block';
            contactContent.style.display = 'none';
            helpContent.style.display = 'none';
            icons.style.display = 'flex';
            break;
        case 'contact':
            converterContent.style.display = 'none';
            newsContent.style.display = 'none';
            contactContent.style.display = 'block';
            helpContent.style.display = 'none';
            icons.style.display = 'flex';
            break;
        default:
            // Default to home page
            converterContent.style.display = 'block';
            newsContent.style.display = 'none';
            contactContent.style.display = 'none';
            helpContent.style.display = 'none';
            icons.style.display = 'flex';
    }
}

function submitForm() {
    
    alert('Form submitted successfully!');
}


function updateDateTime() {
    var datetimeDiv = document.getElementById('datetime');
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    var formattedDateTime = now.toLocaleDateString('en-US', options);

    datetimeDiv.innerText = formattedDateTime;
}




   


updateDateTime();


setInterval(updateDateTime, 1000);