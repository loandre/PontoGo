export async function submitPoint(data) {
    const url = 'https://url.api/';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'API_TOKEN',
    };
  
    const params = new URLSearchParams({
      'company-token-pg': 'TOKEN',
      'employee-token-pg': 'TOKEN',
    });
  
    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        return { success: true, data: responseData };
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
    } catch (error) {
      console.error('Fetch error: ', error);
      return { success: false, error: error.message };
    }
  }
  