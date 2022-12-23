import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearFormComponent } from './crearform.component';


describe('CrearFormComponent', () => {
  let component: CrearFormComponent;
  let fixture: ComponentFixture<CrearFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});