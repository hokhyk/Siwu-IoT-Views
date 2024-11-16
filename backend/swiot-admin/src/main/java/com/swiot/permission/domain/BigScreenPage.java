package com.swiot.permission.domain;


import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
@Data
@TableName("big_screen_page")
public class BigScreenPage implements Serializable {
    private Long id;
    private String name;
    private String code;
    private String coverPicture;
    private String type;
    private String config;
    private String parentCode;
    private Long orderNum;
    private String remark;
    private String appCode;
    private String updateDate;
    private String createDate;
    private String createBy;
    private String updateBy;
    private Integer delFlag;
}
