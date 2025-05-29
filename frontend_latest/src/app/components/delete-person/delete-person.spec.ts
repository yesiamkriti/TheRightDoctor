import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePerson } from './delete-person';

describe('DeletePerson', () => {
  let component: DeletePerson;
  let fixture: ComponentFixture<DeletePerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
