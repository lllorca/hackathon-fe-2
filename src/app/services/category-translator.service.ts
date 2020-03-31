import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryTranslatorService {

  constructor() { }

  translate(category: string): string {
    switch(category) {
      case 'BEAUTY': return 'Belleza';
      case 'GASTRONOMY': return 'Gastronomia';
      case 'CLOTHES': return 'Indumentaria';
      case 'SERVICE': return 'Servicio';
      case 'EDUCATION': return 'Educación';
      case 'OTHER': return 'Otro';
      default: return '';
    }
  }
}
