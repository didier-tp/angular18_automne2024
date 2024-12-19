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


    it('tva(200,10)=20 from ihm', () => {
      const compNativeElt = fixture.debugElement.nativeElement;
      let htInputElt = compNativeElt.querySelector("input[name='ht']");
      htInputElt.value=200;
      htInputElt.dispatchEvent(new Event('input'));
      
      let tauxSelectElt = compNativeElt.querySelector("select[name='taux']");
      let optionElt = null;
      for(let opt of tauxSelectElt.children){
        if(opt.innerText=="10%"){
          optionElt=opt;
        }
      }
      console.log("from ihm, optionElt.innerText:" + optionElt.innerText);
      tauxSelectElt.value=optionElt.value;
      fixture.detectChanges();

     
      console.log("from ihm, tauxSelectElt.value:" + tauxSelectElt.value);
      tauxSelectElt.dispatchEvent(new Event('change'));

      fixture.detectChanges();
   
      let spanTva = compNativeElt.querySelector('#spanTva');
      console.log("from ihm, tva:" + spanTva.innerText);
      expect(Number(spanTva.innerText)).toBe(20);
     
     
      });

});

// ng test --include=**/tva.component.spec.ts
