import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../../models/producto';
import { ProductoService } from './../../service/producto.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class formularioComponent implements OnInit {
  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService,
      private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
      
    })
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado correctamente' ,'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
      
    })
  }
}
