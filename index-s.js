/**
 *  自定义网站配置 
 */
const config = {
  title: "导航",                 //write your website title
  subtitle: "John Wick", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: false,     /*true or false*/             //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"example.com",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"暂时关闭"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"技术",
      icon:"code",
      list:[
        {
          url:"https://oschina.net/",
          name:"开源中国",
          desc:"程序员集散地"
        },
        {
          url:"https://v2ex.com",
          name:"V2EX",
          desc:"程序员集散地"
        },
        {
          url:"https://csdn.net/",
          name:"CSDN技术社区",
          desc:"程序员集散地"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"程序员集散地"
        },
        {
          url:"https://w3school.com.cn/",
          name:"W3school在线教程",
          desc:"程序员集散地"
        },
        {
          url:"https://runoob.com/",
          name:"菜鸟教程",
          desc:"程序员集散地"
        },
        {
          url:"www.fishc.com",
          name:"鱼C",
          desc:"编程"
        },
        {
          url:"https://www.52pojie.cn/",
          name:"吾爱破解",
          desc:"资源编程"
        },
      ]
    },
    {
      name:"学习",
      icon:"graduation cap",
      list:[
       
        {
          url:"https://www.learnonly.xyz/",
          name:"learnonly",
          desc:"学习导航"
        },
        {
          url:"https://tuostudy.upnb.top/",
          name:"图欧学习导航",
          desc:"学习导航"
        }, 
        {
          url:"https://www.xue8nav.com/",
          name:"学吧导航",
          desc:"学习导航"
        },
        {
          url:"https://www.hifast.cn/xuexi",
          name:"hifast快导航",
          desc:"学习导航"
        },
        {
          url:"https://ixuexila.com/",
          name:"爱学习导航",
          desc:"学习导航"
        },
        {
          url:"https://www.up-6.com/",
          name:"英语学习导航",
          desc:"学习导航"
        },
        {
          url:"https://site.sciping.com/",
          name:"科塔学术",
          desc:"学术导航"
        },
        {
          url:"https://www.ixsdh.com/",
          name:"爱学术导航",
          desc:"学术导航"
        },

      ]
    },

    {
      name:"导航",
      icon:"location arrow",
      list:[
        {
          url:"https://search.chongbuluo.com/",
          name:"虫部落搜索",
          desc:"聚合搜索"
        },
        {
          url:"http://www.lsdhss.com/",
          name:"猎手导航",
          desc:"聚合搜索"
        },
        {
          url:"https://www.xiaolvji.com/",
          name:"效率集",
          desc:"聚合搜索"
        },
        {
          url:"https://www.bxdhz.com/",
          name:"笔芯导航",
          desc:"聚合搜索"
        },
        {
          url:"https://v2fd.com/",
          name:"V2FD",
          desc:"工具导航"
        },
        {
          url:"https://tool.lu/",
          name:"在线工具",
          desc:"工具导航"
        },
        {
          url:"https://www.wanrenmi8.com/cn/index.html",
          name:"万人迷吧",
          desc:"云盘搜索"
        },
       
        {
          url:"http://panother.com/",
          name:"盘他",
          desc:"云盘搜索"
        },

      ]
    },
    {
      name:"传输",
      icon:"arrows alternate vertical",
      list:[
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
      ]
    },
    //待用👇
    /*{
      name:"",
      icon:"",
      list:[
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
        {
          url:"",
          name:"待定",
          desc:"待定"
        },
      ]
    }
    */

  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
/*function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=" + url + "&co=&resource_id=39256";
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=http://" + url + "&co=&resource_id=39256";
  } 
}

//这里改变了获取 favicon 的 URL 地址，使用了百度提供的 API，其中需要传入参数 query 值为 URL 地址，使用 http 或 https 来判断。
/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/essorama/cf-workers-nav"','target="_blank"'],el('i',['class="github icon"'],"") + 'cf-workers-nav') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/essorama/cf-workers-nav@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
