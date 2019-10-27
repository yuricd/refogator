import DIGraph from '../Bot/Graph';
import { IOption, IGraph } from '../Bot/Types';

function main() {

  const digraph = DIGraph();

  const b1 = digraph.createVertex('Bloco 1');
  const b2 = digraph.createVertex('Bloco 2');
  const b3 = digraph.createVertex('Bloco 3');
  const b4 = digraph.createVertex('Bloco 4');

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

  console.log(digraph.adjacencyList(newGraph));
}

main();