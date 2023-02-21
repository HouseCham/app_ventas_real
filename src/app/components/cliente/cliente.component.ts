import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { Response } from 'src/app/models/response';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';
import { DialogDeleteComponent } from 'src/app/common/dialog-delete/dialog-delete.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public lst: any[] = [];
  public columnas: string[] = ['id', 'nombre', 'email', 'telefono', 'actions'];

  constructor(
    private _clienteService: ApiclienteService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this._clienteService.getClientes().subscribe(response => {
      this.lst = response.data;
      console.log(response)
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  openUpdate(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300',
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  deleteClient(id: Number){
    const deleteDialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '300',
      data: id
    });
    deleteDialogRef.afterClosed().subscribe(result => {
      if (result){
        this._clienteService.deleteClient(id).subscribe(response => {
          if(response.exito === 1){
            this.snackBar.open('Cliente eliminado con exito', '', { duration: 2000 });
            this.getClientes();
          }
        });
      }
    });
  }
}
