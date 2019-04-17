(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),r=n(48),l=(n(20),n(46));var s=function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("h2",null,c.a.createElement("li",null,c.a.createElement(l.a,{to:"/"},"HOME")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/school"},"SCHOOL")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/instructor"},"INSTRUCTOR")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/student"},"STUDENT")))))},u=n(49),i=n(47),h=n(50),d=n(17);var m=function(){return"HOME ++++"},p=n(3),E=n.n(p),f=n(6),v=n(9),j=n(10),b=n(15),k=n(11),I=n(16),O=n(7),y=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(k.a)(t).call(this,e))).emptlySchool={schoolId:"",schoolPhone:"",schoolAddress:"",schoolName:""},n.handleClickEdit=n.handleClickEdit.bind(Object(O.a)(Object(O.a)(n))),n.state={isLoading:!0,selected:!1,update:!1,addSchool:!1,schools:[],selectedSchool:[]},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/api/school",{mode:"no-cors",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("BODY : "+n),this.setState({schools:n,isLoading:!1,update:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleClickEdit",value:function(){var e=Object(f.a)(E.a.mark(function e(t){var n=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("http://localhost:8080/api/school/{schoolId}",{mode:"no-cors",method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(f.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,t.json();case 3:e.t1=e.sent,e.t2={update:!0,addSchool:!1,selectedSchool:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(f.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t+" is deleted. "),e.next=3,fetch("http://localhost:8080/api/school/".concat(t),{mode:"no-cors",method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){window.location.reload()});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state;return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"School Name"),c.a.createElement("th",{scope:"col"},"School Address"),c.a.createElement("th",{scope:"col"},"School Phone"),c.a.createElement("th",{scope:"col",colspan:"3"},"Settings"))),c.a.createElement("tbody",null,t.map(function(n){return c.a.createElement("tr",{id:t.schoolId},c.a.createElement("td",null,n.schoolName," "),c.a.createElement("td",null,n.schoolAddress),c.a.createElement("td",null,n.schoolPhone),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.handleClickAdd(n.schoolId)}}," Add ")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.handleClickEdit(n.schoolId)}}," Edit ")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.remove(n.schoolId)}}," Delete ")))})))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(k.a)(t).call(this,e))).state={isLoading:!1,addInstructor:!1,instructors:[],selectedInstructor:[]},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/instructor",{mode:"no-cors",method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.setState({instructors:t.instructors,isLoading:!1})})}},{key:"handleClickEditInstructors",value:function(){var e=Object(f.a)(E.a.mark(function e(t){var n,a=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t+" instructor ID"),e.next=3,fetch("http://localhost:8080/api/instructor/".concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=n.json();a.setState({selectedInstructor:e,addInstructor:!0})});case 3:n=e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"removeInstructor",value:function(){var e=Object(f.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t+" is deleted."),e.next=3,fetch("http://localhost:8080/api/instructor/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){window.location.reload()});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.instructors;return c.a.createElement("table",{class:"table table-dark"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Instructors Name"),c.a.createElement("th",{scope:"col"},"Instructors Surname"),c.a.createElement("th",{scope:"col"},"Instructors Branch"),c.a.createElement("th",{scope:"col"},"Instructors Age"),c.a.createElement("th",{scope:"col"},"Instructors Phone"),c.a.createElement("th",{scope:"col"},"Instructors School"),c.a.createElement("th",{scope:"col",colSpan:"3"},"Settings"))),c.a.createElement("tbody",null,t.map(function(t){return c.a.createElement("tr",{id:t.instructorId},c.a.createElement("td",null,t.instructorName," "),c.a.createElement("td",null,t.instructorSurname," "),c.a.createElement("td",null,t.instructorBranch),c.a.createElement("td",null,t.instructorAge),c.a.createElement("td",null,t.instructorPhone),c.a.createElement("td",null,t.instructorSchoolName),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.handleClickAddInstructor(t.instructorId)}}," Add ")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.handleClickEditInstructors(t.instructorId)}}," Edit ")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.removeInstructor(t.instructorId)}}," Delete ")))})))}}]),t}(a.Component);var S=function(){return"STUDENT ////"};var w=Object(h.a)(function(){return c.a.createElement("div",null,c.a.createElement(d.TransitionGroup,null,c.a.createElement(d.CSSTransition,{timeout:{enter:300,exit:300}},c.a.createElement("section",{className:"route-section"},c.a.createElement(u.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:function(){return c.a.createElement(m,null)}}),c.a.createElement(i.a,{exact:!0,path:"/home",component:function(){return c.a.createElement(m,null)}}),c.a.createElement(i.a,{exact:!0,path:"/school",component:function(){return c.a.createElement(y,null)}}),c.a.createElement(i.a,{exact:!0,path:"/instructor",component:function(){return c.a.createElement(C,null)}}),c.a.createElement(i.a,{exact:!0,path:"/student",component:function(){return c.a.createElement(S,null)}}))))))});Object(o.render)(c.a.createElement(function(){return c.a.createElement(r.a,null,c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement("div",{id:"styles"},c.a.createElement(w,null))))},null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d913e733.chunk.js.map