package com.swiot.permission.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.swiot.permission.domain.BigScreenPage;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface BigScreenPageMapper extends BaseMapper<BigScreenPage> {

    // 根据 create_by 查询大屏 code 列表
    List<String> selectCodeListByCreateBy(String createBy);

}
