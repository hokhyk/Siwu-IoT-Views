package com.swiot;

import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.core.metadata.TableInfoHelper;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.gccloud.common.constant.CommonConst;
import com.gccloud.dataroom.core.constant.DataRoomConst;
import com.gccloud.dataroom.core.module.basic.entity.PageEntity;
import com.gccloud.dataset.constant.DatasetConstant;
import org.apache.ibatis.builder.MapperBuilderAssistant;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

/**
 * 启动程序
 * 
 * @author SuGuichuan
 * powerby RuoYi & gccloud
 */
//@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class }, scanBasePackages = {"com.swiot","com.gccloud", DataRoomConst.ScanPackage.COMPONENT, DatasetConstant.ScanPackage.COMPONENT, CommonConst.ScanPackage.COMPONENT})

@MapperScan(value = {DataRoomConst.ScanPackage.DAO, DatasetConstant.ScanPackage.DAO})

public class SiWuApplication

{
    public static void main(String[] args)
    {
        // System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(SiWuApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  application is running in http://localhost:8080   ლ(´ڡ`ლ)ﾞ");
        TableInfoHelper.initTableInfo(new MapperBuilderAssistant(new MybatisConfiguration(), ""), PageEntity.class) ;
    }
}
