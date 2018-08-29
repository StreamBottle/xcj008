// interface UserNameID {
//     activityPushIDArray: Array<object>;
//     informationResourceID: Array<object>;
// }

export const studentEquipmentHITSMock = [
    [
        false, // 页面控制参数，当前学员是否为选中
        {
            userNameID: 11111, // 用户ID
            userName: '董超',  // 用户名
            param: {
                currentStudentHasActivity: false,  // 页面控制参数，当前学员是否已经有了这个活动
                currentStudentHasHITSResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
                currentStudentHasLocalResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
                currentStudentHasTrainedResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
            },

            activityPushID: [],  // 这个学员拥有的所有活动ID
            informationHITSResourceID: [],   // 这个学员拥有的HITS资源ID
            informationLocalResourceID: [],   // 这个学员拥有的本地资源ID
            trainedEvaluationResourceID: [],   // 这个学员拥有的讯后测评资源ID
        },
        {
            userNameID: 22222, // 用户ID
            userName: '董超',  // 用户名

            param: {
                currentStudentHasActivity: false,  // 页面控制参数，当前学员是否已经有了这个活动
                currentStudentHasHITSResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
                currentStudentHasLocalResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
                currentStudentHasTrainedResource: false,  // 页面控制参数，当前学员是否已经有了这个资源
            },
            activityPushID: [],  // 这个学员拥有的所有活动ID
            informationHITSResourceID: [],   // 这个学员拥有的HITS资源ID
            informationLocalResourceID: [],   // 这个学员拥有的本地资源ID
            trainedEvaluationResourceID: [],   // 这个学员拥有的讯后测评资源ID

        },
    ],
];

