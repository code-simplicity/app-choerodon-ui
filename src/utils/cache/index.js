// 定义缓存的方法实现数据持久化

// 添加缓存到本地浏览器的方法
export function createLocalStorage(key, value) {
    if (key === null || key === undefined) return;
    localStorage.setItem(key, value);
}

// 获取缓存数据的方法
export function getLocalStorage(key) {
    const result = JSON.parse(JSON.stringify(localStorage.getItem(key)));
    // 判断满足条件
    if (result === null || result === undefined || result === '') return null;
    return result;
}

// 清除数据缓存
export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

// 全部清除
export function clearLocalStorage() {
    localStorage.clear();
}
