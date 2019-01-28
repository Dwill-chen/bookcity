"use strict";
import $ from 'jquery'
import Validate from './validate'
import '../../src/main'

$(function () {
    // 表单验证
    $(".input-box input").on("input",function(){
        let type = this.className;
        if(Validate.test(type,$(this).val())){
            //合法
            $(this).parent().removeClass("error")
        }else{
            //不合法
            $(this).parent().addClass("error")
        }
    });
});