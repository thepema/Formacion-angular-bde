import { AbstractControl, ValidationErrors } from "@angular/forms";

export function tajertaValidator(group: AbstractControl): ValidationErrors | null{
    const numero = group.get('numero')?.value;
    const year = group.get('validez')?.value;
    if((numero && !year) || (!numero && year)){
        return { 
            tarjetaIncompleta: true,
        }
    }
    return null;

}


export function range(min: number, max: number): ValidationErrors | null {

    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && (control.value < min || control.value > max)) {
      return { rangoInvalido: true };
    }else {
      return null;
    }
    }
}
