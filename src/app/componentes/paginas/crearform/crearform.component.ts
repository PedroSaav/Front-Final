import { ProductoService } from './../../service/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from './../../../models/producto';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crearform',
  templateUrl: './crearform.component.html',
  styleUrls: ['./crearform.component.css']
})
export class CrearFormComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
          private router: Router,
          private toastr: ToastrService,
          private _productoService: ProductoService,
          private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarProducto() {
    console.log(this.productoForm);
    
    console.log(this.productoForm.get('producto')?.value);
    
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.id !== null) {
      
      //EDITAMOS PRODUCTO

      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('El producto fue actualizado con exito!', 'Producto actualizado!');
        this.router.navigate(['/']);
        },error => {
          console.log(error);
          this.productoForm.reset();
        })

    } else {

      //AGREGAMOS PRODUCTO

      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }


  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }
  }
}