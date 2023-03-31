<h1 align="center"> Planner App </h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-orange"/>
  <img src="https://img.shields.io/badge/release%20date-march-green"/>
</p>

<p align="center">
  <img width="200px" src="https://user-images.githubusercontent.com/103972585/228393668-a05cc74e-a5b0-4096-8f01-dda67c617766.gif"/>
</p>

## 📃 Documentação
### ⚙️ Configurações Expo
📄 [Documentação - link](https://docs.expo.dev/get-started/create-a-new-app/)

comando para criar um projeto React Native utilizando o Expo
```bash
npx create-expo-app 'nome' --template
```

Rodar a aplicação:
``` bash
npx expo start
```

Se não der, use uma conexão tunnel
``` bash
npx expo start --tunnel
```

⚠️📢 Para executar o bundle de novo: 
``` bash
npx expo start --clear

//ou 

npx expo start --tunnel --clear
```
---

### ⚙️ Configurações Fonts
📄 [Google Fonts](https://fonts.google.com/)

⚠️🚨 Antes de Instalar, pare a aplicação: CTRL + C

📢 Para instalar uma fonte do **Google Fonts**, use o seguinte comando no Terminal

``` bash
npx expo install expo-font @expo-google-fonts/inter
```

Para garantir o carregamento da Font, no App.tsx vc importa ela.

``` bash
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold 
} from '@expo-google-fonts/inter';

//Dentro de chaves vc coloca esse 'useFonts' e define dps quais fontes quer usar
```

E dps carrega ela dentro. 
``` bash
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold 
  });
}
```

---

### ⚙️ Configurações NativiWind
📄 [NativeWind](https://www.nativewind.dev/quick-starts/expo)

``` bash
npm i nativewind
```

``` bash
npm i tailwindcss --save-dev
```

Crie um arquivo ``tailwind.config.js``

⚠️📢 Para criar esse arquivo, rode o comando
``` bash
npx tailwindcss init
```

⚠️📢 Apague o conteúdo desse arquivo e substitua por essas configurações. ``tailwind.config.js``
``` bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      //aqui sãos as configs das fonts que vc esta usando
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}
```

⚠️📢 Dentro de ``babel.config.js`` add: 
``` bash
plugins: ["nativewind/babel"],
```

Até então, esse arquivo deve estar semelhante a:
``` bash
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
```
✅ Após isso, vc pode voltar a rodar sua aplicação.

### 🔨 Tipar className
⚠️📢 Dentro da pasta scr, crie outra pasta de nome @types e crie um arquivo de nome `app.d.ts`
⚠️🚨 Dentro desse arquivo, insira a seguinte linha:

```bash
/// <reference types="nativewind/types" />
```
---

### ⚙️ IntelliSense Tailwind
⚠️📢 Para facilitar uma vida, instale a extensão do IntelliSense Tailwind no seu VS Code
![extensçao vs code](https://user-images.githubusercontent.com/103972585/229003591-1feb3133-f997-4c1d-b2dc-0724cc18f027.png)

---

### ⚙️ SVG
Por padrão, o React-Native não suporta exibição de SVG, mas tem como usar. É só add uma biblioteca.
📄[Documentação Expo SVG](https://docs.expo.dev/versions/v48.0.0/sdk/svg/)

⚠️📢 Por garantia, pare a aplicação.
```bash
npx expo install react-native-svg
```

⚠️🚨 Contudo, entretanto, porem e todavia… A gente precisa de uma segunda biblioteca para renderizar o SVG.
[Repositório GitHub](https://github.com/kristerkari/react-native-svg-transformer)

Depois de instalar o ``react-native-svg``, instale essa segunda biblioteca como uma dependência de desenvolvimento. 
Código a seguir:
```bash
npm i react-native-svg-transformer --save-dev
```
⚠️📢 Depois de instalado, crie o seguinte arquivo de configuração: ``metro.config.js``
→ Cria esse trem fora de qualquer pasta


⚠️📢 Depois cole o seguinte código dentro desse arquivo:
```bash
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

⚠️📢 Para tirar o erro do SVG, na pasta @types, crie o seguinte arquivo: svg.d.ts, e cola o seguinte código dentro desse arquivo.
```bash
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

---
### 🔆 Vector Icons
📢 Biblioteca de icones do próprio Expo
```bash
import {} from '@expo/vector-icons'
```

📢 Guia:
[Repositório Icons React Native](https://oblador.github.io/react-native-vector-icons/)

---

### ⚙️ DayJS
[TypeScript Day.js](https://day.js.org/docs/en/installation/typescript)

Manipulação de datas
→ Como ela é uma biblioteca puramente JavaScript, vc não precisa parar a aplicação.
```bash
npm install dayjs
```

⚠️📢 Para organizar as datas no formato pt-br, criei uma basta ‘lib’ dentro do src 
→ Dentro dessa pasta eu crio um arquivo ``dayjs.ts`` e faço a importação

```bash
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
```
