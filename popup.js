document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('send').addEventListener('click', sendCertificates);
});

function sendCertificates() {
  const attendees = [
      { email: 'recipient1@example.com', name: 'Recipient One' },
      { email: 'recipient2@example.com', name: 'Recipient Two' }
      // Add more attendees here
  ];
  
  attendees.forEach(attendee => {
      const emailBody = `Congratulations ${attendee.name} on participating!`;
      sendEmail(attendee.email, 'Certificate of Participation', emailBody);
  });
}

function sendEmail(to, subject, body) {
  Email.send({
      Host: "smtp.your-email-provider.com",
      Username: "your-email@example.com",
      Password: "your-email-password",
      To: to,
      From: "your-email@example.com",
      Subject: subject,
      Body: body
  }).then(
      message => console.log('Email sent successfully:', message)
  ).catch(
      error => console.error('Error sending email:', error)
  );
}
