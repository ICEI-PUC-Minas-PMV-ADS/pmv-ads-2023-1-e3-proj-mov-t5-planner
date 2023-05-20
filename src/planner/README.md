<h1 align="center"> Planner App </h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-%20COMPLETED-green"/>
  <img src="https://img.shields.io/badge/release%20date-may-green"/>
</p>

<p align="center">
  <img width="200px" src="https://user-images.githubusercontent.com/103972585/228393668-a05cc74e-a5b0-4096-8f01-dda67c617766.gif"/>
</p>


# 📃Bibliotecas utilizadas
🚨⚠️ Antes de rodar a aplicação, é necessário instalar as seguintes bibliotecas.  ⚠️🚨 <br>
⚠️📢 Todas as instalações são feitas através do Terminal. Na devida pasta do projeto.

### ⚙️ Configurações Expo
📄 [Documentação](https://docs.expo.dev/get-started/expo-go/)

Adicione o Expo
```bash
npm add expo
```

---

### ⚙️ Configurações Fonts
📄 [Google Fonts](https://fonts.google.com/)

``` bash
npx expo install expo-font @expo-google-fonts/inter
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

#### ⚙️ IntelliSense Tailwind
⚠️📢 Instale a extensão do IntelliSense Tailwind caso queira alterar o CSS
![extensçao vs code](https://user-images.githubusercontent.com/103972585/229003591-1feb3133-f997-4c1d-b2dc-0724cc18f027.png)

---

### ⚙️ SVG
Por padrão, o React-Native não suporta exibição de SVG, mas tem como usar adicionando essa biblioteca: <br>
📄[Documentação Expo SVG](https://docs.expo.dev/versions/v48.0.0/sdk/svg/)

```bash
npx expo install react-native-svg
```

⚠️🚨 Contudo, entretanto, porem e todavia… A gente precisa de uma segunda biblioteca para renderizar o SVG. <br>
[Repositório GitHub](https://github.com/kristerkari/react-native-svg-transformer)

Depois de instalar o ``react-native-svg``, instale essa segunda biblioteca como uma dependência de desenvolvimento. 
Código a seguir:
```bash
npm i react-native-svg-transformer --save-dev
```

---

### ⚙️ DayJS
[TypeScript Day.js](https://day.js.org/docs/en/installation/typescript)

```bash
npm install dayjs
```

--- 

### ⚙️ CLSX
[Documentação](https://github.com/lukeed/clsx)

```bash
npm install --save clsx
```

--- 

# 🛞 Rodando a aplicação: 

Rode a aplicação com:
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
```

ou

``` bash
npx expo start --tunnel --clear
```
---


🚨⚠️ Caso queira ver a aplicação funcionando com o back-end, acesse a pasta **backend** e instale as dependências lá descritas
