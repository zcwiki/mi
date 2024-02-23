// 主标题，副标题
const title = ["", "终成米表"]
const pageTip = "<div style='text-align: center'>QQ：635161045</div>"
const hotModels = ['lanxing.net', 'website.ren', 'g.hl.cn', 'email.sn.cn'];
// 绿色：#92D050， 黄色：#E6A23C， 蓝色：#0071e3
const Data = [
    {
        id: "aliyun",
        name: "阿里云",
        tips: "阿里云aliyun.com域名均是一口价严选，建议联系QQ：635161045带价PUSH价格更低",
        models: [
            {name: "eth.xin[25-12-26]", tips: "【在售】以太坊 议价", color: "#92D050"},
            {name: "blockchain.xin[27-12-13]", tips: "【在售】区块链 议价", color: "#92D050"},
            {name: "blog.sn.cn[25-06-03]", tips: "【在售】博客 议价", color: "#92D050"},
            {name: "chinabeta.cn[24-12-21]", tips: "【在售】中国测试 议价", color: "#92D050"},
            {name: "lanxing.net[25-05-27]", tips: "【在售】揽星、蓝星 议价", color: "#92D050"},
            {name: "g.hl.cn[25-08-09]", tips: "【在售】省级单字符 议价", color: "#92D050"},
            {name: "website.ren[25-12-28]", tips: "【在售】website网站 230￥", color: "#92D050"},
            {name: "weibo.show[24-04-30]", tips: "【在售】微博秀 150￥", color: "#92D050"},
            {name: "h-5.cn[2025-02-05]", tips: "【在售】Html5 150￥", color: "#92D050"},
			{name: "about.net.cn[24-03-25]", tips: "【在售】about关于 230￥", color: "#92D050"},
            {name: "blockchain.网络[24-03-21]", tips: "【在售】区块链网络 150￥", color: "#92D050"},
            {name: "ziwl.cn[24-09-19]", tips: "【在售】四字母cn 150￥", color: "#92D050"},
			{name: "icp.email[24-01-24]", tips: "【预定】ICP 230￥", color: "#E6A23C"},
			{name: "moss.kim[24-02-21]", tips: "【在售】moss流浪地球 150￥", color: "#92D050"},
			{name: "web5.wang[24-03-06]", tips: "【在售】web5 288￥", color: "#92D050"},
            {name: "blockchain.ac.cn", tips: "【已售】区块链", color: "#D80000"},
            {name: "maimila.com", tips: "【已售】卖米啦、买米啦", color: "#D80000"},
            {name: "shouzha.net", tips: "【已售】手札", color: "#D80000"},
			{name: "wifi.icu", tips: "【已售】WiFi无线网", color: "#D80000"},
            {name: "city.kim", tips: "【已售】city城市", color: "#D80000"},
        ]
    },
    {
        id: "west",
        name: "西部数码",
        tips: "西部数码所有域名均可在官网查询购买，也可联系QQ：635161045 砍价",
        models: [
            {name: "email.sn.cn[24-10-26]", tips: "【在售】电子邮箱 议价", color: "#92D050"},
            {name: "wordpress.wang[24-12-03]", tips: "【在售】WordPress 议价", color: "#92D050"},
            {name: "ido.pw[24-07-21]", tips: "【在售】ido我愿意 议价", color: "#92D050"},
            {name: "metai.site[24-02-07]", tips: "【在售】meta ai 20￥", color: "#92D050"},
			{name: "zc.cyou[24-02-10]", tips: "【在售】两字符 66￥", color: "#92D050"}, 
            {name: "blockchain.xz.cn", tips: "【已售】区块链", color: "#D80000"}, 
			{name: "aigc.cn.com", tips: "【已售】AIGC人工智能创作", color: "#D80000"}, 
			{name: "3w.fan", tips: "【已售】3w", color: "#D80000"}, 
			{name: "alibaba.bond", tips: "【已售】alibaba阿里巴巴", color: "#D80000"}, 
			{name: "west.ren", tips: "【已售】west西方、西部", color: "#D80000"}, 
			{name: "ernie.wang", tips: "【已售】Ernie 文心一言", color: "#D80000"}, 
			{name: "web3.organic", tips: "【已售】web3", color: "#D80000"}, 
        ]
    },
    {
        id: "tcloud",
        name: "腾讯云",
        tips: "腾讯云cloud.tencent.com域名需要联系QQ：635161045 提交push",
        models: [
			{name: "copyright.wang", tips: "【已售】copyright版权网", color: "#D80000"},
        ]
    },
	{
        id: "netim",
        name: "netim",
        tips: "netim.com",
		models: [
            {name: "china.ga[24-06-07]", tips: "【在售】中国 议价", color: "#92D050"},
        ]
    },
	{
        id: "Regery",
        name: "Regery",
        tips: "Regery.com",
		models: [
            {name: "qinai.de", tips: "【在售】亲爱的 议价", color: "#92D050"},
        ]
    },
    {
        id: "quyu",
        name: "趣域",
        tips: "趣域quyu.net。QQ：635161045",
		models: [
            {name: "blockchain.cn.com[24-03-03]", tips: "【在售】区块链 议价", color: "#92D050"},
            {name: "web3.cn.com[26-01-31]", tips: "【在售】Web3 web3.com.cn建站 议价", color: "#92D050"},
            {name: "dao.pm", tips: "【已售】DAO", color: "#D80000"},
            {name: "web3.md", tips: "【已售】Web3", color: "#D80000"},
        ]
    },
    {
        id: "google",
        name: "谷歌",
        tips: "谷歌domains.google.com。QQ：635161045",
		models: [
            {name: "url.moda[24-07-03]", tips: "【在售】URL链接 议价", color: "#92D050"},
            {name: "wechat.boo[24-07-16]", tips: "【在售】议价", color: "#92D050"},
        ]
    },
    {
        id: "ddd",
        name: "DDD",
        tips: "ddd.com联系QQ：635161045 支持站内push",
        models: [
            {name: "2.cymru", tips: "【已售】单字符", color: "#D80000"},
        ]
    },
	{
        id: "GoDaddy",
        name: "GoDaddy",
        tips: "狗爹godaddy.com联系QQ：635161045 支持站内push",
		models: [
            {name: "t.phd", tips: "【已售】单字符", color: "#D80000"},
        ]
    },
	{
        id: "spaceship",
        name: "Spaceship",
        tips: "spaceship.com",
		models: [
            {name: "blog.cfd[24-07-11]", tips: "【已售】博客", color: "#92D050"},
            {name: "domain.taxi", tips: "【已售】域名出租车", color: "#D80000"},
        ]
    },
	{
        id: "truehost",
        name: "Truehost",
        tips: "truehost.com",
		models: [
            {name: "loli.design[25-01-22]", tips: "【在售】萝莉 议价", color: "#92D050"},
        ]
    },
	{
        id: "huoshan",
        name: "火山引擎",
        tips: "火山引擎volcengine.com是抖音旗下的云服务商，新网xinnet提供域名注册服务",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "jm",
        name: "聚名",
        tips: "聚名juming.com域名可以直接在官网一口价查询购买",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "xinnet",
        name: "新网",
        tips: "新网xinnet.com",
		models: [
            {name: "zceee.com", tips: "【已售】", color: "#D80000"},
        ]
    },
    {
        id: "22",
        name: "爱名",
        tips: "爱名网22.cn可以直接在线查询购买",
		models: [
			{name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "porkbun",
        name: "Porkbun",
        tips: "Porkbun猪肉包porkbun.com",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
]
