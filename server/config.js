const CONF = {
  port: '5757',
  rootPathname: '',

  qcloudAppId: '个人申请',
  qcloudSecretId: '个人申请',
  qcloudSecretKey: '个人申请',


  // 微信小程序 App ID
  appId: '个人申请',

  // 微信小程序 App Secret
  appSecret: '个人申请',

  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: true,

  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: '个人申请',
    char: 'utf8mb4'
  },

  cos: {
    /**
     * 地区简称
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    region: '个人申请',
    // Bucket 名称
    fileBucket: '个人申请',
    // 文件夹
    uploadFolder: ''
  },

  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'abcdefgh'
}

module.exports = CONF
