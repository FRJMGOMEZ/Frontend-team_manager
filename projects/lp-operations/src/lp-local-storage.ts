export class LpLocalStorage {
  public static set(object: string, value: any, key?: string) {

    if (key) {
      let obj = JSON.parse(localStorage.getItem(object)) || {};
      obj[key] = value.toString();
      localStorage.setItem(object, JSON.stringify(obj))

    } else {
      localStorage.setItem(object, value)

    }
  }

  public static get(object: string, key?: string) {
    if (key) {
      return localStorage.getItem(object) != null ? JSON.parse(localStorage.getItem(object))[key] != null ? JSON.parse(localStorage.getItem(object))[key] : '' : '';
    } else {
      return JSON.parse(localStorage.getItem(object))
    }
  }

  public static remove(object: string, key?: string) {
    if (key) {
      let obj = JSON.parse(localStorage.getItem(object))
      obj[key] != null ? delete obj[key] : null;
      localStorage.setItem(object, JSON.stringify(obj));

    } else {
      localStorage.removeItem(object)
    }
  }

}
