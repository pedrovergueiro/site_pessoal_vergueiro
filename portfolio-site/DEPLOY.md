# 🚀 Guia de Deploy - Portfolio Pedro Vergueiro

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel (recomendado) ou usar GitHub Pages

## 🌐 Deploy no Vercel (Recomendado)

### Opção 1: Deploy Direto
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe este repositório
5. Configure:
   - **Project Name**: `pedro-vergueiro-portfolio`
   - **Framework Preset**: Other
   - **Root Directory**: `./` (deixe vazio)
   - **Build Command**: deixe vazio
   - **Output Directory**: deixe vazio
6. Clique em "Deploy"
7. Aguarde o deploy (1-2 minutos)
8. Seu site estará disponível em: `https://pedro-vergueiro-portfolio.vercel.app`

### Opção 2: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Na pasta do projeto
cd portfolio-site

# Deploy
vercel

# Para deploy em produção
vercel --prod
```

## 📄 Deploy no GitHub Pages

1. **Criar Repositório**:
   - Vá para GitHub.com
   - Clique em "New repository"
   - Nome: `portfolio` ou `pedrovergueiro.github.io`
   - Marque como público
   - Crie o repositório

2. **Upload dos Arquivos**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/pedrovergueiro/portfolio.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages**:
   - Vá em Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
   - Clique em "Save"

4. **Aguardar Deploy**:
   - O site ficará disponível em: `https://pedrovergueiro.github.io/portfolio`
   - Pode levar alguns minutos

## 🔧 Configurações Adicionais

### Domínio Personalizado (Vercel)
1. No dashboard do Vercel, vá em "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

### Domínio Personalizado (GitHub Pages)
1. Compre um domínio
2. No repositório, vá em Settings > Pages
3. Em "Custom domain", adicione seu domínio
4. Configure os DNS do seu provedor:
   ```
   Type: CNAME
   Name: www
   Value: pedrovergueiro.github.io
   ```

## 📊 Analytics (Opcional)

### Google Analytics
1. Crie uma conta no Google Analytics
2. Adicione este código antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO e Performance

### Verificar SEO
- Use [Google Search Console](https://search.google.com/search-console)
- Teste com [PageSpeed Insights](https://pagespeed.web.dev/)

### Sitemap (Opcional)
Crie um arquivo `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2024-12-09</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Site não carrega**:
   - Verifique se todos os arquivos estão na pasta correta
   - Confirme que o `index.html` está na raiz

2. **CSS/JS não funciona**:
   - Verifique os caminhos dos arquivos
   - Confirme que não há erros no console

3. **Deploy falha**:
   - Verifique se não há caracteres especiais nos nomes dos arquivos
   - Confirme que todos os arquivos foram commitados

### Logs de Deploy
- **Vercel**: Vá em "Functions" > "View Function Logs"
- **GitHub Pages**: Vá em "Actions" para ver os logs

## 📞 Suporte

Se tiver problemas:
1. Verifique a documentação oficial do Vercel/GitHub Pages
2. Consulte os logs de erro
3. Entre em contato: pedrolv.fsilva@gmail.com

---

**Boa sorte com seu deploy! 🚀**