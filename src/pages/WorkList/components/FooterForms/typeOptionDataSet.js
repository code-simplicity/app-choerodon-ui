/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-08-05 17:26:41
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-08-07 21:15:24
 * @FilePath: \c7n-ui-demo\src\components\Forms\languageOptionDataSet.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const typeOptionDataSet = {
    fields: [
        { name: 'text', type: 'string' },
        { name: 'value', type: 'string' },
    ],
    data: [
        {
            text: '任务',
            value: 'task',
        },
        {
            text: '缺陷',
            value: 'fault',
        },
        {
            text: '故事',
            value: 'story',
        },
    ],
};
export default typeOptionDataSet;
