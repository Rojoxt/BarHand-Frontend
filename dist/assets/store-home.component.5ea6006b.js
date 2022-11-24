import{P as _}from"./products-api.service.b447a150.js";import{S as h}from"./stores-api.service.8f1ca66e.js";import{_ as v,E as b,h as i,j as g,k as S,q as e,l as c,m as l,F as f,v as a,A as x,B as P,C as k}from"./index.eefdc7f8.js";import"./http-common.12b2197e.js";const w={name:"store-home.component",data(){return{id:Number,searchProduct:"",products:[],productService:null,storeData:{},storesService:null,responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"600px",numVisible:2,numScroll:2},{breakpoint:"550px",numVisible:1,numScroll:1}]}},created(){const t=b();this.id=t.params.id,this.getBestProduct(),this.getStoreById(this.id)},methods:{viewProducts(){this.$router.push({name:"view-all-products",params:{search:this.searchProduct}})},getBestProduct(){this.productService=new _,this.productService.getAll().then(t=>{this.products=t.data,this.products=this.products.filter(o=>String(o.rating)==="5")})},getStoreById(t){this.storesService=new h,this.storesService.getById(t).then(o=>{this.storeData=o.data}),console.log("created")},getProduct(t){this.$router.push({name:"product-view",params:{pId:t}})}}},y=t=>(P("data-v-fe6e06ff"),t=t(),k(),t),B={class:"p-inputgroup"},V={style:{"font-size":"20px"}},I={class:"card"},C=y(()=>e("div",{class:"col-5"},[e("h1",{style:{"background-color":"#457b9d",color:"white",padding:"10px","border-radius":"5px"}},"Best products sales:")],-1)),D={class:"product-item"},N={class:"product-item-content"},A={class:"mb-3"},O=["src","alt"],H={class:"mb-1"},E={class:"mt-0 mb-3"},F={class:"car-buttons mt-5"};function j(t,o,q,z,r,p){const n=i("pv-button"),d=i("pv-input-text"),u=i("pv-card"),m=i("pv-carousel");return g(),S(f,null,[e("div",B,[c(n,{icon:"pi pi-search",onClick:o[0]||(o[0]=s=>p.viewProducts())}),c(d,{placeholder:"Search product",modelValue:r.searchProduct,"onUpdate:modelValue":o[1]||(o[1]=s=>r.searchProduct=s),class:"search"},null,8,["modelValue"])]),c(u,{class:"homeCard"},{title:l(()=>[e("h1",null,"Hello "+a(r.storeData.name)+" "+a(r.storeData.lastName),1),e("p",V,[x("We are happy to continue working with "),e("b",null,a(r.storeData.storeName),1)])]),_:1}),e("div",I,[c(m,{value:r.products,numVisible:5,numScroll:1,responsiveOptions:r.responsiveOptions,class:"custom-carousel",circular:!0,autoplayInterval:3e3},{header:l(()=>[C]),item:l(s=>[e("div",D,[e("div",N,[e("div",A,[e("img",{src:s.data.image,alt:s.data.name,class:"product-image"},null,8,O)]),e("div",null,[e("h4",H,a(s.data.name),1),e("h6",E,"$"+a(s.data.price),1),e("span",null,a(s.data.available),1),e("div",F,[c(n,{onClick:R=>p.getProduct(s.data.id),icon:"pi pi-search",class:"p-button p-button-rounded mr-2"},null,8,["onClick"]),c(n,{icon:"pi pi-star-fill",class:"p-button-success p-button-rounded mr-2"}),c(n,{icon:"pi pi-cog",class:"p-button-help p-button-rounded"})])])])])]),_:1},8,["value","responsiveOptions"])])],64)}const J=v(w,[["render",j],["__scopeId","data-v-fe6e06ff"]]);export{J as default};
