import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TextToColor'
})
export class TextToColorPipe implements PipeTransform {
  defaultColor = '#03A9F4';
  colors = {
    'a': '#BBDEFB',
    'b': '#90CAF9',
    'c': '#64B5F6',
    'd': '#42A5F5',
    'e': '#2196F3',
    'f': '#2196F3',
    'g': '#1E88E5',
    'h': '#1976D2',
    'i': '#1565C0',
    'j': '#0D47A1',
    'k': '#82B1FF',
    'l': '#448AFF',
    'm': '#2979FF',
    'n': '#2962FF',
    'o': '#7986CB',
    'p': '#5C6BC0',
    'q': '#3F51B5',
    'r': '#3949AB',
    's': '#303F9F',
    't': '#283593',
    'u': '#6200EA',
  };
  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt (0).toLowerCase();
    return this.colors[firstChar];
  }
}
