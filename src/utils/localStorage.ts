type localStorableObj = object | string;

class LocalStorage{
     constructor(){}

     private _isStoreAvailable(){
          const isLocalStoreAvailable = window !== undefined && window.localStorage !== undefined;
          if(isLocalStoreAvailable){
               return true;
          }
          return false;
     }


     private _safeJSONStringify(obj : localStorableObj){
          try{
               const string = JSON.stringify(obj);
               return string;
          }
          catch(e){
               console.error(e);
               return null;
          }
     }

     private _safeJSONParse(jsonString : string){
          try{
               const data = JSON.parse(jsonString);
               return data;
          }
          catch(e){
               console.error(e);
               return null;
          }
     }

     set(item : string , obj : localStorableObj){
          if(!this._isStoreAvailable()) return;
          const objString = this._safeJSONStringify(obj);
          window.localStorage.setItem(item , objString);
     }

     get(item : string){
          if(!this._isStoreAvailable()) return;
          const localStorageData = this._safeJSONParse(window.localStorage.getItem(item));
          return localStorageData;
     }

}

const Storage = new LocalStorage();

export default Storage;