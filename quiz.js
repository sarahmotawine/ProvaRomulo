const quiz = {
  questions: [
    {
      question: "Qual é o tipo de linguagem de programação do Dart?",
      options: [
        "a) Compilada para bytecode (como Java)",
        "b) Interpretada (como Python)",
        "c) Compilada para código nativo e JavaScript",
        "d) Baseada em máquina virtual (como C#)"
      ],
      correct: 2 // C
    },
    {
      question: "Qual palavra-chave é usada para declarar uma variável que não pode ser alterada?",
      options: [
        "a) var",
        "b) dynamic",
        "c) final ou const",
        "d) static"
      ],
      correct: 2 // C
    },
    {
      question: "Como se define uma função anônima em Dart?",
      options: [
        "a) function() {}",
        "b) () => {}",
        "c) () {} ou () => expr",
        "d) lambda: {}"
      ],
      correct: 2 // C
    },
    {
      question: "Qual é a saída do seguinte código?\n\nvoid main() {\n  int x = 5;\n  print(x ~/ 2);\n}",
      options: [
        "a) 2.5",
        "b) 2",
        "c) 3",
        "d) Erro"
      ],
      correct: 1 // B
    },
    {
      question: "Qual método é usado para converter uma String em int?",
      options: [
        "a) String.toInt()",
        "b) int.parse()",
        "c) int.fromString()",
        "d) String.castToInt()"
      ],
      correct: 1 // B
    },
    {
      question: "O que é Future em Dart?",
      options: [
        "a) Um tipo de lista assíncrona",
        "b) Um objeto que representa um valor disponível no futuro",
        "c) Um erro em tempo de execução",
        "d) Um operador para concatenação"
      ],
      correct: 1 // B
    },
    {
      question: "Qual é a forma correta de declarar uma lista de inteiros?",
      options: [
        "a) List<int> = [1, 2, 3];",
        "b) List<int> list = [1, 2, 3];",
        "c) Array<int> list = [1, 2, 3];",
        "d) int[] list = [1, 2, 3];"
      ],
      correct: 1 // B
    },
    {
      question: "Como se define um construtor nomeado em Dart?",
      options: [
        "a) class MyClass { constructor.named(); }",
        "b) class MyClass { MyClass.named(); }",
        "c) class MyClass { new.named(); }",
        "d) class MyClass { named(); }"
      ],
      correct: 1 // B
    },
    {
      question: "Qual é a saída do código abaixo?\n\nvoid main() {\n  var list = [1, 2, 3];\n  list.forEach((item) => print(item * 2));\n}",
      options: [
        "a) [2, 4, 6]",
        "b) 2, 4, 6 (um por linha)",
        "c) null",
        "d) Erro"
      ],
      correct: 1 // B
    },
    {
      question: "Qual pacote é usado para fazer requisições HTTP em Dart?",
      options: [
        "a) dart:web",
        "b) dart:io",
        "c) http (pacote externo)",
        "d) dart:net"
      ],
      correct: 2 // C
    },
    {
      question: "O que async e await fazem?",
      options: [
        "a) Permitem trabalhar com código assíncrono de forma síncrona",
        "b) Compilam código mais rápido",
        "c) São usados para definir threads",
        "d) Convertem JSON automaticamente"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a função do operador ???",
      options: [
        "a) Retorna o valor à direita se o da esquerda for null",
        "b) Verifica igualdade",
        "c) Concatena strings",
        "d) Faz divisão"
      ],
      correct: 0 // A
    },
    {
      question: "Como se define um mapa (dicionário) em Dart?",
      options: [
        "a) Map<String, int> = {'key': 1};",
        "b) Dict key = {'key': 1};",
        "c) HashMap<String, int> = {'key': 1};",
        "d) Map({'key': 1});"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a saída do código?\n\nvoid main() {\n  var a = [1, 2];\n  var b = [...a, 3];\n  print(b);\n}",
      options: [
        "a) [1, 2]",
        "b) [1, 2, 3]",
        "c) [3, 1, 2]",
        "d) Erro"
      ],
      correct: 1 // B
    },
    {
      question: "Qual método adiciona um item ao final de uma lista?",
      options: [
        "a) list.insert(item)",
        "b) list.add(item)",
        "c) list.push(item)",
        "d) list.append(item)"
      ],
      correct: 1 // B
    },
    {
      question: "O que extends e implements significam?",
      options: [
        "a) extends herda uma classe, implements implementa uma interface",
        "b) Ambos fazem herança múltipla",
        "c) implements herda, extends implementa",
        "d) São iguais"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é o tipo de var x = 1.0;?",
      options: [
        "a) int",
        "b) double",
        "c) num",
        "d) dynamic"
      ],
      correct: 1 // B
    },
    {
      question: "Como se lê um arquivo em Dart?",
      options: [
        "a) File('path').readAsString()",
        "b) readFile('path')",
        "c) File.read('path')",
        "d) importFile('path')"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a saída do código?\n\nvoid main() {\n  String? name;\n  print(name?.length ?? 0);\n}",
      options: [
        "a) null",
        "b) Erro",
        "c) 0",
        "d) 1"
      ],
      correct: 2 // C
    },
    {
      question: "Qual ferramenta compila Dart para JavaScript?",
      options: [
        "a) dart2js",
        "b) dartc",
        "c) flutter build",
        "d) dart-web"
      ],
      correct: 0 // A
    },
    {
      question: "Como se define uma classe em Dart?",
      options: [
        "a) class MyClass {}",
        "b) def MyClass {}",
        "c) object MyClass {}",
        "d) new class MyClass {}"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a palavra-chave para criar uma instância de uma classe?",
      options: [
        "a) create",
        "b) new (opcional no Dart 2+)",
        "c) instance",
        "d) make"
      ],
      correct: 1 // B
    },
    {
      question: "Como declarar um construtor padrão para a classe Pessoa?",
      options: [
        "a) Pessoa() => {}",
        "b) Pessoa();",
        "c) constructor() {}",
        "d) Pessoa.new() {}"
      ],
      correct: 1 // B
    },
    {
      question: "O que é herança em Dart?",
      options: [
        "a) Uma classe pode herdar propriedades e métodos de outra classe usando extends",
        "b) Uma classe pode ter múltiplas superclasses",
        "c) Só é possível herdar interfaces",
        "d) Herança é feita com a palavra-chave inherit"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a saída do código abaixo?\n\nclass Animal {\n  void emitirSom() => print('Som genérico');\n}\n\nclass Cachorro extends Animal {\n  void emitirSom() => print('Au au!');\n}\n\nvoid main() {\n  Animal animal = Cachorro();\n  animal.emitirSom();\n}",
      options: [
        "a) Som genérico",
        "b) Au au!",
        "c) Erro",
        "d) null"
      ],
      correct: 1 // B
    },
    {
      question: "Como declarar um método privado em Dart?",
      options: [
        "a) Usando private antes do método",
        "b) Prefixando o nome do método com _",
        "c) Usando a palavra-chave hidden",
        "d) Métodos não podem ser privados"
      ],
      correct: 1 // B
    },
    {
      question: "Como definir um construtor nomeado que inicializa apenas o nome de uma classe Pessoa?\n\nclass Pessoa {\n  String nome;\n  int idade;\n\n  // Construtor padrão\n  Pessoa(this.nome, this.idade);\n\n  // Construtor nomeado aqui\n}",
      options: [
        "a) Pessoa.novo(String n) { nome = n; }",
        "b) Pessoa.somenteNome(this.nome);",
        "c) named Pessoa(String n) => nome = n;",
        "d) Pessoa({this.nome});"
      ],
      correct: 1 // B
    },
    {
      question: "Qual é a diferença entre extends e implements?",
      options: [
        "a) extends herda tudo, implements só métodos",
        "b) extends herda atributos e métodos, implements obriga a implementar todos os métodos",
        "c) São sinônimos",
        "d) implements herda, extends implementa"
      ],
      correct: 1 // B
    },
    {
      question: "Como definir uma classe abstrata?",
      options: [
        "a) abstract class Veiculo { ... }",
        "b) class abstract Veiculo { ... }",
        "c) Veiculo with abstract { ... }",
        "d) interface Veiculo { ... }"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a saída do código?\n\nclass Contador {\n  static int count = 0;\n  Contador() { count++; }\n}\n\nvoid main() {\n  Contador();\n  Contador();\n  print(Contador.count);\n}",
      options: [
        "a) 0",
        "b) 2",
        "c) 1",
        "d) Erro"
      ],
      correct: 1 // B
    },
    {
      question: "Qual widget é usado para criar um botão clicável em Flutter?",
      options: [
        "a) Clickable",
        "b) ElevatedButton",
        "c) TouchableOpacity",
        "d) Button"
      ],
      correct: 1 // B
    },
    {
      question: "Qual é a função do widget Scaffold?",
      options: [
        "a) Fornece uma estrutura básica de layout (AppBar, Body, FloatingActionButton, etc.)",
        "b) Gerencia estados de widgets",
        "c) Navega entre telas",
        "d) Cria listas roláveis"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget é usado para exibir uma lista rolável?",
      options: [
        "a) Column",
        "b) ListView",
        "c) Stack",
        "d) Grid"
      ],
      correct: 1 // B
    },
    {
      question: "Qual é a diferença entre StatelessWidget e StatefulWidget?",
      options: [
        "a) StatelessWidget é imutável, StatefulWidget pode mudar dinamicamente",
        "b) StatelessWidget usa setState(), StatefulWidget não",
        "c) StatefulWidget não pode ter filhos",
        "d) São idênticos"
      ],
      correct: 0 // A
    },
    {
      question: "Como navegar para uma nova tela (Tela2) em Flutter?",
      options: [
        "a) Navigator.push(context, MaterialPageRoute(builder: (context) => Tela2()));",
        "b) Navigator.goTo(Tela2());",
        "c) context.changeScreen(Tela2());",
        "d) Route.switch(Tela2());"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget é usado para centralizar um filho horizontal e verticalmente?",
      options: [
        "a) Align",
        "b) Center",
        "c) Padding",
        "d) Container"
      ],
      correct: 1 // B
    },
    {
      question: "Qual método é chamado quando um StatefulWidget é inicializado?",
      options: [
        "a) onCreate()",
        "b) initState()",
        "c) build()",
        "d) start()"
      ],
      correct: 1 // B
    },
    {
      question: "Qual widget permite adicionar espaçamento interno ao redor de outro widget?",
      options: [
        "a) Margin",
        "b) Padding",
        "c) Spacer",
        "d) Space"
      ],
      correct: 1 // B
    },
    {
      question: "Como retornar à tela anterior na navegação?",
      options: [
        "a) Navigator.back();",
        "b) Navigator.pop(context);",
        "c) context.goBack();",
        "d) Route.pop();"
      ],
      correct: 1 // B
    },
    {
      question: "Qual widget é usado para organizar widgets verticalmente?",
      options: [
        "a) Column",
        "b) Row",
        "c) List",
        "d) VerticalLayout"
      ],
      correct: 0 // A
    },
    {
      question: "O que o método setState() faz em um StatefulWidget?",
      options: [
        "a) Atualiza o estado interno e força o rebuild do widget",
        "b) Remove o widget da árvore",
        "c) Navega para outra tela",
        "d) Inicializa o estado"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget é usado para exibir texto em Flutter?",
      options: [
        "a) Label",
        "b) Text",
        "c) StringView",
        "d) TextView"
      ],
      correct: 1 // B
    },
    {
      question: "Como adicionar margens a um widget?",
      options: [
        "a) Usar Container com margin",
        "b) Usar Padding com edgeInsets",
        "c) Usar Spacer",
        "d) Não é possível"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget permite sobrepor widgets uns sobre os outros?",
      options: [
        "a) Stack",
        "b) Column",
        "c) Overlay",
        "d) Layer"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é o widget raiz obrigatório em um app Flutter?",
      options: [
        "a) MaterialApp ou CupertinoApp",
        "b) Scaffold",
        "c) AppBar",
        "d) MainWidget"
      ],
      correct: 0 // A
    },
    {
      question: "Como definir um ícone no AppBar?",
      options: [
        "a) AppBar(leading: Icon(Icons.menu));",
        "b) AppBar(icon: Icons.menu);",
        "c) AppBar(child: Icon(Icons.menu));",
        "d) AppBar(action: Icon(Icons.menu));"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget é usado para criar um campo de texto editável?",
      options: [
        "a) TextField",
        "b) TextInput",
        "c) EditText",
        "d) Input"
      ],
      correct: 0 // A
    },
    {
      question: "O que o widget SizedBox faz?",
      options: [
        "a) Define um tamanho fixo para seu filho ou espaçamento",
        "b) Cria uma caixa de texto",
        "c) Gerencia estados",
        "d) Navega entre telas"
      ],
      correct: 0 // A
    },
    {
      question: "Qual widget é usado para criar um switch (interruptor)?",
      options: [
        "a) Switch",
        "b) Toggle",
        "c) Checkbox",
        "d) Button"
      ],
      correct: 0 // A
    },
    {
      question: "Qual é a função do BuildContext?",
      options: [
        "a) Representa a localização de um widget na árvore de widgets",
        "b) Gerencia estados globais",
        "c) Armazena dados persistentes",
        "d) Navega entre telas"
      ],
      correct: 0 // A
    }
  ],

  // Função para verificar as respostas
  checkAnswers: function(userAnswers) {
    let score = 0;
    const results = [];
    
    for (let i = 0; i < this.questions.length; i++) {
      const isCorrect = userAnswers[i] === this.questions[i].correct;
      if (isCorrect) score++;
      
      results.push({
        question: this.questions[i].question,
        userAnswer: this.questions[i].options[userAnswers[i]] || "Não respondida",
        correctAnswer: this.questions[i].options[this.questions[i].correct],
        isCorrect: isCorrect
      });
    }
    
    return {
      score: score,
      total: this.questions.length,
      results: results
    };
  }
};

// Exemplo de uso:
// const userAnswers = [2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
// const result = quiz.checkAnswers(userAnswers);
// console.log(`Pontuação: ${result.score}/${result.total}`);