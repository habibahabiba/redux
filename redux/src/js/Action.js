import { Adtask, DonTask, Dltask, Edtask } from "./Actiontype"






export const addtask =(Newtask)=> {
    return{
        type:Adtask,
        payload:Newtask,

    }
}
export const Deltask =(id)=> {
    return{
        type:Dltask,
        payload:id,

    }
}
export const Edittask =(task,id)=> {
    return{
        type:Edtask,
        payload:task,id

    }
}
export const isDonTask =(id)=> {
    return{
        type:DonTask,
        payload:id,

    }
}