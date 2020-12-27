import { LightningElement, track } from 'lwc';

export default class TodoApp1 extends LightningElement {

    @track list = [
        {
            id:1,
            name:"Seeta"
        },
        {
            id:2,
            name:"Ram",
        },{
            id:3,
            name:"Hanuman"
        }
    ]
    inputVal;
    clickHandler(e){
        console.log("click  : " + this.inputVal)
    }
    inputboxvalue(e){
        this.inputVal = e.target.value
        this.list = [...this.list, {id:this.list.length+1, name:this.inputVal}]
        this.template.querySelector("input").value = ""
    }
    
    deleteHandler(e){
        let rem = e.target.name
        this.list.map((a,i) => a.id == rem ? (this.list.splice(i,1)): false)
        }
}