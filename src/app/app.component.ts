import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
  msg:string ="";
  employees = [

    {'name': 'luis',position: 'manager' ,email:'luis@hotmail.com' },
    {'name': 'Carlos',position: 'Designer',email:'carlos@hotmail.com' },
    {'name': 'Andres',position: 'Programmer' ,email:'andres@hotmail.com'}
  ];

  model:any = {}; //se encarag de actualizar los datos
  model2:any = {}; //se encarag de actualizar los datos
  hideUpdate:boolean = true;


  addEmployee():void{  // Agrega empleados  void ya que no retorna
      this.employees.push(this.model);
      this.model = {}
      this.msg = "added field";
      

  }


  deleteEmployee(i):void{ // permite eleminar eempleados
    let asnwer = confirm("Do you want to delete the data?")
    if (asnwer) {
          this.employees.splice(i,1);
          this.msg = "field removed";
    } 
    

  }

  myvalue:any;
  editEmployee(i):void{ //editar empleados

      this.hideUpdate = false;
      this.model2.name = this.employees[i].name;
      this.model2.position = this.employees[i].position;
      this.model2.email = this.employees[i].email;
      this.myvalue = i;
    
  }

  updateEmployee():void{//actualizar en el arreglo

        let i = this.myvalue;
        for(let j = 0;j< this.employees.length;j++){
          if (i==j) {
            this.employees[i]=this.model2;
            this.model2 = {};
            this.msg = "field edited";
            this.hideUpdate = true;
          }
        }
        
  }


  closeAlert():void{
    this.msg = "";

  }
}
