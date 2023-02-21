import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from 'src/app/services/apicliente.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  id: number = 0;
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  email: string = '';
  telefono: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public apiCliente: ApiclienteService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente){
      if(this.cliente !== null){
        this.id = cliente.id;
        this.nombre = cliente.nombre;
        this.apellidoP = cliente.apellidoP;
        this.apellidoM = cliente.apellidoM;
        this.email = cliente.email;
        this.telefono = cliente.telefono;
      }
    }

  close(){
    this.dialogRef.close();
  }

  addCliente(){
    const cliente: Cliente = {
      id: this.id,
      nombre: this.nombre,
      apellidoP: this.apellidoP,
      apellidoM: this.apellidoM,
      email: this.email,
      telefono: this.telefono
    }

    this.apiCliente.addClient(cliente).subscribe(response => {
      if(response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente insertado con exito', '', { duration: 2000 });
      }
    })
  }

  updateCliente(){
    const cliente: Cliente = {
      id: this.id,
      nombre: this.nombre,
      apellidoP: this.apellidoP,
      apellidoM: this.apellidoM,
      email: this.email,
      telefono: this.telefono
    }
    this.apiCliente.updateClient(cliente).subscribe(response => {
      if(response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente editado con exito', '', { duration: 2000 });
      }
    })
  }
}
