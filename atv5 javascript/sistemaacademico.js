const alunos = [];

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  return Math.round(media);
}

function cadastrarAluno() {
  const nome = prompt("Digite o nome do aluno:");
  const alunoExistente = alunos.find((aluno) => aluno.nome === nome);

  if (alunoExistente) {
    console.log("Aluno já cadastrado.");
  } else {
    alunos.push({ nome, notas: [] });
    console.log(`Aluno ${nome} cadastrado com sucesso.`);
  }
}


function cadastrarNotas() {
  const nome = prompt("Digite o nome do aluno:");
  const aluno = alunos.find((aluno) => aluno.nome === nome);

  if (aluno) {
    const notas = [];
    for (let i = 0; i < 3; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i + 1} do aluno ${nome}:`));
      notas.push(Math.round(nota));
    }
    aluno.notas = notas;
    console.log(`Notas do aluno ${nome} cadastradas com sucesso.`);
  } else {
    console.log("Aluno não encontrado.");
  }
}

function exibirBoletim() {
  const nome = prompt("Digite o nome do aluno:");
  const aluno = alunos.find((aluno) => aluno.nome === nome);

  if (aluno) {
    const media = calcularMedia(aluno.notas);
    let status = "";
    
    if (media >= 7) {
      status = "Aprovado";
    } else if (media >= 5) {
      status = "Em Recuperação";
    } else {
      status = "Reprovado";
    }

    console.log(`Nome: ${aluno.nome}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log(`Média: ${media}`);
    console.log(`Status: ${status}`);
  } else {
    console.log("Aluno não encontrado.");
  }
}


while (true) {
  const escolha = parseInt(prompt(`Menu de Opções:\n1. Cadastrar Aluno\n2. Cadastrar Notas\n3. Exibir Boletim\n4. Sair\nEscolha uma opção:`));

  switch (escolha) {
    case 1:
      cadastrarAluno();
      break;
    case 2:
      cadastrarNotas();
      break;
    case 3:
      exibirBoletim();
      break;
    case 4:
      console.log("Encerrando programa.");
      process.exit(0);
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}