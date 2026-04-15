# 📋 Guia: Como Linkar Google Forms aos Eventos

## 1️⃣ Criar um Google Form

1. Acesse [Google Forms](https://docs.google.com/forms)
2. Clique em **"Criar novo formulário"** (ícone +)
3. Escolha um template ou comece em branco
4. Configure as perguntas do inscrição (nome, email, etc.)
5. Clique em **"ENVIAR"** (canto superior direito)

## 2️⃣ Obter o Link do Formulário

Após criar o formulário, você verá 3 opções de compartilhamento:

### Opção A: Link Direto (Recomendado para a Jandaya)
1. Clique em **"Copiar link"** (ícone de corrente)
2. Cole em um arquivo temporário
3. Ele terá este formato:
```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform
```

## 3️⃣ Adicionar ao Arquivo

No arquivo `src/components/EventosSection.tsx`, localize a seção `upcomingEvents`:

```javascript
const upcomingEvents = [
  {
    title: 'Seu Evento',
    // ... outros campos ...
    formLink: 'https://docs.google.com/forms/d/e/[COLE_SEU_ID_AQUI]/viewform',
  },
];
```

## 4️⃣ Exemplo Prático

Se seu formulário tinha este link compartilhado:
```
https://docs.google.com/forms/d/e/1FAIpQLSeABC123DEF456GHI789JKL/viewform
```

Use assim no código:
```javascript
{
  title: 'Workshop: Tecnologias Assistivas',
  date: '15 de Março, 2024',
  time: '14:00 - 17:00',
  location: 'São Paulo, SP',
  type: 'Presencial',
  description: 'Aprenda sobre ferramentas tecnológicas...',
  status: 'open',
  formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeABC123DEF456GHI789JKL/viewform',
}
```

## 5️⃣ Testar

1. Salve o arquivo
2. Abra o site
3. Clique em **"Inscrever-se"** no evento
4. O Google Forms deve abrir em uma aba nova ✅

---

## 🎨 Melhor Estrutura para Formulário

Recomendações de campos para um bom formulário de inscrição:

```
[ ] Nome Completo (obrigatório)
[ ] Email (obrigatório)
[ ] Telefone
[ ] Instituição/Escola
[ ] Cargo/Função
[ ] Como ficou sabendo do evento?
[ ] Necessidades especiais (acessibilidade)
[ ] Observações
```

## 💡 Dicas de Google Forms

- **Respostas obrigatórias**: Clique no ícone * para tornar obrigatório
- **Temas**: Personalize com cores e logotipo no topo
- **Notificações**: Em "Respostas", você recebe emails com cada inscrição
- **Visualizar respostas**: Menu > "Respostas" > Gráficos com análise

## 🔒 Privacidade

- Deixe **"Qualquer pessoa com o link pode preencher"** (padrão)
- Desmarque **"Coletar endereços de email"** se não precisa

---

### ✨ Dúvidas Frequentes

**P: Como receber as inscrições?**
R: Google Forms envia um email automático com cada resposta. Acesse `Google Forms > Respostas` para ver um resumo.

**P: Posso exportar os nomes dos inscritos?**
R: Sim! Em `Respostas > Menu (⋮) > Baixar como .csv` para abrir em Excel.

**P: O formulário pode ter limite de respostas?**
R: Não tem limite no Google Forms. Você controla manualmente se precisar.

---

Qualquer dúvida, é só chamar! 🚀
