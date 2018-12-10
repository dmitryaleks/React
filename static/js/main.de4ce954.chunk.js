(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),i=n.n(l),o=(n(22),n(8)),s=n(2),u=n(3),c=n(7),d=n(4),p=n(6),m=n(5),h=n.n(m),f=(n(43),"http://localhost:8080");function E(e){return r.a.createElement("option",{value:e.instr_code},e.instr_code)}document.title="Trading Dashboard";var v=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.orderid),r.a.createElement("td",null,this.props.timestamp),r.a.createElement("td",null,this.props.instrument),r.a.createElement("td",null,this.props.side),r.a.createElement("td",null,this.props.quantity),r.a.createElement("td",null,this.props.price),r.a.createElement("td",null,this.props.quantity_filled),r.a.createElement("td",null,this.props.fill_price),r.a.createElement("td",{id:"order_status"},this.props.status),r.a.createElement("td",{id:"order_notes"},this.props.notes),r.a.createElement("td",{id:"order_cancel",onClick:function(){return e.cancelOrder(e.props.orderid)}},r.a.createElement("a",{href:"#"},"Cancel")))}},{key:"cancelOrder",value:function(e){var t=this;h.a.post(f+"/order/delete",{orderID:this.props.orderid}).then(function(e){return t.props.updateView()})}}]),t}(r.a.Component),b=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.tradeid),r.a.createElement("td",null,this.props.timestamp),r.a.createElement("td",null,this.props.orderid),r.a.createElement("td",null,this.props.quantity),r.a.createElement("td",null,this.props.price))}}]),t}(r.a.Component),g=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(c.a)(this,Object(d.a)(t).call(this,e)),console.log(e),n.state={inputValue:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("label",{id:"lab",for:"in"},this.props.input_name,": "),r.a.createElement("br",null),r.a.createElement("input",{id:this.props.tag,className:"input_order",value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},onBlur:function(t){return e.submitInputValue(t)}}))}},{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"submitInputValue",value:function(e){this.props.onInputUpdate(this.props.tag,e.target.value)}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={instruments:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getInstruments()}},{key:"getInstruments",value:function(){var e=this;h.a.get(f+"/instruments").then(function(t){console.log(t.data),console.log(t.data.length);var n=t.data;e.setState({instruments:n}),e.props.onInputUpdate(e.props.tag,e.state.instruments[0].InstrCode)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("label",{id:"lab",for:"sel"},"Instrument: "),r.a.createElement("br",null),r.a.createElement("select",{id:"sel",value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},onBlur:function(t){return e.submitInputValue(t)}},this.state.instruments.map(function(e){return r.a.createElement(E,{instr_code:e.InstrCode})})))}},{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"submitInputValue",value:function(e){this.props.onInputUpdate(this.props.tag,e.target.value)}}]),t}(r.a.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={orders:[],trades:[],ord_props:{}},e.handleClick=e.handleClick.bind(Object(o.a)(Object(o.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onNewOrderUpdate",value:function(e,t){var n=this.state.ord_props;n[e]=t,console.log("onNewOrderUpdate: "+e+":"+t),this.setState({ord_props:n})}},{key:"componentDidMount",value:function(){this.refreshData()}},{key:"refreshData",value:function(){this.getOrders(),this.getTrades()}},{key:"getOrders",value:function(){var e=this;h.a.get(f+"/order").then(function(t){console.log(t.data),console.log(t.data.length);var n=t.data;e.setState({orders:n.reverse()})})}},{key:"getTrades",value:function(){var e=this;h.a.get(f+"/trade").then(function(t){console.log(t.data),console.log(t.data.length);var n=t.data;e.setState({trades:n.reverse()})})}},{key:"handleClick",value:function(){var e=this;console.log("Price: "+this.state.ord_props.price),h.a.post(f+"/order/add",{instCode:this.state.ord_props.instcode,quantity:this.state.ord_props.quantity,price:this.state.ord_props.price,notes:this.state.ord_props.notes,side:this.state.ord_props.side}).then(function(t){console.log(t),e.refreshData()},function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{id:"title"},"Order entry"),r.a.createElement(O,{onInputUpdate:function(t,n){return e.onNewOrderUpdate(t,n)},tag:"instcode"}),r.a.createElement(g,{onInputUpdate:function(t,n){return e.onNewOrderUpdate(t,n)},input_name:"Side",tag:"side"}),r.a.createElement(g,{onInputUpdate:function(t,n){return e.onNewOrderUpdate(t,n)},input_name:"Quantity",tag:"quantity"}),r.a.createElement(g,{onInputUpdate:function(t,n){return e.onNewOrderUpdate(t,n)},input_name:"Price",tag:"price"}),r.a.createElement(g,{onInputUpdate:function(t,n){return e.onNewOrderUpdate(t,n)},input_name:"Notes",tag:"notes"}),r.a.createElement("button",{className:"button",id:"btn_send_order",onClick:this.handleClick},"Send order")),r.a.createElement("ul",null,r.a.createElement("div",{className:"mainBlock"},r.a.createElement("div",{className:"floatLeft"},r.a.createElement("h1",{id:"title"},"Orders"),r.a.createElement("table",{id:"orders"},r.a.createElement("tr",null,r.a.createElement("th",null,"Order ID"),r.a.createElement("th",null,"Timestamp"),r.a.createElement("th",null,"Instrument"),r.a.createElement("th",null,"Side"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Filled Quantity"),r.a.createElement("th",null,"Fill Price"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Notes"),r.a.createElement("th",null,"Action")),this.state.orders.map(function(t){return r.a.createElement(v,{orderid:t.OrderID,timestamp:t.Timestamp,instrument:t.InstrCode,side:t.Side,quantity:t.Quantity,price:t.Price,quantity_filled:t.QuantityFilled,fill_price:t.FillPrice,status:t.Status,notes:t.Notes,updateView:function(){return e.refreshData()}})}))),r.a.createElement("div",{className:"floatRight"},r.a.createElement("h1",{id:"title"},"Trades"),r.a.createElement("table",{id:"orders"},r.a.createElement("tr",null,r.a.createElement("th",null,"Trade ID"),r.a.createElement("th",null,"Timestamp"),r.a.createElement("th",null,"Order ID"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price")),this.state.trades.map(function(e){return r.a.createElement(b,{tradeid:e.TradeID,timestamp:e.Timestamp,orderid:e.OrderID,quantity:e.Quantity,price:e.Price})}))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.de4ce954.chunk.js.map