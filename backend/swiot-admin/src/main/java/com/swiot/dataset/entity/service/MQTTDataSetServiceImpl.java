package com.swiot.dataset.entity.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gccloud.common.utils.JSON;
import com.gccloud.dataset.dao.DatasetDao;
import com.gccloud.dataset.dto.DatasetParamDTO;
import com.gccloud.dataset.dto.TestExecuteDTO;
import com.gccloud.dataset.entity.DatasetEntity;
import com.gccloud.dataset.entity.config.HttpDataSetConfig;
import com.gccloud.dataset.service.IBaseDataSetService;
import com.gccloud.dataset.vo.DataVO;
import com.google.common.collect.Lists;
import com.swiot.dataset.entity.config.MQTTDataSetConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service("mqtt")
public class MQTTDataSetServiceImpl extends ServiceImpl<DatasetDao, DatasetEntity> implements IBaseDataSetService {
    MQTTDataSetConfig mqttDataSetConfig =new MQTTDataSetConfig();
    @Override
    public Object execute(String id, List<DatasetParamDTO> paramList) {
        List<DatasetParamDTO> finalParamList = Lists.newArrayList(paramList);
        DatasetEntity entity = this.getByIdFromCache(id);
        //MQTTDataSetConfig config = (MQTTDataSetConfig)entity.getConfig();
        //MQTTDataSetConfig configCopy = (MQTTDataSetConfig)JSON.parseObject(JSON.toJSONString(config), MQTTDataSetConfig.class);
        System.out.println("Production======>"+paramList);
        System.out.println("finalParamList======>"+finalParamList);
        System.out.println("entity======>"+entity);
        String  urlValue = paramList.stream()
                .filter(item -> "url".equals(item.getName()))  // 筛选出 name 为 "url" 的对象
                .map(DatasetParamDTO::getValue)  // 提取 value 字段
                .findFirst().get();  // 取第一个匹配的元素
        String usernameValue = paramList.stream()
                .filter(item -> "username".equals(item.getName()))  // 筛选出 name 为 "username" 的对象
                .map(DatasetParamDTO::getValue)  // 提取 value 字段
                .findFirst().get();  // 取第一个匹配的元素
        String passwordValue = paramList.stream()
                .filter(item -> "password".equals(item.getName()))  // 筛选出 name 为 "password" 的对象
                .map(DatasetParamDTO::getValue)  // 提取 value 字段
                .findFirst().get();  // 取第一个匹配的元素
        // 该方法是数据集执行方法，按照实际需求实现
        Map<String,String> item=new HashMap<>();
        item.put("data","该方法是数据集执行方法，按照实际需求实现5");
        item.put("datasetType","mqtt");
        item.put("requestType","frontend");
        item.put("url", urlValue);
        item.put("username", usernameValue);
        item.put("password", passwordValue);
        mqttDataSetConfig.setData("该方法是数据集执行方法，按照实际需求实现5");
        mqttDataSetConfig.setUrl(urlValue);
        mqttDataSetConfig.setUsername(usernameValue);
        mqttDataSetConfig.setPassword(passwordValue);
        mqttDataSetConfig.setDatasetType("mqtt");
        mqttDataSetConfig.setRequestType("frontend");
        return mqttDataSetConfig;
    }

    @Override
    public DataVO execute(TestExecuteDTO executeDTO) {
        // 该方法是数据集测试是执行的方法，按照实际需求实现
        System.out.println("TEST======>");
        return null;
    }
}