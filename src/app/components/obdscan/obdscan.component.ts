import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObdscanService } from "./obdscan.service";
import { CommunicationService } from "../communication";
import { DashboardService } from "../dashboard";
import { GearPanelService } from "../gear_panel";
import { AppService } from "../../index/app.service";
import { CoursePrepareService } from "../../views/course_prepare/course_prepare.service";

declare var $: any;
declare var io: any;
@Component({
  selector: "obdscan",
  styleUrls: ["./obdscan.component.scss"],
  templateUrl: "./obdscan.component.html",
  providers: []
})
/**
 * 处理错误的组件
 */
export class ObdscanComponent implements OnInit, OnDestroy {
  obdscanServiceZdata = this.obdscanService.Zdata;

  /**
   * 是否允许读取故障码
   */
  private isAllowEnterFaultCode() {
    this.obdscanServiceZdata.isAllowEnterFaultCode(null);
  }

  /**
   *  是否允许进入读取数据流
   */
  private isAllowEnterDataStream() {
    this.obdscanServiceZdata.isAllowEnterDataStream();
  }

  // 控制显示的title导航
  private showNavName(navNameArr) {
    this.obdscanServiceZdata.showNavName(navNameArr);
  }

  // 进入到下一页
  changeTemplate(id, nextPage, isClick, parentId, name) {
    this.obdscanServiceZdata.changeTemplate(
      id,
      nextPage,
      isClick,
      parentId,
      name
    );
  }

  // 清除故障码----如果在当前页面清除掉页面并且显示清除故障码页面
  clearFaultCode() {
    this.obdscanServiceZdata.clearFaultCode();
  }

  // 在检验交车页面如果修好了则显示的是历史故障码
  isChangeHistoryCode() {
    this.obdscanServiceZdata.isChangeHistoryCode();
  }

  // 显示故障页面
  showNotCommunication() {
    this.obdscanServiceZdata.showNotCommunication();
  }

  // 诊断仪的返回
  obdscanReturn() {
    this.obdscanServiceZdata.obdscanReturn();
  }

  constructor(
    public obdscanService: ObdscanService,
    private communicationService: CommunicationService,
    public appService: AppService,
    private coursePrepareService: CoursePrepareService,
    private dashboardService: DashboardService,
    private gearPanelService: GearPanelService
  ) {}
  ngOnInit(): void {
    this.obdscanService.Zdata.isPower = true;
    this.obdscanServiceZdata.navNameArr = [];
    setTimeout(() => {
      this.dragDiv();
    }, 10);
    this.obdscanService.Zdata.monixunlian01fault01 = 0;
    this.obdscanService.Zdata.monixunlian02fault01 = 0;
    this.obdscanService.Zdata.pageRecord = "0";
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }
  // 诊断仪的拖拽
  dragDiv(): void {
    // 给新面板加上拖拽事件
    $(".obdscan").draggable({
      containment: ".container",
      cursor: "move"
    });
  }
  //关闭诊断仪
  closedobdscan(param) {
    this.obdscanService.Zdata.closedobdscan();
    this.coursePrepareService.closeTool(param);
    this.obdscanService.Zdata.obdscanStatus = false;
  }

  // 诊断仪的加电
  obdscanPower() {
    this.obdscanService.Zdata.obdscanPower();
  }
}
