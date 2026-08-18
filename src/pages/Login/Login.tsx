import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { Box, Chip, Typography } from "@mui/material";

import { LoginForm } from "./components/LoginForm";
import styles from "./Login.module.css";

export function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.authPanel} aria-labelledby="login-title">
        <Box className={styles.brand} component="div">
          <Box className={styles.logoMark} aria-hidden="true">
            <CalendarMonthRoundedIcon />
          </Box>
          <Typography component="span">
            Agenda a Dois
          </Typography>
        </Box>
        <Box className={styles.header}>
          <Typography className={styles.eyebrow}>Sua rotina em casal</Typography>
          <Typography id="login-title" component="h1" variant="h3">
            Entrar na sua conta
          </Typography>
          <Typography>
            Organize compromissos, planos e momentos importantes em uma agenda feita
            para os dois.
          </Typography>
        </Box>
        <LoginForm />
      </section>
      <section className={styles.heroPanel} aria-label="Agenda compartilhada">
        <img
          src="/login-hero.png"
          alt="Mesa aconchegante com agenda, cafe e celular para organizar planos do casal"
        />
        <Box className={styles.heroOverlay}>
          <Chip className={styles.heroBadge} label="Agenda compartilhada" size="small" />
          <Typography component="h2" variant="h3">
            Planeje a semana com mais leveza.
          </Typography>
          <Typography>
            Compromissos, tarefas e momentos especiais visiveis para o casal em um so
            lugar.
          </Typography>
        </Box>
      </section>
    </main>
  );
}
