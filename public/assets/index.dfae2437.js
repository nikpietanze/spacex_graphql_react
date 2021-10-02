import{j as u,h as b,c as h,L as m,g as p,Q as f,u as x,A as L,a as k,B as v,R as g,b as R,d as D}from"./vendor.e8bfa0da.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=l(r);fetch(r.href,c)}};A();var M="/assets/spacex_logo.f2aacc0b.png";const e=u.exports.jsx,s=u.exports.jsxs,d=u.exports.Fragment;function Y(){return s("div",{className:"my-3",children:[s("p",{children:[e("span",{className:"px-3 me-2 bg-success"})," = Success"]}),s("p",{children:[e("span",{className:"px-3 me-2 bg-danger"})," = Fail"]})]})}function j({launch:n}){const t=b(n.launch_date_local).format("YYYY-MM-DD HH:mm");return e("div",{className:"card card-body mb-3",children:s("div",{className:"row",children:[s("div",{className:"col-md-9",children:[s("h4",{children:["Mission:"," ",e("span",{className:h({"text-success":n.launch_success,"text-danger":!n.launch_success}),children:n.mission_name})]}),s("p",{children:["Date: ",t]})]}),e("div",{className:"col-md-3",children:e(m,{to:`/launch/${n.flight_number}`,className:"btn btn-primary",children:"Launch Details"})})]})})}const q=p`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;function I(){return s(d,{children:[e("h1",{className:"display-4 my-3",children:"Launches"}),e(Y,{}),e(f,{query:q,children:({loading:n,error:t,data:l})=>n?e("h4",{children:"Loading..."}):(t&&console.error(t),e(d,{children:l.launches.map(a=>e(j,{launch:a},a.flight_number))}))})]})}const Q=p`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`;function S(){let{flight_number:n}=x();return n=parseInt(n),e(d,{children:e(f,{query:Q,variables:{flight_number:n},children:({loading:t,error:l,data:a})=>{if(t)return e("h4",{children:"Loading..."});l&&console.error(l);const{flight_number:r,mission_name:c,launch_year:i,launch_success:o,rocket:{rocket_id:_,rocket_name:y,rocket_type:N}}=a.launch;return s("div",{children:[e("h1",{className:"display-4 my-5 text-center",children:s("span",{className:"text-dark",children:["Mission: ",c]})}),e("h4",{className:"mb-3",children:"Launch Details"}),s("ul",{className:"list-group",children:[s("li",{className:"list-group-item",children:["Flight Number: ",r]}),s("li",{className:"list-group-item",children:["Launch Year: ",i]}),s("li",{className:"list-group-item",children:["Launch Successful:"," ",e("span",{className:h({"text-success":o,"text-danger":!o}),children:o?"Yes":"No"})]})]}),e("h4",{className:"my-3",children:"Rocket Details"}),s("ul",{className:"list-group",children:[s("li",{className:"list-group-item",children:["Rocket ID: ",_]}),s("li",{className:"list-group-item",children:["Rocket Name: ",y]}),s("li",{className:"list-group-item",children:["Rocket Type: ",N]})]}),e("hr",{}),e(m,{to:"/",className:"btn btn-primary",children:"Back"})]})}})})}const w=new L({uri:"/graphql"});function E(){return e(k,{client:w,children:e(v,{children:s("div",{className:"container",children:[e("img",{src:M,alt:"SpaceX",style:{width:"100%",maxWidth:300,display:"block",margin:"auto"}}),e(g,{exact:!0,path:"/",children:e(I,{})}),e(g,{exact:!0,path:"/launch/:flight_number",children:e(S,{})})]})})})}R.render(e(D.StrictMode,{children:e(E,{})}),document.getElementById("root"));
