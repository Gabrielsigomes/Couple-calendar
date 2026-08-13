# Couple Calendar

Aplicação web para que casais organizem a rotina compartilhada em um só lugar. O projeto reúne compromissos, tarefas, planos e datas importantes, reduzindo desencontros de agenda e a dependência de conversas dispersas para combinar o dia a dia.

## Objetivo

O **Couple Calendar** facilita o planejamento conjunto da rotina. A interface permite visualizar e administrar itens importantes para os dois, como compromissos, tarefas e momentos especiais.

## Tecnologias e stack

- [React](https://react.dev/) 19 — construção da interface.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática e maior segurança no desenvolvimento.
- [Vite](https://vite.dev/) 8 — servidor de desenvolvimento e ferramenta de build.
- [React Router](https://reactrouter.com/) 7 — navegação entre as telas.
- CSS Modules e CSS global — estilos isolados por componente e tema compartilhado.
- [ESLint](https://eslint.org/) — análise estática e padronização do código.
- npm — gerenciamento de dependências e execução dos scripts.

## Requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) 20.19 ou superior;
- npm (instalado junto com o Node.js);
- Git, caso vá clonar o repositório.

Confira as versões instaladas:

```bash
node --version
npm --version
```

## Instalação e execução

1. Clone o repositório e acesse a pasta da aplicação:

   ```bash
   git clone <url-do-repositorio>
   cd Couple-calendar
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Se a aplicação for integrada a uma API, crie manualmente um arquivo
   `.env.local` conforme o modelo da seção [Configuração](#configuração).

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o endereço exibido no terminal — normalmente [http://localhost:5173](http://localhost:5173).

## Configuração

O projeto não exige variáveis de ambiente para executar a interface atual. Quando houver uma API, crie um arquivo `.env.local` na raiz da aplicação com base no exemplo abaixo:

```env
# Endereço público da API usada pelo front-end
VITE_API_URL=http://localhost:8080
```

No Vite, apenas variáveis iniciadas com `VITE_` podem ser acessadas pelo navegador. Portanto, nunca coloque senhas, chaves privadas ou tokens secretos nelas.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia a aplicação em modo de desenvolvimento. |
| `npm run build` | Verifica os tipos e gera a versão otimizada em `dist/`. |
| `npm run preview` | Serve localmente a versão gerada após `npm run build`. |
| `npm run lint` | Verifica problemas de estilo e qualidade com ESLint. |

Para validar uma compilação de produção localmente:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
public/             # Imagens, ícones e outros arquivos estáticos
src/
  pages/            # Telas da aplicação
  routes/           # Definição das rotas
  styles/           # Tema e estilos globais
  App.tsx           # Componente raiz
  main.tsx          # Ponto de entrada
```

## Como contribuir

Contribuições são bem-vindas. Para colaborar:

1. Crie uma branch com uma descrição clara: `git checkout -b feat/nome-da-melhoria`.
2. Faça alterações pequenas e focadas em um objetivo.
3. Execute as verificações antes de enviar:

   ```bash
   npm run lint
   npm run build
   ```

4. Faça um commit descritivo, por exemplo: `git commit -m "feat: adiciona tela de cadastro"`.
5. Envie a branch e abra um Pull Request, explicando o problema resolvido, as mudanças feitas e como testá-las.

Ao alterar a interface, mantenha os componentes reutilizáveis, preserve a responsividade e não inclua arquivos `.env.local`, `node_modules` ou arquivos de build no versionamento.
