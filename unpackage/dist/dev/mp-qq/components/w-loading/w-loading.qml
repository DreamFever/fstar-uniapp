<block qq:if="{{show}}"><view data-event-opts="{{[['tap',[['Mclose',['$event']]]],['touchmove',[['preventTouchMove',['$event']]]]]}}" class="{{['mask',mask=='true'||mask==true?'mask-show':'']}}" bindtap="__e" catchtouchmove="__e"><view class="container"><view class="popsicle"><view class="colors"></view></view><view class="stick"></view><view class="shadow"></view></view><view class="title">{{text}}</view></view></block>