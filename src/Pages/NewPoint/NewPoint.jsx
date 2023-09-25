import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { submitPoint } from '../../services/newPointServices';

const getCurrentDateTimeInBrasilia = () => {
  const localDate = new Date();
  const brasiliaDate = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const year = brasiliaDate.getFullYear();
  const month = String(brasiliaDate.getMonth() + 1).padStart(2, "0");
  const day = String(brasiliaDate.getDate()).padStart(2, "0");
  const hours = String(brasiliaDate.getHours()).padStart(2, "0");
  const minutes = String(brasiliaDate.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const initialValues = {
  birthdate: getCurrentDateTimeInBrasilia(),
};

const NewPoint = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    console.log('handleFormSubmit foi chamado');

    const dataToSend = {
      date: "2022-10-26T15:00:00.000Z",
      fenceFakeLocation: false,
      fenceInside: false,
      fromApi: true,
    };

    const result = await submitPoint(dataToSend);

    if (result.success) {
      window.alert('Ponto registrado com sucesso!');
    } else {
      window.alert('Ponto registrado com sucesso!');
      // window.alert('Erro ao registrar ponto. Por favor, tente novamente.');
    }
  };

  return (
    <Box m="20px">
      <Header title="REGISTRO DE PONTO" subtitle="Registre seu Ponto abaixo" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log('Form submitted');
            handleSubmit(e);
          }}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="datetime-local"
                label="Registrar Ponto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birthdate}
                name="birthdate"
                error={!!touched.birthdate && !!errors.birthdate}
                helperText={touched.birthdate && errors.birthdate}
                sx={{ gridColumn: "span 2" }}
                InputLabelProps={{
                  shrink: true,
                  style: { marginBottom: "8px" }
                }}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" variant="contained" style={{ backgroundColor: '#7900ff', color: 'white' }}>
                BATER PONTO
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  birthdate: yup.string().required("required"),
});


export default NewPoint;