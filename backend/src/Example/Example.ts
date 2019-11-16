import DIGraph from '../Bot/Graph';
import { IOption, IGraph } from '../Bot/Types';

function Example() {

  const digraph = DIGraph();

  const b1 = digraph.createVertex('Essa é a primeira pergunta ');
  const b2 = digraph.createVertex('Uma nova pergunta aqui');
  const b3 = digraph.createVertex('Aqui é uma outra pergunta');
  const b4 = digraph.createVertex('Esta daqui é a próxima pergunta');

  const b1ops: IOption[] = [
    digraph.createRelation('Aponta para 2', b2._id),
    digraph.createRelation('Aponta para 3', b3._id),
  ];

  const b2ops: IOption[] = [
    digraph.createRelation('Aponta para 4', b4._id),
    digraph.createRelation('Aponta para 1', b1._id),
  ];
  
  const newGraph: IGraph = {
    vertices: [
      digraph.setOptions(b1, b1ops),
      digraph.setOptions(b2, b2ops),
    ],
  };

  return newGraph;
}

export default Example;