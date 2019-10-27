import * as uuid from 'uuid'
import { IVertex, IGraph, IOption } from './Types'

interface IDIGraph {
  addVertex(vertex: IVertex, graph: IGraph): IGraph,
  createVertex(question: IVertex['question']): IVertex,
  setOptions(vertex: IVertex, options: IOption[]): IVertex,
  createRelation(text: IOption['text'], next?: IOption['next']): IOption,
  adjacencyList(graph: IGraph, by: string): { [x: string]: string[] }[],
}

const DIGraph = () => Object.freeze({
  addVertex(vertex: IVertex, graph: IGraph): IGraph {
    const newList = graph.vertices.concat(vertex)
    const newGraph = {
      vertices: newList,
    }
    return newGraph
  },

  createVertex(question: IVertex['question']): IVertex {
    return {
      _id: uuid.v1(),
      question,
    }
  },

  setOptions(vertex: IVertex, options: IOption[]): IVertex {
    return {
      ...vertex,
      options,
    }
  },

  createRelation(text: IOption['text'], next?: IOption['next']): IOption {
    return {
      text,
      next,
    }
  },

  adjacencyList(graph: IGraph, by: 'question' | '_id' = 'question'): { [x: string]: string[] }[] {
    const { vertices } = graph

    return (by === '_id') ?
      vertices.map((v) => {
        return {
          [v._id]: v.options.map((option) => option.next),
        }
      }) :

      vertices.map((v) => {
        return {
          [v.question]: v.options.map((option) => option.text),
        }
      })
  },
})

export default DIGraph
