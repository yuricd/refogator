export interface IOption {
  text: string,
  next?: string,
}
 
export interface IVertex {
  _id: string,
  question: string,
  options?: IOption[],
}

export interface IGraph {
  vertices: IVertex[], 
}