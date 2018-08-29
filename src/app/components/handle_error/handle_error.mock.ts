import { ErrorMessage } from './error_message';
export const ErrorMessages: ErrorMessage[] = [
  { code: -1, message: '系统繁忙！请与管理员联系。' },
  { code: 20, message: '与服务器连接失败！请与管理员联系。' },
  { code: 21, message: '当前网络异常，无法获取学习数据。' },
  { code: 22, message: '插件版本较老，请关闭浏览器，再更新插件。' },
  { code: 23, message: '打开了多个课程，本平台不支持同时学习多个课程，请关闭所有课程页面后，重新打开课程。' },
  { code: 24, message: '找不到插件，请关闭浏览器,请安装最新插件或重新启动插件。' },
  { code: 20001, message: '当前非正常打开课件，请重新打开课件。' },
  { code: 30005, message: '该用户在其他地方登陆或打开多个课件。' },
  { code: 0, message: '当前课程出错，请从新打开。' },
  { code: 11, message: '您输入的用户名或密码不正确，请重新输入！' },
  { code: 12, message: '该用户已注册！' },
  { code: 15, message: '该用户已经登录！' },
];
