# Tela Perfil - App - Exercicios Fisicos Fitness (MundoDevops) - React-Native
<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/naoapaga-d8a12.appspot.com/o/Screenshot1_App-Exercicios-Fitness.png?alt=media&token=2d472b4e-21c0-49c4-a575-c1777e42eb65" width="200" height="350" hspace="20"/><img src="https://firebasestorage.googleapis.com/v0/b/naoapaga-d8a12.appspot.com/o/Screenshot2_App-Exercicios-Fitness.png?alt=media&token=9a071174-9ad2-419a-86db-2268a72c2c15" width="200" height="350" />
</p>

Aplicativo que faz parte de um teste/desafio no qual estou fazendo para a [MundoDevops](https://www.mundodevops.com/), não só isso como também mais um aprendizado.Todas as imagens e dados foram fornecidos pela MundoDevops, o aplicativo é direcionado a auxiliar em atividades físicas e contém algumas funções interessantes nas quais estarei exibindo as soluções nesta documentação.
Como proposto apenas desenvolvi a tela "Meu Perfil".

## Indice
- [Iniciando](#iniciando)
- [Instalações](#instalações)
- [Passo a Passo do Projeto](#passo-a-passo-do-projeto):
  - [Imports](#imports)
  - [Body](#body)
  - [Header](#header)
  - [Atividades (View-Post)](#atividades-view-post)
  - [Exercicios (View-Post)](#exercicios-view-post)
- [Links-Externos](#links-externos)

## Iniciando
Quero deixar claro que busco a cada dia melhorar os meus códigos e soluções, através da troca de conhecimentos, então espero que algumas delas sejam úteis a vocês e estarei mostrando o passo a passo de como implementei cada uma nessa aplicação.

Desenvolvi o mesmo no UBUNTU 18.4 e foi focado em testes no Android.

A versão do React-Native usada foi 0.59.8.

Utilizo um arquivo 'json/data.json' de onde eu retiro as informações do App.

Paleta de cores usadas no App:
- ![#FEFFFF (texto)](https://placehold.it/15/FEFFFF/000000?text=+) `#FEFFFF (texto)`
- ![#7F38F4 (inı́cio gradiente)](https://placehold.it/15/7F38F4/000000?text=+) `#7F38F4 (inı́cio gradiente)`
- ![#F22B48 (fim gradiente)](https://placehold.it/15/F22B48/000000?text=+) `#F22B48 (fim gradiente) `
- ![#19B996](https://placehold.it/15/19B996/000000?text=+) `#19B996 `
- ![#FD3C29](https://placehold.it/15/FD3C29/000000?text=+) `#FD3C29 `
- ![#262F38](https://placehold.it/15/262F38/000000?text=+) `#262F38 `
- ![#323C47](https://placehold.it/15/323C47/000000?text=+) `#323C47 `

Fonte usada:
- [Montserrat](https://befonts.com/montserrat-font-family.html) (Variações).

### Instalações
Se você é novo em react-native e ainda não tem o seu ambiente configurado, pare por aqui e acesse [esse link](https://docs.rocketseat.dev/ambiente-react-native/introducao) e siga os passos conforme seu dispositivo a fim de estar pronto para trabalhar com o React-Native.

Passarei o passo a passo da instalação que usei para o App, lembrando que o fiz em Linux por isso necessitei do arquivo "local.properties" na pasta Android do projeto para direcionar a sdk, no caso de Windows apenas crie a variável/patch.

Para instalar a App no seu Android e poder modificá-la da sua forma, baixe os arquivos do mesmo e dentro da pasta do projeto com os arquivos, de o comando:

```
npm install
```

O código acima ira baixar as "dependencies" do arquivo package.json, inclusive recomendo que abra o mesmo caso queira verificar a versão de cada modulo e ainda os caminhos das fontes usada no projeto.

Logo após, escreva em seu terminal, ainda no diretório do projeto:

```
react-native link
```

Agora já pode abrir o mesmo em seu Emulador Android ou em um celular Android:

```
react-native run-android
```

E não podemos esquecer de iniciar o servidor do React-Native, ele precisa ficar aberto para atualizar as modificações feitas na aplicação:


```
react-native start
```


Abaixo deixarei apenas uma relação das Dependencias (Módulos) usadas, caso necessite das mesma separadamente:

```
npm install prop-types

npm intall react-native-linear-gradient

npm intall react-native-vector-icons
```


## Passo a Passo do Projeto
Como diria Jack "Vamos por partes" ;D

O arquivo 'App.js' apenas importa e direciona para a page 'MeuPerfil.js' que se encontra dento da pasta 'components'.

```
import React from 'react';
import Home from './components/MeuPerfil';
import _ from 'lodash';

export default class App extends React.Component {
  render() {
    return <Home />;
  }
}
```

Antes de tudo criei também um arquivo 'img.js' dentro da pasta imagens e exportei todas as imagens da aplicação dentro do mesmo:

```
exports.ic_yoga = require('../images/ic_yoga.png');
exports.ic_upper_body = require('../images/ic_upper_body.png');
exports.ic_lower_body = require('../images/ic_lower_body.png'); 
exports.ic_dance = require('../images/ic_dance.png'); 
exports.running = require('../images/running.png'); 
exports.cycling = require('../images/cycling.png'); 
exports.bodybuilding = require('../images/gym.png'); 
exports.yoga = require('../images/yoga.png');
```

Assim dentro do arquivo "json/data.json" precisamos apenas adicionar o nome da imagem de acordo com o export, assim:

```
{
"filters": [
    {
      "name": "Yoga",
      "imagem": "ic_yoga" // Somente o nome da imagem
    }
 }
 ],
 
 "exercices": [
    {
      "name": "CORRIDA",
      "imagem": "running", //Somente o nome da imagem
      "calories": 400,
      "time": 30,
      "weight": 52,
      "when": ""
    }
 }
 ]
```

Dentro da classe 'MeuPerfil(component/MeuPerfil.js)' criei o construtor, para definir os States e logo abaixo fiz o 'componentDidMount'.

```
class MeuPerfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true, 
            dataSourceFilters: [],
            dataSourceExercices: []
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: false,
            dataSourceFilters: data.filters,
            dataSourceExercices: data.exercices
        });
    }

```
Ambos fazem a 'mágica' do App, através do SetState dentro do 'DidMount' conseguimos armazenar os dados do arquivo 'json' para uso futuro na aplicação, separei em dois 'dataSource' cada um para um objeto do arquivo 'data.json'.

Adicionei também um states de carregamento, caso contenha bastante dados no arquivo 'json', assim evita que o usuário pense que a aplicação travou.


Toda a parte que mostrarei a frente esta contido no arquivo 'MeuPerfil.js', nada impede de fazê-las separadamente apenas optei pelo mesmo arquivo, darei o código de cada parte e seu Style e tentarei explicar da melhor maneira o que fiz.

### Imports
Todos os imports usados na aplicação:

```
import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View,
    Text,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../json/data.json';
import Imagens from '../images/img'
import Icon from 'react-native-vector-icons/FontAwesome';
```

'LinearGradiente' é usado para fazer o efeito de degrade nas views da parte de Atividades.

'data' é o diretório do arquivo json o qual utilizo para buscar os dados da aplicação.

'Imagens' é o diretorio de onde exportamos todas as imagens da aplicação para usar apenas o nome no arquivo json.

'Icon' a importação dos icones.

Logo a frente entrarei em detalhes sobre cada um conforme a utilização no App.

### Body
Criei essa view para envolver toda a aplicação, sem nenhum secredo.

```
<View style={styles.body}>
//Toda a Aplicação
</View>

//Style
body:{
        flex: 1,
        backgroundColor: '#262F38'
   }
```

Aqui conseguimos mudar o fundo da aplicação e o tipo de flex.

### Header

<img src="https://firebasestorage.googleapis.com/v0/b/naoapaga-d8a12.appspot.com/o/ScreenshotHeader_App-Exercicios-Fitness.png?alt=media&token=42df0f9b-b741-40c1-a66a-88e31ae32acc" width="200" height="50" />


Esse é o código do mesmo:

```
<View style={styles.header}>
  <TouchableOpacity>
    <Icon name="bars" size={30} color="#FEFFFF" />
  </TouchableOpacity>

  <Text style={styles.titulo}>MEU PERFIL</Text>

  <TouchableOpacity>
    <Icon name="cog" size={30} color="#FEFFFF" />
  </TouchableOpacity>
</View>

header: {
        height: 80,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#262F38',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#323C47'

    },

    titulo: {
        fontFamily: 'Montserrat-Light',
        fontSize: 30,
        color: '#FEFFFF'
    }
```
Aqui usei os icones [Vector Icons](https://github.com/oblador/react-native-vector-icons) da biblioteca ['FontAwesome'](https://fontawesome.com/icons?d=gallery) que pode ser conferida no [import](#imports) 'Icon' da aplicação.

No titulo criei um estilo separado e usei a fonte [Montserrat](https://befonts.com/montserrat-font-family.html) (Montserrat-Light) todas as fontes da aplicação são variação da mesma.

Header está com um estilo padrão usando o 'flex' em direção 'row' para deixar itens lado a lado e com o 'space-between' que ja nos da o espaçamento exato entre os itens.

Adicionei uma borda somente na parte inferior através do 'borderBottom'.

Com o 'TouchableOpacity' podemos direcionar os usuários para os respectivos locais de cada ícone, basta adicionar o 'onPress'.

### Atividades (View-Post)

<img src="https://firebasestorage.googleapis.com/v0/b/naoapaga-d8a12.appspot.com/o/ScreenshotAtividades_App-Exercicios-Fitness.png?alt=media&token=ebd9458b-fe97-4e31-a669-57a658ceba42" width="200" height="70" />


Codigo:

```
<View style={styles.postAtividades}>
  <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
    data={this.state.dataSourceFilters}
    renderItem={({ item }) => {
      idAtividades++;
      return (
        <LinearGradient colors={['#7F38F4', '#F22B48']} style={styles.iconAtividades}>
          {idAtividades == '1' || idAtividades == '3' ?
          <Icon name="check-circle" size={20} style={styles.checkIconAtividades} /> : null}
          <Image style={styles.icon} source={Imagens[item.imagem]}/>
        </LinearGradient>
      )
    }}
    keyExtractor={(item, index) => index.toString()}
  />
</View>

   postAtividades: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        height: 100,
        backgroundColor: '#323C47',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    iconAtividades: {
        marginRight: 10,
        padding: 8,
        height: 60,
        width: 60,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    icon: {
        alignSelf: 'center'
    },

    checkIconAtividades: {
        paddingTop: 0,
        paddingLeft: 1.5,
        paddingRight: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: "#19B996",
        position: 'absolute',
        right: 0,
        top: 0
    },
```

Usei o FlatList para renderizar os dados do 'data.json', item por item de cada objeto, dessa forma posso chamar apenas os dados dos quais necessito 'item.nomeAtributo', assim consigo exibir qualquer imagem usando o import do arquivo 'img.js' e o atributo com o nome da minha imagem ```'Imagens[item.imagem]'```.

A variavel 'idAtividades++;' foi declarada anteriormente, apenas para que eu possa identificar as atividades, nada impede de a mesma ja ser um atributo do arquivo 'data.json' caso prefira. A variável de identificação se fez necessária, pois necessitava criar uma condição na qual o icone de Check apenas fosse exibido nos icones 1 e 3.

Outra parte interessante aqui foi o uso da coloração degrade através do ```<LinearGradient>``` [(import)](#imports)  onde indicamos o inicio e fim do degrade, inclusive pode adicionar mais uma cor ao meio.

O 'KeyEtrator' serve para indicar as Key ou Id do flatList, como eu usei uma variável e não peguei nenhuma id de outro lugar apenas o declarei, porém vazio.

### Exercicios (View-Post)

<img src="https://firebasestorage.googleapis.com/v0/b/naoapaga-d8a12.appspot.com/o/ScreenshotExercicios_App-Exercicios-Fitness.png?alt=media&token=0b560bd5-2c38-4e9c-bbf9-58a6620a1e29" width="250" height="100" />


Nessa parte ja usei um pouco a mais de soluções, primeiramente o código:

```
<FlatList showsHorizontalScrollIndicator={false}
  data={this.state.dataSourceExercices}
  renderItem={({ item }) => {
  var time = item.time / 60;
  return (
    <View style={styles.postExercicios}>

      <View style={styles.backCircleExercicios}>
      <Image style={styles.iconExercice} source={Imagens[item.imagem]}/>
      </View>

      <View style={styles.postDateExercicios}>

        <Text style={styles.postTitleExercicios}>{item.name}</Text>

        <View style={styles.statisticExercicios}>
          <Image style={styles.statisticImageExercicios} source={require('../images/ic_bike.png')}/>
          <Text style={styles.textStatisticExercicios}>{item.calories} Kcal</Text>

          <Image style={styles.statisticImageExercicios}source={require('../images/ic_time.png')}/>
          {item.time % '60' == 0 ?
          <Text style={styles.textStatisticExercicios}>{time} h</Text>
          : <Text style={styles.textStatisticExercicios}>{item.time} m</Text>}

          <Image style={styles.statisticImageExercicios}source={require('../images/ic_balance.png')}/>
          <Text style={styles.textStatisticExercicios}>{item.weight} Kg</Text>
        </View>

        <View style={styles.diaExercicios}>
          {item.when == 'today' ?
          <Text style={[styles.diaTextExercicios, { 
          backgroundColor: '#FD3C29', opacity: 1.0, borderColor: '#FD3C29'}]}>HOJE</Text>
          : <Text style={styles.diaTextExercicios}>HOJE</Text>}

           {item.when == 'yesterday' ?
          <Text style={[styles.diaTextExercicios, { 
          backgroundColor: '#19B996', opacity: 1.0, borderColor: '#19B996' }]}>ONTEM</Text>
           : <Text style={styles.diaTextExercicios}>ONTEM</Text>}
        </View>
      </View>
    </View>
    )
  }}
  keyExtractor={(item, index) => index.toString()}
/>


    iconExercicios: {
        marginTop: -10,
        alignSelf: 'center'
    },

    postExercicios: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        height: 120,
        backgroundColor: '#323C47',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    backCircleExercicios: {
        height: 100,
        width: 100,
        borderRadius: 120,
        backgroundColor: '#262F38',
        alignItems: 'stretch',
        justifyContent: 'center'
    },

    postTitleExercicios: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#FEFFFF'
    },

    postDateExercicios: {
        margin: 15,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    statisticExercicios: {
        marginTop: 5,
        flexDirection: 'row'
    },

    statisticImageExercicios: {
        margin: 5

    },

    textStatisticExercicios: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF'
    },

    diaExercicios: {
        marginTop: 5,
        flexDirection: 'row',
    },

    diaTextExercicios: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF',
        opacity: 0.6,
        borderWidth: 1,
        paddingTop: 3,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 200,
        marginRight: 20,
        borderColor: '#FEFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    },

```

Nessa ultima parte, o que acredito ser importante ressaltar é o uso das condições para completar os horários dos Exercícios de forma que o tempo seja informado em horas se for um valor exato, caso contrário, em minutos.

Para isso criei uma variável local chamada 'time' e atribui a mesma o valor do tempo em minutos já fornecido pelo 'data.json' e em seguida dividi o valor por 60, para encontrarmos as horas exatas.

Na condição verifiquei se as divisões por 60 eram exatas, para só assim exibir o valor da variável 'time' para o usuário, assim:

```
{item.time % '60' == 0 ?
<Text style={styles.textStatisticExercicios}>{time} h</Text> : <Text style={styles.textStatisticExercicios}>{item.time} m</Text>}
```

Se for exata a divisão, será exiba em horas, caso contrario como proposto exibe em minutos.

Outra parte interessante é a coloração do indicador de dia (ontem ou hoje) que também é dinâmica ligada ao arquivo 'data.json', conforme o atributo 'when' for preenchido com 'today' ou 'yesterday' ou ainda se estiver vazio a coloração é respeitada, podemos fazer um teste apenas mudando no arquivo 'data.json' essas informações assim como a hora para o layout mudar automaticamente.

A condição que usei aqui foi a seguinte:

```
{item.when == 'today' ?
<Text style={[styles.diaTextExercicios, { 
backgroundColor: '#FD3C29', opacity: 1.0, borderColor: '#FD3C29'}]}>HOJE</Text>
: <Text style={styles.diaTextExercicios}>HOJE</Text>}

{item.when == 'yesterday' ?
<Text style={[styles.diaTextExercicios, { 
backgroundColor: '#19B996', opacity: 1.0, borderColor: '#19B996' }]}>ONTEM</Text>
: <Text style={styles.diaTextExercicios}>ONTEM</Text>}
```

Se o atributo 'item.when' for 'today' a cor do indicador muda, o mesmo para 'yesterday' e caso esteja vazio mantêm o estilo padrão.

## Links Externos

Uma relação com todos os links externos usados nesse README:

* [https://www.mundodevops.com/](https://www.mundodevops.com/) 
* [https://docs.rocketseat.dev/ambiente-react-native/introducao](https://docs.rocketseat.dev/ambiente-react-native/introducao) - Tutorial instalação ambiente React-Native;
* [https://github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Instalação de Icones;
* [https://fontawesome.com/icons?d=gallery](https://fontawesome.com/icons?d=gallery) - Lista de ícones da Biblioteca "Font Awesome";
* [https://befonts.com/montserrat-font-family.html
](https://befonts.com/montserrat-font-family.html
) - Fonte dos textos utilizados.

