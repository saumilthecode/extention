chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      // Logic to send emails via Gmail API
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
  });
  