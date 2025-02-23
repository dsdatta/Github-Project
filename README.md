# Github-Project
Simple Angular application providing table to search repositories and thier respective commits.

Angular Features used:
1. Lazy loaded routes
2. ChangeDetectionStrategy.OnPush
3. ChangeDetectorRef
4. Rxjs debounceTime
5. Rxjs switchMap
6. Rxjs observable
7. Rxjs subscribe
8. Rxjs catchError

Library used: 
Primeng components
Primeng Icons

Base_Api_Url: https://api.github.com
The repos and commits components recieve data from api via the service Github-service created in the application.
Additional error handling techinques like showing toaster and adding common base error class are used which will be easier for future enhancements.
Few unit tests are also included for each components.

Css for much presentable UI.
