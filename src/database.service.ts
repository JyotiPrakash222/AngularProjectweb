import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
export interface empVM {
  id: number;
  department: string;
  empName: string;
}
@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return this.createDB();
  }

  private createDB() {
    let employees: empVM[] = [
      { id: 1, department: 'Frontend Developer', empName: 'JP' },
      // Add more employee objects if needed
    ];

    return { employees };
  }
}
