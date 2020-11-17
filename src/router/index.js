import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import("../views/leftward/index.vue"),
        redirect: '/main',
        children: [
          //店铺
              {
                path:'/main',
                name:'shop',
                component:()=>import("../views/leftward/commodity/Shop/shooop.vue")
              },
            ]
      },
         //店铺二级
          {
            path: '/main/examine',
            name: "examine",
            component: () => import("../views/leftward/commodity/Shop/examine.vue"),
       
         },

      //供应商
      {
        path: '/test',
        name: 'test',
        component: () => import("../views/leftward/index.vue"),
        children: [
          {
            path: "/test",
            name: "supplier",
            component: () => import("../views/leftward/commodity/supplier/supplier.vue")
          },
        ],  
      },
      //供应商商品池
      {
        path:'/Distributor',
        name:'Distributor',
        component:()=>import("../views/leftward/commodity/Distributor/Distributor.vue"),
        children:[
          {
            path:'/Distributor',
            name:'Distributor',
            component:()=>import("../views/leftward/commodity/Shop/shooop.vue")
          }
        ]
      },
      {
        path:'/test/supplier',
        name:'supplier',
        component:()=>import("../views/leftward/commodity/Shop/examine.vue")
      },
      //京东
      {
        path: "/Jing",
        name: 'Jing',
        component: () => import("../views/leftward/index.vue"),
        children:[
          {
            path:"/Jing",
            name:'Jing',
            component:()=>import("../views/leftward/commodity/jingdong/jd.vue")
          }
        ]
      },
      //分类
      {
        path: '/Classify',
        name: 'Classify',
        component: () => import("../views/leftward/index.vue"),
        children:[
          {
            path:'/Classify',
            name:'Classify',
            component:()=>import("../views/leftward/commodity/classIfy/Classify.vue"),
            children:[
              {
                path:'/Classify',
                name:'Classify',
                component:()=>import("../views/leftward/commodity/classIfy/stair/stair.vue")
              },
              {
                path:'/Classify/mobile',
                name:'mobile',
                component:()=>import("../views/leftward/commodity/classIfy/stair/mobile.vue")
              },
              {
                path:'/Classify/three',
                name:'three',
                component:()=>import("../views/leftward/commodity/classIfy/stair/three.vue")
              }
            ]
          }
        ]
      },
      //商品库存
      {
        path:'/repertory',
        name:'repertory',
        component:()=>import("../views/leftward/commodity/repertory/repertory.vue")
      },
      {
        path: '/List',
        name: 'List',
        component: () => import("../views/leftward/shop/list.vue")
      },
      {
        path: '/Ding',
        name: 'Ding',
        component: () => import("../views/leftward/shop/order.vue")
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/leftward/member/member.vue")
      },
      {
        path: '/management',
        name: 'management',
        component: () => import("../views/leftward/supplier/list.vue")
      },
      {
        path: "/Supplier-order",
        name: 'Supplier-order',
        component: () => import("../views/leftward/supplier/Supplier-order.vue")
      },
      {
        path: "/gathering",
        name: 'gathering',
        component: () => import("../views/leftward/finance/gathering.vue")
      },
      {
        path: "/refund",
        name: "refund",
        component: () => import("../views/leftward/finance/refund.vue")
      },
      {
        path: "/balance",
        name: 'balance',
        component: () => import("../views/leftward/finance/balance.vue")
      },
      {
        path: "/discounts",
        name: 'discounts',
        component: () => import("../views/leftward/marketing/discounts.vue")
      },
      {
        path: "/content",
        name: "content",
        component: () => import("../views/leftward/administration/content.vue")
      },
      {
        path: "/fitment",
        name: 'fitment',
        component: () => import("../views/leftward/administration/fitment.vue")
      },
      {
        path: "/location",
        name: "location",
        component: () => import("../views/leftward/system/location.vue")
      },
      {
        path: "/information",
        name: "information",
        component: () => import("../views/leftward/system/information.vue")
      }


    ]
  },




]

const router = new VueRouter({
  routes
})

export default router
