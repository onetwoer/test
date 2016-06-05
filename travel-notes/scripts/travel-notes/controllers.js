(function()
{
    var app = angular.module('travel-notes', ['ui.bootstrap', 'swfobject']);

    app.controller('travel-notes', function($scope, $uibModal, $timeout)
    {
        $scope.name = 'test....'
        $scope.moduleMenu = {};
        $scope.textEditor = -1;

        $scope.notes = 
        {
            title: '三亚旅游记录...',
            modules: 
            [
                // {
                //     'cate': 'section',
                //     'style': 'style-1',
                //     'title': '出行前准备'
                // },
                // {
                //     'cate': 'text',
                //     'content': ' 这半年辞掉工作给自己放了半年假，从3月开始不间断的旅行，一路从俄罗斯到土耳其到约旦到黎巴嫩再到埃及到伊朗，一大圈玩回来整个人感觉有些疲惫，因为全程自由行，再加上去的这些国家并不怎么发达，也不算享受，所以这一回来就捉摸着想来一趟不操心，完全享受的旅程，但我又不想跟团那种天天赶时间的旅行。没事在蚂蜂窝上看游记看见有小伙伴推荐私人订制，这个好像挺适合我，那好，就这个了。'
                // },

                // {
                //     'cate': 'section',
                //     'style': 'style-2',
                //     'title': '出发...'
                // },
                // {
                //     'cate': 'text',
                //     'content': ' 这半年辞掉工作给自己放了半年假，从3月开始不间断的旅行，一路从俄罗斯到土耳其到约旦到黎巴嫩再到埃及到伊朗，一大圈玩回来整个人感觉有些疲惫，因为全程自由行，再加上去的这些国家并不怎么发达，也不算享受，所以这一回来就捉摸着想来一趟不操心，完全享受的旅程，但我又不想跟团那种天天赶时间的旅行。没事在蚂蜂窝上看游记看见有小伙伴推荐私人订制，这个好像挺适合我，那好，就这个了。'
                // },
                // {
                //     'cate': 'picture',
                //     'list':
                //     [
                //         {
                //             'id': 1,
                //             'url': 'http://file29.mafengwo.net/M00/05/E0/wKgBpVWkvnOAYpvoAAZdXZKV5pk61.groupinfo.w680.jpeg',
                //         },
                //         {
                //             'id': 2,
                //             'url': 'http://file29.mafengwo.net/M00/05/E4/wKgBpVWkvnWAbRH4AAYgU5F2Z2Q56.groupinfo.w680.jpeg',
                //         },
                //     ]
                // },
                // {
                //     'cate': 'video',
                //     'url': 'http://player.youku.com/player.php/sid/XMTU4NzgxNzUzMg==/v.swf'
                // },
            ]
        };

        $scope.guid = function( n )
        {   
            n = n || 6;
            var _chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var _guid = "";
            for(var i = 0; i < n ; i ++) 
            {
                var _id = Math.ceil(Math.random()*35);
                _guid += _chars[_id];
            }
            return _guid;
        };

        $scope.showModuleMenu = function( index )
        {
            var _module = $scope.moduleMenu[index];
            $scope.moduleMenu[index] = _module ? false : true;
        }

        $scope.addVideo = function( index )
        {
            if( $scope.textEditor == index )
            {
                index ++;
            }
            var _modalAddVideo = $uibModal.open(
            {
                animation: true,
                keyboard: true,
                backdrop: 'static',
                templateUrl: 'add-video.html',
                controller: 'add-video',
                size: '',
                windowClass: 'add-video',
                resolve:
                {
                    data: function()
                    {
                        return null;
                    }
                }
            });

            _modalAddVideo.result.then(function ( data  ) 
            {
                data.id = $scope.guid();
                $scope.notes.modules.splice(index, 0 , data);

            }, function (){});
        };

        $scope.editorVideo = function( item, index )
        {
            var _item = angular.extend({}, item );
            var _modalEditorVideo = $uibModal.open(
            {
                animation: true,
                keyboard: true,
                backdrop: 'static',
                templateUrl: 'add-video.html',
                controller: 'add-video',
                size: '',
                windowClass: 'add-video',
                resolve:
                {
                    data: function()
                    {
                        return _item;
                    }
                }
            });

            _modalEditorVideo.result.then(function ( data  ) 
            {
                $scope.notes.modules.splice(index, 1);
                $timeout(function()
                {
                    $scope.notes.modules.splice(index, 0, data)
                }, 20);

            }, function (){});
        };

        $scope.addSection = function( index )
        {
            if( $scope.textEditor == index )
            {
                index ++;
            }
            var _modalAddSection = $uibModal.open(
            {
                animation: true,
                keyboard: true,
                backdrop: 'static',
                templateUrl: 'add-section.html',
                controller: 'add-section',
                size: 'lg',
                windowClass: 'add-section',
                resolve:
                {
                    data: function()
                    {
                        return null;
                    }
                }
            });

            _modalAddSection.result.then(function ( data  ) 
            {
                data.id = $scope.guid();
                $scope.notes.modules.splice(index, 0 , data);

            }, function (){});
        };

        $scope.editorSection = function( item, index )
        {
            var _modalEditorSection = $uibModal.open(
            {
                animation: true,
                keyboard: true,
                backdrop: 'static',
                templateUrl: 'add-section.html',
                controller: 'add-section',
                size: 'lg',
                windowClass: 'add-section',
                resolve:
                {
                    data: function()
                    {
                        return item;
                    }
                }
            });

        };

        $scope.addText = function( index )
        {
            if( $scope.textEditor  == index )
            {
                document.querySelector('.module-item-' + $scope.textEditor + ' textarea').focus();
                return;
            }

            $scope.textEditor = index;
            var _data = 
            {
                id: $scope.guid(),
                cate: 'text',
                content: '',
                editor: true
            };
            $scope.notes.modules.splice(index, 0 , _data);
        };

        $scope.confrimText = function( item )
        {
            if( !item.content )
            {
                document.querySelector('.module-item-' + $scope.textEditor + ' textarea').focus();
                return;
            }
            item.editor = false;
            $scope.textEditor = -1;
        };

        $scope.editorModule = function( item, index )
        {
            if( item.cate == 'text' )
            {
                item.editor = true;
            }
            if( item.cate == 'video' )
            {
                $scope.editorVideo( item, index );
            }
            if( item.cate == 'section' )
            {
                $scope.editorSection( item, index );
            }
        };

        $scope.deleteModule = function( item, index )
        {
            var _modalDelete = $uibModal.open(
            {
                animation: true,
                keyboard: true,
                backdrop: 'static',
                templateUrl: 'delete-module.html',
                controller: 'delete-module',
                size: 'sm',
                windowClass: 'delete-module',
                resolve:
                {
                }
            });

            _modalDelete.result.then(function ( data  ) 
            {
                $scope.notes.modules.splice(index, 1);

            }, function (){});
        };


    });

    // 添加视频
    app.controller('add-video', function ($scope, $uibModalInstance, data) 
    {

        $scope.data =  data || {
            cate: 'video',
            url: 'http://player.youku.com/player.php/sid/XMTU4NzgxNzUzMg==/v.swf'
        };
        
        $scope.confrim = function()
        {
            var _data = $scope.data;
            if( !_data.url )
            {
                alert('请输入视频地址。');
                return;
            }

            $uibModalInstance.close( _data );
        };

        $scope.cancel = function () 
        {
            $uibModalInstance.dismiss('cancel');
        };
    });

    // 添加段落
    app.controller('add-section', function ($scope, $uibModalInstance, data) 
    {
        $scope.sectionStyleList = 
        [
            {
                'style': 'style-1',
                'img': 'images/bg/section/style-mini-1.gif'
            },
            {
                'style': 'style-2',
                'img': 'images/bg/section/style-mini-2.gif'
            },
            {
                'style': 'style-3',
                'img': 'images/bg/section/style-mini-3.gif'
            },
            {
                'style': 'style-4',
                'img': 'images/bg/section/style-mini-4.gif'
            },
            {
                'style': 'style-5',
                'img': 'images/bg/section/style-mini-5.gif'
            },
            {
                'style': 'style-6',
                'img': 'images/bg/section/style-mini-6.gif'
            },
            {
                'style': 'style-7',
                'img': 'images/bg/section/style-mini-7.gif'
            },
            {
                'style': 'style-8',
                'img': 'images/bg/section/style-mini-8.gif'
            }
        ];

        $scope.data = data ||  {
            cate: 'section',
            style: 'style-1',
            title: '段落名称',
        };

        $scope.checkSection = function( item )
        {
            $scope.data.style = item.style;
        };
        
        $scope.confrim = function()
        {
            var _data = $scope.data;
            if( !_data.title )
            {
                alert('请输入段落名称。');
                return;
            }

            $uibModalInstance.close( _data );
        };

        $scope.cancel = function () 
        {
            $uibModalInstance.dismiss('cancel');
        };
    });

    // 删除提示
    app.controller('delete-module', function ($scope, $uibModalInstance) 
    {
        $scope.confrim = function()
        {
            $uibModalInstance.close('delete');
        };

        $scope.cancel = function () 
        {
            $uibModalInstance.dismiss('cancel');
        };
    });

})();