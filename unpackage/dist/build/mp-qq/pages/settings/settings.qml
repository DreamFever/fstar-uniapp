<view><uni-list vue-id="57210a30-1" bind:__l="__l" vue-slots="{{['default']}}"><uni-list-item vue-id="{{('57210a30-2')+','+('57210a30-1')}}" title="{{getName}}" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-3')+','+('57210a30-1')}}" title="{{getStudnetNumber}}" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-4')+','+('57210a30-1')}}" title="账号设置" showArrow="true" badge-text="12" clickable="true" link="{{true}}" to="../login/login" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-5')+','+('57210a30-1')}}" title="开启校园网访问" note="开启之后需要重新登录" switchChecked="{{useVPN}}" show-switch="true" data-event-opts="{{[['^switchChange',[['vpnChange']]]]}}" bind:switchChange="__e" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-6')+','+('57210a30-1')}}" title="查询最好成绩" note="关闭则查询全部成绩" switchChecked="{{maxScore}}" show-switch="true" data-event-opts="{{[['^switchChange',[['modeChange']]]]}}" bind:switchChange="__e" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-7')+','+('57210a30-1')}}" title="使用默认成绩查询入口" note="关闭则使用成绩替代入口" switchChecked="{{defaultScoreQuery}}" show-switch="true" data-event-opts="{{[['^switchChange',[['entryChange']]]]}}" bind:switchChange="__e" bind:__l="__l"></uni-list-item><uni-list-item vue-id="{{('57210a30-8')+','+('57210a30-1')}}" note="点击日期校正" showArrow="true" clickable="true" bind:__l="__l" vue-slots="{{['body']}}"><picker slot="body" mode="date" value="{{date}}" data-event-opts="{{[['change',[['bindDateChange',['$event']]]]]}}" bindchange="__e"><text space="emsp">{{"校正起始周    当前"+date}}</text></picker></uni-list-item><uni-list-item vue-id="{{('57210a30-9')+','+('57210a30-1')}}" title="关于" showArrow="true" link="{{true}}" to="../about/about" clickable="true" bind:__l="__l"></uni-list-item></uni-list></view>