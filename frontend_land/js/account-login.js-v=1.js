LoginModule=function(){};LoginModule.closePopup=function(){$("form").removeClass("under-login-popup");$(".login-form-container").remove();$(".register-container").remove();$("#backdroplogin").remove()};LoginModule.showLoginForm=function(){if($("#backdroplogin").length===0){$("body").append('<div class="lg-backdrop in" id="backdroplogin" style="transition-duration: 150ms;" onclick="LoginModule.closePopup()"></div>')}$(".lg-backdrop").show();$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>Đăng nhập</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="login-form">';a+='<div class="login-username login-inputtext">';a+="<div><span></span></div>";a+='<input type="text" id="UserName" class="textEntry" placeholder="Tên đăng nhập/Email" />';a+="</div>";a+='<div class="login-err-msg">&#x2716; Tên đăng nhập không được để trống</div>';a+='<div class="login-password login-inputtext">';a+="<div><span></span></div>";a+='<input type="password" id="Password" class="pass-blind" placeholder="Mật khẩu" />';a+='<input type="text" id="Password2" class="pass-visible" placeholder="Mật khẩu" />';a+='<div class="eye-close"></div>';a+='<div class="eye-open"></div>';a+="</div>";a+='<div class="login-err-msg">&#x2716; Mật khẩu không được để trống</div>';a+='<div class="loginerror" ></div>';a+='<button class="login-button" id="btnLogin"><i class="fa fa-spinner fa-spin"></i>Đăng nhập</button>';a+='<div class="login-remember">';a+='<span>&#10003;</span>Nhớ tài khoản<div style="display:none;"><input type="checkbox" id="RememberMe"/></div>';a+="</div>";a+='<div class="login-forget-password">';a+='<a href="#" onclick="LoginModule.showForgetPasswordForm()" rel="nofollow">Quên mật khẩu</a>';a+="</div>";a+='<div class="clear"></div>';a+='<div class="login-or">';a+='<div class="or-left"></div>';a+="Hoặc";a+='<div class="or-right"></div>';a+="</div>";a+='<div class="login-social">';a+='<div class="login-facebook" onclick="LoginModule.loginByFacebook()">';a+='<div class="fa fa-facebook-square"></div>';a+="<span>Đăng nhập qua Facebook</span>";a+='<input type="hidden" id="hddFacebookToken" />';a+="</div>";a+='<div class="login-google">';a+='<div class="fa fa-google-plus-square"></div>';a+='<a href="https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx?type=googlelogin">Đăng nhập qua Google</a>';a+="</div>";a+="</div>";a+="</div>";a+='<div class="clear"></div>';a+='<div class="login-reg">';a+='Chưa phải là thành viên? <a href="#" onclick="LoginModule.showRegistForm()">Đăng ký tài khoản</a>';a+="</div>";a+="</div>";a+="</div>";$("body").append(a);if(!$("form").hasClass("under-login-popup")){$("form").addClass("under-login-popup")}LoginModule.BeginLoginForm()};LoginModule.showChooseAccountTypeForm=function(){$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>Đăng nhập</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="login-form">';a+='<div class="loginerror" style="display:block;">Bạn đang sử dụng 2 tài khoản có thông tin giống nhau, vì vậy hãy chọn 1 tài khoản để tiếp tục đăng nhập.</div>';a+='<div class="login-account-type">';a+='<div><a href="#" onclick="LoginModule.ChooseAccountType(1, this)"><i class="fa fa-spinner fa-spin"></i>Tài khoản cá nhân</a></div>';a+='<div><a href="#" onclick="LoginModule.ChooseAccountType(4, this)"><i class="fa fa-spinner fa-spin"></i>Tài khoản nhân viên</a></div>';a+="</div>";a+="</div>";a+='<div class="clear"></div>';a+="</div>";a+="</div>";$("body").append(a)};LoginModule.showForgetChooseAccountTypeForm=function(){$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>KHÔI PHỤC MẬT KHẨU</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="login-form">';a+='<div class="loginerror" style="display:block;">Bạn đang sử dụng 2 tài khoản có thông tin giống nhau, vì vậy hãy chọn 1 tài khoản để tiếp tục đổi mật khẩu.</div>';a+='<div class="login-account-type">';a+='<div><a href="#" onclick="LoginModule.ForgetChooseAccountType(1, this)"><i class="fa fa-spinner fa-spin"></i>Tài khoản cá nhân</a></div>';a+='<div><a href="#" onclick="LoginModule.ForgetChooseAccountType(4, this)"><i class="fa fa-spinner fa-spin"></i>Tài khoản nhân viên</a></div>';a+="</div>";a+="</div>";a+='<div class="clear"></div>';a+="</div>";a+="</div>";$("body").append(a)};LoginModule.showNotActiveForm=function(b){$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>Đăng nhập</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="login-notactive">';a+="Tài khoản của bạn chưa được kích hoạt! <br/>";a+="Vui lòng kiểm tra email kích hoạt đã được gửi tới địa chỉ email của bạn và làm theo hướng dẫn để hoàn thành việc đăng ký tài khoản. Nếu không tìm thấy email này, bạn vui lòng kiểm tra mục thư rác (Spam).<br />";a+='Click vào <a id="lnkReSendActiveMail" href="#" onclick="LoginModule.resendActiveEmail(\''+b+'\');">đây</a> để gửi lại email kích hoạt tài khoản. Nếu không nhớ mật khẩu, bạn có thể dùng chức năng <a href="#" onclick="LoginModule.showForgetPasswordForm();">khôi phục mật khẩu</a>.';a+="</div >";a+='<div class="clear"></div>';a+='<div class="login-reg">';a+='Chưa phải là thành viên? <a href="#" onclick="LoginModule.showRegistForm()">Đăng ký tài khoản</a>';a+="</div>";a+="</div>";a+="</div>";$("body").append(a)};LoginModule.showRegistForm=function(){var a="";if($("#backdroplogin").length===0){a='<div class="lg-backdrop in" id="backdroplogin" style="transition-duration: 150ms;" onclick="LoginModule.closePopup()"></div>';if($("#ui-datepicker-div").length>0){$("#ui-datepicker-div").before(a)}else{$("body").append(a)}}$(".lg-backdrop").show();$(".register-container").remove();$(".login-form-container").remove();a='<div class="register-container"><div class="registerAccount">';a+="<h1>Đăng ký tài khoản</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="loginerror" style="display:none;"></div>';a+='<div class="row-field">';a+='<div class="field-content">';a+='<input type="text" id="txtUserName" maxlength="64" placeholder="Tên đăng nhập" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<span class="t_red">*</span>';a+='<div id="validateFortxtUserName" class="error-message"></div>';a+="</div>";a+='<div class="row-field">';a+='<div class="field-content">';a+='<input type="text" id="txtPrimaryEmail" maxlength="128" placeholder="Địa chỉ email" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<span class="t_red">*</span>';a+='<div id="validateFortxtPrimaryEmail" class="error-message"></div>';a+="</div>";a+='<div class="row-field">';a+='<div class="field-content content-half" style="margin-right: 10px;">';a+='<input type="password" id="txtPassword" maxlength="64" placeholder="Mật khẩu" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<div class="field-content content-half">';a+='<input type="password" id="txtConfirmPassword" maxlength="64" placeholder="Nhập lại mật khẩu" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<span class="t_red">*</span>';a+='<div id="validateFortxtPassword" class="error-message"></div>';a+='<div id="validateFortxtConfirmPassword" class="error-message"></div>';a+="</div>";a+='<div class="row-field">';a+='<div class="field-content">';a+='<input type="text" id="txtFullname" maxlength="50" placeholder="Tên đầy đủ" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<span class="t_red">*</span>';a+='<div id="validateFortxtFullname" class="error-message"></div>';a+="</div>";a+='<div class="row-field">';a+='<div class="field-content">';a+='<input type="text" id="txtBirthDate" placeholder="Ngày sinh" />';a+="</div>";a+='<div id="validateForBirthDate" class="error-message"></div>';a+="</div>";a+='<div class="row-field">';a+='<div class="field-content reg-gender">';a+='<label for="rdMale"><input type="radio" id="rdMale" name="Gender" checked="checked" /> Nam</label>';a+='<label for="rdFemale"><input type="radio" id="rdFemale" name="Gender" /> Nữ</label>';a+="</div>";a+="</div>";a+='<div class="row-field">';a+='<div class="field-content reg-local">';a+='<div class="adv-control">';a+='<span class="select-text">';a+='<span class="select-text-content">Tỉnh/Thành</span>';a+="</span>";a+='<select id="ddlCities"><option value="">Tỉnh/Thành</option></select>';a+="</div>";a+='<div class="adv-control" style="margin: 0px 5px;">';a+='<span class="select-text">';a+='<span class="select-text-content">Quận/Huyện</span>';a+="</span>";a+='<select id="ddlDistricts"><option value="0">Quận/Huyện</option></select>';a+="</div>";a+='<div class="adv-control">';a+='<span class="select-text">';a+='<span class="select-text-content">Phường/Xã</span>';a+="</span>";a+='<select id="ddlWards"><option value="">Phường/Xã</option></select>';a+="</div>";a+="</div>";a+="</div>";a+='<div class="row-field">';a+='<div class="field-content reg-brokertype">';a+='<label for="rdPersonal"><input type="radio" id="rdPersonal" name="AccountType" checked="checked" /> Cá nhân</label>';a+='<label for="rdEnterprise"><input type="radio" id="rdEnterprise" name="AccountType" /> Công ty</label>';a+="</div>";a+="</div>";a+='<div class="row-field captcha-content">';a+='<div class="field-content">';a+='<input id="hidCaptchaId" type="hidden" value="CAPTCHA_RESULT_314" />';a+='<div class="captcha-text">';a+='<input type="text" id="popupRegist_txtCaptchaToCheck" maxlength="4" placeholder="Nhập mã xác nhận" />';a+='<i class="fa" aria-hidden="true"></i>';a+="</div>";a+='<img id="popupRegist_img_CAPTCHA_RESULT_314" src="https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/Captcha.ashx" alt="" noloaderror="1" />';a+='<dl id="reloadCaptcha" class="fa fa-refresh reloadCapcha" onclick="javascript:refreshNewCaptcha(\'popupRegist_img_CAPTCHA_RESULT_314\');" title="Đổi mã an toàn"></dl>';a+="</div>";a+='<div id="validateFortxtCaptchaToCheck" class="error-message"></div>';a+="</div>";a+='<button id="btnRegister" class="button-register"><i class="fa fa-spinner fa-spin"></i>Đăng ký</button>';a+='<div class="row-field">';a+='<div class="reg-note">';a+="<span>Chú ý:</span> thông tin Tên đăng nhập, email, số điện thoại di động không thể thay đổi sau khi đăng ký.";a+="</div>";a+='<div class="reg-note">';a+='Để được trợ giúp vui lòng liên hệ tổng đài CSKH <a href="tel:19001881">1900 1881</a> hoặc email <a href="mailto:hotro@batdongsan.com.vn">hotro@batdongsan.com.vn</a>';a+="</div>";a+="</div>";a+='<div class="reg-login">';a+='Đã là thành viên? <a href="#" onclick="LoginModule.showLoginForm()">Đăng nhập</a>';a+="</div>";a+="</div></div>";if($("#ui-datepicker-div").length>0){$("#ui-datepicker-div").before(a)}else{$("body").append(a)}if(!$("form").hasClass("under-login-popup")){$("form").addClass("under-login-popup")}if($.datepicker!==undefined){LoginModule.BeginRegistForm()}else{console.log("load datepicker js");writeScript("jquery.bt.js"/*tpa=https://batdongsan.com.vn/Scripts/jquery.bt.js*/,function(){writeScript("jquery.ui.core.js"/*tpa=https://batdongsan.com.vn/Scripts/jquery.ui.core.js*/,function(){writeScript("jquery.ui.datepicker.js"/*tpa=https://batdongsan.com.vn/Scripts/jquery.ui.datepicker.js*/,function(){console.log("load datepicker success");LoginModule.BeginRegistForm()})})})}};LoginModule.showRegistSuccessForm=function(a){$(".register-container").remove();$(".login-form-container").remove();var b='<div class="register-container" style="width: 500px"><div class="registerAccount registSuccess">';b+="<h1>Đăng ký tài khoản</h1>";b+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';b+='<div class="row-field">';b+='<div class="reg-note">';b+="<p>";b+="Đăng ký tài khoản thành công.<br/>Chúng tôi đã gửi một email yêu cầu kích hoạt tài khoản đến email của bạn. Vui lòng kiểm tra email và làm theo hướng dẫn để hoàn thành việc đăng ký tài khoản của bạn.";b+="</p>";b+="<p>";b+="Vui lòng kiểm tra thư mục rác (Spam) nếu không tìm thấy email kích hoạt tài khoản.";b+="</p>";b+='<p>Để được trợ giúp vui lòng liên hệ hotline: <a href="tel:0435625939">043 562 5939</a> - <a href="tel:1900 881">1900 1881</a> hoặc email <a href="mailto:hotro@batdongsan.com.vn">hotro@batdongsan.com.vn</a>';b+="</p>";b+="</div>";b+="</div>";b+='<button class="button-register" onclick="LoginModule.closePopup()">Xong</button>';b+='<div class="reg-login">';b+='Đã là thành viên? <a href="#" onclick="LoginModule.showLoginForm()">Đăng nhập</a>';b+="</div>";b+="</div></div>";$("body").append(b)};LoginModule.showForgetPasswordForm=function(){$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>Khôi phục mật khẩu</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="loginerror"></div>';a+='<div class="login-form">';a+="<label>";a+="Vui lòng nhập email";a+="</label>";a+='<div class="login-inputtext login-email">';a+="<div><span></span></div>";a+='<input type="text" id="txtEmail" placeholder="Nhập email của bạn">';a+="</div>";a+='<div class="login-err-msg" id="txtEmailErrBlank">Vui lòng nhập email</div>';a+='<div class="login-err-msg" id="txtEmailErrorMsg">Bạn vui lòng nhập đúng email</div>';a+="<label>";a+="Vui lòng nhập mã xác nhận";a+="</label>";a+='<div class="login-captcha">';a+="<div>";a+='<input type="text" id="forgetsecode" class="keycode" placeholder="Nhập mã xác nhận" maxlength="4">';a+="</div>";a+='<img id="popupForget_img_CAPTCHA_RESULT_314" class="imgCaptcha" src="https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/Captcha.ashx" alt="">';a+='<dl class="fa fa-refresh reloadCaptcha" aria-hidden="true" id="reloadCaptcha"  onclick="javascript:refreshNewCaptcha(\'popupForget_img_CAPTCHA_RESULT_314\');" title="Đổi mã an toàn" style="cursor: pointer;"></dl>';a+="</div>";a+='<div class="login-err-msg" id="secodeErrorMsg">Bạn vui lòng nhập mã xác nhận</div>';a+='<button class="login-button" id="btnResetPassword"><i class="fa fa-spinner fa-spin"></i>Lấy lại mật khẩu</button>';a+="</div>";a+='<div class="clear"></div>';a+='<div class="login-reg">';a+='Chưa phải là thành viên? <a href="#" onclick="LoginModule.showRegistForm();">Đăng ký tài khoản</a>';a+="</div>";a+="</div>";a+="</div>";$("body").append(a);LoginModule.BeginForgetPasswordForm()};LoginModule.showForgetPasswordSuccessForm=function(){$(".register-container").remove();$(".login-form-container").remove();var a='<div class="login-form-container">';a+='<div class="login">';a+="<h1>Khôi phục mật khẩu</h1>";a+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';a+='<div class="login-notactive">';a+="Thông báo khôi phục mật khẩu đã được gửi đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư đến (hoặc thư rác - spam) và làm theo hướng dẫn.";a+="</div>";a+='<button class="login-button" onclick="LoginModule.closePopup()">Đóng</button>';a+='<div class="clear"></div>';a+='<div class="login-reg">';a+='Chưa phải là thành viên? <a href="#" onclick="LoginModule.showRegistForm();">Đăng ký tài khoản</a>';a+="</div>";a+="</div>";a+="</div>";$("body").append(a)};LoginModule.resendActiveEmail=function(a){$(".register-container").remove();$(".login-form-container").remove();var b='<div class="login-form-container">';b+='<div class="login">';b+="<h1>Đăng nhập</h1>";b+='<i class="fa fa-close" onclick="LoginModule.closePopup();"></i>';b+='<div class="login-notactive" style="text-align: center;">';b+='<i class="fa fa-spinner fa-spin"></i>';b+="</div >";b+='<div class="clear"></div>';b+='<div class="login-reg">';b+='Chưa phải là thành viên? <a href="#" onclick="LoginModule.showRegistForm()">Đăng ký tài khoản</a>';b+="</div>";b+="</div>";b+="</div>";$("body").append(b);$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{type:"resendactivemail",code:a},function(c){if(c!==undefined&&c!=null){if(c.success){$(".login-notactive").html("Email kích hoạt tài khoản đã gửi đến chịa chỉ email của bạn, Bạn hãy kiểm tra hộp thư đến (hoặc cả trong hộp thư rác - spam) và làm theo hướng dẫn. Nếu có bất kỳ câu hỏi nào bạn hãy liên hệ với chúng tôi để được giúp đỡ.");return}}$(".login-notactive").html("Thao tác thất bại. bạn hãy thử lại sau hoặc liên hệ với chúng tôi để được giúp đỡ.")},"json")};LoginModule.SupportPlaceholder=function(a){var c=window.navigator.userAgent;var b=c.indexOf("MSIE ");if(b>0){a.each(function(){$(this).click(function(){if($(this).val()==$(this).attr("placeholder")){$(this).val("")}else{$(this).select()}});$(this).blur(function(){if($(this).val()==""){$(this).val($(this).attr("placeholder"))}});if($(this).val().length==0){$(this).val($(this).attr("placeholder"))}})}};LoginModule.BeginLoginForm=function(){var d=$("#UserName");var b=$("#Password");var c=$("#Password2");var a=$("#RememberMe");$("#hddFacebookToken").val("");b.change(function(){c.val($(this).val())});c.change(function(){b.val($(this).val())});$(".eye-close").click(function(){b.show();b.val(c.val());c.hide();$(this).hide();$(".eye-open").show()});$(".eye-open").click(function(){c.show();c.val(b.val());b.hide();$(this).hide();$(".eye-close").show()});$(".login-remember").click(function(){$(this).find("span").toggleClass("checked");a.prop("checked",$(this).find("span").hasClass("checked"))});LoginModule.SupportPlaceholder($("#UserName,#Password,#Password2"));if(a.attr("checked")){$(this).find("span").addClass("checked")}$("#UserName,#Password,#Password2,#RememberMe").keydown(function(e){if(e.keyCode==13){$("#btnLogin").trigger("click")}});$("#btnLogin").click(function(){$(".loginerror").hide();if(c.css("display")!="none"){b.val(c.val());b.show();c.hide();$(".eye-close").hide();$(".eye-open").show()}if(LoginModule.ValidateLogin(d,b)){$(this).addClass("loading");$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{username:escape(d.val().trim()),pass:escape(b.val().trim()),type:"login"},function(e){$("#btnLogin").removeClass("loading");if(e!==undefined&&e!==null){if(e.success){window.location.href="https://batdongsan.com.vn/trang-ca-nhan"}else{if(e.msg.length>0){if(e.msg.length>0){if(e.msg==="notactive"){LoginModule.showNotActiveForm(e.url)}else{if(e.msg==="chooseaccount"){LoginModule.showChooseAccountTypeForm()}else{if(e.second_msg.length>0){$(".loginerror").html("&#x2716; "+e.msg+"<br/>&#x2716; "+e.second_msg)}else{$(".loginerror").html("&#x2716; "+e.msg)}$(".loginerror").show()}}}}else{if(e.url.length>0){window.location.href=e.url}else{$(".loginerror").html("&#x2716; Đăng nhập thất bại");$(".loginerror").show()}}}}},"json")}});if(window.fbAsyncInit===undefined){window.fbAsyncInit=function(){FB.init({appId:"302507473246792",cookie:true,xfbml:true,version:"https://batdongsan.com.vn/Modules/UserProfile/Scripts/v2.10"});FB.AppEvents.logPageView();FB.getLoginStatus(function(e){if(e.status==="connected"){LoginModule.facebookToken=e.authResponse.accessToken;FB.api("/me","GET",{fields:"email,name"},function(f){if(f.name!==undefined){$(".login-facebook > span").html("Đăng nhập là "+f.first_name+" "+f.last_name)}})}})};(function(e,i,g){var h,f=e.getElementsByTagName(i)[0];if(e.getElementById(g)){return}h=e.createElement(i);h.id=g;h.src="sdk-1.js"/*tpa=https://connect.facebook.net/en_US/sdk.js*/;f.parentNode.insertBefore(h,f)}(document,"script","facebook-jssdk"))}else{FB.getLoginStatus(function(e){LoginModule.facebookToken=e.authResponse.accessToken;if(e.status==="connected"){FB.api("/me","GET",{fields:"email,name"},function(f){if(f.name!==undefined){$(".login-facebook > span").html("Đăng nhập là "+f.name)}})}})}d.focus()};LoginModule.ChooseAccountType=function(a,b){$(b).addClass("loading");$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{type:"chooseaccount",acc:a},function(c){console.log(c);if(c!=null){if(c.success){window.location.href="https://batdongsan.com.vn/trang-ca-nhan";return}}LoginModule.showLoginForm()},"json")};LoginModule.LogMeInByFacebook=function(a){$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{token:a,type:"facebooklogin"},function(b){if(b!==undefined&&b!==null){if(b.action==="failure"){if(b.msg.length>0){$(".loginerror").html("&#x2716; "+b.msg)}else{$(".loginerror").html("&#x2716; Đăng nhập thất bại")}$(".loginerror").show();window.scrollTo(0,0)}else{if(b.action==="blocked"){$(".loginerror").html("&#x2716; Tài khoản của bạn hiện đang bị khóa");$(".loginerror").show();window.scrollTo(0,0)}else{if(b.action==="loged"){window.location.reload()}else{if(b.action==="reg"){LoginModule.showRegistForm();$("#txtPrimaryEmail").val(b.msg)}else{if(b.action==="notactive"){LoginModule.showNotActiveForm(b.msg)}else{if(b.action==="chooseaccount"){LoginModule.showChooseAccountTypeForm()}}}}}}}},"json")};LoginModule.facebookToken="";LoginModule.loginByFacebook=function(){if(FB){if(LoginModule.facebookToken.length>0){LoginModule.LogMeInByFacebook(LoginModule.facebookToken)}else{FB.login(function(a){if(a.status==="connected"){console.log(a);LoginModule.LogMeInByFacebook(a.authResponse.accessToken)}},{scope:"public_profile,email"})}}};LoginModule.ValidateLogin=function(b,a){var c=true;if(b.val().length===0||b.val()==="Tên đăng nhập/Email"){$(".login-username").next().show();c=false}else{$(".login-username").next().hide()}if(a.val().length===0||a.val()==="Mật khẩu"){$(".login-password").next().show();c=false}else{$(".login-password").next().hide()}return c};LoginModule.BeginForgetPasswordForm=function(){$("#txtEmail").blur(function(){var a=$(this).val();if(!a.length){$("#txtEmailErrBlank").show();$("#txtEmailErrorMsg").hide();return false}else{if(!LoginModule.isEmail(a)){$("#txtEmailErrorMsg").show();$("#txtEmailErrBlank").hide();return false}else{$("#txtEmailErrorMsg").hide();$("#txtEmailErrBlank").hide()}}});$("#forgetsecode").blur(function(){var a=$(this).val();if(!a.length){$("#secodeErrorMsg").show();return false}else{$("#secodeErrorMsg").hide();return true}});LoginModule.SupportPlaceholder($("#txtEmail,#forgetsecode"));$("#btnResetPassword").click(function(){$(".loginerror").hide();$(".loginerror").html("");var b=$("#txtEmail").val().trim();var a=$("#forgetsecode").val().trim();var c=false;$(".login-err-msg").hide();if(b.length==0){$("#txtEmailErrBlank").show();c=true}else{if(!LoginModule.isEmail(b)){$("#txtEmailErrorMsg").show();c=true}}if(a.length==0){$("#secodeErrorMsg").show();c=true}if(c==false){$(this).addClass("loading");$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{type:"forgetpassword",email:b,secode:a},function(d){$("#btnResetPassword").removeClass("loading");if(d!==null&&d!==undefined){if(d.success){LoginModule.showForgetPasswordSuccessForm()}else{if(d.msg=="chooseaccount"){LoginModule.showForgetChooseAccountTypeForm()}else{if(d.msg.length>0){for(var e=0;e<d.msg.length;e++){$(".loginerror").append("<div>"+d.msg[e]+"</div>")}$(".loginerror").show()}}}}else{$(".loginerror").append("Thao tác thất bại, bạn hãy thử lại sau.");$(".loginerror").show()}},"json")}});$("#txtEmail").focus()};LoginModule.ForgetChooseAccountType=function(a,b){$(b).addClass("loading");$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{type:"forgetchooseaccount",acc:a},function(c){$(b).removeClass("loading");console.log(c);if(c!==null&&c!==undefined){if(c.success){LoginModule.showForgetPasswordSuccessForm()}else{if(c.msg.length>0){for(var d=0;d<c.msg.length;d++){$(".loginerror").append("<div>"+c.msg[d]+"</div>")}$(".loginerror").show()}}}else{$(".loginerror").append("Thao tác thất bại, bạn hãy thử lại sau.");$(".loginerror").show()}},"json")};LoginModule.err_msg01="Tên đăng nhập không được để trống.";LoginModule.err_msg02="Tên đăng nhập phải có độ dài tối thiểu 6 ký tự, không chứa dấu cách và các ký tự đặc biệt.";LoginModule.err_msg03="Mật khẩu không được để trống.";LoginModule.err_msg04="Mật khẩu phải có độ dài tối thiểu 6 ký tự.";LoginModule.err_msg05="Xác thực mật khẩu không đúng.";LoginModule.err_msg051="Xác thực mật khẩu không được để trống.";LoginModule.err_msg06="Địa chỉ email không được để trống.";LoginModule.err_msg07="Địa chỉ email không hợp lệ.";LoginModule.err_msg08="Tên không được để trống.";LoginModule.err_msg09="Số điện thoại bàn bạn nhập có chứa ký tự không phải số.";LoginModule.err_msg10="Số điện thoại di động không được để trống.";LoginModule.err_msg11="Số điện thoại di động bạn nhập có chứa ký tự không phải định dạng số.";LoginModule.err_msg12="Số điện thoại di động bạn nhập không tồn tại. Độ dài tối thiểu số di động là 10 số.";LoginModule.err_msg13="Tên đăng nhập không hợp lệ. Tên đăng nhập phải có độ dài tối thiểu 6 ký tự, có thể chứa dấu gạch ngang hoặc gạch chân (_) nhưng không chứa dấu cách và các ký tự đặc biệt.";LoginModule.err_msg14="Mã an toàn không được để trống.";LoginModule.err_msg15="Mật khẩu phải chưa ít nhất 1 ký tự viết hoa";LoginModule.err_msg16="Mật khẩu phải chứa ít nhất 1 chữ số";LoginModule.err_msg17="Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%&_+,.)";LoginModule.err_msg18="Mật khẩu phải có độ dài từ 6 ký tự, bao gồm ít nhất 1 ký tự viết hoa và 1 chữ số.";LoginModule.msg01="Tên đăng nhập có thể sử dụng.";LoginModule.msg02="Tên đăng nhập đã được đăng ký.";LoginModule.msg03="Email có thể sử dụng.";LoginModule.msg04="Email của bạn đã được sử dụng. <span style='font-style:italic; font-size:9pt;'>( Có thể bạn đã từng đăng ký tài khoản trước đó, hoặc đã từng đăng nhập vào hệ thống của chúng tôi bằng email này thông qua Google hoặc Yahoo hoặc Facebook. Bạn vui lòng sử dụng chức năng <a href='#' onclick=\"LoginModule.showForgetPasswordForm();\">lấy lại mật khẩu</a> cho tài khoản tướng ứng với email này )</span>";LoginModule.msg05="Số điện thoại di động có thể sử dụng.";LoginModule.msg06="Số điện thoại di động đã được sử dụng.";LoginModule.msg07="Số điện thoại di động không đúng định dạng.";LoginModule.isUserNameValid=true;LoginModule.isEmailValid=true;LoginModule.BeginRegistForm=function(){$("#txtBirthDate").datepicker({dateFormat:"dd/mm/yy",changeMonth:true,changeYear:true,yearRange:"-90:-16",defaultDate:"dd/mm/-40yy"});$("#txtBirthDate").keydown(function(a){if(a.keyCode==9||a.which==9){return true}else{return false}});$.get("https://batdongsan.com.vn/HandlerWeb/AddressHandler.ashx?type=city",function(a){if(a!==null){$.each(a,function(b,c){$("#ddlCities").append('<option value="'+c.CityCode+'">'+c.CityName+"</option>")})}});$("#ddlCities").change(function(){var a=$(this).val();LoginModule.bindDistrict(a);LoginModule.SetTextDrop()});$("#ddlDistricts").change(function(){var a=$(this).val();LoginModule.bindWard(a);LoginModule.SetTextDrop()});$("#ddlWards").change(function(){LoginModule.SetTextDrop()});$("#txtUserName").change(function(){LoginModule.checkUserName($(this),$(this).val())});$("#txtPrimaryEmail").change(function(){LoginModule.checkEmail($(this),$(this).val())});$("#txtPassword").change(function(){LoginModule.checkPassword($(this),$(this).val())});$("#txtConfirmPassword").change(function(){LoginModule.checkConfirmPassword($(this),$(this).val())});$("#popupRegist_txtCaptchaToCheck").change(function(){LoginModule.checkCaptcha($(this),$(this).val())});$("#txtFullname").change(function(){LoginModule.checkFullName($(this),$(this).val())});LoginModule.SupportPlaceholder($("#txtFullname,#popupRegist_txtCaptchaToCheck,#txtConfirmPassword,#txtPassword,#txtPrimaryEmail,#txtUserName,#txtBirthDate"));$("#btnRegister").click(function(){$(".loginerror").hide();$(".loginerror").html("");if(LoginModule.ValidateRegistForm()){$(this).addClass("loading");$.post("https://batdongsan.com.vn/trang-ca-nhan/HandlerWeb/UserHandler.ashx",{username:$("#txtUserName").val().trim(),pass:$("#txtPassword").val().trim(),email:$("#txtPrimaryEmail").val().trim(),fullname:$("#txtFullname").val().trim(),birthday:$("#txtBirthDate").val().trim(),gender:$("#rdMale:checked").length>0?1:2,citycode:$("#ddlCities").val(),distrid:$("#ddlDistricts").val(),wardid:$("#ddlWards").val(),brokertype:$("#rdPersonal:checked").length>0?1:2,secode:$("#popupRegist_txtCaptchaToCheck").val().trim(),type:"regist"},function(a){$("#btnRegister").removeClass("loading");console.log(a);if(a!==undefined&&a!==null){if(a.success){LoginModule.showRegistSuccessForm($("#txtPrimaryEmail").val().trim())}else{if(a.msg!==undefined&&a.msg!==null){for(var b in a.msg){if(b!="err"){var c=$("#"+b);LoginModule.addErrorMessage(c,a.msg[b])}else{$(".loginerror").append("<div>"+a.msg[b]+"</div>")}}$(".loginerror").show()}else{$(".loginerror").append("<div>Đăng ký thất bại</div>");$(".loginerror").show()}}window.scrollTo(0,0)}},"json")}});$("#txtUserName").focus()};LoginModule.bindDistrict=function(a){$("#ddlWards").find("option").remove();$("#ddlWards").append('<option value="0">Phường/Xã</option>');$("#ddlDistricts").find("option").remove();$("#ddlDistricts").append('<option value="0">Quận/Huyện</option>');$.get("/HandlerWeb/AddressHandler.ashx?type=district&code="+a,function(b){if(b!==null){$.each(b,function(c,d){$("#ddlDistricts").append('<option value="'+d.id+'">'+d.name+"</option>")})}});LoginModule.SetTextDrop()};LoginModule.bindWard=function(a){$("#ddlWards").find("option").remove();$("#ddlWards").append('<option value="0">Phường/Xã</option>');$.get("/HandlerWeb/AddressHandler.ashx?type=ward&code="+a,function(b){if(b!==null){$.each(b,function(c,d){$("#ddlWards").append('<option value="'+d.id+'">'+d.name+"</option>")})}});LoginModule.SetTextDrop()};LoginModule.SetTextDrop=function(){var a=$(".adv-control select").length;for(var b=0;b<a;b++){$(".adv-control select").eq(b).parent().find(".select-text-content").text($(".adv-control select").eq(b).find("option:selected").text())}};LoginModule.ValidateRegistForm=function(){try{var j=true;var l=$("#txtUserName");var m=$("#txtUserName").val().trim();var h=$("#txtPassword");var i=$("#txtPassword").val().trim();var a=$("#txtConfirmPassword");var b=$("#txtConfirmPassword").val().trim();var c=$("#txtPrimaryEmail");var d=$("#txtPrimaryEmail").val().trim();var f=$("#txtFullname");var g=$("#txtFullname").val().trim();var k=$("#popupRegist_txtCaptchaToCheck");if(LoginModule.isUserNameValid==false){j=false}else{if(m.length==0||l.attr("placeholder")==m){j=false;LoginModule.addErrorMessage(l,LoginModule.err_msg01)}else{if(!LoginModule.isUserName(m)){j=false;LoginModule.addErrorMessage(l,LoginModule.err_msg13)}else{LoginModule.removeErrorMessage(l)}}}if(LoginModule.checkPassword(h,i)==false){j=false}if(LoginModule.checkConfirmPassword(a,b)==false){j=false}if(LoginModule.isEmailValid==false){j=false}else{if(d.length==0||c.attr("placeholder")==d){j=false;LoginModule.addErrorMessage(c,LoginModule.err_msg06)}else{if(!isEmail(d)){j=false;LoginModule.addErrorMessage(c,LoginModule.err_msg07)}else{LoginModule.removeErrorMessage(c)}}}if(LoginModule.checkFullName(f,g)==false){j=false}if(LoginModule.checkCaptcha(k,k.val())==false){j=false}if(!j){$("html, body").animate({scrollTop:0},"slow")}return j}catch(e){console.log(e);return false}};LoginModule.checkFullName=function(a,c){var b=false;if(c.length===0||a.attr("placeholder")==c){LoginModule.addErrorMessage(a,LoginModule.err_msg08)}else{LoginModule.removeErrorMessage(a);b=true}return b};LoginModule.checkUserName=function(a,b){if(b.length===0||a.attr("placeholder")==b){LoginModule.addErrorMessage(a,LoginModule.err_msg01)}else{if(!LoginModule.isUserName(b)){LoginModule.addErrorMessage(a,LoginModule.err_msg13)}else{$.get("/trang-ca-nhan/HandlerWeb/UserHandler.ashx?type=checkDuplicateUsername&username="+b,function(c){if(c==="true"){LoginModule.addValidMessage(a,LoginModule.msg01);LoginModule.isUserNameValid=true}else{LoginModule.addErrorMessage(a,LoginModule.msg02);LoginModule.isUserNameValid=false}})}}};LoginModule.checkEmail=function(b,a){if(a.length==0||b.attr("placeholder")==a){LoginModule.addErrorMessage(b,LoginModule.err_msg06)}else{if(!isEmail(a)){LoginModule.addErrorMessage(b,LoginModule.err_msg07)}else{$.get("/trang-ca-nhan/HandlerWeb/UserHandler.ashx?type=checkduplicateemail&email="+a,function(c){if(c==="true"){LoginModule.addValidMessage(b,LoginModule.msg03);LoginModule.isEmailValid=true}else{LoginModule.addErrorMessage(b,LoginModule.msg04);LoginModule.isEmailValid=false}})}}};LoginModule.checkPassword=function(a,b){var e=false;var d=/[A-Z]/g;var c=/[0-9]/g;if(b.length==0||a.attr("placeholder")==b){LoginModule.addErrorMessage(a,LoginModule.err_msg03)}else{if(b.length<6||d.test(b)==false||c.test(b)==false){LoginModule.addErrorMessage(a,LoginModule.err_msg18)}else{LoginModule.removeErrorMessage($(a));e=true}}return e};LoginModule.checkConfirmPassword=function(b,a){var c=$("#txtPassword").val();var d=false;if(a.length===0||b.attr("placeholder")==a){LoginModule.addErrorMessage(b,LoginModule.err_msg051)}else{if(c.length&&a!==c){LoginModule.addErrorMessage(b,LoginModule.err_msg05)}else{LoginModule.removeErrorMessage(b);d=true}}return d};LoginModule.checkCaptcha=function(a,c){var b=false;if(c.length===0||a.attr("placeholder")==c){LoginModule.addErrorMessage(a,LoginModule.err_msg14)}else{LoginModule.removeErrorMessage(a);b=true}return b};LoginModule.addErrorMessage=function(d,c){var a="";var b=$(d).attr("id");$("#validateFor"+b).html(c);$("#validateFor"+b).show();$("#validateFor"+b).removeClass("available");$("#validateFor"+b).addClass("error-message");$(d).next().removeClass("fa-check");$(d).next().addClass("fa-exclamation-triangle")};LoginModule.removeErrorMessage=function(b){var a=$(b).attr("id");$("#validateFor"+a).hide();$("#validateFor"+a).removeClass("error-message");$("#validateFor"+a).addClass("available");$(b).next().removeClass("fa-exclamation-triangle");$(b).next().addClass("fa-check")};LoginModule.addValidMessage=function(c,b){var a=$(c).attr("id");$("#validateFor"+a).html(b);$("#validateFor"+a).removeClass("error-message");$("#validateFor"+a).addClass("available");$("#validateFor"+a).show();$(c).next().removeClass("fa-exclamation-triangle");$(c).next().addClass("fa-check")};LoginModule.isEmail=function(a){var b=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;return b.test(a)};LoginModule.isUserName=function(b){var a=/^[a-zA-Z0-9-_]{6,24}$/;return a.test(b)};LoginModule.isMessageIm=function(b){var a=/^$/;return a.test(email)};try{window._loadLoginModuleSuccess()}catch(ex){};