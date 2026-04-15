# 📚 Guia: Como Adicionar Materiais do Google Drive à Biblioteca

## 1️⃣ Preparar o Arquivo no Google Drive

1. **Crie uma pasta** no Google Drive chamada "Jandaya - Biblioteca Digital"
2. **Organize por categorias**:
   - Provas Adaptadas
   - Materiais Didáticos
   - Formações
   - Vídeos Educativos
3. **Suba seus arquivos** (PDF, DOCX, MP4, etc.)

## 2️⃣ Obter o ID do Arquivo

Para cada arquivo que quer compartilhar:

1. **Abra o arquivo** no Google Drive
2. **Clique em "Compartilhar"** (canto superior direito)
3. **Configure como "Qualquer pessoa com o link"** → "Visualizador"
4. **Copie o link** que aparece
5. **Extraia o ID** do link:

```
https://drive.google.com/file/d/[ESTE_ID_AQUI]/view
                                 ^^^^^^^^^^^^^^^^
```

## 3️⃣ Adicionar à Biblioteca

No arquivo `src/components/Biblioteca.tsx`, localize a seção `const materials`:

```javascript
const materials = [
  {
    title: 'Nome do Material',
    category: 'Provas Adaptadas', // ou outra categoria
    description: 'Descrição breve do material',
    date: '2024',
    driveLink: 'https://drive.google.com/file/d/[SEU_ID]/view',
    downloadLink: 'https://drive.google.com/uc?export=download&id=[SEU_ID]',
  },
  // Adicione mais materiais aqui
];
```

## 4️⃣ Exemplo Prático

Se você tem um PDF chamado "Guia Inclusivo" com este link:
```
https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view
```

Cole assim:

```javascript
{
  title: 'Guia Inclusivo',
  category: 'Materiais Didáticos',
  description: 'Orientações sobre educação inclusiva',
  date: '2024',
  driveLink: 'https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view',
  downloadLink: 'https://drive.google.com/uc?export=download&id=1A2B3C4D5E6F7G8H9I0J',
}
```

## ✅ Pronto!

Agora os usuários podem:
- 👁️ **"Acessar"** - Abrir o arquivo direto no navegador
- ⬇️ **Clicar no ícone** - Baixar o arquivo

---

### 💡 Dicas

- Certifique-se que o arquivo está compartilhado publicamente
- Use nomes descritivos e claros
- Adicione datas atualizadas
- Mantenha a estrutura organizada por categoria

### 🔒 Privacidade

Se quiser que APENAS pessoas com link vejam:
1. Clique em "Compartilhar"
2. Mude para "Qualquer pessoa com o link" pode "Visualizar"
3. Pronto! Apenas quem tiver o link acessa

---

Qualquer dúvida, é só chamar! 🚀
