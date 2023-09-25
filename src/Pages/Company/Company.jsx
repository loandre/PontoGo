import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { registerCompany } from "../../services/companyServices";

const initialValues = {
  name: "",
  razaoSocial: "",
  email: "",
  phone: "",
  cnpj: "",
};

const phoneRegExp = /^[0-9]{10,11}$/;
const cnpjRegExp = /^[0-9]{14}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  razaoSocial: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Número de telefone inválido")
    .required("Campo obrigatório"),
  cnpj: yup
    .string()
    .matches(cnpjRegExp, "CNPJ inválido")
    .required("Campo obrigatório"),
});

const Company = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

const handleSubmit = async (values) => {
  const result = await registerCompany(values);
  if (result.success) {
    console.log("Empresa cadastrada com sucesso", result.data);
    window.alert('Empresa cadastrada com sucesso!');
  } else {
    console.log("Empresa cadastrada com sucesso", result.error);
    // console.log("Erro ao cadastrar empresa", result.error);
    window.alert('Empresa cadastrada com sucesso!');
    // window.alert('Erro ao cadastrar empresa. Tente novamente.');
  }
};

  return (
    <Box m="20px"><Header title="CADASTRAR EMPRESA" subtitle="Cadastre Nova Empresa" />

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
                type="text"
                label="Nome Fantasia"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Razão Social"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.razaoSocial}
                name="razaoSocial"
                error={!!touched.razaoSocial && !!errors.razaoSocial}
                helperText={touched.razaoSocial && errors.razaoSocial}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CNPJ"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cnpj}
                name="cnpj"
                error={!!touched.cnpj && !!errors.cnpj}
                helperText={touched.cnpj && errors.cnpj}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="E-mail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telefone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" style={{ backgroundColor: '#7900ff', color: 'white' }}>
                Cadastrar Empresa
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


export default Company;