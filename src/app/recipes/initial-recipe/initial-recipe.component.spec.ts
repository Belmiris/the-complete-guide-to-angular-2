import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialRecipeComponent } from './initial-recipe.component';

describe('InitialRecipeComponent', () => {
  let component: InitialRecipeComponent;
  let fixture: ComponentFixture<InitialRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
