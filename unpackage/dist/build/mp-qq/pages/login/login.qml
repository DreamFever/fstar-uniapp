<view><form data-event-opts="{{[['submit',[['handleSubmit',['$event']]]]]}}" bindsubmit="__e"><input class="username" placeholder="教务系统账号" name="username"/><input class="password" placeholder="教务系统密码" name="password" password="{{true}}"/><block qq:if="{{useVPN}}"><input class="vpn-username" name="vpnusername" placeholder="校园网账号"/></block><block qq:if="{{useVPN}}"><input class="vpn-password" name="vpnpassword" placeholder="校园网密码" password="{{true}}"/></block><input name="semester" placeholder="学期(非必须 格式 2019-2020-1)"/><button form-type="submit" type="primary">验证</button></form><w-loading class="vue-ref" vue-id="b23777b8-1" click="false" data-ref="loading" bind:__l="__l"></w-loading><uni-popup class="vue-ref" vue-id="b23777b8-2" type="top" data-ref="message" bind:__l="__l" vue-slots="{{['default']}}"><view class="message">{{''+message+''}}</view></uni-popup><text class="copy-right">Copyright © 2021 mdreamfever, all rights reserved.</text></view>