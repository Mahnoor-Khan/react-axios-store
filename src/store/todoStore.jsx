import {types , onSnapshot , flow , applySnapshot , getSnapshot} from "mobx-state-tree";

const TodoModal =types.model(
    "Todo" , {
        title: types.string,
        // created : types.Date,
        complete : types.boolean
})
.actions((self)=>({
    setTitle(title){
        self.title = title
        console.log(title)
    }
}))
.views((self)=>({
    get todoList(){
        return  self.title
    }
}))
const todos = TodoModal.create({
    title : 'My New Task 1',
    // created : Date(),
    complete : true
})

export default todos