document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send').addEventListener('click', sendCertificates);
  });
  
  function sendCertificates() {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      // Use the token to send emails via Gmail API
      fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'raw': btoa("From: sender@example.com\nTo: recipient@example.com\nSubject: Certificate of Participation\n\nCongratulations on participating!")
        })
      }).then(response => {
        console.log('Email sent successfully:', response);
      }).catch(error => {
        console.error('Error sending email:', error);
      });
    });
  }
  