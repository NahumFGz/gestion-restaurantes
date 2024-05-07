const TOKEN = import.meta.env.VITE_LOCAL_STORAGE_ITEM_NAME

export function setToken (token) {
  window.localStorage.setItem(TOKEN, token)
}
