import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPaletteComponent } from '../../component/building-palette.component';

describe('BuildingPaletteComponent', () => {
  let component: BuildingPaletteComponent;
  let fixture: ComponentFixture<BuildingPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPaletteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
