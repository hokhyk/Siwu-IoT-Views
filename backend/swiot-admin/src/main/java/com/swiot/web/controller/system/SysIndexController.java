package com.swiot.web.controller.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.swiot.common.config.RuoYiConfig;
import com.swiot.common.utils.StringUtils;

/**
 * 首页
 *
 * @author SuGuichuan
 */
@RestController
public class SysIndexController
{
    /** 系统基础配置 */
    @Autowired
    private RuoYiConfig ruoyiConfig;

    /**
     * 访问首页，提示语
     */
    @RequestMapping("/")
    public String index()
    {
        return StringUtils.format("Welcome to the {} backend management framework. The current version is v{}. Please access it via the frontend URL.", ruoyiConfig.getName(), ruoyiConfig.getVersion());
    }
}
