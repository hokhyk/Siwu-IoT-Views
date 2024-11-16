package com.swiot.framework.config;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

import static com.swiot.common.utils.SecurityUtils.getUsername;

/**
 * 用于填充创建时间和更新时间字段
 * @author hongyang
 * @version 1.0
 * @date 2023/8/16 10:46
 */
@Configuration
public class DataRoomMetaObjectHandler implements MetaObjectHandler {

    /**
     * 创建时间字段
     */
    private static final String CREATE_DATE = "createDate";
    /**
     * 更新时间字段
     */
    private static final String UPDATE_DATE = "updateDate";

    @Override
    public void insertFill(MetaObject metaObject) {
        Date date = new Date();

        this.strictInsertFill(metaObject, "createBy", String.class, getUsername());
        this.strictInsertFill(metaObject, "updateBy", String.class, getUsername());
        this.setFieldValByName(CREATE_DATE, date, metaObject);
        this.setFieldValByName(UPDATE_DATE, date, metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        this.strictInsertFill(metaObject, "updateBy", String.class, getUsername());
        this.setFieldValByName(UPDATE_DATE, new Date(), metaObject);
    }
}
