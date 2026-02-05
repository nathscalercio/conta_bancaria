import leia from 'readline-sync';
import { colors } from './src/util/colors';

let option: number;

console.log(colors.fg.gray,'\n***************************************');
console.log('                                       ');
console.log(colors.fg.gray, '               BANCO DO BRAZIL                ', colors.reset);
console.log(colors.fg.blackstrong, '                                       ');
console.log('***************************************');
console.log('                                       ');
console.log('  1 - Criar Conta                      ');
console.log('  2 - Listar todas as Contas           ');
console.log('  3 - Buscar Conta por Número          ');
console.log('  4 - Atualizar Dados da Conta         ');
console.log('  5 - Apagar Conta                     ');
console.log('  6 - Sacar                            ');
console.log('  7 - Depositar                        ');
console.log('  8 - Transferir valores entre Contas  ');
console.log('  9 - Buscar Conta por Titular         ');
console.log('  0 - Finalizar                        ');
console.log('                                       ');
console.log('***************************************');
console.log('                                       ', colors.reset);

do {
  option = leia.questionInt('Escolha a opcao desejada: ')

  if(option === 0) {
    process.exit(0);
  };

  switch(option) {
    case 1: 
      console.log(colors.fg.magenta, 'Criar Conta', colors.reset);
    break;
    case 2: 
      console.log(colors.fg.magenta, 'Contas Cadastradas', colors.reset);
    break;
    case 3: 
      console.log(colors.fg.magenta, 'Buscar Conta', colors.reset);
    break;
    case 4: 
      console.log(colors.fg.magenta, 'Atualizar Dados da Conta', colors.reset);
    break;
    case 5: 
      console.log(colors.fg.magenta, 'Apagar Conta', colors.reset);
    break;
    case 6: 
      console.log(colors.fg.magenta, 'Sacar', colors.reset);
    break;
    case 7: 
      console.log(colors.fg.magenta, 'Depositar', colors.reset);
    break;
    case 8: 
      console.log(colors.fg.magenta, 'Fazer uma Transferência', colors.reset);
    break;
    case 9: 
      console.log(colors.fg.magenta, 'Buscar Conta por Titular', colors.reset);
    break;
    default:
      console.log('Operação Inválida!');
  }
  

} while(true);