import {Injectable} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import { errorMessages } from '../utils/error-messages';
import { ErrorMessage } from '@models/error-message.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  constructor() {
  }

  public getErrorMessage(error: ValidationErrors | null | undefined) {
    if (error) {      
      console.log(error);
      
      let found = errorMessages.find((err: ErrorMessage) => err.name == Object.keys(error)[0]);
      let errorName = found!.name;
      if (found!.message.includes(':' + errorName)) {
        let keyName = Object.keys(error[errorName])[0];
        return found!.message.replace(':' + errorName, error[errorName][keyName]);
      }
      return found!.message;
    }
    return null;
  }
}

