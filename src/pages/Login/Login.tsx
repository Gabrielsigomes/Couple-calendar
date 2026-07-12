import styles from "./Login.module.css";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 9h18" />
      <path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <path d="M5 11h14v10H5z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.authPanel} aria-label="Login">
        <div className={styles.brand}>
          <span className={styles.logoMark}>
            <CalendarIcon />
          </span>
          <span>Agenda a Dois</span>
        </div>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Sua rotina em casal</p>
          <h1>Entrar na sua conta</h1>
          <p>
            Organize compromissos, planos e momentos importantes em uma agenda
            feita para os dois.
          </p>
        </div>
        <form className={styles.form}>
          <label className={styles.field}>
            <span className={styles.left}>Username</span>
            <div className={styles.inputWrapper}>
              <UserIcon />
              <input
                type="text"
                name="username"
                placeholder="Digite seu username"
                autoComplete="username"
              />
            </div>
          </label>
          <label className={styles.field}>
            <span className={styles.left}>Senha</span>
            <div className={styles.inputWrapper}>
              <LockIcon />
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                autoComplete="current-password"
              />
            </div>
          </label>
          <div className={styles.formActions}>
            <a href="/recuperar-senha">Esqueceu sua senha?</a>
          </div>
          <button type="submit" className={styles.submitButton}>
            <span>Entrar</span>
            <ArrowIcon />
          </button>
        </form>
        <p className={styles.footerText}>
          Ainda nao tem uma conta? <a href="/cadastro">Criar conta</a>
        </p>
      </section>
      <section className={styles.heroPanel} aria-label="Agenda compartilhada">
        <img
          src="/login-hero.png"
          alt="Mesa aconchegante com agenda, cafe e celular para organizar planos do casal"
        />
        <div className={styles.heroOverlay}>
          <span className={styles.heroBadge}>Agenda compartilhada</span>
          <h2>Planeje a semana com mais leveza.</h2>
          <p>
            Compromissos, tarefas e momentos especiais visiveis para o casal em
            um so lugar.
          </p>
        </div>
      </section>
    </main>
  );
}