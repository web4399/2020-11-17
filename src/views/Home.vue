<template>
    <el-container class="home">
        <el-header height="100px">
        </el-header>
        <el-main style="background:#F8F8F8">
            <el-container style="height:100%">
                <el-aside width="170px" style="background:#545c64">
                    <el-menu
                        default-active="/"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#2B2E3A"
                        text-color="#ffffff"
                        active-text-color="#ffffff"
                        :unique-opened="false"
                        router 
                       
                    >
                        <component v-for="(item,index) in menuList" :key="index"
                        :index="item.path" :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'">
                            <template slot="title" style="font-size:14px">
                                {{item.name}}
                            </template>
                            <template v-if="item.children&&item.children.length>0">
                                <el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.path">
                                    {{item2.name}}
                                </el-menu-item>
                            </template>
                        </component>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view>
                        
                    </router-view>
                </el-main>
            </el-container>

        </el-main>
    </el-container>

</template>

<script>

export default {
    name:"home",
    data() {
        return {
            menuList:[
				{
					"name":"登陆页",
					"path":"login",
					"index":"1",
                    "children":[
                        {
                        "name":"登陆页",
                        "path":"/login",
                        "index":"1",
                        }   
                    ]
					
				},
				{
					"name":"商品管理","path":"firm","index":"2",
					"children":[
						{
							"name":"店铺商品列表","path":"/main"
						},
						{
							"name":"供应商商品列表","path":"/test"
                        },
                        {
							"name":"商品分类","path":"/Classify"
                        },
                        {
							"name":"商品库存","path":"/repertory"
						},
						{
							"name":"京东商品池","path":"/Jing"
                        },               
                        {
							"name":"供应商商品池","path":"/Distributor"
                        },
                        
					]
				},
				{
					"name":"店铺管理","path":"/List","index":"3",
					'children':[
						{
						"name":"店铺列表","path":"/List"
						},
						{
						"name":"店铺订单","path":"/Ding"
						},
					]
				},
				{
					"name":"会员管理","path":"member","index":"6",
					"children":[
						{
							"name":"会员列表","path":"/member"
						}
					]
				},
				{
                    "name":"供应商","path":"1","index":"7",
                    "children":[
                        {
                            "name":"供应商列表","path":"/management"
                        },
                        {
                            "name":"供应商订单","path":"/Supplier-order"
                        },
                    ]
                    
                }
                ,
				{
                    "name":"财务管理","path":"2","index":"8",
                    "children":[
                        {
                            "name":"应收款","path":"/gathering"
                        },
                        {
                            "name":"退款处理","path":"/refund"
                        },
                        {
                            "name":"京东VCP余额记录","path":"/balance"
                        },
                    ]
                }
                ,
				{
                    "name":"营销活动","path":"3","index":"9",
                    "children":[
                        {
                            "name":"优惠卷","path":"/discounts"
                        },
                        
                    ]
                }
                ,
				{
                    "name":"内容管理","path":"4","index":"10",
                    "children":[
                        {
                            "name":"广告管理","path":"/content"
                        },
                        {
                            "name":"页面装修","path":"/fitment"
                        },
                        
                    ]
                }
                ,
				{
                    "name":"系统设置","path":"5","index":"11",
                    "children":[
                        {
                            "name":"地址管理","path":"/location"
                        },
                        {
                            "name":"消息推送","path":"/information"
                        },
                        
                    ]
				}
			],
        };
    },
    components: {

    },
    created() {
        // console.log(this.$options.name ,111111)
    },
    methods: {
        handleOpen(){},
        handleClose(){}
    }
};
</script>

<style lang='less' scoped>
.home {
    height: 100.1%;
    .el-header{
        background: #383D4A;
    }
    .el-main {
        padding: 0;
        overflow: visible;
    }
    
}
.el-submenu .el-menu-item{
    width: 170px;;
}
</style>