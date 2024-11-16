package com.swiot.permission.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.swiot.permission.domain.BigScreenPage;
import com.swiot.permission.mapper.BigScreenPageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CodeBigScreenPageService {

    @Autowired
    private BigScreenPageMapper bigScreenPageMapper;

    // 根据 create_by 查询大屏 code 列表
    public List<String> getUserDataRoomCodeListByCreateBy(String createBy) {
        // 使用 MyBatis-Plus 的 QueryWrapper 创建查询条件
        QueryWrapper<BigScreenPage> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("create_by", createBy)  // 根据 create_by 查询
                .eq("del_flag", 0);  // 只查询未删除的记录

        // 查询所有符合条件的记录并提取 code 列
        List<BigScreenPage> resultList = bigScreenPageMapper.selectList(queryWrapper);

        // 提取 `code` 列表
        return resultList.stream()
                .map(BigScreenPage::getCode)
                .collect(Collectors.toList());
    }
}
