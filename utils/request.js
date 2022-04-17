// 封装请求
export default function(options){
	return new Promise((resolve, reject) => {
    const reqOptions = {
      ...options,
      success: res => resolve(res),
      fail: err => reject(err)
    }
    const token = wx.getStorageSync('token')
    if(token){
      reqOptions.header.Authorization = `Bearer ${token}`
    }
  	wx.request(reqOptions)
  })
}