<template>
	<div class="g-mnc box">
		<el-form :model="formData" :inline="true" :rules="rules" ref="formData" class="demo-ruleForm">
			<el-form-item label="文章名称" prop="title">
				<el-input v-model="formData.title" clearable></el-input>
			</el-form-item>
			<el-form-item label="分类" prop="classification">
				<el-select v-model="formData.classification" placeholder="请选择活动区域">
					<el-option label="区域一" value="1"></el-option>
					<el-option label="区域二" value="2"></el-option>
				</el-select>
			</el-form-item>
			<div class="layui-form layui-form-pane">
				<div class="layui-form-item layui-form-text">
					<div class="layui-input-block">
						<textarea id="desc" v-model="formData.article" name="desc" style="display: none;"
								  placeholder="请输入内容" class="layui-textarea"></textarea>
					</div>
				</div>
			</div>
			<el-form-item>
				<el-button type="primary" @click="submitForm('formData')" :loading="loading">发表</el-button>
				<el-button @click="resetForm('formData')">重置</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {axiosPost, sessionData} from '../../common/common';
	import urls from '../../common/urls';

	export default {
		name: 'App',
		data() {
			return {
				defaultDate: new Date(),
				layedit: "",
				text: "",
				itemData: "",
				formData: {
					title: "",
					article: "",
					classification: ""
				},
				rules: {
					title: [
						{required: true, message: '请输入文章标题', trigger: 'blur'},
						{min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
					],
					classification: [
						{required: true, message: '请选择分类', trigger: 'change'}
					]
				},
				loading: false
			}
		},
		components: {},
		mounted() {
			this.itemData = JSON.parse(this.$route.params.blogInfo);

			Object.assign(this.formData, this.itemData);
			console.log(this.formData)

			this.$nextTick(function () {
				this.layedit = layui.layedit;
				var form = layui.form;
				this.text = this.layedit.build('desc', {
					height: "500" //设置编辑器高度
				}); //建立编辑器
				form.render(); //更新全部
			})
		},
		methods: {
			submitForm(formName) {
				if (this.loading) {
					return;
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.loading = true;
						this.formData.article = this.layedit.getContent(this.text);
						this.formData.id = this.itemData.id;

						axiosPost(urls.updateBlog, this.formData).then(json => {
							if (json.code == 200) {
								this.$message({
									message: '发表成功',
									type: 'success',
									onClose: function () {
										vm.loading = false;
										vm.$router.push({name: 'index'});
									}
								});
							} else {
								this.loading = false;
								this.$message.error('发表失败');
							}
						}).catch(err => {
							this.$message.error('发表失败');
							this.loading = false;
							console.log('ajax err', err);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.formData.article = "";
				this.$refs[formName].resetFields();
			}
		}

	}
</script>
<style lang="scss" scoped>
	.g-mnc {

	}

</style>