import {
  Component,
  Injectable,
  OnDestroy,
  AfterContentInit,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { MultimeterService } from "./multimeter.service";
import { HandleErrorService } from "../../components/handle_error";
import { AppService } from "../../index/app.service";
import { CoursePrepareService } from "../../views/course_prepare/course_prepare.service";
import { SkillService } from "../../views/skill/skill.service";

declare var $: any;
declare var io: any;
@Component({
  selector: "multimeter",
  styleUrls: ["./multimeter.component.scss"],
  templateUrl: "./multimeter.component.html",
  providers: []
}) // @Injectable()
export class MultimeterComponent implements OnDestroy, OnInit, AfterViewInit {
  packupMultimeter = false; // 万用表只显示
  multimeterServiceMdata = this.multimeterService.Mdata;
  multimeterServiceMout = this.multimeterService.Mdata.Mout;
  multimeterServiceMint = this.multimeterService.Mdata.Mint;
  modelOrself = this.multimeterService.Mdata.modelOrself;

  currentKfilker01: boolean = true;
  currentKfilker02: boolean = true;
  currentKfilkerres01: boolean = true;
  currentKfilkerres02: boolean = true;

  currentKfilker22: boolean = true;
  currentKfilkerres22: boolean = true;
  constructor(
    public multimeterService: MultimeterService,
    private handleErrorService: HandleErrorService,
    private appService: AppService,
    public coursePrepareService: CoursePrepareService,
    public skillService: SkillService
  ) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.dragStart();
    this.multimeterServiceMdata.freshHontspot();
  }

  ngOnDestroy() {}

  setRedHotspotDrag(top, left) {
    // $('#hhjmultimeterRed-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.redHotspotDrag(top, left);
  }
  setRedHotspotStop(top, left) {
    // $('#hhjmultimeterRed-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.redHotspotStop(top, left);
  }
  setBlackHotspotDrag(top, left) {
    // $('#hhjmultimeterBlack-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.blackHotspotDrag(top, left);
  }
  setBlackHotspotStop(top, left) {
    // $('#hhjmultimeterBlack-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.blackHotspotStop(top, left);
  }

  setMaskMultimeterDrag(top, left) {
    // $('#mask-multimeter').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.maskMultimeterDrag(top, left);
  }

  freshHontspotDrop(eventID, uiDroppableID) {
    this.multimeterServiceMdata.freshHontspot();
    this.multimeterServiceMdata.freshHontspotDrop(eventID, uiDroppableID);
  }

  multimeter() {
    this.multimeterService.Mdata.multimeter();
  }
  dragStart() {
    this.multimeterService.Mdata.dragStart();
  }
  multimeterCircle() {
    this.multimeterService.Mdata.multimeterCircle();
  }
  multimeterShortcutHtml(href) {
    this.multimeterService.Mdata.multimeterShortcutHtml(href);
  }
  multimeteroff() {
    this.multimeterService.Mdata.multimeteroff();
  }
  multimetervv() {
    this.multimeterService.Mdata.multimeterv();
  }
  multimeterv() {
    this.multimeterService.Mdata.multimetervv();
  }
  multimetermv() {
    this.multimeterService.Mdata.multimetermv();
  }

  multimeterres() {
    this.multimeterService.Mdata.modelOrself = "self";
    switch (this.appService.progressData.describeFlag) {
      case 12:
        this.currentKfilkerres01 = false;
        break;
      case 16:
        this.currentKfilkerres02 = false;
        break;
      case 22:
        this.currentKfilkerres22 = false;
        break;
      default:
    }
    this.multimeterService.Mdata.multimeterres();
  }
  multimeternofine() {
    this.multimeterService.Mdata.multimeternofine();
  }
  multimeterAA() {
    this.multimeterService.Mdata.multimeterAA();
  }
  multimeterk() {
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.modelOrself = "self";
    switch (this.appService.progressData.describeFlag) {
      case 12:
        this.currentKfilker01 = false;
        break;
      case 16:
        this.currentKfilker02 = false;
        break;
      case 22:
        this.currentKfilker22 = false;
        break;
      default:
    }
    this.multimeterService.Mdata.multimeterk();
    // $('.T6-uninstall,.V-uninstall').hide();
    // $('.T6-install,.V-install').show();
  }
  multimetermA() {
    this.multimeterService.Mdata.multimetermA();
  }
  closemultimeter() {
    // $('.skill-circuit').hide();

    this.skillService.T_Pin_Install = "1";
    this.skillService.V_Pin_Install = "1";
    this.multimeterService.Mdata.closemultimeter();
    this.coursePrepareService.closeTool("multimeters");
  }
  onMouseover() {
    // this.multimeterService.Mdata.circleareaAnimate(false);
    // $('.clickcircle').css('zIndex',3);
  }
  onMouseout() {
    // this.multimeterService.Mdata.circleareaAnimate(true);
    // $('.clickcircle').css('zIndex',0);
  }
  change2pointer() {
    $(".multimeter-hotarea").css("cursor", "pointer");
  }
  change2default() {
    $(".multimeter-hotarea").css("cursor", "default");
  }

  removefalseConnect() {
    this.multimeterServiceMdata.falseconnectStatus = false;
    this.multimeterServiceMdata.multimeterblackRecover();
    this.multimeterServiceMdata.multimeterredRecover();
  }

  hideMultimeterOperator() {
	  this.packupMultimeter = !this.packupMultimeter;
	  this.packupMultimeter?$('.packup-multimeter').css('transform', 'rotate(180deg)'):$('.packup-multimeter').css('transform', 'rotate(0deg)');
  }

  // 测量点记录
  recordProgress = function() {
    this.multimeterService.Mdata.recordProgress();
  };
}
