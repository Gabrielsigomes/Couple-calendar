## Regras de negócio

## Usuários
RN01 - Apenas usuários cadastrados e ativos podem se autenticar no sistema.
RN02 - Um usuário somente podera realizar alteração nos seus próprios dados.
RN03 - Um usuário somente pode redefinir  a senha da própria conta.
RN04 - Apenas o próprio usuário podera solicitar a exclusão da sua própria conta.
RN05 - O e-mail utilizado no cadastro deve ser único no sistema.

## Eventos
RN01 - Um usuário devera ter acesso somente a sua agenda pessoal e as agendas compartilhadas das quais faça parte.
RN02 - O convite devera ser feito somente para o parceiro que está na agenda compartilhada.
RN03 - O usuário podera realizar alteração somente na sua agenda.
RN04 - Um convite de evento deve possuir um estado, como PENDENTE, ACEITO ou RECUSADO.
RN05 - Um usuário não podera aceitar ou recusar um convite que já foi aceito ou recusado.
RN06 - Um evento deve possuir data e hora definidos.
RN07 - Um evento do tipo DATE continua sendo tratado como evento, podendo possuir configurações visuais ou comportamentos específicos conforme seu tipo.
RN08 - A exclusão ou cancelamento de um evento compartilhado deve respeitar a permissão do usuário que está executando a ação.