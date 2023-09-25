export async function registerCompany (values) {
  const headers = new Headers();
  headers.append("Authorization", 'API_TOKEN');
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(values),
  };

  try {
    const response = await fetch(
      "https://url.api/",
      requestOptions
    );
    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, error: data };
    }
  } catch (error) {
    console.error("Ocorreu um erro ao fazer a requisição", error);
    return { success: false, error: error.message };
  }
}
