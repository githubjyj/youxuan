// Home 用到的组件
import Vue from 'vue';
import { Search , Swipe, SwipeItem , Icon , Tag ,Tabbar, TabbarItem, Image as VanImage , 
         Cell, CellGroup,Field ,Button ,Card ,Sidebar, SidebarItem ,Lazyload 
         ,NoticeBar,Toast ,Dialog ,SubmitBar,NavBar,Notify,Popup  } from 'vant';
// import 'vant/lib/button/style';  原来要引入css文件，现在不需要了

Vue.use(Search);
 
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Icon);

Vue.use(Tag);

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(VanImage);

Vue.use(Cell);
Vue.use(CellGroup);

Vue.use(Field);

Vue.use(Button);

Vue.use(Card);

Vue.use(Sidebar);
Vue.use(SidebarItem);

Vue.use(Lazyload);
Vue.use(Lazyload, {
    lazyComponent: true,
  });

Vue.use(NoticeBar);

Vue.use(Toast);

Vue.use(Dialog);

Vue.use(SubmitBar);

Vue.use(NavBar);

Vue.use(Notify);

Vue.use(Popup);