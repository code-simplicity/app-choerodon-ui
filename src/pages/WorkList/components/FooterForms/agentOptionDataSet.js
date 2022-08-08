/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-08-05 17:26:05
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-08-07 20:42:10
 * @FilePath: \c7n-ui-demo\src\components\Forms\sexOptionDataSet.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const agentOptionDataSet = {
    fields: [
        // 这里的字段配置，实际上是根据我们自己的需求虚拟的
        // 实际上，如果从后端读取值的话，还是要按照后端的规范来写
        { name: 'text', type: 'string' },
        { name: 'value', type: 'string' },
    ],
    // 因为我们的需求比较简单，因此直接用 data 生成本地假数据即可
    data: [
        {
            text: '王一',
            value: 'id1',
        },
        {
            text: '李二',
            value: 'id2',
        },
        {
            text: '张三',
            value: 'id3',
        },
        {
            text: '吴四',
            value: 'id4',
        },
        {
            text: '陈五',
            value: 'id5',
        },
        {
            text: '杜六',
            value: 'id6',
        },
    ],
};
export default agentOptionDataSet;
