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

  it('tva=40 pour ht=200 et taux=20 from model', () => {
    component.ht=200;
    component.tauxTva=20;
    component.onCalculerTvaEtTtc();//à ne pas oublier d'appeler si pas de dispatchEvent
    fixture.detectChanges();
    const compNativeElt = fixture.debugElement.nativeElement;
    let spanTvaElt = compNativeElt.querySelector('#spanTva');
    console.log("from model, res:" + spanTvaElt.innerText);
    expect(spanTvaElt.innerText).toContain('40');
    });

});

// ng test --include=**/tva.component.spec.ts
