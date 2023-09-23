// utils.js
export function searchByName(nameToSearch, dataObj) {
    for (const key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        const entry = dataObj[key];
        if (
          entry.name.toLowerCase().trim() === nameToSearch.toLowerCase().trim()
        ) {
          return entry;
        }
      }
    }
    return null;
  }
  


  