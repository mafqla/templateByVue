// pages/index/index.js
import { getUsers } from '../../api/users'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nick: 'test',
    user: [],
    bodys:[
      {id:1,name:'rains'},
      {id:2,name:'sun'},
    ],
    query:{
      page: 1,
    }
  },
  gotoAbout(){
    // 跳转页面
    wx.navigateTo({
      url: '/pages/about/about'
    })
    // 页面重定向
    wx.redirectTo({
      url: '/pages/about/about',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getUsers(this.data.query).then(res=>{
      const users = res.data.data
      this.setData({
        users,
      })
    })
    console.log(this.data.name)
    console.log(this.data.age)
    wx.setStorageSync('token', 'achens')
    // // 修改 data
    // this.setData({
    //   name: 'test',
    //   age: '19'
    // }),
    // 修改 data
    this.setData({
      name: 'test2',
      age: '29'
      // 对修改后数据、页面进行操作
    }, () => {
      // ...
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})