import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class PocketbaseService {
  pocketbaseUrl = 'http://127.0.0.1:8090';
  client = new PocketBase(this.pocketbaseUrl);
  constructor() {}
}
