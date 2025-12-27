# 🚀 Deploy do Portfolio Pedro Vergueiro

Este documento contém instruções para fazer deploy do portfolio pessoal.

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel (recomendado) ou GitHub Pages

## 🌐 Deploy com Vercel (Recomendado)

### Método 1: Deploy Direto
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe este repositório
5. Configure as seguintes opções:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `./`
6. Clique em "Deploy"

### Método 2: Fork + Deploy
1. Faça fork deste repositório
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Selecione o repositório forkado
5. Deploy automático ✅

## 📄 Deploy com GitHub Pages

1. Faça fork deste repositório
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione "Deploy from a branch"
4. Escolha branch: `main`
5. Pasta: `/ (root)`
6. Clique em "Save"
7. Acesse: `https://seuusuario.github.io/site_pessoal_vergueiro`

## 🔧 Configurações Personalizadas

### Atualizando Informações Pessoais

1. **Informações de Contato** (`index.html`):
   ```html
   <!-- Atualize os links de contato -->
   <a href="mailto:seuemail@gmail.com">
   <a href="https://linkedin.com/in/seulinkedin">
   <a href="https://wa.me/seunumero">
   <a href="https://github.com/seuusuario">
   ```

2. **Foto de Perfil**:
   - Substitua `profile.jpg` pela sua foto
   - Mantenha proporção quadrada (recomendado: 400x400px)

3. **Projetos**:
   - Atualize os links dos projetos no GitHub
   - Modifique descrições conforme seus projetos

### Personalizando Cores

No arquivo `styles.css`, você pode alterar as cores principais:

```css
/* Cores principais */
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
}
```

## 📊 Monitoramento

### Analytics (Opcional)
Para adicionar Google Analytics:

1. Crie uma conta no Google Analytics
2. Adicione o código de tracking no `<head>` do `index.html`:

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

## 🔒 Segurança

O arquivo `vercel.json` já inclui headers de segurança:
- X-Content-Type-Options
- X-Frame-Options  
- X-XSS-Protection
- Referrer-Policy

## 📱 Teste de Responsividade

Antes do deploy, teste em:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🚀 Performance

### Otimizações Incluídas:
- ✅ Imagens otimizadas
- ✅ CSS minificado
- ✅ JavaScript otimizado
- ✅ Cache headers configurados
- ✅ Lazy loading implementado

### Teste de Performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 🆘 Solução de Problemas

### Problema: Site não carrega
- Verifique se todos os arquivos estão no repositório
- Confirme se o `index.html` está na raiz

### Problema: Imagens não aparecem
- Verifique se os caminhos das imagens estão corretos
- Confirme se as imagens foram commitadas no repositório

### Problema: Formulário de contato não funciona
- Este portfolio usa links diretos (mailto, WhatsApp)
- Para formulário funcional, considere usar Netlify Forms ou Formspree

## 📞 Suporte

Se precisar de ajuda:
- Abra uma issue no repositório
- Entre em contato: pedrolv.fsilva@gmail.com

---

**Desenvolvido com ❤️ por Pedro Lucas Vergueiro**  
*Estudante de Engenharia de Software em busca da primeira oportunidade* 🌱