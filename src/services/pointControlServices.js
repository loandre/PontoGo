import { format } from 'date-fns';

export async function getPoints(values) {
  const headers = new Headers();
  headers.append("Authorization", 'API_TOKEN');
  headers.append("Content-Type", "application/json");

  const formattedStartDate = format(new Date(values.startDate), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(values.endDate), 'dd/MM/yyyy');
  const url = `https://url.api/initialDate=${formattedStartDate}&endDate=${formattedEndDate}&company-token`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    
    const data = await response.json();
    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, error: data };
    }
  } catch (error) {
    console.error("Erro na chamada da API: ", error);
    return { success: false, error: error.message };
  }
}
