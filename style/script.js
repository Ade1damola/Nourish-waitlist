const emailInput = document.querySelector('#emailInput');
const button = document.querySelector('#myButton');

button.addEventListener("click", async function() {
  const baseurl = 'https://23d7-102-89-40-207.ngrok-free.app';
  const emailValue = emailInput.value;
  const data = { 'email': emailValue };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    mode: 'cors'
  };

  try {
    const response = await fetch(`${baseurl}/api/base/newsletter-subscription/`, options);

    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseData = await response.json();
      console.log('POST Request Response:', responseData);
      // Do something with the response data here
    } else {
      // Handle non-JSON or empty responses here
      throw new Error('Response was not in JSON format');
    }
  } catch (error) {
    console.error('Error making POST request:', error.message);
    // Handle errors here
  }
});
