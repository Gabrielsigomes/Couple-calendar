import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { Box, Button, InputAdornment, Link as MuiLink, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { loginSchema, type LoginFormData } from "../login.schema";
import styles from "../Login.module.css";

export function LoginForm() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", senha: "" },
  });

  const onSubmit = async () => {
    // A autenticação será conectada aqui quando o serviço estiver disponível.
    navigate("/home");
  };

  return (
    <Box component="form" className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller control={control} name="username" render={({ field }) => (
        <TextField {...field} autoComplete="username" error={Boolean(errors.username)} fullWidth helperText={errors.username?.message} label="Username" placeholder="Digite seu username" slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonOutlineRoundedIcon fontSize="small" /></InputAdornment> } }} />
      )} />
      <Controller control={control} name="senha" render={({ field }) => (
        <TextField {...field} autoComplete="current-password" error={Boolean(errors.senha)} fullWidth helperText={errors.senha?.message} label="Senha" placeholder="Digite sua senha" slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockOutlinedIcon fontSize="small" /></InputAdornment> } }} type="password" />
      )} />
      <Box className={styles.formActions}>
        <MuiLink component={RouterLink} to="/recuperar-senha">Esqueceu sua senha?</MuiLink>
      </Box>
      <Button className={styles.submitButton} disabled={isSubmitting} endIcon={<ArrowForwardRoundedIcon />} size="large" type="submit" variant="contained">Entrar</Button>
      <Typography className={styles.footerText}>
        Ainda nao tem uma conta? <MuiLink component={RouterLink} to="/cadastro">Criar conta</MuiLink>
      </Typography>
    </Box>
  );
}
