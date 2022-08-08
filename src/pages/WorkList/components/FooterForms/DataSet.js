/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-08-05 17:24:09
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-08-07 21:35:29
 * @FilePath: \c7n-ui-demo\src\components\Forms\DataSet.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DataSet } from 'choerodon-ui/pro';
import AgentOptionDataSet from './agentOptionDataSet';
import TypeOptionDataSet from './typeOptionDataSet';
const agentOptionDataSet = new DataSet(AgentOptionDataSet);
const typeOptionDataSet = new DataSet(TypeOptionDataSet);

const FormDataSet = {
    // DataSet 不和后端交互时，自动新建一条数据，在表单场景下比较常见
    autoCreate: true,
    fields: [
        // 这里是与后端约定的，上传时用到的字段 
        { name: 'agent', type: 'string', textField: 'text', valueField: 'value', options: agentOptionDataSet, required: true },
        { name: 'type', type: 'string', textField: 'text', valueField: 'value', options: typeOptionDataSet, required: true },
        { name: 'description', type: 'string', required: true },
    ],
    transport: {
        // 创建时 DataSet 将会调用的方法
        // url 随便找的，可以自己替换
        // create / read / update / destroy 都可以等量替换成函数，create 涉及到上传新创建的数据，因此需要用到 data
        create: ({ data, params, dataSet }) => {
            console.log(data + " ", params + " ", dataSet.toJSONData());
            return ({
                // url: 'v1/projects/${projectId}',
                // method: 'post',
                // data,
            })
        }
    },
    events: {
        load: ({ dataSet }) => {
            console.log('加载完成', dataSet)
        },
        submit: ({ data }) => {
            console.log("监听到submit事件 提交的数据:", data[0]);
        },

    }
};
export default FormDataSet;