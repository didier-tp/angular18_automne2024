import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaComponent } from './tva.component';
import { ToFixedPipe } from '../../common/pipe/to-fixed.pipe';
import { FormsModule } from '@angular/forms';

describe('TvaComponent', () => {
  let component: TvaComponent;
  let fixture: ComponentFixture<TvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvaComponent , ToFixedPipe],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// ng test --include=**/tva.component.spec.ts
