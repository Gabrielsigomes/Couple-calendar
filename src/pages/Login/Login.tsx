import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
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
          <Typography className={styles.eyebrow}>Organização pessoal e a dois</Typography>
          <Typography id="login-title" component="h1" variant="h3">
            Entrar na sua conta
          </Typography>
          <Typography>
            Organize seus compromissos pessoais e compartilhe planos, tarefas e
            momentos importantes com seu parceiro.
          </Typography>
        </Box>
        <Box className={styles.agendaTypes} aria-label="Formas de usar a agenda">
          <Box className={`${styles.agendaType} ${styles.personalAgenda}`}>
            <Box className={styles.agendaTypeIcon} aria-hidden="true">
              <PersonOutlineRoundedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography component="strong">Agenda pessoal</Typography>
              <Typography component="span">Seus compromissos e tarefas.</Typography>
            </Box>
          </Box>
          <Box className={`${styles.agendaType} ${styles.sharedAgenda}`}>
            <Box className={styles.agendaTypeIcon} aria-hidden="true">
              <PeopleAltRoundedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography component="strong">Agenda compartilhada</Typography>
              <Typography component="span">Planos e momentos para os dois.</Typography>
            </Box>
          </Box>
        </Box>
        <LoginForm />
      </section>
      <section className={styles.heroPanel} aria-label="Agenda pessoal e compartilhada">
        <img
          src="/login-hero.png"
          alt="Agenda, celular e café em uma mesa para organizar a rotina"
        />
        <Box className={styles.heroOverlay}>
          <Box className={styles.heroBadges}>
            <Chip className={`${styles.heroBadge} ${styles.heroBadgePersonal}`} label="Pessoal" size="small" />
            <Chip className={`${styles.heroBadge} ${styles.heroBadgeShared}`} label="Compartilhada" size="small" />
          </Box>
          <Typography component="h2" variant="h3">
            Seu tempo, no seu ritmo.
          </Typography>
          <Typography>
            Tenha clareza sobre a sua agenda e compartilhe o que importa com quem faz
            parte da sua vida.
          </Typography>
        </Box>
      </section>
    </main>
  );
}
