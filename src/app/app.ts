import { Component, effect, signal,computed,WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
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
}
