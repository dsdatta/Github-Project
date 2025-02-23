import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class ErrorNotify {
 //Error common base class
  errorHandler(error: HttpErrorResponse) {
   return throwError(() => error || new Error("Server Error"));
  }
}
