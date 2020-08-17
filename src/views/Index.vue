<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <!--el-aside是左侧的-->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--menu是左侧里面的内容-->
                <!--default-openeds是默认展开菜单，通过菜单的index值来关联，此处数组里没有写2,所以默认不展开2-->
                <!--default-active是默认选中-->
                <!--<el-menu :default-openeds="['1', '3']" :default-active="'1-1'">-->
                <!--&lt;!&ndash;左侧菜单1&ndash;&gt;-->
                <!--&lt;!&ndash;el-submenu可展开的菜单 常用属性index必须是文本类型，不能是数值类型&ndash;&gt;-->
                <!--<el-submenu index="1">-->
                <!--&lt;!&ndash;template是el-submenu的名字  i标签是设置图标的&ndash;&gt;-->
                <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
                <!--&lt;!&ndash;el-menu-item不可再展开的子节点，常用属性也是index&ndash;&gt;-->
                <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-submenu>-->
                <!--&lt;!&ndash;左侧菜单2&ndash;&gt;-->
                <!--<el-submenu index="2">-->
                <!--<template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
                <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                <!--</el-submenu>-->
                <!--&lt;!&ndash;左侧菜单3&ndash;&gt;-->
                <!--<el-submenu index="3">-->
                <!--<template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
                <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
                <!--</el-submenu>-->
                <!--</el-menu>-->

                <el-menu router :default-openeds="['0', '1']">
                    <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
                        <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
                        <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
                                      :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>