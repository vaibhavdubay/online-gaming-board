import { Injectable } from '@angular/core';
import {
  Firestore,
  //   collectionData,
  collection,
  CollectionReference,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireBaseStoreService {
  public collection?: CollectionReference;

  constructor(private fireStore: Firestore) {}

  public selectCollection(collectionName: string): void {
    this.collection = collection(this.fireStore, collectionName);
  }
}
