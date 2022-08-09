import React from 'react';
import { Icon, Select } from 'choerodon-ui/pro';
import { Avatar, Badge } from 'choerodon-ui';
// 头部右侧组件
const HeaderUser = () => {
    return (
        <div className='flex-row'>
            <div className='margin-r-1'>
                <Select></Select>
            </div>
            <div className='margin-r-1'>
                <Icon type='help_outline' />
            </div>
            <div className='margin-r-1'>
                <Badge count={5}>
                    <Icon type='notifications_none' />
                </Badge>
            </div>
            <div>
                <Avatar src='https://zkc7n-iam-service.obs.cn-east-3.myhuaweicloud.com/file_8f3fb37c9d3c41d68b0b227d0bf63d65_WechatIMG1.jpeg' />
            </div>
        </div>
    );
};
export default HeaderUser;
