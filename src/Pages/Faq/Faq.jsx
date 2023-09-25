import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Perguntas Mais Frequentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography Typography color={colors.purpleAccent[500]} variant="h5">
            Como Lançar Abono?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Basta ir em gerenciar, no seu menu principal, depois em abonos e por fim, clique em adicionar abono.
         </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Como Lançar Férias para os Colaboradores?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Passo 1: Primeiramente defina a data de início das férias (podendo ser datas retroativas ou futuras).<br /><br />Passo 2: Selecione a opção Dia todo.<br /><br />Passo 3: A "Quantidade em horas" deve ficar vazio.<br /><br />Passo 4: Você deve definir quantos dias (corridos) de férias o colaborador irá tirar. É possível definir até 30 dias. Caso ele tenha mais que isso é necessário fazer outro abono.<br /><br />Passo 5: Na "Descrição"  você informa o motivo desse abono, por exemplo: "Colaborador está gozando das férias". Tente ser o mais descritivo possível para ajudar em futuras pesquisas.<br /> <br />Passo 6: Selecione o(s) colaborador(es). Você pode inclusive pesquisa digitando o nome do colaborador. E por fim é só salvar!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Como Excluir Abono?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Não é possível editar um abono existente, caso tenha feito errado é necessário excluir. Para isso basta clicar no ícone do balde de lixo vermelho, informar o motivo da exclusão, por exemplo: "Foi feito para o colaborador errado." e salvar.<br /><br />CUIDADO, essa ação é IRREVESÍVEL.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Como Acompanhar e Compensar Banco de Horas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O banco de horas é um sistema de flexibilização da jornada diária de trabalho, de modo a permitir a compensação de horas trabalhadas fora da jornada contratada.<br /><br />No PontoGO, você pode acompanhar o banco de horas dos seus colaboradores de acordo com as regras a qual foram cadastrados.<br /><br />Para acessar e visualizar essa função, acesse o menu lateral "Controle de ponto".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Como Configurar regras do Banco de Horas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O banco de horas é um sistema de flexibilização da jornada diária de trabalho, de modo a permitir a compensação de horas trabalhadas fora da jornada contratada. Geralmente é uma alternativa para o sistema de pagamento de horas extras.<br /> <br />No PontoGO você pode configurar o funcionamento do banco de horas, Tempo de vigência, Limitadores e até Multiplicadores das horas do banco.<br /><br />Para acessar essa função acesse o menu lateral, Gerenciar, Regras da Jornada, Adicionar Regra, Banco de Horas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
