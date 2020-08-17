<template>
    <div>
    <el-table
            :data="tableData"
            border
            style="width: 70%">
        <el-table-column
                fixed
                prop="id"
                label="编号"
                >
        </el-table-column>
        <el-table-column
                prop="name"
                label="书名"
                >
        </el-table-column>
        <el-table-column
                prop="author"
                label="作者"
                >
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                >
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="prev, pager, next"
            :page-size="3"
            :total=total
            @current-change="page">
    </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                axios.get('http://localhost:8081/book/findAll/'+currentPage+'/3').then((resp) => {
                    this.tableData = resp.data.content

                    this.total = resp.data.totalElements
                })
            }
        },

        created(){
            axios.get('http://localhost:8081/book/findAll/1/3').then((resp) => {
                this.tableData = resp.data.content

                this.total = resp.data.totalElements
            })
        },

        data() {
            return {
                total:null,
                tableData: null
            }
        }
    }
</script>

<style scoped>

</style>