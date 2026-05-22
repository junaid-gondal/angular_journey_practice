import { CommonModule } from '@angular/common';
import { Component, effect, signal, computed,WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('junaid Gondal')
  users=signal(["ali","ahmad","sohaib","hamza"])

  userdetail=signal([{id:1,name:"ahmad",rollno:1},
    {id:2,name:"ali",rollno:2},
    {id:3,name:"junaid",rollno:3},
    {id:4,name:"gondal",rollno:4},
    {id:5,name:"raza",rollno:5}
  ])

  status=signal("not started")

  handlswitch(event:Event)
  {  const target=event.target as HTMLSelectElement
    this.status.set(target.value)
  }

  nam=signal("junaid Gondal")
  age=20;

  userdata=signal({name:"junaid",age:20,caste:"Gondal"})
  updateuserdata(key:string,val:string)
  {
    this.userdata.update((item)=>({...item,name:val}))
  }

  username=signal("juni ")

  get uname()
  {
   return this.username();
  }

  set uname(val:string)
  {
      this.username.set(val)
  }  

  tasks=signal([{id:0,title:"lunch time", completed:false}])
  titles =signal('')

  addtask()
  { if(this.titles())
    {this.tasks.update((item)=>([...item,{id:this.tasks().length,title:this.titles(),completed:false}]))}
  }

  delete(val:number)
  {
    this.tasks.update((tasks)=>tasks.filter((task)=>task.id!=val))
  }

  islogin=signal(true)

  uses=signal(["anil","sam","babar"])
  pcolor="red";
}
