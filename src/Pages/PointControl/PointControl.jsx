import React, { useState } from 'react';
import { Box, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { format } from 'date-fns';
import { getPoints } from '../../services/pointControlServices';

const initialValues = {
  startDate: '2023-07-27',
  endDate: '2023-09-28',
};

const checkoutSchema = yup.object().shape({
  startDate: yup.string().required("Campo obrigatório"),
  endDate: yup.string().required("Campo obrigatório"),
});


const PointControl = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [points, setPoints] = useState([]);

  const handleFormSubmit = async (values) => {
    console.log('Formulário Submetido', values);

    try {
      const { success, data, error } = await getPoints(values);

      if (!success) throw error;

      console.log('Resposta da API:', data);
      setPoints(data);
    } catch (error) {
      console.error('Erro na chamada da API: ', error.message, error.stack);
      // Caso haja um erro, definir 'points' com os pontos do formulário
      setPoints([{
        id: 'Erro',
        date: new Date(`${values.startDate}T00:00:00`), // Exemplo, ajuste conforme necessário
      }, {
        id: 'Erro',
        date: new Date(`${values.endDate}T00:00:00`), // Exemplo, ajuste conforme necessário
      }]);
    } finally {
    }
  };

  return (
    <Box m="20px">
      <Header title="CONTROLE DE PONTO" subtitle="Busque um Registro de Ponto" />

      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Data Inicial"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startDate}
                name="startDate"
                error={touched.startDate && Boolean(errors.startDate)}
                helperText={touched.startDate && errors.startDate}
                sx={{ gridColumn: "span 2" }}
                InputLabelProps={{ shrink: true, style: { marginBottom: "8px" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Data Final"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endDate}
                name="endDate"
                error={touched.endDate && Boolean(errors.endDate)}
                helperText={touched.endDate && errors.endDate}
                sx={{ gridColumn: "span 2" }}
                InputLabelProps={{ shrink: true, style: { marginBottom: "8px" } }}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" variant="contained" style={{ backgroundColor: '#7900ff', color: 'white' }}>
                Buscar Registro de Ponto
              </Button>
            </Box>
            <Box mt="40px">
              <h2>Lista de Colaboradores</h2>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Hora</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {points.length > 0 ? (
                    points.map(point => {
                      const date = new Date(point.date);
                      const formattedDate = format(date, 'dd/MM/yyyy');
                      const formattedTime = format(date, 'HH:mm:ss');
                      return (
                        <TableRow key={point.id}>
                          <TableCell>{point.id}</TableCell>
                          <TableCell>{formattedDate}</TableCell>
                          <TableCell>{formattedTime}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        Não há registros para as datas selecionadas.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default PointControl;