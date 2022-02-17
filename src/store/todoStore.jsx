import {types , onSnapshot , flow , applySnapshot , getSnapshot} from "mobx-state-tree";
import Todo from "../Api";


export const TodoModal =types.model({
        title: types.maybeNull(types.string),
        created : types.maybeNull(types.string),
        complete : types.maybeNull(types.boolean)
})

export const TodoListModal = types.model({
    data : types.maybeNull(types.array(TodoModal))
})
.views((self)=>({
    get getTOODO(){
        return  self.data
    }
}))

.actions((self)=>{
    const getTodo = flow(function* fetchData() {
        try {
          const res = yield Todo.getTodo()
          self.data = res
        } catch (error) {
          console.log('error', error);
        } finally {
         console.log('ends')
        }
      }) 
      return { getTodo }
    })
  export function initTodo() {
    return TodoListModal.create({})
  }