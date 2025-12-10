# 🚀 Guia de Deploy - Portfolio Pedro Vergueiro

## 📋 Arquivos Prontos para Deploy

✅ **Arquivos essenciais criados na raiz:**
- `index.html` - Página principal
- `styles.css` - Estilos modernos
- `script.js` - JavaScript interativo
- `vercel.json` - Configuração Vercel
- `.gitignore` - Arquivos ignorados
- `README.md` - Documentação

## 🐙 Subir para GitHub

### 1. Criar repositório no GitHub
```bash
# Acesse: https://github.com/new
# Nome: portfolio (ou outro nome)
# Deixe público
# NÃO inicialize com README
```

### 2. Conectar repositório local
```bash
git remote add origin https://github.com/pedrovergueiro/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Verificar upload
- Acesse seu repositório no GitHub
- Confirme que os 6 arquivos estão lá

## 🌐 Deploy no Vercel (Recomendado)

### Opção 1: Deploy Automático
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique "New Project"
4. Selecione seu repositório `portfolio`
5. Clique "Deploy"
6. ✅ Pronto! URL: `https://portfolio-seuusuario.vercel.app`

### Opção 2: Deploy via CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📄 Deploy no GitHub Pages

1. Vá no seu repositório GitHub
2. Settings > Pages
3. Source: "Deploy from a branch"
4. Branch: `main` / `/ (root)`
5. Save
6. ✅ Pronto! URL: `https://pedrovergueiro.github.io/portfolio`

## 🔧 Configurações Importantes

### Vercel
- ✅ Configuração automática via `vercel.json`
- ✅ Headers de segurança incluídos
- ✅ Redirects configurados

### GitHub Pages
- ✅ Funciona direto com arquivos estáticos
- ✅ HTTPS automático
- ✅ CDN global

## 🎯 URLs Finais

Após o deploy, seu portfólio estará disponível em:

- **Vercel**: `https://portfolio-pedrovergueiro.vercel.app`
- **GitHub Pages**: `https://pedrovergueiro.github.io/portfolio`

## 📱 Teste Final

Após deploy, teste:
- ✅ Responsividade (mobile/desktop)
- ✅ Demos interativos funcionando
- ✅ Links de contato (WhatsApp, LinkedIn, Email)
- ✅ Performance (Lighthouse)

## 🔄 Atualizações Futuras

Para atualizar o site:
```bash
# Fazer alterações nos arquivos
git add .
git commit -m "Atualização: descrição das mudanças"
git push
```

Deploy automático no Vercel e GitHub Pages! 🚀

---

**🎉 Parabéns! Seu portfólio profissional está pronto para impressionar recrutadores!**