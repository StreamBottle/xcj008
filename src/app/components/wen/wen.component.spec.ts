import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: WenComponent;
  let fixture: ComponentFixture<WenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
