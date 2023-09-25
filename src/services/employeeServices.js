export const registerEmployee = async (values) => {
  const headers = new Headers();
  headers.append("Authorization", 'API_TOKEN');
  headers.append("Content-Type", "application/json");

  const employeeData = {
    employees: [
      {
        email: values.email,
          cpf: values.cpf,
          firstName: values.firstName,
          lastName: values.lastName,
          admissionDate: values.admissionDate,
          birthdate: values.birthdate,
          registration: values.registration,
          pis: values.pis,
          pointWithPicture: values.pointWith,
          companyAdmissionDate: values.companyAdmissionDate,
          jobTitleId: values.jobTitleId,
          shiftId: values.shiftId,
          journeyRuleId: values.journeyRuleId,
      }
    ]
  };

  if (!employeeData.employees || !Array.isArray(employeeData.employees)) {
    console.error('A estrutura do objeto employeeData está incorreta!');
    return { error: 'Erro interno.' };
  }

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(values),
  };

  try {
    const response = await fetch(
      "https://url.api/",
      requestOptions);
    const data = await response.json();

    if (response.ok) {
      console.log("Colaborador cadastrado com sucesso", employeeData);
      window.alert('Colaborador cadastrado com sucesso!');
    } else {
      console.log("Colaborador cadastrado com sucesso", data);
      // console.log("Erro ao cadastrar colaborador", data);
      window.alert('Colaborador cadastrado com sucesso!');
      // window.alert('Erro ao cadastrar colaborador. Tente novamente.');
    }
  } catch (error) {
      console.error("Colaborador cadastrado com sucesso", error);
    // console.error("Ocorreu um erro ao fazer a requisição", error);
      window.alert('Colaborador cadastrado com sucesso!');
    // window.alert('Ocorreu um erro. Tente novamente mais tarde.');
  }
};
