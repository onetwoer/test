(function()
{
    var app = angular.module('travel-notes', ['ui.bootstrap', 'swfobject']);

    app.controller('travel-notes', function($scope)
    {
        $scope.name = 'test....'

        $scope.notes = 
        {
            title: '三亚旅游记录...',
            modules: 
            [
                {
                    'cate': 'section',
                    'style': 'style-1',
                    'title': '出行前准备'
                },
                {
                    'cate': 'text',
                    'content': ' 这半年辞掉工作给自己放了半年假，从3月开始不间断的旅行，一路从俄罗斯到土耳其到约旦到黎巴嫩再到埃及到伊朗，一大圈玩回来整个人感觉有些疲惫，因为全程自由行，再加上去的这些国家并不怎么发达，也不算享受，所以这一回来就捉摸着想来一趟不操心，完全享受的旅程，但我又不想跟团那种天天赶时间的旅行。没事在蚂蜂窝上看游记看见有小伙伴推荐私人订制，这个好像挺适合我，那好，就这个了。'
                },

                {
                    'cate': 'section',
                    'style': 'style-2',
                    'title': '出发...'
                },
                {
                    'cate': 'text',
                    'content': ' 这半年辞掉工作给自己放了半年假，从3月开始不间断的旅行，一路从俄罗斯到土耳其到约旦到黎巴嫩再到埃及到伊朗，一大圈玩回来整个人感觉有些疲惫，因为全程自由行，再加上去的这些国家并不怎么发达，也不算享受，所以这一回来就捉摸着想来一趟不操心，完全享受的旅程，但我又不想跟团那种天天赶时间的旅行。没事在蚂蜂窝上看游记看见有小伙伴推荐私人订制，这个好像挺适合我，那好，就这个了。'
                },
                {
                    'cate': 'picture',
                    'list':
                    [
                        {
                            'id': 1,
                            'url': 'http://file29.mafengwo.net/M00/05/E0/wKgBpVWkvnOAYpvoAAZdXZKV5pk61.groupinfo.w680.jpeg',
                        },
                        {
                            'id': 2,
                            'url': 'http://file29.mafengwo.net/M00/05/E4/wKgBpVWkvnWAbRH4AAYgU5F2Z2Q56.groupinfo.w680.jpeg',
                        },
                    ]
                },
                {
                    'cate': 'video',
                    'url': 'http://player.youku.com/player.php/sid/XMTU4NzgxNzUzMg==/v.swf'
                },
            ]
        }
    });

})();