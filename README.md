# 🎨 Biya Studio

Landing page minimalista e responsiva inspirada em layouts **VTuber / Hololive-like**, desenvolvida para apresentar o universo visual e artístico da criadora **Biya**.  
Design e desenvolvimento por **[Zara Takion](https://github.com/ZaraTakion)**.

![Preview do site](public/assets/preview-biya.webp)

---

## 🌙 Sobre o Projeto

**Biya Studio** é uma vitrine interativa e moderna, com foco em atmosfera e estética visual.  
A página combina **transições suaves, galeria dinâmica** e um **fundo animado leve** para criar uma experiência elegante tanto no desktop quanto no mobile.

---

## 🧩 Estrutura do Projeto

```

biya-studio/
├── public/
│   ├── assets/
│   │   ├── favicon.png
│   │   ├── biya.png
│   │   ├── preview-biya.webp
│   │   ├── shots/          # Galeria de artes
│   │   └── lives/          # Miniaturas das lives
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Sobre/
│   │   ├── ArtGrid/
│   │   ├── Lives/
│   │   ├── Community/
│   │   ├── FloatingButtons/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useRevealOnScroll.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── vite.config.js
├── package.json
└── README.md

````

---

## 🪶 Seções

| Seção | Descrição |
|--------|------------|
| **Hero** | Introduz Biya com imagem de destaque e links principais. |
| **Sobre** | Texto poético e minimalista sobre o processo criativo. |
| **Arte** | Galeria visual com nove artes responsivas. |
| **Lives** | Cards interativos com miniaturas e links para transmissões. |
| **Comunidade** | Espaço de convite e regras do servidor Discord. |
| **Footer** | Créditos, assinatura e links externos. |

---

## 💻 Tecnologias Utilizadas

| Categoria | Ferramentas |
|------------|-------------|
| Front-end | React + Vite |
| Estilização | CSS Modules + Variáveis CSS |
| Animações | Keyframes e Transições suaves |
| Deploy | GitHub Pages via `gh-pages` |
| Design | Minimal dark / monocromático |

---

## 🚀 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/ZaraTakion/biya-studio.git
   cd biya-studio
````

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse em:

   ```
   http://localhost:5173/
   ```

---

## 🌐 Deploy no GitHub Pages

1. Gere o build de produção:

   ```bash
   npm run build
   ```

2. Envie automaticamente para o branch `gh-pages`:

   ```bash
   npm run deploy
   ```

3. O site será publicado em:
   ➜ [https://zaratakion.github.io/biya-studio/](https://zaratakion.github.io/biya-studio/)

---

## 📜 Créditos

* **Design & Desenvolvimento:** [Zara Takion](https://github.com/ZaraTakion)
* **Arte & Identidade Visual:** Biya_YU
* **Licença:** Uso **pessoal e artístico**, sem fins comerciais.

> Projeto criado com foco em atmosfera, ritmo e simplicidade.
> Cada detalhe reflete o espaço entre o som e o silêncio — como a arte da Biya.