  import { Injectable } from '@angular/core';
  import { Router, ROUTER_DIRECTIVES } from '@angular/router';

  @Injectable()  
  export class PortalLicense {
    constructor(private router: Router) {
      }

    // 驗證登入狀態
	  public checkLogin():void {
      debugger;
      // 無localStorage 切回登入
      if (localStorage.getItem('userinfo') == null ||localStorage.getItem('userinfo').trim() == '') {
       // this.router.navigate(['./login']);
        //window.location.href = '//webapp/login';
         window.location.href = 'http://10.20.3.60/webapp/login';
        
        return ;
      }
      else
      {
           window.location.href = 'http://10.20.3.60/webapp/main';
        
         //  window.location.href = 'http://10.21.11.234:8888/webapp/main/';
         // this.router.navigate(['./main']);
      }
    }
    // 登出
    public logout() {
      localStorage.removeItem('userinfo');
     // this.router.navigate(['./login']);
      window.location.href = 'http://10.20.3.60/webapp/login';
    }
    
  }







    