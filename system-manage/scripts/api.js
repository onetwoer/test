var showLog=!0,ajaxTimeout=1e4,pageSize=10;!function(){var a=window.CTX||"http://121.40.31.44:8088/",b="api/",c=function(){return+new Date};a=b;var d={getSelectorUsers:a+"/selector-users.json?timestamp="+c(),getRole:a+"role.json?timestamp="+c(),getRoleDetails:a+"role-details.json?timestamp="+c(),saveRole:a+"save.json?timestamp="+c(),getJob:a+"job.json?timestamp="+c(),getJobDetails:a+"job-details.json?timestamp="+c(),saveJob:a+"save.json?timestamp="+c(),getProject:a+"project.json?timestamp="+c(),getProjectDetails:a+"project-details.json?timestamp="+c(),saveProject:a+"save.json?timestamp="+c(),getDept:a+"dept.json?timestamp="+c(),saveDept:a+"save.json?timestamp="+c(),getEmp:a+"emp.json?timestamp="+c(),getEmpDetails:a+"emp-details.json?timestamp="+c(),saveEmp:a+"save.json?timestamp="+c()};window.api=d}();