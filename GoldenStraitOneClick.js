// ==UserScript==
// @name         快速完成金海峡视频学习
// @namespace    http://*.kjpx.com/*
// @version      1.0
// @description  在页面上添加按钮，点击即可增加33分钟时长
// @match        http://*.kjpx.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 保存原始的getLengthAndReTimer函数
    var originalGetLengthAndReTimer = getLengthAndReTimer;

    // 修改getLengthAndReTimer函数的返回值
    getLengthAndReTimer = function() {
        // 调用原始的getLengthAndReTimer函数并获取返回值
        var originalReturnValue = originalGetLengthAndReTimer();

        // 修改返回值为你想要的值
        var modifiedReturnValue = 1000;

        // 返回修改后的值
        return modifiedReturnValue;
    };

    // 创建一个按钮
    var button = document.createElement('button');
    button.textContent = '执行submitVideo函数';

    // 添加按钮点击事件处理程序
    button.addEventListener('click', function() {
        // 执行原submitVideo函数
        if (typeof submitVideo === 'function') {
            submitVideo('1');
        } else {
            console.error('submitVideo函数未定义');
        }
    });

    // 将按钮插入到页面中
    document.body.appendChild(button);
})();
