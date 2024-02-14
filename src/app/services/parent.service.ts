import { Subject } from "rxjs";
import {Theme} from "../models/enums/Theme";

export abstract class ParentService<T> {
  // This is the observable that will be used to notify the components
  protected observable!: Subject<T>;
  public getObservable() {
    return this.observable.asObservable();
  }

  // /**
  //  * sera utilisée pr notifier le component qu'il y a eu une erreur de communication avec le backend
  //  */
  // protected notifiyErreurApi(message: string = ApiConfig.apierrormessage) {
  //   this.componentResponse = ResponseModel.NOT_SUCCESS(message);
  //   this.myObservable.next(this.componentResponse);
  // }
  //
  // /**
  //  * sera utilisée pr notifier le component qu'il y a eu une erreur interne ds le serveur du backend
  //  */
  // protected notifiyErreurInterne() {
  //   this.componentResponse = ResponseModel.NOT_SUCCESS(ApiConfig.servererrormessage);
  //   this.myObservable.next(this.componentResponse);
  // }

  /**
   * sera utilisée s'il n'y a aucune erreur pr notifier le component de la donnée qu'il attend
   */
  protected notify(data: T) {
    this.observable.next(data);
  }

}
