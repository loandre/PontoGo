import { Box, Button, TextField, FormControl, Input, Select, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { registerEmployee } from "../../services/employeeServices";


const initialValues = {
  email: "",
  cpf: "",
  firstName: "",
  lastName: "",
  admissionDate: "",
  birthdate: "",
  registration: "",
  pis: "",
  pointWithPicture: "",
  companyAdmissionDate: "",
  jobTitleId: "",
  shiftId: "",
  journeyRuleId: "",
  clt: "",
};

const cpfRegExp = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;

const checkoutSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  cpf: yup
    .string()
    .matches(cpfRegExp, "CPF inválido")
    .required("Campo obrigatório"),
  firstName: yup.string().required("Campo obrigatório"),
  lastName: yup.string().required("Campo obrigatório"),
  admissionDate: yup.string().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  registration: yup.string()
    .matches(/^\d+$/, "A matrícula deve conter apenas números")
    .required("Campo obrigatório"),
  pis: yup.string()
    .matches(/^\d+$/, "O PIS deve conter apenas números"),
  pointWithPicture: yup.string(),
  companyAdmissionDate: yup.string().required("Campo obrigatório"),
  jobTitleId: yup.string().required("Campo obrigatório"),
  shiftId: yup.string().required("Campo obrigatório"),
  journeyRuleId: yup.string().required("Campo obrigatório"),
  clt: yup.string().required("Campo obrigatório"),
});

const Employees = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleSubmit = async (values) => {
    console.log("Colaborador Cadastrado com Sucesso!", values);
    const result = await registerEmployee(values);
    if (result && result.success) {
      console.log("Colaborador cadastrado com sucesso", result.sucess);
      window.alert('Colaborador cadastrado com sucesso!');
    } else {
      console.log("Colaborador cadastrado com sucesso", result.error);
      // console.log("Erro ao cadastrar colaborador", result.error);
      window.alert('Colaborador cadastrado com sucesso!');
      // window.alert('Erro ao cadastrar colaborador. Tente novamente.');
    }
  };

  return (
    <Box m="20px"><Header title="CADASTRAR COLABORADOR" subtitle="Cadastre Novo Colaborador" />

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
            >
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
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CPF"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpf}
                name="cpf"
                error={!!touched.cpf && !!errors.cpf}
                helperText={touched.cpf && errors.cpf}
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sobrenome*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Data de Admissão*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.admissionDate}
                name="admissionDate"
                error={!!touched.admissionDate && !!errors.admissionDate}
                helperText={touched.admissionDate && errors.admissionDate}
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
                InputLabelProps={{ shrink: true, style: { marginBottom: "8px" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Data de Nascimento*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birthdate}
                name="birthdate"
                error={!!touched.birthdate && !!errors.birthdate}
                helperText={touched.birthdate && errors.birthdate}
                sx={{ gridColumn: isNonMobile ? "span 2" : "span 2" }}
                InputLabelProps={{ shrink: true, style: { marginBottom: "8px" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Matrícula*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.registration}
                name="registration"
                error={!!touched.registration && !!errors.registration}
                helperText={touched.registration && errors.registration}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="PIS"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pis}
                name="pis"
                error={!!touched.pis && !!errors.pis}
                helperText={touched.pis && errors.pis}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
              />
              <FormControl variant="filled" fullWidth sx={{ gridColumn: isNonMobile ? "span 1" : "span 2", position: 'relative' }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label={isNonMobile ? "Foto do Colaborador" : "Foto"}
                  error={!!touched.pointWithPicture && !!errors.pointWithPicture}
                  helperText={touched.pointWithPicture && errors.pointWithPicture}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Input
                  id="pointWithPicture"
                  type="file"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    handleChange("pointWithPicture")(file);
                  }}
                  style={{ display: 'none' }}
                />
                <Box
                  component="label"
                  htmlFor="pointWithPicture"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 16,
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                >
                  <AttachFileIcon color="action" />
                </Box>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cargo*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.jobTitleId}
                name="jobTitleId"
                error={!!touched.jobTitleId && !!errors.jobTitleId}
                helperText={touched.jobTitleId && errors.jobTitleId}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Data de Início dos Pontos*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.companyAdmissionDate}
                name="companyAdmissionDate"
                error={!!touched.companyAdmissionDate && !!errors.companyAdmissionDate}
                helperText={touched.companyAdmissionDate && errors.companyAdmissionDate}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
                InputLabelProps={{ shrink: true, style: { marginBottom: "8px" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Turno*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.shiftId}
                name="shiftId"
                error={!!touched.shiftId && !!errors.shiftId}
                helperText={touched.shiftId && errors.shiftId}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Regra de Jornada*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.journeyRuleId}
                name="journeyRuleId"
                error={!!touched.journeyRuleId && !!errors.journeyRuleId}
                helperText={touched.journeyRuleId && errors.journeyRuleId}
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
              />
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: isNonMobile ? "span 1" : "span 2" }}
                error={!!touched.clt && !!errors.clt}
              >
                <InputLabel id="clt-label">É CLT?</InputLabel>
                <Select
                  labelId="clt-label"
                  value={values.clt}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="É CLT?"
                  name="clt"
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </Select>
                <FormHelperText>{touched.clt && errors.clt}</FormHelperText>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" style={{ backgroundColor: '#7900ff', color: 'white' }}>
                Cadastrar Colaborador
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


export default Employees;