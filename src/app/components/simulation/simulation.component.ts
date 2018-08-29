import { Component} from '@angular/core';
declare var $:any;
@Component({

})
export class SimulationComponent {
//      timestamp = new Date().getTime().toString();
//  sbtInt = {};
//      sbtobject = {};
//      isTrue = true;
//      sh;
//       isFlag = true;
//      sd;
//      sbtCase = {
//         In1NER_APP_NO1_x_x  : '16' ,    //油门踏板信号
//         In1NER_x_BrakeSig_x_x : '0' ,    //制动踏板信号
//         In1Mot_Gear_Signal_x_x : '2',    //档位信号
//         In1NER_IgnKey_LOCK_x_x : '1',  //点火LOCK档位
//         In1NER_IgnKey_ON_x_x : '0' ,  //on
//         In1NER_OBD_ClearCode_x_x: '0',//    清除故障码动作
//         In1NER_Multi_Off_x_x: '1',
//         In1NER_Multi_ACVlt_x_x: '0',//电压交流
//         In1NER_Multi_DCVlt_x_x: '0',//电压直流
//         In1NER_Multi_DCmVlt_x_x: '0',//电压没用
//         In1NER_Multi_Pass2Ohm_x_x: '0',//当时电阻档时该值为1
//         In1NER_Multi_hFE_x_x: '0',//
//         In1NER_Multi_Amp_x_x: '0',
//         In1NER_Multi_mAmp_x_x: '0',
//         In1NER_Multi_mirAmp_x_x: '0',
//         In1NER_Multi_Hold_x_x: '0',
//         In1NER_Multi_VltRP_x_x: '1',
//         In1NER_Multi_AmpMea_x_x: '0',
//         In1NER_Multi_mirAmA_x_x: '0',
//         In1NER_Multi_COM_x_x: '1',
//         In1NER_Multi_Power_x_x: '1',
//         In1NER_Multi_Red_x_x: '0',//红表笔输入
//         In1NER_Multi_Black_x_x: '0',//黑表笔输入
//         In1NER_Multi_Insulate_Ohm_x: '0',//万用表绝缘电阻档位
//         In1NER_Multi_Insulate_Switch_x: '0'//万用表绝缘电阻开关


//     };

//      fdjqh = {
//         In1_Drive_Motor_Ctr_x : '1' ,
//         In1_DC_ToDC_Ctr_x : '0'
//     };
// constructor(){
// }
// // plugin0():void {
// //         return document.getElementById('plugin0');
// //     }
// //     plugin = plugin0;
    

    






//     sbtInt.dashboard = dashboardService.Mint;
//     sbtInt.multimeter = multimeterService.Mint;
//     sbtInt.obdscanr = obdscanService.Mint;
//     sbtInt.In1_x_Control_x_Time = timestamp;
//     sbtInt.allsensor = pageService.Mint;





//     //输入----
//     function outParam() {
//         var paramObj = JSON.stringify(sbtInt);
//         try {
//             $.ajax({
//                 type: "POST",
//                 url: "http://127.0.0.1:99/",
//                 data: paramObj,
//                 success: function(data) {
//                     if (data == "error") {
//                         isFlag = false;
//                         clearInterval(sh);
//                         handleError("23");
//                     } else {
//                         sbtOut = JSON.parse(data);
//                         pluginValid();

//                         if(stalls== 1){
//                             controlService.data.dataCtrlAnimate();
//                         }

//                     }
//                 },
//                 error: function(jqXHR, textStatus, errorMsg) {
//                     handleError("24");
//                 }
//             });
//         } catch (e) {

//         }
//     }
//     //
//     function exit() {
//         plugin().ModelStop(timestamp);
//     }
//     var timerOutParam

//     // $rootScope.exit = function() {

//     //     if (timerOutParam) { clearInterval(timerOutParam); }
//     //     //plugin().ModelStop();

//     // }

//     $(function() {
//         var fefef = "0";
//         var wewewe = "";
//         for (var i in this.sbtCase) {
//             fefef = fefef + this.sbtCase[i];

//         }
//         //console.log(fefef);
//         for (var i = 1; i < 25; i++) {
//             wewewe = wewewe + parseInt(fefef.substring(4 * i - 4, 4 * i), 2).toString(16);
//             // console.log(fefef.substring(4*i-4,4*i));
//         }
//         //console.log(wewewe);
//         var fefe2 = "000";
//         var wewew2 = "";
//         for (var i in fdjqh) {
//             fefe2 = fefe2 + "" + fdjqh[i];

//         }
//         //        console.log(fefe2);
//         for (var i = 1; i < 2; i++) {
//             wewew2 = wewew2 + parseInt(fefe2.substring(4 * i - 4, 4 * i), 2).toString(16);
//             // console.log(fefef.substring(4*i-4,4*i));
//         }
//         //      console.log(wewew2);
//         //sbtobject.In1_x_Fault_x_Control = wewewe; //号
//         //sbtobject.In1_x_switch_x_Judge = wewew2; //机公共输入
//         sbtobject.In1_x_Init_x_Control = '1'; //0
//         sbtobject.In1_x_Multi_x_State = '1'; //否使用
//         sbtobject.In1_x_ObdsSan_x_state = '1'; //否使用
//         sbtobject.In1_x_dashboard_x_state = '1'; //使用
//         sbtobject.In1_x_Control_x_Inform = "RM-BQ-EV200";
//         sbtobject.In1_x_Control_x_Time = timestamp;
//         var q = JSON.stringify(sbtobject);
//         $.ajax({
//             type: "POST",
//             url: "http://127.0.0.1:99/",
//             data: q,
//             success: function(data) {
//                 //console.log(q);
//                 //console.log( sbtInt.allsensor);
//                 if (isFlag) {
//                     sh = setInterval(function() {
//                         outParam();
//                     }, 120);
//                 }
//             },
//             error: function(jqXHR, textStatus, errorMsg) {
//                 handleError("24");
//             }
//         });
//     });
//     var sbtOut;

//     function pluginValid() {
//         //万用表输出=========================================================
//         multimeterService.Mout.Out1NER_Multi_ToScreen_x_x = formatFloatTwo(sbtOut.Out1NER_Multi_ToScreen_x_x);

//         //仪表输出=========================================================
//         dashboardService.Mout.Out1NER_x_LED_ABS_Jud = sbtOut.Out1NER_x_LED_ABS_Jud;    //ABS灯输出
//         dashboardService.Mout.Out1NER_x_LED_Brake_Jud = sbtOut.Out1NER_x_LED_Brake_Jud;    //驻车制动灯输出
//         dashboardService.Mout.Out1NER_x_LED_SafeBag_Jud = sbtOut.Out1NER_x_LED_SafeBag_Jud;    //安全气囊灯输出
//         dashboardService.Mout.Out1NER_x_LED_MIL_Jud = sbtOut.Out1NER_x_LED_MIL_Jud;    //发动机故障灯输出
//         dashboardService.Mout.Out1NER_x_LED_OilPre_Jud = sbtOut.Out1NER_x_LED_OilPre_Jud;    //油压灯输出
//         dashboardService.Mout.Out1NER_x_LED_BATTFault_Jud = sbtOut.Out1NER_x_LED_BATTFault_Jud;    //蓄电池灯输出
//         dashboardService.Mout.Out1NER_x_LED_SafeBelt_Jud = sbtOut.Out1NER_x_LED_SafeBelt_Jud;    //安全带灯输出
//         dashboardService.Mout.Out1NER_x_LED_BrakLamp_Jud = sbtOut.Out1NER_x_LED_BrakLamp_Jud;    //制动液位灯
//         dashboardService.Mout.Out1Mot_x_Power_x_x = sbtOut.Out1Mot_x_Power_x_x;    //功率表指针参数
//         dashboardService.Mout.Out1Mot_x_VehSpeed_x_x = formatInt(sbtOut.Out1Mot_x_VehSpeed_x_x);    //车速

//         //诊断仪输出=========================================================
//         obdscanService.Mout.Out1Mot_Ignit_Key_x_x = formatInt(sbtOut.Out1Mot_Ignit_Key_x_x);//    点火开关
//         obdscanService.Mout.Out1Mot_Gear_Signal_x_x = formatInt(sbtOut.Out1Mot_Gear_Signal_x_x);//    档位
//         obdscanService.Mout.Out1Mot_Brake_Signal_x_x = formatInt(sbtOut.Out1Mot_Brake_Signal_x_x);//    制动信号
//         obdscanService.Mout.Out1Mot_Busbar_Current_x_x = formatInt(sbtOut.Out1Mot_Busbar_Current_x_x);//    母线电流
//         obdscanService.Mout.Out1Mot_Busbar_Vlt_x_x = formatInt(sbtOut.Out1Mot_Busbar_Vlt_x_x);//    母线电压
//         obdscanService.Mout.Out1Mot_Drection_Order_x_x = formatInt(sbtOut.Out1Mot_Drection_Order_x_x);//    MCU接收到的转速指令
//         obdscanService.Mout.Out1Mot_MCU_Sped_Order_x = formatInt(sbtOut.Out1Mot_MCU_Sped_Order_x);//    MCU接收到的转速指令
//         obdscanService.Mout.Out1Mot_Motor_Sped_rpm_x = formatInt(sbtOut.Out1Mot_Motor_Sped_rpm_x);//    电机当前转速
//         obdscanService.Mout.Out1Mot_D_Shaft_Vlt_x = formatInt(sbtOut.Out1Mot_D_Shaft_Vlt_x);//    D轴电压
//         obdscanService.Mout.Out1Mot_Q_Shaft_Vlt_x = formatInt(sbtOut.Out1Mot_Q_Shaft_Vlt_x);//    Q轴电压
//         obdscanService.Mout.Out1Mot_D_Shaft_Current_x = formatInt(sbtOut.Out1Mot_D_Shaft_Current_x);//    D轴电流
//         obdscanService.Mout.Out1Mot_Q_Shaft_Current_x = formatInt(sbtOut.Out1Mot_Q_Shaft_Current_x);//    Q轴电流
//         obdscanService.Mout.Out1Mot_Motor_Temp_x_x = formatInt(sbtOut.Out1Mot_Motor_Temp_x_x);//    电机温度
//         obdscanService.Mout.Out1Mot_Motor_Ctr_Temp_x = formatInt(sbtOut.Out1Mot_Motor_Ctr_Temp_x);//    电机控制器温度
//         obdscanService.Mout.Out1Mot_MCU_Batt_Vlt_x = formatFloatOne(sbtOut.Out1Mot_MCU_Batt_Vlt_x);//    MCU低压供电电源电压
//         obdscanService.Mout.Out1Mot_Motor_work_mode_x = formatInt(sbtOut.Out1Mot_Motor_work_mode_x);//    驱动电机当前工作模式

//         if (formatInt(sbtOut.Out1AT_Gear_Position_x_x) == '1') {
//             obdscanService.Mout.Out1AT_Gear_Position_x_x = 'P'
//         } else if (formatInt(sbtOut.Out1AT_Gear_Position_x_x) == '2') {
//             obdscanService.Mout.Out1AT_Gear_Position_x_x = 'R'
//         } else if (formatInt(sbtOut.Out1AT_Gear_Position_x_x) == '3') {
//             obdscanService.Mout.Out1AT_Gear_Position_x_x = 'N'
//         } else if (formatInt(sbtOut.Out1AT_Gear_Position_x_x) == '4') {
//             obdscanService.Mout.Out1AT_Gear_Position_x_x = 'D'
//         }
//         //}
//     };
//     //取整函数
//     function formatInt(src) {
//         return parseInt(src);
//     }
//     //保留一位小数
//     function formatFloatOne(src) {
//         var aVal = src.toString().split('.');
//         var aFloat = [''];
//         if (aVal[1]) {
//             aFloat = aVal[1].split('');
//         }
//         if (aFloat[0]) {
//             //如果原来就有一位或一位以上小数点
//             return aVal[0] + '.' + aFloat[0]
//         } else {
//             //如果原来就是整数
//             return aVal[0] + '.0'
//         }
//     }
//     //保留两位小数
//     function formatFloatTwo(src) {
//         var aVal = src.toString().split('.');
//         var aFloat = [''];
//         if (aVal[1]) {
//             aFloat = aVal[1].split('');
//         }
//         if (aFloat[1]) {
//             //如果原来就有两位或两位以上小数点
//             return aVal[0] + '.' + aFloat[0] + aFloat[1];
//         } else if (aFloat[0]) {
//             //如果原来就有一位或一位以上小数点
//             return aVal[0] + '.' + aFloat[0] + '0';
//         } else {
//             //如果原来就是整数
//             return aVal[0] + '.00'
//         }
//     }
//     //保留三维小数
//     function formatFloatt(src) {
//         if (src.toString().split(".")[0] == 0) {
//             var num = new Number(src);
//             return num.toFixed(3);
//         } else {
//             var num = new Number(src);
//             return num.toPrecision(4);
//         }
//     }



//     function formatFloat(src) {
//         //加上特殊热区点
//         if ((multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") && (multimeterService.Mint.In1MultiLogic_x_Black_x_x == '4123') && (multimeterService.Mint.In1MultiLogic_x_Red_x_x == '4124')) {
//             multimeterService.Mdata.multimeterScreenUnit = "MΩ";
//             return "1.000";
//         }
//         if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1" && sbtOut.Out1MultiLogic_x_ToScreen_x_x == "1") {
//             multimeterService.Mdata.multimeterScreenUnit = "";
//             return "1.";
//         } else {
//             if (multimeterService.Mint.In1MultiLogic_x_DCmVlt_x_x == "1") {
//                 if (src == 0) {
//                     multimeterService.Mdata.multimeterScreenUnit = "mV";
//                     return "0.000";
//                 } else {
//                     multimeterService.Mdata.multimeterScreenUnit = "";
//                     return "1.";
//                 }
//             } else {
//                 if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1" && multimeterService.Mout.Out1MultiLogic_x_ToScreen_x_x != "1.") {

//                     multimeterService.Mdata.multimeterScreenUnit = "Ω";
//                 }
//                 var reg = /.*\..*/
//                 if (src >= 0) {

//                     if (reg.test(src)) {
//                         if (src.toString().split(".")[0].length >= 5) {
//                             var num = src / 1000;
//                             if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
//                                 multimeterService.Mdata.multimeterScreenUnit = "kΩ";
//                             };
//                             return num.toPrecision(4);
//                         } else {
//                             if (src.toString().split(".")[0] == 0) {
//                                 var num = new Number(src);
//                                 return num.toFixed(3);
//                             } else {
//                                 var num = new Number(src);
//                                 return num.toPrecision(4);
//                             }
//                         }


//                     } else {
//                         if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {

//                         }
//                         if (src.toString().length >= 5) {
//                             var num = src / 1000;
//                             if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
//                                 multimeterService.Mdata.multimeterScreenUnit = "kΩ";
//                             }
//                             return num.toPrecision(4);
//                         } else {

//                             var num = new Number(src);
//                             return num.toPrecision(4);
//                         }

//                     }
//                 } else {

//                     if (reg.test(src)) {
//                         if (src.toString().split(".")[0].length >= 4) {
//                             var num = src / 1000;
//                             if (multimeterService.Mint.In1MultiLogic_x_Pass2Ohm_x_x == "1") {
//                                 multimeterService.Mdata.multimeterScreenUnit = "kΩ";
//                             }
//                             return num.toPrecision(1);
//                         } else {
//                             if (src.toString().split(".")[0] == 0) {
//                                 var num = new Number(src);
//                                 return num.toFixed(2);
//                             } else {
//                                 var num = new Number(src);
//                                 return num.toPrecision(3);
//                             }
//                         }


//                     } else {
//                         if (src.toString().length >= 4) {
//                             var num = src / 1000;

//                             return num.toPrecision(3);
//                         } else {
//                             var num = new Number(src);
//                             return num.toPrecision(3);
//                         }

//                     }
//                 }

//             }

//         }


//         return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
//     }

}
