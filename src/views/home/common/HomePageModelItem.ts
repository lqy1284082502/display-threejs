import BasicScenario from '@/threeBase/baseCommon/BasicScenario';
type modelType = {
  model: any;
  position: any;
  rotation: any;
  scale: any;
};
interface HomePageModelItemInterface {
  // 添加模型
  addModel(mode: modelType): void;
  // 添加光照
  addLight(): void;
}

export default class HomePageModelItem extends BasicScenario implements HomePageModelItemInterface {
  constructor(ref: HTMLElement) {
    super(ref);
  }

  addModel(mode: modelType): void {
    console.log(mode);
  }

  addLight(): void {}
}
