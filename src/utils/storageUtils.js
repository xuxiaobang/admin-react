
// 使用store
import store from 'store'

// 将key值提取出来
const user_key = "user_key";

export default {
    // 存数据
    addUser(user){
        // localStorage.setItem(user_key, JSON.stringify(user))
        store.set(user_key, user)
    },

    // 取数据
    getUser(){
        // return JSON.parse(localStorage.getItem(user_key) || "{}")
        return store.get(user_key) || {}
    },

    // 删除数据
    removeUser(){
        // localStorage.removeItem(user_key)
        store.remove(user_key)
    }
}
